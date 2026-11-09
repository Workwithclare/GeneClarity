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

- **Single catalogue**: `src/i18n/translations.js` exports EN and AR maps with
  identical key sets. Components call `t('key')`; they never hardcode copy.
- **Context**: `LanguageContext.jsx` holds `lang`, exposes `t()` (falls back to
  English if a key is missing), and persists the choice to
  `localStorage['geneclarity.language']`.
- **Document sync**: `App.jsx` keeps `<html lang>` and `<html dir>` in step with
  the selection — `en → dir="ltr"`, `ar → dir="rtl"`.

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

### What was verified (manual browser QA, English + Arabic)

- `dir="rtl"` and `lang="ar"` set on `<html>`; font computed style = Cairo.
- Back button renders at the right edge in RTL (measured position).
- All screens show Arabic copy — including the sample-data banner and splash
  tagline (an earlier hardcoded-English bug in `SampleBanner`/`LogoLockup` was
  found and fixed).
- No horizontal overflow (`scrollWidth === clientWidth`) on any checked route in
  either language.
- Zero console errors across the full route sweep.

### Known limitation

- Arabic copy was written for this prototype and reviewed for meaning, but **no
  professional translation or native-speaker review has been commissioned**.
  This is recorded as a limitation in `11_ASSUMPTIONS_LIMITATIONS_AND_RISKS.md`.
- Dates/numbers use `toLocaleString('ar' | 'en-GB')` — browser-provided
  formatting, not a custom localisation layer.
