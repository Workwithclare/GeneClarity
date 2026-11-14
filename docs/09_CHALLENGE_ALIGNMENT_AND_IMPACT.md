# 09 — Challenge Alignment & Impact

*Future Health Digital Innovation Challenge — alignment statement.*

---

## What the challenge asks for (as this team understands it)

- A digital innovation addressing a real future-health need.
- Responsible use of data, with clear governance.
- An honest, demonstrable prototype.
- Evidence discipline: claim only what has actually been done.

> Note: organisers supplied no datasets and no partner clinics. This document
> therefore aligns against the challenge's general themes; where a specific
> criterion wording differs, the submission checklist in `12_` should be
> reconciled against the official brief before filing.

## The need we address

**Inherited disease risk is poorly understood at the point of screening.**

- Recessive conditions are usually invisible until two carriers have a child
  together — the risk is *relational*, which makes ordinary single-person
  health apps a poor fit.
- Screening results delivered as gene names and percentages leave people
  anxious and unsure what to do next.
- Couples often lack a neutral, consent-respecting way to combine what they
  each know.
- The correct next step — genetic counselling — is poorly understood and rarely
  explained by the tools that generate the need for it.

## How GeneClarity responds

| Challenge theme | Our response | Status |
| --- | --- | --- |
| Real health need | Plain-language carrier-result explanations, uncertainty handling, counselling bridge | **Implemented** |
| Inclusive design | Full English **and Arabic with genuine RTL**, Cairo typeface, logical CSS layout | **Implemented & tested** |
| Responsible data use | Default-off sharing, granular revocable consent, local-only state, no third-party data flows | **Implemented** |
| Safety by design | Hard rules: no diagnosis, no prescriptions, no life advice, no false certainty (`docs/07`) | **Implemented** |
| Accessibility | Semantic markup, focus states, reduced-motion support, ≥40 px targets | **Partially implemented; no formal audit performed** |
| Honest innovation | Every claim labelled implemented / tested / planned / proposed | **Process applied throughout** |
| Sustainability / scale | Static build (~93 kB gzipped JS), free-host deployable, backend design documented for later | **Prototype implemented; backend planned** |

## Measured impact — what we can and cannot say

**We can say (verified):**

- The prototype builds successfully (`npm.cmd run build`, exit 0).
- All 22 screens render with zero console errors in a real browser (manual QA
  sweep, English and Arabic; a six-language UI sweep followed on 14 Nov 2026
  — FR/ES/SW/HA checked on six key screens, zero raw keys, zero errors).
- RTL behaviour was verified programmatically (`dir`, font, element positions).
- The consent flow works end to end in-browser: grant → active → revoke →
  logged.

**We cannot say (and do not claim):**

- ❌ Any clinical benefit, health outcome, or change in screening uptake.
- ❌ Any usability metric, NPS, completion rate, or user-satisfaction number —
  **no user testing has been conducted**.
- ❌ Security assurance — **no penetration test or security review performed**.
- ❌ Clinical validity of content — **no clinician has reviewed this prototype**.
- ❌ Any partnership, endorsement, or integration with real health providers.
- ❌ Regulatory status (it is not a medical device and we make no such claim).

## Innovation claims (kept modest)

1. **Consent as a visible product feature** — sharing state, granularity and
   revocation are first-class UI, not buried settings.
2. **Uncertainty as a first-class result type** — the uncertain finding is
   designed for, with copy that refuses to manufacture false precision.
3. **Arabic-first RTL quality** for a domain that is overwhelmingly
   English-only in this region.
4. **Evidence discipline built into the documentation** — four-state labelling
   (implemented/tested/planned/proposed) across all 12 documents.

## Risks to the challenge goals (see also `11_`)

- Without user testing, accessibility and comprehension claims remain
  engineering-side only.
- Arabic copy lacks professional translation review.
- The demo's browser-only storage means "accounts" are per-device — fine for a
  prototype, unacceptable for production (documented, not hidden).

## What success would look like (future, proposed)

If this progressed beyond prototype: clinically reviewed content, professionally
translated Arabic, usability testing with screening-eligible adults, a
consent-mapped Supabase backend, and a qualified counselling referral path —
each of which would then become a *testable* claim rather than a plan.
