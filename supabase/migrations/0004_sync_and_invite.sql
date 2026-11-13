-- ═══════════════════════════════════════════════════════════════════
-- GeneClarity — 0004: server-side data sync + partner invite by email
-- Run AFTER 0001 / 0002 / 0003.
--
-- 1. App-owned tables switch from uuid to TEXT ids so the app's own
--    stable identifiers (e.g. "res_hbs") can be stored as-is. All three
--    tables are empty at this point, so the conversion is lossless.
-- 2. notifications drops the key-based columns in favour of a jsonb
--    payload (the app stores finished EN/AR text, not translation keys).
-- 3. profiles gains consent_accepted_at so the privacy-acceptance gate
--    follows the ACCOUNT, not just one browser.
-- 4. consents stores the partner's display name recorded by the owner
--    (avoids exposing other users' profiles).
-- 5. find_partner_by_email(): authenticated-only lookup used by the
--    invite flow. Tradeoff declared in docs/10: it reveals whether an
--    email has an account (and that account's display name) to a
--    signed-in user — required for invite-by-email, same class of
--    behaviour as sharing a document with someone's email.
-- ═══════════════════════════════════════════════════════════════════

-- ── 1. TEXT ids for app-owned rows ─────────────────────────────────

alter table public.results drop constraint if exists results_pkey;
alter table public.results alter column id drop default;
alter table public.results alter column id type text using id::text;
alter table public.results add primary key (id);

alter table public.notifications drop constraint if exists notifications_pkey;
alter table public.notifications alter column id drop default;
alter table public.notifications alter column id type text using id::text;
alter table public.notifications add primary key (id);
alter table public.notifications drop column if exists title_key;
alter table public.notifications drop column if exists body_key;
alter table public.notifications add column if not exists payload jsonb;

alter table public.activity drop constraint if exists activity_pkey;
alter table public.activity alter column id drop default;
alter table public.activity alter column id type text using id::text;
alter table public.activity add primary key (id);

-- ── 2. Account-level privacy acceptance ─────────────────────────────

alter table public.profiles
  add column if not exists consent_accepted_at timestamptz;

-- ── 3. Partner display name recorded by the owner ──────────────────

alter table public.consents add column if not exists partner_name text;

-- ── 4. Invite-by-email lookup ──────────────────────────────────────
-- security definer: reads auth.users (never exposed via PostgREST)
-- and returns ONLY id + display name, only to signed-in users, and
-- never the caller's own account.

create or replace function public.find_partner_by_email(p_email text)
returns table (user_id uuid, display_name text)
language sql
security definer
stable
set search_path = public
as $$
  select u.id,
         coalesce(
           nullif(trim(u.raw_user_meta_data ->> 'full_name'), ''),
           split_part(u.email, '@', 1)
         )
  from auth.users u
  where lower(u.email) = lower(trim(p_email))
    and u.id <> auth.uid()
  limit 1;
$$;

revoke all on function public.find_partner_by_email(text) from public, anon;
grant execute on function public.find_partner_by_email(text) to authenticated;
