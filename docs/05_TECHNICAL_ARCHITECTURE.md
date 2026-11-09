# 05 — Technical Architecture

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Build | **Vite 5** | Instant dev server, tiny static output, zero config needed for this size |
| UI | **React 18** | Component model fits the 20-screen structure |
| Styling | **Tailwind CSS 3** + a small component layer in `index.css` | Fast iteration, design tokens in config |
| Routing | **React Router 6, `HashRouter`** | Works on *any* static host with no server rewrite rules |
| State | **React context + reducer**, persisted to `localStorage` | No backend; simple, inspectable, resettable |
| i18n | **Custom catalogue** (`translations.js`) | Single source of truth; enables full RTL |

**Explicitly not used:** Firebase, Firestore, Google AI Studio, Supabase, any
backend, any paid service, any external data API.

## Application structure

```
src/
├─ App.jsx               # HashRouter routes + <html> lang/dir sync + scroll reset
├─ i18n/
│  ├─ translations.js    # EN + AR key/value catalogue (all copy)
│  └─ LanguageContext.jsx# lang state → localStorage + document.dir
├─ store/
│  ├─ AppStore.jsx       # reducer: consent, settings, notifications, activity
│  └─ useRequireAuth.js  # guard: redirects to /login when no demo user
├─ data/demoData.js      # synthetic results, topics, counsellors, activity
├─ components/           # Icon, Logo, Illustrations, Shell, UI, LanguageToggle
├─ screens/              # one component per screen
└─ styles/index.css      # tokens + .btn/.card/.field + reduced-motion
```

## State model (`AppStore.jsx`)

Single reducer, one `localStorage` key (`geneclarity.state.v1`), with a
`ready` hydration flag so screens never render half-loaded state.

Key slices:

- **`user`** — demo account (fictional). `null` = signed out.
- **`consent`** — account-level privacy acceptance (from `/consent`).
- **`partner`** — status (`none` / `invited` / `active`), which granular scopes
  are granted (`summary`, `fullReport`, `notifications`), timestamps.
- **`settings`** — notification switches, `profileVisibility`,
  `shareResearch` (**default off**), `autoLock`.
- **`notifications`** / **`activity`** — local lists; activity is the audit
  trail of consent changes and account events.

Reducer actions of note: `INVITE_PARTNER`, `GRANT_PARTNER`, `REVOKE_PARTNER`,
`SET_SETTING`, `MARK_READ`, `MARK_ALL_READ`, `LOG` (generic audit entry),
`SIGN_OUT`, `RESET`.

## Auth (demo only)

There is **no authentication**. `useRequireAuth` checks whether the demo user
object exists in state; if not, it redirects to `/login`. The "Use sample
account" button loads a fictional profile. Passwords are not stored, hashed, or
verified — the login form validates only that fields are non-empty.

> This is a deliberate prototype limitation, documented rather than disguised.
> Real auth is *planned* (Supabase Auth) — see `09`–`11`.

## Data flow rules

1. All copy is read via `t('key')` — components never contain literal user-facing
   strings (exception: a few date/number formatters).
2. All demo content comes from `src/data/demoData.js`, which carries an
   origin declaration comment at the top.
3. Nothing in the app performs network requests at runtime except loading the
   two Google Fonts stylesheets. The privacy "Export" action builds a local
   `Blob` and downloads it — no upload.

## Build & deployment

- `npm.cmd run build` → `dist/` (hashed assets, `base: './'` so it can be
  opened from any sub-path).
- Verified working output: ~30 kB CSS, ~308 kB JS (93 kB gzipped) — fine for a
  static host (GitHub Pages, Netlify, Vercel, any object storage).
- Because of `HashRouter`, **no 404/rewrite configuration is required**.

## Known engineering decisions / gotchas

- **Tailwind safelist** — runtime-built classes (`btn--primary`, etc.) are
  pinned in `tailwind.config.js` because the content scanner cannot see them.
  Found and fixed during QA; see `02_DESIGN_SYSTEM.md`.
- **npm on Windows** — this machine runs Node from a portable install at
  `%LOCALAPPDATA%\Programs\nodejs`; PowerShell blocks `npm.ps1`, so commands
  use `npm.cmd`.
- **Project location** — the repo lives at `C:\Users\USER\GeneClarity`, outside
  OneDrive, because file-sync locks broke `node_modules` (EBUSY/EPERM).

## Planned future backend (not implemented)

- **Supabase Auth** for real accounts; **PostgreSQL** for results/consent.
- **Server-side functions** for any AI feature — API keys never ship to the
  browser.
- Consent model from `08_PRIVACY_AND_CONSENT_MODEL.md` maps directly to DB rows
  (per-user, per-scope, per-partner, revocable).

Nothing above exists in this repository today. No credentials are present.
