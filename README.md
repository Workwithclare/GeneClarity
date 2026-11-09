# GeneClarity

**Understanding and Reducing Inherited Disease Risk.**

GeneClarity is a mobile-first web prototype that helps individuals and couples
understand inherited disease screening information, read carrier results in plain
language, sit with uncertainty honestly, and reach qualified genetic counselling.

> **This is a demonstration prototype.** Every result, name, number and
> notification in it is an original synthetic example created for this project.
> Nothing here is a real screening result, and GeneClarity is **not** a medical
> device. It explains information; it does not diagnose, prescribe, or replace a
> doctor or genetic counsellor.

---

## Quick start

Prerequisites: **Node.js 18+** (this project was built with Node 26).

```powershell
# Windows PowerShell — note npm.cmd, because PowerShell blocks npm.ps1
npm.cmd install
npm.cmd run dev
```

Then open <http://localhost:5173>.

| Command | What it does |
| --- | --- |
| `npm.cmd run dev` | Starts the local development server (port 5173) |
| `npm.cmd run build` | Creates an optimised production build in `dist/` |
| `npm.cmd run preview` | Serves the production build locally for a final check |

> **Windows tip:** if PowerShell says `npm.ps1 cannot be loaded`, either use
> `npm.cmd` as shown above, or run commands from `cmd.exe` instead.

---

## What is in the prototype

20 screens covering the full journey, all reachable through the in-app
navigation (no server-side routing needed — the app uses hash routes):

| Area | Screens |
| --- | --- |
| Entry | Splash, Welcome, Onboarding (3 steps), Privacy & consent |
| Accounts | Registration, Login (with a one-tap sample account) |
| Core | Dashboard, Genetic report, Key insight detail (plain-language results) |
| Learning | Learn library, Condition/topic detail |
| Couple | CoupleConnect, Partner-sharing consent (grant / revoke) |
| Support | Genetic counselling access |
| Account | Profile, Settings, Privacy & security, Notifications, Activity history |
| System | English / Arabic selection, 404 page |

**Bilingual:** full English and Arabic catalogues. Selecting Arabic switches the
whole document to `dir="rtl"` and the typeface to Cairo; layout follows with
logical CSS properties (`start`/`end`), so back buttons, chevrons and timeline
spines flip correctly.

---

## Architecture

```
GeneClarity/
├─ index.html                 # Vite entry; loads Plus Jakarta Sans + Cairo
├─ vite.config.js             # React plugin, base './' for any static host
├─ tailwind.config.js         # Brand tokens + safelist for runtime-built classes
├─ public/favicon.svg
├─ src/
│  ├─ App.jsx                 # Routes + scroll/language-dir side effects
│  ├─ i18n/
│  │  ├─ translations.js      # Single source of truth for ALL copy (EN + AR)
│  │  └─ LanguageContext.jsx  # Language state, persists to localStorage
│  ├─ store/
│  │  ├─ AppStore.jsx         # Reducer for consent, settings, activity log
│  │  └─ useRequireAuth.js    # Route guard (demo auth only)
│  ├─ data/demoData.js        # All synthetic demo data + origin declarations
│  ├─ components/             # Icon, Logo, Illustrations, Shell, UI primitives
│  ├─ screens/                # One file per screen
│  └─ styles/index.css        # Design system: tokens, .btn, .card, .field
└─ docs/                      # Challenge documentation (see below)
```

**Key decisions**

- **Vite + React + Tailwind** — fast, no backend, static output deployable to
  any free static host.
- **HashRouter** — works on any static host without rewrite configuration.
- **No backend, no cloud services.** No Firebase, Supabase, or external APIs.
  All state lives in the browser (`localStorage`). This is a deliberate
  constraint for this phase; the planned future backend is Supabase Auth +
  PostgreSQL with server-side functions for any AI features (documented in
  `docs/09`–`docs/11`, explicitly marked *planned*, not implemented).
- **All copy lives in `src/i18n/translations.js`** — no hardcoded English in
  components, which is what makes full Arabic RTL possible.

---

## Safety and privacy rules (hard constraints)

These are enforced throughout the code and copy:

1. **Never diagnose, prescribe, or make medical decisions.** The app explains
   information and always points back to qualified professionals.
