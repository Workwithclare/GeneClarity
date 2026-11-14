# 11 — Assumptions, Limitations & Risks

Written to be read *before* a demo, not after a problem. Nothing here is
softened.

---

## Assumptions

| # | Assumption | If wrong |
| --- | --- | --- |
| A1 | The challenge permits an optional Supabase backend alongside the demo mode (the original constraint set said no backend during the prototype phase — the team explicitly chose to add one, and this documentation was updated to match) | The backend switches off by deleting `.env.local`: the app falls back to the localStorage demo with no code change |
| A2 | The supplied reference image is the intended visual identity for the entry | Design may need re-alignment |
| A3 | Six languages (English, Arabic, French, Spanish, Swahili, Hausa) cover the intended audience | Further languages/localisation required; the four new translations are provisional |
| A4 | Mobile-first layout suits how judges will view it (browser + phone) | Desktop layout would need attention |
| A5 | Static hosting (free tier) is acceptable for the demo | A hosting budget/hosting approval would be needed |
| A6 | Synthetic demo data is acceptable in place of real screening data (organisers supplied none, and using real patient data would be inappropriate) | None — this is also a governance requirement |

## Limitations (implemented ≠ complete)

### Medical / content
- **No clinical review.** No genetic counsellor or physician has reviewed the
  copy. Content is general education written by the team.
- **No professional translation.** Arabic was written for this prototype but
  not reviewed by a certified translator or native-speaker reviewer. The
  French, Spanish, Swahili and Hausa catalogues (added 14 Nov 2026, 344 keys
  each) are **provisional translations pending professional review**, written
  with AI assistance for this prototype. In those four languages the UI is
  fully translated, but **long-form content** (Learn articles, Understand /
  Guidance sections, sample report, result summaries, activity and
  notification entries) exists only in English/Arabic and displays in English
  by design — a uniform, declared fallback rather than a partial mix.
- **Educational content is illustrative**, not a substitute for guidelines.
- **Counsellor listings are fictional placeholders** — there is no real
  referral directory, and contacting them is impossible by design.

### Product
- **Dual-mode authentication.** In demo mode (no `.env.local`) login validates
  non-empty fields only and the "account" is a local object — anyone with the
  device has the demo account. In backend mode real sign-up/sign-in runs
  against Supabase Authentication and **has been exercised against the live
  project** with three test accounts (sign-in, sign-out, session restore and
  the auth-gated redirect verified by manual/scripted browser testing — not a
  penetration test). Email confirmation is currently off on the project (see
  the notifications limitation below).
- **Server persistence only partially wired.** Accounts authenticate via
  Supabase in backend mode, `localStorage` remains the primary store and
  changes are mirrored to the server through the local-first sync layer
  (`src/lib/db.js`) — results, consent, notifications and settings all push;
  the **partner-consent path** and **settings** (push, pull, owner-only RLS)
  are now verified end-to-end (see Evidence), the rest is not yet fully
  verified. Known race: a change made during the first moments of a page
  load can be overwritten by the incoming initial server pull (declared in
  Evidence). In demo mode: per-browser storage, clearing browser data
  resets everything, no cross-device sync.
- **RLS policies are written, not audited** (with two scoped exceptions).
  Owner-only + consent-gated partner reads are declared in SQL, but no
  penetration test or adversarial review has been run against them — except
  the **screening-document policies** (table + storage, `0005`, exercised
  adversarially with two accounts on 13 Nov 2026) and the **partner-consent
  path** (`consents` + `has_consent()` reads on `results`, exercised
  end-to-end with two accounts on 14 Nov 2026); see Evidence. Both were
  functional two-account tests, not penetration tests.
- **Document storage limitations.** Signed URLs live 300 s and are created
  per request; deletion is best-effort with no retry queue (a storage delete
  that succeeds followed by a failed row delete leaves the row visible while
  the file is already gone — recoverable by deleting again, which the UI
  supports). Upload/list failures surface as a friendly error; there is no
  offline queue. Sharing of documents is **not implemented** and only shown
  as a planned feature. Uploaded documents are stored but **never read or
  interpreted** by the app.
- **No automated test suite for the document flow.** Upload, signed-URL
  open/download, delete, validation and two-account isolation were verified
  by scripted browser testing (13 Nov 2026) — manually driven, not a CI test
  that reruns itself.
- **No real notifications.** The inbox shows synthetic in-app items; no email,
  SMS, or push is sent. Supabase email confirmation is currently **disabled**
  on the project so sign-up works instantly during development and demos —
  this must be re-enabled before any real-world pilot (deliberate decision,
  correctly reasoned: passwords and RLS are unaffected, but unconfirmed email
  ownership would be).
- **Print/export = browser features.** Report printing uses the browser print
  dialogue; export is a local JSON file. No PDF generation library is included.
- **No tests.** There is no unit/integration/e2e test suite — verification was
  a manual browser walkthrough plus a passing production build.
- **Known dependency advisories.** `npm audit` reports 4 pre-existing
  vulnerabilities (esbuild ≤0.24.2 via vite ≤6.4.3; react-router 6–7.17 —
  open-redirect and SSR-hydration advisories). None come from the Supabase
  client; the fixes require breaking major upgrades (vite 8, react-router
  7.18) and have deliberately not been forced. They affect dev tooling and a
  router path this hash-routed app does not use for redirects, but they are
  declared here rather than hidden.

### Evidence
- **No user research.** No usability testing, interviews, or surveys have been
  done. No usability claim is made anywhere.
- **No accessibility audit.** Semantic markup and keyboard focus are in place,
  but no WCAG audit or screen-reader testing has been performed; no compliance
  claim is made.
