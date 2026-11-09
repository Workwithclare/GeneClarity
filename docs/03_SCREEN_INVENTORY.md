# 03 — Screen Inventory

All 20 screens, their routes, and their purpose. Routes are hash-based
(`#/…`) so the build works on any static host.

| # | Route | Screen | File | Purpose |
| --- | --- | --- | --- | --- |
| 1 | `/` | Splash | `Splash.jsx` | Brand mark, tagline, "Demonstration prototype" label, language-aware loading |
| 2 | `/welcome` | Welcome | `Welcome.jsx` | First impression: value proposition, Get Started / Sign in |
| 3 | `/onboarding` | Onboarding | `Onboarding.jsx` | 3 steps: what GeneClarity is → how sharing works → what it is not |
| 4 | `/consent` | Privacy & Consent | `Consent.jsx` | Explicit consent to the privacy notice before any account exists |
| 5 | `/login` | Sign In | `Login.jsx` | Email + password form (demo only), "Use sample account" shortcut |
| 6 | `/register` | Create Account | `Register.jsx` | Demo registration with validation; states clearly no real account is made |
| 7 | `/dashboard` | Dashboard | `Dashboard.jsx` | Home: greeting, journey card, quick actions, CoupleConnect status, bottom nav |
| 8 | `/report` | Genetic Report | `Report.jsx` | List of 3 synthetic findings; print via browser dialogue |
| 9 | `/report/:id` | Key Insight detail | `ResultDetail.jsx` | **Core safety screen**: plain-language explanation, "what this means / does not mean", uncertainty handling, counselling prompt |
| 10 | `/learn` | Learn | `Learn.jsx` | Filterable education library (basics / conditions / counselling) |
| 11 | `/learn/:id` | Topic detail | `ConditionDetail.jsx` | Educational article with "not advice about your own health" banner and related links |
| 12 | `/couple` | CoupleConnect | `CoupleConnect.jsx` | How sharing works, consent status, invite flow entry |
| 13 | `/couple/consent` | Partner Sharing Consent | `PartnerConsent.jsx` | Granular toggles (summary / full report / notifications), grant & revoke |
| 14 | `/support` | Genetic Counselling | `Support.jsx` | What counsellors do, illustrative listings, how to find qualified help |
| 15 | `/profile` | Profile | `Profile.jsx` | Demo account details, entry points to settings/notifications/activity |
| 16 | `/settings` | Settings | `Settings.jsx` | Language toggle, notification switches, privacy/data rows |
| 17 | `/settings/privacy` | Privacy & Security | `PrivacySettings.jsx` | Visibility/research/auto-lock toggles, partner access card, **real local JSON export**, erase notice, privacy log |
| 18 | `/notifications` | Notifications | `Notifications.jsx` | Unread/All filters, mark read (single & all), local only |
| 19 | `/activity` | Activity History | `Activity.jsx` | Audit timeline: sign-in, consent granted/revoked, report viewed, settings changes |
| 20 | `*` | Not Found | `NotFound.jsx` | 404 with routes back to dashboard/home |

## Cross-cutting elements

- **AppBar** — back button (flips side in RTL), title, optional right slot.
- **BottomNav** — Home / Report / Tips / Profile, hidden on full-flow screens.
- **SampleBanner** — amber "Demonstration data" notice on every screen showing
  results or personal data.
- **SafetyNote** — the standing statement that the app is not a diagnostic
  service and does not replace professionals.
- **LanguageToggle** — EN | العربية, available on entry screens and in Settings.

## Consent-related screens (the privacy-critical path)

`Consent` (account-level) → `PartnerConsent` (person-level, granular) — see
`08_PRIVACY_AND_CONSENT_MODEL.md`.