2. **Never tell users whether to marry, have children, or make any life choice.**
   Risk is presented as ranges/fractions, never as certainty or guarantee.
3. **Every result is labelled synthetic.** A persistent "Demonstration data"
   banner appears wherever results are shown; the sample account is explicitly
   marked as fictional.
4. **Separate private accounts.** Partners can never see each other's genetic
   information automatically.
5. **Sharing requires explicit, granular, revocable consent.** Both sides must
   agree; either side can withdraw at any time. Withdrawal stops *future* access
   and is recorded in the activity log — the UI states honestly that it does not
   erase history already lawfully viewed.
6. **No sensitive information in public screens or logs.** Activity history
   records consent events, not result contents.
7. **Export is real and local** — the privacy screen downloads this browser's
   stored demo state as JSON; nothing is transmitted anywhere.

---

## Data declaration

- **All data in this prototype is synthetic and was created by this project**
  for demonstration purposes: fictional profiles, fictional carrier results
  (haemoglobin S / HBB, Tay–Sachs / HEXA, cystic fibrosis / CFTR), fictional
  educational topics, and fictional counsellor listings.
- **No real patient records, real screening results, or real personal data are
  used anywhere** — not in code, not in fixtures, not in screenshots.
- **No external dataset was supplied or used.** Challenge organisers provided no
  datasets; this project required none.
- **Educational content is original, general, and clearly labelled** — it is not
  copied from clinical guidelines. Where content describes established genetics
  (e.g. autosomal recessive inheritance), it is written in general educational
  terms and explicitly framed as "not advice about your own health."
- **Counsellor listings are illustrative placeholders**, not real practitioners
  or verified directories.
- Fonts are loaded from Google Fonts (Plus Jakarta Sans, Cairo). Full origin and
  governance notes live in `docs/10_DATA_SOURCES_AND_GOVERNANCE.md`.

---

## Evidence honesty

This project distinguishes four states everywhere in its documentation:

| State | Meaning |
| --- | --- |
| **Implemented** | Written and present in the codebase |
| **Tested** | Manually verified (build passes, browser walkthrough, console clean, RTL checked) |
| **Planned** | Designed but deliberately not built yet (e.g. backend) |
| **Proposed** | A suggestion for future work — no commitment, no claim |

No claim is made of clinical validation, security audits, user research,
partnerships, or measured impact — **none of those have been performed.**

---

## Documentation

All challenge documentation is in [`docs/`](docs/):

| File | Topic |
| --- | --- |
| `01_PROJECT_OVERVIEW.md` | What GeneClarity is and who it serves |
| `02_DESIGN_SYSTEM.md` | Colours, type, spacing, components |
| `03_SCREEN_INVENTORY.md` | All 20 screens and their purpose |
| `04_USER_JOURNEYS.md` | Key flows end to end |
| `05_TECHNICAL_ARCHITECTURE.md` | Stack, routing, state, build |
| `06_ACCESSIBILITY_AND_I18N.md` | A11y and Arabic RTL approach |
| `07_MEDICAL_SAFETY_AND_CONTENT_RULES.md` | The safety rules above, in detail |
| `08_PRIVACY_AND_CONSENT_MODEL.md` | Accounts, sharing, revocation |
| `09_CHALLENGE_ALIGNMENT_AND_IMPACT.md` | Fit with the challenge goals |
| `10_DATA_SOURCES_AND_GOVERNANCE.md` | Every data source, declared |
| `11_ASSUMPTIONS_LIMITATIONS_AND_RISKS.md` | Honest limitations |
| `12_DEMONSTRATION_AND_SUBMISSION_PLAN.md` | How to demo and submit |

---

## Status

- **Implemented:** full 20-screen prototype, EN/AR, build passing.
- **Tested:** production build, browser walkthrough of all screens,
  zero console errors, RTL verification.
- **Planned (not built):** real authentication, server database, AI features,
  real counselling directory integration.
- **Not claimed:** clinical validation, security testing, user-impact metrics,
  partnerships.

---

*Prepared for the Future Health Digital Innovation Challenge. No git remote has
been configured and nothing has been published — repository publication awaits
team approval.*