- **No security testing — three functional checks.** No penetration test or
  threat modelling exercise has been conducted, and none is claimed. A
  dependency audit (`npm audit`) was run and its 4 pre-existing findings are
  declared above. In demo mode the app sends no data anywhere; in backend
  mode access is constrained by RLS — for the **document feature**, the
  **partner-consent flow** and the **settings table**, those statements were
  turned into actual tests:
  - two separate accounts (test1, test2) signed in sequentially on the same
    build; test2 saw an **empty list and 0 rows** while test1 had 3 documents;
  - five cross-account attacks as test2 against test1's data were all
    blocked: createSignedUrl for test1's path ("Object not found"), direct
    object GET (HTTP 400), upload into test1's folder (RLS violation), REST
    row DELETE (**0 rows deleted**), folder listing (empty);
  - reverse direction (test1 → test2's file): signed URL denied, GET 400;
  - positive controls passed: each account could list, open (HTTP 200,
    correct bytes) and download its own file, and delete removed **both**
    the storage object (subsequent signed URL: "Object not found") and the
    metadata row;
  - server-side bucket rules rejected a text/plain file, an 11 MB file, and
    a MIME-spoofed `.pdf` name, while accepting a valid PNG.
  **Partner-consent flow, tested end-to-end with two accounts (14 Nov 2026):**
  - invite by email resolved the second real account and wrote a pending
    `consents` row with all share flags false ("nothing shared by an
    invitation");
  - granting two categories updated the row (`share_summary`,
    `share_full_report`, `granted_at`) and the partner's token could then
    read exactly the owner's 3 result rows via `has_consent('full_report')`
    while keeping access to its own 3;
  - switching "Full report" off cut the partner's read to **0 rows**
    immediately, and restoring it brought the 3 rows back (scope enforced
    by the database, not the UI);
  - revoking set `revoked_at` (timestamp, row kept for audit) and dropped
    the partner's read to **0** at once; the state survived a full page
    reload, restored from the server, and the activity log recorded grant
    and revoke;
  - cancelling the connection deleted the row (0 rows remain) and reset the
    UI to a clean state; zero console errors throughout.
  **Settings sync, tested (14 Nov 2026):** flipping a switch on
  `/settings/privacy` updated the `settings` row server-side (fresh
  `updated_at`); editing the row server-side and reloading made the browser
  adopt the server value (pull confirmed); the other test account could
  read **only its own row** (RLS owner-only); values were restored to their
  originals afterwards. One race was observed: a change made during the
  first moments of a page load — while the initial server pull is still in
  flight — can be overwritten by that incoming load (harmless in normal
  use, declared rather than hidden).
  This covers the document feature, the consent path and settings. Other
  tables (profiles, notifications policies), auth flows, and the
  hosting layer were **not** adversarially tested.
- **Six-language UI sweep (14 Nov 2026):** each of French, Spanish, Swahili
  and Hausa was loaded and checked on six key screens (dashboard, journey,
  learn, report, FAQs, settings): correct `<html lang>` and `dir="ltr"`,
  **zero raw translation keys** on screen, zero console errors; switching
  via the settings dropdown persisted across reload; an invalid saved
  language value fell back to English; Hausa hooked glyphs (ɓ ɗ ƙ ƴ)
  rendered correctly. This is a rendering check, **not** a translation
  quality review.
- **No clinical validation.** Nothing has been validated against real screening
  outcomes, and the prototype is not a medical device.

## Risks

| # | Risk | Likelihood | Impact | Mitigation in this submission |
| --- | --- | --- | --- | --- |
| R1 | A reader mistakes the demo for a real medical product | Medium | High | "Demonstration prototype" on splash; sample banners on all result screens; safety notes throughout |
| R2 | Synthetic data is mistaken for real evidence of impact | Medium | High | Four-state labelling (implemented/tested/planned/proposed) in every doc; explicit "no impact measured" statements |
| R3 | Copy errors in any non-English language damage trust with those judges/users | Medium | Medium | Honest limitation declared (A3 above): the four new catalogues are provisional pending professional review; RTL mechanics themselves verified |
| R4 | Consent flow demonstrated incorrectly during the live demo | Low | High | Step-by-step script in `12_DEMONSTRATION_AND_SUBMISSION_PLAN.md` |
| R5 | Someone connects the repo to OneDrive again → `npm` breaks | Medium | Medium | Repo lives at `C:\Users\USER\GeneClarity`; documented in README and `05_` |
| R6 | Backend scope grows past what can be demoed reliably | Medium | High | Backend is dual-mode: deleting `.env.local` returns the app to the fully-tested localStorage demo; only auth is wired so far, data sync stays *planned* until tested |
| R7 | A real dataset is introduced later without governance review | Low | High | Rule in `10_`: list datasets with licence *before* integration |
| R8 | Over-claiming in pitch materials contradicts the docs | Low | High | Submission materials must be checked against `09_`'s "cannot say" list |

## Deliberate non-goals (this phase)

- Server-side data sync for results/consent/notifications (schema exists;
  UI wiring is *planned*, not built).
- Integration with laboratories, clinics, or national screening programmes.
- Any AI feature — none is implemented, and none is claimed.
- Native mobile apps (the prototype is a responsive web app).

## If this continued (proposed, no commitment)

1. Clinical review of all content by a qualified genetic counsellor.
2. Professional translation review — Arabic first, then the provisional
   French, Spanish, Swahili and Hausa catalogues.
3. Usability testing with screening-eligible adults (then: real metrics).
4. WCAG 2.2 AA audit with assistive-technology testing.
5. Finish backend verification: the consent flow is now tested end-to-end
   (14 Nov 2026) — remaining are the results/notifications/settings sync
   paths and then a professional security review.
