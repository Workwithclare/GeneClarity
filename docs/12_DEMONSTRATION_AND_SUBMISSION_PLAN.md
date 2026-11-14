# 12 — Demonstration & Submission Plan

---

## A. Running the demo

### On this machine

```powershell
# PowerShell (note: npm.cmd — PowerShell blocks npm.ps1)
cd C:\Users\USER\GeneClarity
npm.cmd install        # only needed once
npm.cmd run dev        # → http://localhost:5173
```

Production check before any demo:

```powershell
npm.cmd run build      # → dist/
npm.cmd run preview    # serves the built app
```

**Build status at time of writing:** passing (65 modules, exit 0, ~30 kB CSS /
~308 kB JS).

### Requirements

- Node.js 18+ (built against Node 26 / npm 11).
- No API keys, no environment variables, no accounts — the app has no backend.

---

## B. Live demo script (~5 minutes)

Each beat maps to a challenge theme. **Bold** = say it out loud.

| Time | Screen(s) | What to show | Say |
| --- | --- | --- | --- |
| 0:00 | Splash → Welcome | Brand, tagline, language toggle | **"GeneClarity: understanding and reducing inherited disease risk. It ships in six languages — English, Arabic, French, Spanish, Swahili, Hausa — with real RTL."** |
| 0:20 | Onboarding → Consent | Consent gate before any account | **"You cannot get past this screen without actively accepting — no pre-ticked boxes."** |
| 0:40 | Login → "Use sample account" | One-tap fictional account | **"No real account is created; this is synthetic demo data."** |
| 1:00 | Dashboard | Journey card, quick actions | Point out the bottom nav and clean mobile layout |
| 1:15 | Report → Key Insight (carrier) | Plain-language explanation, sample banner | **"A carrier result explained as 'one changed copy', with an explicit section on what it does *not* mean."** |
| 1:50 | Key Insight (uncertain) | Uncertainty handling | **"This one refuses to give a number — it says the result cannot tell you your risk, and points to a counsellor. No false precision."** |
| 2:20 | CoupleConnect → Partner consent | Three toggles, all OFF; grant; revoke | **"Default-off, granular, revocable. Grant the summary only — not the full report. Then revoke, and see it logged."** |
| 3:10 | Activity | Timeline of consent events | **"Every consent change is auditable by the user — but the log records events, never result contents."** |
| 3:40 | Settings → العربية | Full RTL switch | **"Whole interface mirrors; typeface switches to Cairo; verified layout, not just translated strings."** |
| 4:20 | Privacy & Security | Export my data (real local JSON download) | **"A real download from a real browser — and nothing was ever uploaded, because there is no server."** |
| 4:40 | Learn | Educational content banner | **"General education, labelled as such — not advice about your own health."** |

### Contingency beats (if time permits)

- **404 page** — type a bad hash, show the recovery options.
- **Reduced motion** — OS setting disables animations.
- **Sign out → register** — show validation states on the demo form.

### Demo do-nots

- Do not claim clinical validation, user testing, security testing, or
  partnerships — none exist (see `09_` "cannot say" list).
- Do not present any number in the UI as a real risk figure.
- Do not create real personal data during the demo (use the sample account).

---

## C. Submission checklist

### Repository hygiene
- [x] Clean structure: `src/`, `docs/`, config at root
- [x] `README.md` with setup, architecture, safety rules, data declaration
- [x] `.gitignore` covers `node_modules/`, `dist/`, `.env*`, logs, editor files
- [x] No credentials, keys, or `.env` files present
- [x] No real personal data anywhere (see `10_`)
- [x] Production build passing
- [ ] **git init + initial commit** — *awaiting team approval; nothing pushed*

### Documentation
- [x] `docs/01` – `docs/08` — project, design, screens, journeys, architecture,
  a11y/i18n, medical safety, privacy
- [x] `docs/09` – `docs/12` — the four required challenge documents
- [x] Four-state evidence labelling used throughout
- [x] All data sources declared (`10_`)

### Evidence discipline
- [x] Implemented vs tested vs planned vs proposed distinguished
- [x] "Cannot say" list published (`09_`)
- [x] Limitations and risks published (`11_`)
- [x] No claim of unperformed validation, testing, or partnerships

### Before the deadline — team decisions needed
- [ ] Reconcile `09_` against the official challenge brief wording
- [ ] Decide hosting for the demo (free static host; needs approval — **do not
      publish without it**)
- [ ] Decide whether to record a fallback video of the walkthrough
- [ ] Final read-through of pitch slides against `09_`'s claims list

---

## D. Publishing plan (blocked pending approval)

1. `git init` → initial commit on a new branch.
2. Push to a **private** GitHub repository first; review the public view for
   leaked data.
3. Only after explicit approval: make public / connect a static host.
4. Never push `dist/`, `node_modules/`, or anything matching `.env*`.

> **Status: nothing has been committed or pushed. No remote exists.**

---

## E. Post-submission (proposed only)

- Clinical content review, Arabic translation review, usability testing,
  accessibility audit — in that order (see `11_`).
- Backend phase: Supabase Auth + PostgreSQL + server-side AI functions, using
  the consent schema in `08_`.
