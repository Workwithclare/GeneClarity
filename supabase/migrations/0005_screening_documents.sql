-- ═══════════════════════════════════════════════════════════════════
-- GeneClarity — 0005: My Screening Journey (private document storage)
-- Run AFTER 0001 / 0002 / 0003 / 0004.
--
-- What this adds:
--   1. A PRIVATE Supabase Storage bucket for screening documents.
--      The bucket itself enforces the limits server-side:
--        • allowed types : application/pdf, image/jpeg, image/png
--        • max file size : 10 MB
--        • public access : OFF (no public URLs are ever generated)
--   2. public.screening_documents — metadata only (name, type, size,
--      upload date, storage path). The file bytes live in Storage;
--      this table holds no health content beyond the file name.
--   3. Owner-only Row Level Security on BOTH the table and the bucket's
--      objects. Every object is stored at  <auth.uid()>/<doc>.<ext>,
--      and each storage policy compares the first folder to auth.uid().
--      A second account therefore cannot list, read, or delete another
--      account's objects — the policy denies before the request runs.
--
-- No service-role key is used or needed: the app signs uploads and
-- downloads with the user's own session; access to bytes happens via
-- short-lived signed URLs created per request (never public URLs).
--
-- Apply: Dashboard → SQL Editor → New query → paste this file → Run.
-- Verify afterwards (optional query, see docs/11):
--   select policyname, cmd from pg_policies
--    where tablename = 'screening_documents' or schemaname = 'storage';
-- ═══════════════════════════════════════════════════════════════════

-- ── 1. Private bucket ──────────────────────────────────────────────

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'screening-documents',
  'screening-documents',
  false,
  10485760,                                                -- 10 MB
  array['application/pdf', 'image/jpeg', 'image/png']      -- types
)
on conflict (id) do nothing;

-- ── 2. Metadata table ──────────────────────────────────────────────

create table if not exists public.screening_documents (
  id           text primary key,          -- app-generated "doc_..." id
  user_id      uuid not null references auth.users (id) on delete cascade,
  file_name    text not null check (char_length(file_name) between 1 and 200),
  storage_path text not null unique,      -- "<user_id>/<doc_id>.<ext>"
  mime_type    text not null check (mime_type in ('application/pdf', 'image/jpeg', 'image/png')),
  size_bytes   bigint not null check (size_bytes > 0 and size_bytes <= 10485760),
  created_at   timestamptz not null default now()
);

alter table public.screening_documents enable row level security;

-- Owner-only. There is intentionally NO partner-read policy here:
-- documents are never shared automatically (docs/11).
drop policy if exists "screening_docs_owner_all" on public.screening_documents;
create policy "screening_docs_owner_all" on public.screening_documents
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- API grants (0002 covers future tables via default privileges; stated
-- explicitly here so this migration is self-contained).
grant usage on schema public to authenticated;
grant select, insert, update, delete on public.screening_documents to authenticated;

-- ── 3. Storage object policies (owner folder only) ─────────────────
-- First folder of every path is the owner's uid; extension check adds
-- a name-level guard on top of the bucket's mime-type check.

drop policy if exists "screening_docs_select_own" on storage.objects;
create policy "screening_docs_select_own" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'screening-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
    and name ~* '\.(pdf|jpg|jpeg|png)$'
  );

drop policy if exists "screening_docs_insert_own" on storage.objects;
create policy "screening_docs_insert_own" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'screening-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
    and name ~* '\.(pdf|jpg|jpeg|png)$'
  );

drop policy if exists "screening_docs_delete_own" on storage.objects;
create policy "screening_docs_delete_own" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'screening-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );
