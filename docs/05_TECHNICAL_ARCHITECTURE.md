# 05 — Technical Architecture

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Build | **Vite 5** | Instant dev server, tiny static output, zero config needed for this size |
| UI | **React 18** | Component model fits the 22-screen structure |
| Styling | **Tailwind CSS 3** + a small component layer in `index.css` | Fast iteration, design tokens in config |
| Routing | **React Router 6, `HashRouter`** | Works on *any* static host with no server rewrite rules |
| State | **React context + reducer**, persisted to `localStorage` | Simple, inspectable, resettable; also the demo-mode backend |
| Backend (optional) | **Supabase Auth + PostgreSQL** (`supabase-js`) | Dual-mode: real accounts/DB when configured, localStorage demo otherwise |
| i18n | **Custom catalogue** (`translations.js`) | Single source of truth; enables full RTL |

**Explicitly not used:** Firebase, Firestore, Google AI Studio, any paid
service, any external data API. Supabase is used *only* as the optional
backend described below — it was not part of the original prototype-phase
constraint set, and this document was updated when the team chose to add it.

## Application structure

```
src/
├─ App.jsx               # HashRouter routes + <html> lang/dir sync + scroll reset
├─ i18n/
│  ├─ translations.js    # EN + AR key/value catalogue (all copy)
│  └─ LanguageContext.jsx# lang state → localStorage + document.dir
├─ lib/
│  ├─ supabase.js        # dual-mode client (null when env vars absent)
│  └─ auth.js            # sign-up/in/out + session restore + error→key mapping
├─ store/
│  ├─ AppStore.jsx       # reducer: consent, settings, notifications, activity
│  └─ useRequireAuth.js  # guard: redirects to /login when no user
├─ data/demoData.js      # synthetic results, topics, counsellors, activity
├─ components/           # Icon, Logo, Illustrations, Shell, UI, LanguageToggle
├─ screens/              # one component per screen
└─ styles/index.css      # tokens + .btn/.card/.field + reduced-motion
supabase/migrations/     # 0001_init.sql — schema + RLS policies
```

## State model (`AppStore.jsx`)

Single reducer, one `localStorage` key (`geneclarity.state.v1`), with a
`ready` hydration flag so screens never render half-loaded state.

Key slices:

- **`user`** — demo account (fictional). `null` = signed out.
- **`consent`** — account-level privacy acceptance (from `/consent`).
- **`partner`** — status (`none` / `invited` / `active`), which granular scopes
  are granted (`summary`, `fullReport`, `notifications`), timestamps.
- **`settings`** — single notification master switch, `profileVisibility`,
  `shareResearch` (**default off**), `autoLock`.
- **`notifications`** / **`activity`** — local lists; activity is the audit
  trail of consent changes and account events.

Reducer actions of note: `INVITE_PARTNER`, `GRANT_PARTNER`, `REVOKE_PARTNER`,
`SET_SETTING`, `MARK_READ`, `MARK_ALL_READ`, `LOG` (generic audit entry),
`SIGN_OUT`, `RESET`.

## Auth (dual mode)

**Backend mode** (when `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` exist in
`.env.local`): `src/lib/auth.js` talks to Supabase Authentication —
`signUpWithBackend`, `signInWithBackend`, `signOutBackend`, `restoreSession`
and `onAuthChange`. `AppStore` restores the session on load and treats the
Supabase session as the source of truth for who is signed in. Provider errors
are mapped to translation keys (`auth.errInvalid`, `auth.errEmailTaken`, …) so
the UI never shows raw provider messages. If signup requires email
confirmation, the register screen says so honestly instead of pretending the
account is ready.

**Demo mode** (no env vars): `supabase` is `null`, nothing hits the network,
and behaviour is exactly the original prototype — `useRequireAuth` checks the
demo user object; the "Use sample account" button loads a fictional profile.
Passwords are not stored, hashed, or verified; the login form validates only
that fields are non-empty. This is stated on the screen itself.

> Both modes are deliberate and documented rather than disguised. Which one is
> active is visible on the login/register screens ("Secure account" vs the
> demo notice).

## Data flow rules

1. All copy is read via `t('key')` — components never contain literal user-facing
   strings (exception: a few date/number formatters).
2. All demo content comes from `src/data/demoData.js`, which carries an
   origin declaration comment at the top.
3. In demo mode the only network requests are the two Google Fonts
   stylesheets. In backend mode the app additionally talks to the configured
   Supabase project (Auth + Postgres, RLS-limited) and Google Fonts. The
   privacy "Export" action always builds a local `Blob` and downloads it —
   export is never uploaded.

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

## Backend status: what exists vs what is planned

**Implemented (in this repository):**

- Dual-mode Supabase client (`src/lib/supabase.js`) — active only when env
  vars are present; demo mode otherwise.
- Auth helpers (`src/lib/auth.js`): sign-up, sign-in, sign-out, session
  restore, auth-state subscription, error→translation-key mapping — wired
  into Login, Register, Profile (sign-out) and `AppStore`.
- Database schema with Row Level Security (`supabase/migrations/0001_init.sql`):
  `profiles` (auto-created by trigger), `results`, `notifications`,
  `activity` (append-only), `consents` (granular, revocable), `settings` —
  owner-only policies everywhere; partner reads require an active consent
  grant via `has_consent()`.
- `.env.example` + `.env.local` template (gitignored).

**Planned (not yet wired):**

- Client-side read/write of results, notifications, activity and settings to
  the database (currently the UI still reads/writes localStorage in both
  modes).
- Partner-consent flow enforced end-to-end against a live project (schema and
  policies exist; the UI does not yet call them).
- Server-side AI explanation functions — provider decision pending (Google AI
  Studio remains forbidden by the challenge constraints).

**Not present:** no credentials in the repository; no paid services; no
Firebase; no Google AI Studio.
