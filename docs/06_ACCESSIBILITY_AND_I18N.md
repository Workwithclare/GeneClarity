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

- **Single catalogue family**: `src/i18n/translations.js` exports the EN and AR
  maps and imports four sibling catalogues — `fr.js`, `es.js`, `sw.js`,
  `ha.js` — into `catalogs` (`{ en, ar, fr, es, sw, ha }`). All six have
  **identical 344-key sets** (parity checked mechanically). Components call
  `t('key')`; they never hardcode copy.
- **Language metadata**: the same file exports a `languages` array (code,
  native name, `dir`) that drives both the picker and layout direction.
- **Context**: `LanguageContext.jsx` holds `lang`, exposes `t()` (falls back to
  English if a key is missing — a raw key is never shown), validates the
  persisted choice against the catalogue list (an unknown value falls back to
  English), and persists to `localStorage['geneclarity.language']`.
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

**Content-layer fallback.** The 344 keys cover the application's interface
(buttons, headings, labels, consent, FAQ, glossary, settings…). Long-form
*content* — Learn articles, Understand/Guidance sections, the sample report,
result summaries, activity/notification entries, counsellor listings — exists
only as English/Arabic pairs in `src/data/*.js` and the content screens, and
displays in **English** for the four new languages (the existing
`lang === 'ar' ? ar : en` pattern). The fallback is uniform across those
languages, so a reader never sees a half-translated screen.

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

### Known limitations

- No professional translation review has been commissioned for **any**
  non-English language (Arabic, and the four provisional catalogues). This is
  recorded as a limitation in `11_ASSUMPTIONS_LIMITATIONS_AND_RISKS.md`.
- Long-form content stays English in the four new languages (see the
  content-layer fallback note above).
- Dates/numbers use `toLocaleString(...)` with browser-provided formatting
  (locale mapped `ar → 'ar'`, otherwise `'en-GB'`) — not a custom
  localisation layer.
