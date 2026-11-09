# 11 — Assumptions, Limitations & Risks

Written to be read *before* a demo, not after a problem. Nothing here is
softened.

---

## Assumptions

| # | Assumption | If wrong |
| --- | --- | --- |
| A1 | The challenge accepts a front-end prototype with no backend for this phase | Backend work would be needed before submission |
| A2 | The supplied reference image is the intended visual identity for the entry | Design may need re-alignment |
| A3 | English + Arabic covers the intended audience | Further languages/localisation required |
| A4 | Mobile-first layout suits how judges will view it (browser + phone) | Desktop layout would need attention |
| A5 | Static hosting (free tier) is acceptable for the demo | A hosting budget/hosting approval would be needed |
| A6 | Synthetic demo data is acceptable in place of real screening data (organisers supplied none, and using real patient data would be inappropriate) | None — this is also a governance requirement |

## Limitations (implemented ≠ complete)

### Medical / content
- **No clinical review.** No genetic counsellor or physician has reviewed the
  copy. Content is general education written by the team.
- **No professional translation.** Arabic was written for this prototype but
  not reviewed by a certified translator or native-speaker reviewer.
- **Educational content is illustrative**, not a substitute for guidelines.
- **Counsellor listings are fictional placeholders** — there is no real
  referral directory, and contacting them is impossible by design.

### Product
- **No real authentication.** Login validates non-empty fields only; the
  "account" is a local object. Anyone with the device has the demo account.
- **Per-browser storage.** Clearing browser data resets everything; there is no
  cross-device sync (because there is no server).
- **No real notifications.** The inbox shows synthetic in-app items; no email,
  SMS, or push is sent.
- **Print/export = browser features.** Report printing uses the browser print
  dialogue; export is a local JSON file. No PDF generation library is included.
- **No tests.** There is no unit/integration/e2e test suite — verification was
  a manual browser walkthrough plus a passing production build.

### Evidence
- **No user research.** No usability testing, interviews, or surveys have been
  done. No usability claim is made anywhere.
- **No accessibility audit.** Semantic markup and keyboard focus are in place,
  but no WCAG audit or screen-reader testing has been performed; no compliance
  claim is made.
- **No security testing.** No penetration test, dependency audit, or threat
  modelling exercise has been conducted. (Mitigating fact: the prototype sends
  no data anywhere — but that is architecture, not a test result.)
- **No clinical validation.** Nothing has been validated against real screening
  outcomes, and the prototype is not a medical device.

## Risks

| # | Risk | Likelihood | Impact | Mitigation in this submission |
| --- | --- | --- | --- | --- |
| R1 | A reader mistakes the demo for a real medical product | Medium | High | "Demonstration prototype" on splash; sample banners on all result screens; safety notes throughout |
| R2 | Synthetic data is mistaken for real evidence of impact | Medium | High | Four-state labelling (implemented/tested/planned/proposed) in every doc; explicit "no impact measured" statements |
| R3 | Arabic copy errors damage trust with Arabic-speaking judges/users | Medium | Medium | Honest limitation declared (A3 above); RTL mechanics themselves verified |
| R4 | Consent flow demonstrated incorrectly during the live demo | Low | High | Step-by-step script in `12_DEMONSTRATION_AND_SUBMISSION_PLAN.md` |
| R5 | Someone connects the repo to OneDrive again → `npm` breaks | Medium | Medium | Repo lives at `C:\Users\USER\GeneClarity`; documented in README and `05_` |
| R6 | Scope creep into backend before the deadline | Medium | High | Backend explicitly out of scope for this phase; design documented only |
| R7 | A real dataset is introduced later without governance review | Low | High | Rule in `10_`: list datasets with licence *before* integration |
| R8 | Over-claiming in pitch materials contradicts the docs | Low | High | Submission materials must be checked against `09_`'s "cannot say" list |

## Deliberate non-goals (this phase)

- Real backend, real auth, real data (planned for a later phase — Supabase
  Auth + PostgreSQL + server-side AI functions).
- Integration with laboratories, clinics, or national screening programmes.
- Any AI feature — none is implemented, and none is claimed.
- Native mobile apps (the prototype is a responsive web app).

## If this continued (proposed, no commitment)

1. Clinical review of all content by a qualified genetic counsellor.
2. Professional Arabic translation review.
3. Usability testing with screening-eligible adults (then: real metrics).
4. WCAG 2.2 AA audit with assistive-technology testing.
5. Backend build with the consent schema from `08_`, plus a security review.
