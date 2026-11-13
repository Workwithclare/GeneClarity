# 03 — Screen Inventory

All 27 screens, their routes, and their purpose. Routes are hash-based
(`#/…`) so the build works on any static host.

| # | Route | Screen | File | Purpose |
| --- | --- | --- | --- | --- |
| 1 | `/` | Splash | `Splash.jsx` | Brand mark, organic green wave, language-aware loading |
| 2 | `/welcome` | Welcome | `Welcome.jsx` | First impression: value proposition, Get Started / Sign in |
| 3 | `/onboarding` | Onboarding | `Onboarding.jsx` | 3 steps: what GeneClarity is → how sharing works → what it is not |
| 4 | `/consent` | Privacy & Consent | `Consent.jsx` | Explicit consent to the privacy notice before any account exists |
| 5 | `/login` | Sign In | `Login.jsx` | Email + password form (demo only), Google/Apple buttons shown as design-only, "Use sample account" shortcut |
| 6 | `/register` | Create Account | `Register.jsx` | Demo registration with validation; states clearly no real account is made |
| 7 | `/done` | You're all set | `Done.jsx` | Completion moment after registration: success mark, continue to dashboard |
| 8 | `/dashboard` | Dashboard | `Dashboard.jsx` | Home: greeting, journey card, quick-access tiles, CoupleConnect status, bottom nav |
| 9 | `/report` | Genetic Report | `Report.jsx` | List of 3 synthetic findings; print via browser dialogue |
| 10 | `/report/:id` | Key Insight detail | `ResultDetail.jsx` | **Core safety screen**: plain-language explanation, "what this means / does not mean", uncertainty handling, learn-more link, counselling prompt |
| 11 | `/learn` | Learn | `Learn.jsx` | Filterable education library (basics / conditions / counselling) |
| 12 | `/learn/:id` | Lesson detail | `ConditionDetail.jsx` | Structured lesson: "What does this mean?" plain explanation, optional diagram and info sections, "What should I remember?" summary, "not advice about your own health" banner and related links |
| 13 | `/couple` | CoupleConnect | `CoupleConnect.jsx` | How sharing works, consent status, invite flow entry |
| 14 | `/couple/consent` | Partner Sharing Consent | `PartnerConsent.jsx` | Granular toggles (summary / full report / notifications), grant & revoke |
| 15 | `/support` | Help & Support | `Support.jsx` | Contact rows (FAQ entry, contact, live chat) with illustration, then genetic counselling access: why it helps, illustrative directory, escalation card |
| 16 | `/faqs` | Frequently Asked Questions | `Faq.jsx` | Searchable accordion of general-education answers, counsellor help card, safety note |
| 17 | `/profile` | Profile | `Profile.jsx` | Portrait, demo account details, menu list to reports/sharing/privacy/notifications/activity, log out |
| 18 | `/settings` | Settings | `Settings.jsx` | Flat list: language row, master notification switch, privacy/data-sharing/about/help rows |
| 19 | `/settings/privacy` | Privacy & Security | `PrivacySettings.jsx` | Visibility/research/auto-lock toggles, partner access card, **real local JSON export**, erase notice, privacy log |
| 20 | `/notifications` | Notifications | `Notifications.jsx` | Unread/All filters, mark read (single & all), local only |
| 21 | `/activity` | Activity History | `Activity.jsx` | Audit timeline: sign-in, consent granted/revoked, report viewed, settings changes |
| 22 | `/journey` | My Screening Journey | `Journey.jsx` | Feature hub: results / understand / guidance cards, "private by default" statement, sharing shown as a **planned** feature only |
| 23 | `/journey/documents` | My Screening Results | `JourneyDocuments.jsx` | Private document store: upload (PDF/JPG/PNG ≤ 10 MB), list with name/date/type, open & download via short-lived signed URLs, delete with confirmation, empty state. Auth required; documents never leave the owner's private bucket |
| 24 | `/journey/understand` | Understand My Results | `JourneyUnderstand.jsx` | Plain-language terminology: screening ≠ diagnosis, carrier ≠ disease, common result labels, "what this app will not do" + future-AI guardrail, links into the Education Centre. Never reads or interprets an uploaded document |
| 25 | `/journey/guidance` | Professional Guidance | `JourneyGuidance.jsx` | What genetic counselling is, when guidance may be useful, tickable question bank (stays on device). No invented providers, appointments or partnerships |
| 26 | `/journey/sample` | Sample document | `JourneySample.jsx` | Original **synthetic** screening report rendered in-app, labelled "Demo sample", visually separated from user uploads; makes no claim about any real person |
| 27 | `*` | Not Found | `NotFound.jsx` | 404 with routes back to dashboard/home |

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
