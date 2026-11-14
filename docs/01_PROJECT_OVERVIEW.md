# 01 — Project Overview

## What GeneClarity is

GeneClarity is a **mobile-first web prototype** that helps individuals and
couples understand inherited disease screening information. It takes a person
from first hearing about carrier screening, through reading their own
(synthetic) results in plain language, to connecting with a partner under strict
consent rules, and finally to qualified genetic counselling.

**Tagline:** *Understanding and Reducing Inherited Disease Risk.*

## The problem it addresses

Inherited (recessive) conditions are often invisible until two carriers have a
child together. Screening information that reaches people is frequently:

- **Technical** — gene names and percentages without plain-language meaning.
- **Anxiety-producing** — "positive" framing that feels like a diagnosis when a
  carrier result is not a disease.
- **Socially awkward** — the couple conversation happens without a shared,
  neutral tool, or one partner sees the other's results by accident.
- **Hard to act on** — people finish reading and do not know what a counsellor
  does or how to reach one.

## What the prototype does about it

| Need | How GeneClarity responds |
| --- | --- |
| Understand results | Key Insights screens translate each finding into everyday language, always with "what this means / what this does not mean" |
| Live with uncertainty | Uncertain results are shown as *uncertainty*, with explicit "we cannot tell you your risk from this result" copy — never rounded into false certainty |
| Share with a partner | CoupleConnect with **granular, explicit, revocable** consent; nothing is shared by default, ever |
| Know it is safe to explore | Every result screen carries a "Demonstration data" banner; the whole app is labelled a prototype |
| Take a next step | Genetic counselling screen explains what counsellors do and how to find qualified ones |

## Who it is for

- Individuals who have been offered, or are considering, carrier screening.
- Couples where one or both partners have received screening information.
- Anyone who wants to understand inherited-disease genetics without being
  talked to like a textbook — or like a patient.

## What it is explicitly **not**

- **Not a diagnostic tool.** It never states whether a user has, or will have,
  any condition.
- **Not an advice tool.** It never tells a user whether to marry, have children,
  or make any personal decision.
- **Not a replacement** for a doctor, genetic counsellor, or clinical laboratory.
- **Not a real product yet.** No real accounts, no real data, no backend.

## Technology at a glance

Vite + React 18 + Tailwind CSS, hash-based routing, all state in browser
`localStorage`, six languages (EN, AR, FR, ES, SW, HA) with full RTL. No
backend, no cloud services, no paid APIs. See `05_TECHNICAL_ARCHITECTURE.md`.

## Design reference

The visual identity (deep emerald `#14655A`, mint surfaces, DNA-and-leaf mark,
"Genetics · Understanding · Choice") was taken from the supplied GeneClarity
prototype reference image and is codified in `02_DESIGN_SYSTEM.md`.

## Status summary

- **Implemented:** all 22 screens, EN + AR, consent/state logic, build passing.
- **Tested:** production build, full browser walkthrough, RTL checks,
  zero console errors.
- **Planned:** real auth, database, AI assistance, counselling directory.
- **Not claimed:** clinical validation, security audit, user research,
  partnerships, measured impact.
