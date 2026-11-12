-- ═══════════════════════════════════════════════════════════════════
-- GeneClarity — API role grants (run AFTER 0001_init.sql)
--
-- Creating tables from the SQL Editor did not automatically grant the
-- `anon` / `authenticated` API roles access to them (PostgREST then
-- returns "permission denied for table ..."). These grants only allow
-- the roles to *reach* the tables — every table has Row Level Security
-- enabled with owner-only / consent-gated policies, so each user still
-- only ever sees their own rows (anon, with no session, sees nothing).
-- ═══════════════════════════════════════════════════════════════════

grant usage on schema public to anon, authenticated;

grant select, insert, update, delete
  on all tables in schema public
  to anon, authenticated;

-- Keep future tables (created by migrations) granted the same way.
alter default privileges in schema public
  grant select, insert, update, delete on tables to anon, authenticated;
