-- ═══════════════════════════════════════════════════════════════════
-- GeneClarity — 0006: activity rows store translation keys
-- Run AFTER 0001 / 0002 / 0003 / 0004 / 0005.
--
-- The app now renders activity details from the six-language CONTENT
-- catalogue (`src/i18n/content.js`) instead of finished EN/AR text:
-- each entry carries a content KEY plus params, so one audit row
-- reads correctly in the reader's language (en, ar, fr, es, sw, ha).
--
-- • detail_key    — e.g. 'content.act.grantAccess' (nullable; rows
--                   written before this migration have NULL and the
--                   app falls back to the legacy columns below).
-- • detail_params — jsonb of placeholder values, e.g. {"n": 3}.
--
-- The existing detail_en / detail_ar columns are KEPT as a
-- server-side audit copy: the app fills them from the catalogue at
-- write time, so the database stays readable without the client and
-- old rows keep their text. This reverses the note in 0004 ("the app
-- stores finished EN/AR text, not translation keys") — for the
-- activity table only; notifications still sync a jsonb payload.
-- ═══════════════════════════════════════════════════════════════════

alter table public.activity add column if not exists detail_key text;
alter table public.activity add column if not exists detail_params jsonb;
