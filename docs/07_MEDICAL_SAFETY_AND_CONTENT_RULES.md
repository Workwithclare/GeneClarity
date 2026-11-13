# 07 — Medical Safety & Content Rules

These are **hard constraints** on this project. They apply to every screen,
string, dataset and screenshot. Violating any of them is a bug regardless of how
it looks.

---

## 1. Never diagnose

- The app **never** states that a user has, or will develop, any condition.
- A *carrier* result is always framed as "you carry one changed copy" — never
  as "you have the disease" or "you are affected".
- Gene names and zygosity appear only alongside plain-language explanation.

## 2. Never prescribe or make medical decisions

- No medication, procedure, test, or lifestyle instruction is ever given.
- Where an action is sensible (e.g. "mention this to a doctor before intense
  exertion" for sickle cell trait), it is written as general educational
  information, attributed to "a doctor", never as a GeneClarity recommendation.

## 3. Never tell users what to do with their lives

- **No** statements about whether to marry, whom to marry, whether or when to
  have children, or any reproductive directive — in either language.
- CoupleConnect presents *information and consent mechanics*, never
  compatibility verdicts or "you should/should not" outcomes.

## 4. Never present uncertain risk as certainty

- Probabilities appear as ranges or fractions, never as guarantees.
- Uncertain results carry an explicit statement that the result **cannot** be
  used to state the user's risk.
- Educational text about recessive inheritance always includes that chance
  applies per pregnancy and is not a prediction for any individual pregnancy.

## 5. Always label synthetic data

- A persistent amber **"Demonstration data"** banner appears on every screen
  that shows results, personal data, or partner status.
- The login screen states that no real account is created; the sample account
  is fictional.
- `src/data/demoData.js` opens with an origin declaration: all content is an
  original synthetic example created for this project.

## 6. Explain, never replace

- Standing **SafetyNote** on relevant screens: GeneClarity explains
  information; it does not diagnose, and it does not replace a doctor or
  genetic counsellor.
- Counselling screens describe what counsellors do and how to find qualified
  ones — the app positions itself as a bridge, not a substitute.

## 7. Educational content boundaries

- Learn content is **general education**, framed with "Educational content
  only. It is general information, not advice about your own health."
- It is original text written for this project — not copied from clinical
  guidelines, and not represented as guideline-concordant clinical content.
- No content describes any real patient, real case, or real screening programme
  outcome.

## 8. No fabricated authority

- Counsellor listings are explicitly labelled **illustrative** — no real
  practitioners, no real clinics, no invented accreditations attributed to real
  bodies.
- No claims of clinical validation, regulatory clearance, medical-device status,
  partnerships, or endorsements.

## 9. Uploaded documents are stored, never interpreted

- The app **does not read, classify, diagnose or medically interpret** the
  content of a document a user uploads — `JourneyDocuments.jsx` handles bytes
  and metadata only (name, type, size, date). No conclusion, risk statement,
  or reproductive recommendation is ever derived from an upload.
- "Understand My Results" explains **general terminology only** and states
  this boundary on-screen, together with the future-feature guardrail.
- If document interpretation is ever added, it must be a **separate feature**
  requiring the user's **explicit consent**, **clinical validation**, and
  **professional oversight** — it is not part of this prototype and no code
  path for it exists today.
- The built-in sample at `/journey/sample` is original synthetic content,
  clearly labelled, and is never presented as the user's own result.

---

## Where the rules are enforced in code

| Rule | Enforced by |
| --- | --- |
| Labelling synthetic data | `SampleBanner` component (`UI.jsx`) rendered on report/result/privacy/couple screens |
| Not-a-diagnosis notice | `SafetyNote` component with `notice.notDiagnostic` copy |
| No life-advice language | Copy review of `translations.js` (both EN and AR) |
| Uncertainty honesty | `ResultDetail.jsx` — dedicated "what this does not mean" section |
| Consent before sharing | `AppStore` reducer — no share state exists until `GRANT_PARTNER` |
| Educational framing | `ConditionDetail.jsx` — educational banner at top of every topic |
| Uploads never interpreted | `documents.js` / `JourneyDocuments.jsx` — storage functions only; no content-reading code path; boundary stated in `journeyContent.js` |

## Review status

Content and UI copy were reviewed against these rules during development
(manual review). **No external clinical review, medical advisory sign-off, or
regulatory assessment has taken place.** Any real-world deployment would require
qualified clinical review before launch — recorded in
`11_ASSUMPTIONS_LIMITATIONS_AND_RISKS.md`.
