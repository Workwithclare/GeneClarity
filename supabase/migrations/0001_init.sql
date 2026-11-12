-- ═══════════════════════════════════════════════════════════════════
-- GeneClarity — initial schema (Supabase / PostgreSQL)
--
-- Apply with the Supabase CLI (`supabase db push`) or paste into the
-- Dashboard → SQL Editor → New query → Run.
--
-- Design rules enforced here:
--   1. Row Level Security is ENABLED on every table. The public anon
--      key alone grants NOTHING beyond the policies below — RLS, not
--      the key, is the security boundary.
--   2. Each user sees only their own rows (owner-only), except partner
--      access, which requires an active, granular consent grant.
--   3. Consent is revocable: revoking (revoked_at) immediately stops
--      partner reads on the very next query.
--   4. No health data is collected beyond synthetic demonstration
--      findings the app itself creates. See docs/10.
-- ═══════════════════════════════════════════════════════════════════

-- ── 1. profiles ────────────────────────────────────────────────────
-- One row per auth.users account. Created automatically by the
-- trigger below — clients cannot create profiles for other users.

create table if not exists public.profiles (
  id              uuid primary key references auth.users (id) on delete cascade,
  full_name       text not null default '',
  avatar_initials text not null default '',
  locale          text not null default 'en',
  created_at      timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- No delete policy: profiles are removed with the auth user (cascade).

-- Auto-create a profile whenever a new auth user registers.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_name text;
begin
  v_name := coalesce(new.raw_user_meta_data ->> 'full_name', '');
  insert into public.profiles (id, full_name, avatar_initials)
  values (
    new.id,
    v_name,
    upper(left(regexp_replace(v_name, '\s+', ' ', 'g'), 2))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── 2. partner consents ────────────────────────────────────────────
-- The privacy-critical table. The OWNER of a report grants a PARTNER
-- specific, granular permissions; the partner can only read their own
-- grant rows (to see "what am I sharing with whom"), never alter them.
-- Revoking sets revoked_at → every downstream policy stops matching.

create table if not exists public.consents (
  id                uuid primary key default gen_random_uuid(),
  owner_id          uuid not null references auth.users (id) on delete cascade,
  partner_id        uuid not null references auth.users (id) on delete cascade,
  share_summary     boolean not null default false,
  share_full_report boolean not null default false,
  share_notifications boolean not null default false,
  granted_at        timestamptz,
  revoked_at        timestamptz,
  updated_at        timestamptz not null default now(),
  unique (owner_id, partner_id),
  check (owner_id <> partner_id)
);

alter table public.consents enable row level security;

drop policy if exists "consents_owner_rw" on public.consents;
create policy "consents_owner_rw" on public.consents
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

drop policy if exists "consents_partner_read" on public.consents;
create policy "consents_partner_read" on public.consents
  for select using (auth.uid() = partner_id);

-- Helper: is there an ACTIVE grant from this owner to me (or to this
-- partner) for the given permission? Used by the read policies below.
create or replace function public.has_consent(
  p_owner uuid,
  p_permission text
) returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.consents c
    where c.owner_id = p_owner
      and c.partner_id = auth.uid()
      and c.revoked_at is null
      and case p_permission
            when 'summary'        then c.share_summary
            when 'full_report'    then c.share_full_report
            when 'notifications'  then c.share_notifications
            else false
          end
  );
$$;

revoke all on function public.has_consent(uuid, text) from public;
grant execute on function public.has_consent(uuid, text) to authenticated;

-- ── 3. results ─────────────────────────────────────────────────────
-- Synthetic demonstration findings only — never identifiable patient
-- records (see docs/10). Owner reads/creates/updates their own rows;
-- a partner reads them ONLY while an active full-report consent exists.

create table if not exists public.results (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users (id) on delete cascade,
  condition_key text not null,
  status       text not null check (status in ('carrier', 'negative', 'uncertain')),
  synthetic    boolean not null default true,
  payload      jsonb not null default '{}'::jsonb,
  created_at   timestamptz not null default now()
);

alter table public.results enable row level security;

drop policy if exists "results_owner_all" on public.results;
create policy "results_owner_all" on public.results
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "results_partner_read" on public.results;
create policy "results_partner_read" on public.results
  for select using (public.has_consent(user_id, 'full_report'));

-- ── 4. notifications ───────────────────────────────────────────────
-- Owner-only, plus partner read under an active notifications consent.

create table if not exists public.notifications (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  kind       text not null default 'info',
  title_key  text not null,
  body_key   text not null,
  is_read    boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.notifications enable row level security;

drop policy if exists "notifications_owner_all" on public.notifications;
create policy "notifications_owner_all" on public.notifications
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "notifications_partner_read" on public.notifications;
create policy "notifications_partner_read" on public.notifications
  for select using (public.has_consent(user_id, 'notifications'));

-- ── 5. activity (audit log) ────────────────────────────────────────
-- Owner-only, append-mostly: the app writes events, nobody edits them.

create table if not exists public.activity (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  kind       text not null,
  detail_en  text not null default '',
  detail_ar  text not null default '',
  created_at timestamptz not null default now()
);

alter table public.activity enable row level security;

drop policy if exists "activity_insert_own" on public.activity;
create policy "activity_insert_own" on public.activity
  for insert with check (auth.uid() = user_id);

drop policy if exists "activity_select_own" on public.activity;
create policy "activity_select_own" on public.activity
  for select using (auth.uid() = user_id);

-- No update/delete policies: the audit trail is append-only.

-- ── 6. settings ────────────────────────────────────────────────────
-- One row per user; owner-only. Nothing here is shared with a partner.

create table if not exists public.settings (
  user_id             uuid primary key references auth.users (id) on delete cascade,
  notify_notifications boolean not null default false,
  auto_lock           boolean not null default true,
  share_research      boolean not null default false,
  profile_visibility  boolean not null default true,
  updated_at          timestamptz not null default now()
);

alter table public.settings enable row level security;

drop policy if exists "settings_owner_rw" on public.settings;
create policy "settings_owner_rw" on public.settings
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ── 7. updated_at maintenance ──────────────────────────────────────

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists consents_touch on public.consents;
create trigger consents_touch
  before update on public.consents
  for each row execute function public.touch_updated_at();

drop trigger if exists settings_touch on public.settings;
create trigger settings_touch
  before update on public.settings
  for each row execute function public.touch_updated_at();
