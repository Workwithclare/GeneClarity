# 06 — Accessibility & Internationalisation (i18n)

## Accessibility

### Implemented

- **Semantic structure**: `banner` (AppBar), `main`, `navigation` (bottom nav),
  headings in order, lists for collections.
- **Keyboard**: every interactive element is a real `<button>`/`<a>`/`<input>`;
  visible `focus-visible` rings (`4px brand-200`) throughout.
- **Touch targets**: icon buttons are 40×40 px minimum; primary buttons ≥44 px tall.
- **Labels**: icon-only buttons carry `aria-label`; all form fields have
  associated `<label for>`; switches expose `role` + `aria-checked` via their
  native input.
- **Colour**: body text uses ink tones tested against white/mint backgrounds;
  status is never conveyed by colour alone (icons + text accompany every state).
- **Motion**: `prefers-reduced-motion: reduce` disables all entrance animations.
- **Images/SVG**: decorative SVGs are `aria-hidden`; meaningful ones carry
  `title`/labels (e.g. "GeneClarity logo").
- **Errors**: form validation messages are rendered next to fields and summary
  text is announced via live regions where used.

### Planned (not implemented — no audit has been performed)

- Formal WCAG 2.2 AA audit, screen-reader testing (NVDA/VoiceOver), and
  automated tooling (axe/Lighthouse) are **not yet run**. This document must not
  be read as a compliance claim.

## Internationalisation

### Design

- **Two catalogue families, one directory** (`src/i18n/`):
  - **UI chrome** — `translations.js` exports the EN and AR maps and imports
    four sibling catalogues — `fr.js`, `es.js`, `sw.js`, `ha.js` — into
    `catalogs` (`{ en, ar, fr, es, sw, ha }`). All six have **identical
    348-key sets** (parity checked mechanically). Components call `t('key')`;
    they never hardcode copy.
  - **Long-form content** — `content.js` exports `contentEn`/`contentAr` plus
    four siblings (`content_fr.js` … `content_ha.js`) into `contentCatalogs`.
    All six have **identical 171-key sets**. These keys are tied to data
    records by id: `content.result.{conditionId}.*`, `content.learn.{id}.*`,
    `content.understand.{id}.*`, `content.notify.{id}.*`,
    `content.act.*` (activity audit entries, with `{n}`/`{key}`/`{value}`
    params), `content.sample.*`, `content.counsellor.{id}.*` and the
    positional lists `content.useful.N` / `content.question.N`. Array
    content uses indexed keys (`…mean.0`, `…mean.1`, …) whose count is
    derived from the English catalogue.
- **Language metadata**: the same file exports a `languages` array (code,
  native name, `dir`) that drives both the picker and layout direction.
- **Context**: `LanguageContext.jsx` holds `lang` and exposes:
  `t(key, params)` for UI chrome (falls back to English, then to the raw
  key — a label never disappears, `{name}` placeholders are substituted);
  `tc(key, params)` for content (returns `undefined` when a key exists
  nowhere, so optional lesson sections simply don't render); `tList(key)`
  for indexed content lists; and `locale` (the BCP-47 locale used by
  `Intl`/`toLocaleString`). It validates the persisted choice against the
  catalogue list (an unknown value falls back to English) and persists to
  `localStorage['geneclarity.language']`.
- **Data records hold keys, not sentences**: `src/data/demoData.js` and
  `src/data/journeyContent.js` keep only structure (ids, icons, tones,
  genes); every sentence is read from the content catalogue at render time.
  Activity entries additionally store `detail_key`/`detail_params`
  (migration `0006`) so one audit row reads correctly in all six
  languages — the `detail_en`/`detail_ar` columns are kept as a
  server-side audit copy. Rows saved **before** this change (old
  `localStorage` state, pre-0006 database rows) still carry finished
  EN/AR text and render from it as a legacy fallback.
- **Parity is mechanical**: `npm run i18n:check` (`scripts/i18n-parity.mjs`)
  fails if any language misses or adds a key in either family, uses
  different `{placeholder}` names than English, or if the language
  metadata (picker list, BCP-47 locale map, `dir`) falls out of step with
  the catalogues.
- **Picker**: `LanguageToggle.jsx` is a dropdown (variants `inline` for the
  welcome screen, `chip` for the settings row) listing all six languages with
  a checkmark on the active one; it closes on outside click and Escape.
- **Document sync**: `App.jsx` keeps `<html lang>` and `<html dir>` in step
  with the selection using the metadata's `dir` — `ar → rtl`, the other five
  → `ltr`.

### Languages

| Code | Language | Status |
| --- | --- | --- |
| `en` | English | Source catalogue |
| `ar` | العربية (Arabic) | Written for this project; RTL verified; not professionally reviewed |
| `fr` | Français (French) | **Provisional**, pending professional review |
| `es` | Español (Spanish) | **Provisional**, pending professional review |
| `sw` | Kiswahili (Swahili) | **Provisional**, pending professional review |
| `ha` | Hausa | **Provisional**, pending professional review |

All non-English translations were written with AI assistance for this
prototype and follow the same plain-language, safety-first register as the
English copy (no diagnosis, no prescription, no life advice). **None has been
reviewed by a certified translator or native speaker.**

**Content coverage.** The 348 UI keys cover the application's interface
(buttons, headings, labels, consent, FAQ, glossary, settings…). The 171
content keys cover everything long-form: Learn articles, Understand /
Guidance sections, the sample report, result summaries, activity and
notification entries, counsellor listings. Both families are translated in
all six languages, so no screen mixes languages.

### RTL strategy

Instead of duplicating stylesheets, the app uses **logical CSS properties**:

| Logical | Physical equivalent | Effect in RTL |
| --- | --- | --- |
| `ps-` / `pe-` | padding-left/right | padding mirrors automatically |
| `start-` / `end-` | left/right offset | timeline spine & badges mirror |
| `ms-` / `me-` | margin-left/right | spacing mirrors |
| `text-start` | text-align:left/right | text hugs the correct edge |

Direction-dependent *content* (icons that must physically flip) is handled in
JSX: the AppBar back chevron renders `chevronLeft` in LTR and `chevronRight` in
RTL; menu rows mirror likewise.

### Typography

- Latin: **Plus Jakarta Sans**; Arabic: **Cairo** — both loaded from Google
  Fonts in `index.html` with `display=swap`.
- The `font-sans` token swaps to Cairo when `lang="ar"`.

### What was verified (manual browser QA)

**English + Arabic:**

- `dir="rtl"` and `lang="ar"` set on `<html>`; font computed style = Cairo.
- Back button renders at the right edge in RTL (measured position).
- All screens show Arabic copy — including the sample-data banner and splash
  tagline (an earlier hardcoded-English bug in `SampleBanner`/`LogoLockup` was
  found and fixed).
- No horizontal overflow (`scrollWidth === clientWidth`) on any checked route in
  either language.
- Zero console errors across the full route sweep.

**French, Spanish, Swahili, Hausa (14 Nov 2026):**

- Each language checked on six key screens (dashboard, journey, learn, report,
  FAQs, settings): correct `<html lang>` + `dir="ltr"`, **zero raw translation
  keys** rendered, zero console errors.
- Switching via the settings dropdown updates the document attributes and
  persists across reload; an invalid saved value (`xx`) falls back to English.
- Hausa hooked glyphs (ɓ ɗ ƙ ƴ) render correctly (Plus Jakarta Sans with
  system-font fallback); screenshots reviewed.
- This is a **rendering check only — not a translation quality review.**

**New features — upload preview & My Appointments (17 Nov 2026):**

- Signed in with the test account and exercised the real Supabase backend.
  After migrations `0005` + `0006` were applied, `GET /rest/v1/activity`
  returned **200/201** (it had been 400 before `0006`); all other REST calls
  (`profiles`, `settings`, `results`, `notifications`, `consents`) returned 200.
- **My Screening Results** (`#/journey/documents`): picking a file now shows
  the preview card instead of uploading immediately — verified the
  *Preview before upload* heading, file name, type label (PDF), size, image
  thumbnail for images / file icon for PDFs, and the three actions
  (*Confirm upload*, *Cancel*, *Choose a different file*). The `capture`
  attribute is present on the file input for mobile cameras.
- **Professional Guidance** (`#/journey/guidance`): all three sections render
  in order — *What is genetic counselling?*, **My Appointments** (honest empty
  state, "Nothing is booked until a professional confirms it"), *Prepare
  questions to ask*.
- New keys checked in **French** (preview card + appointments) and **Arabic**
  (`dir="rtl"`, appointments section): correct copy, **zero raw keys**.
- Zero console errors across the checks above.

**Password reset — "Forgot password?" (18 Nov 2026):**

- Sign-in → *Forgot password?* swaps the panel to *Reset your password*
  (`#forgot-email`) with the empty-field and malformed-email validation
  messages; *Send reset link* → *Back to sign in* returns to the form.
- A send to a **deliverable** address reached the honest *Check your
  email* state ("If an account exists for {email}, a reset link is on its
  way…"). A `example.com` address is rejected by the API (reserved,
  non-deliverable domain → `400 email_address_invalid`) and surfaces as
  the mapped catalogue string, never a raw provider message.
- Recovery landing simulated by loading the page with
  `#access_token=…&type=recovery`: the neutral "One moment…" gate held
  the router while the Supabase client exchanged the tokens, then routed
  to `#/reset-password` — which showed the honest *"link is missing or
  has expired"* state for the invalid tokens (no blank page, no 404).
- Password round-trip on the live backend with the test account:
  sign-in → `#/reset-password` → saving the **same** password was
  refused with the reuse message → changed the password → *Password
  updated* → session dropped automatically → signed in with the new
  password → changed back to the original and signed in with it again.
- `npm run i18n:check`: **378 UI keys × 6 languages** (15 new `auth.*`
  keys added for this flow) and 171 content keys × 6 — parity green.
- Console errors during the walkthrough were limited to the deliberate
  invalid requests described above. A clean reload with a restored
  session produced zero errors.

### Known limitations

- No professional translation review has been commissioned for **any**
  non-English language (Arabic, and the four provisional catalogues — both
  the UI and the content families). This is recorded as a limitation in
  `11_ASSUMPTIONS_LIMITATIONS_AND_RISKS.md`.
- Rows written **before** the content pass (old `localStorage` state,
  database rows predating migration `0006`) keep their original EN/AR text
  as a legacy fallback until rewritten; they are not retro-translated.
- Dates/numbers use `toLocaleString(...)` / `Intl.DateTimeFormat` with the
  per-language locale map (`en → en-GB`, `ar → ar`, `fr → fr-FR`,
  `es → es-ES`, `sw → sw-KE`, `ha → ha-NG`) — browser-provided formatting,
  not a custom localisation layer.
