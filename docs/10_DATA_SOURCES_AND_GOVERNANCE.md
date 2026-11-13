# 10 — Data Sources & Governance

**Principle used:** if a piece of data did not come from this team's own work,
its origin must be stated. If we have no right to use it, we do not use it.

---

## 1. Datasets

**No external datasets were used. None were supplied by the challenge
organisers, and none were required.**

Every record in the application — profiles, results, topics, notifications,
activity entries — is **synthetic, original content created by this project**
for demonstration, defined in a single file:

| Data | File | Origin |
| --- | --- | --- |
| Demo user profile ("Chioma", fictional) | `src/data/demoData.js` | Written for this project; entirely fictional |
| 3 screening findings (HBB carrier, Tay–Sachs negative, CFTR uncertain) | `src/data/demoData.js` | Original synthetic examples; not modelled on any real patient or real report |
| 8 educational topics | `src/data/demoData.js` | Original general-education text written for this project |
| 3 counsellor listings | `src/data/demoData.js` | Fictional placeholders, labelled illustrative in the UI |
| 3 notifications, 3 activity entries | `src/data/demoData.js` | Fictional |
| Understand/Guidance content (concepts, result labels, question bank) | `src/data/journeyContent.js` | Original general-education text written for this project; explains terminology only, never a specific person's results |
| Synthetic screening sample document | `src/data/journeyContent.js` → shown at `/journey/sample` | **Original fictional content** ("Sample Person", "Demo Laboratory", reference GC-DEMO-0001); rendered in-app, labelled "Demo sample", not modelled on any real report |

The file itself carries an origin declaration comment at the top so future
contributors keep the chain of custody.

## 2. Real personal data

- **No real personal data is used anywhere** — no real names, emails, dates of
  birth, national IDs, or contact details.
- **No real patient records, clinical reports, or identifiable health data**
  are present in the repository, in fixtures, or in screenshots.
- The sample email (`chioma@example.com`) is a reserved-for-examples domain
  (`example.com`, IANA-documented for documentation use).
- **Uploaded documents** (`/journey/documents`) are files the user
  themselves chooses to upload; they are never supplied by the team. All
  demonstration content shown in the app (report findings, the sample
  document at `/journey/sample`) is original synthetic material created for
  this project — no real genetic report is used as demo data anywhere.

## 3. Educational content

- All educational text in `demoData.js` is **original writing for this
  prototype**, describing well-established general genetics (autosomal
  recessive inheritance, carrier concepts, what counsellors do).
- The **8 lesson topics** are: cells & chromosomes; DNA & genes; inheritance
  from parents to children; inherited conditions; sickle cell; carrier status;
  inherited disease probabilities; screening & professional counselling.
- The facts described are textbook-level and consistent with mainstream public
  health information (e.g. WHO, NIH/MedlinePlus, NHS guidance on carrier
  screening and sickle cell) — but this consistency is a **statement of
  authoring intent, not a documented verification**: the team did not perform a
  source-by-source comparison or a clinical review.
- Each lesson uses a fixed simple structure — *"What does this mean?"* plain
  explanation, optional example / important-to-know / common-misunderstanding /
  screening / questions sections, and a *"What should I remember?"* summary.
  The lesson diagrams are **original SVGs drawn for this project**.
- It is **not copied** from clinical guidelines, textbooks, patient
  organisations, or websites.
- It is **not represented** as guideline-concordant clinical content, and every
  topic page carries the banner: *"Educational content only. It is general
  information, not advice about your own health."*
- **Limitation (declared):** content has not been reviewed by a genetic
  counsellor or clinical geneticist. Origin = the team; limitation = no
  clinical review. See `11_`.

## 4. The design reference image

- The supplied GeneClarity prototype reference image (colours, typography
  feel, logo concept, screen structure) was provided to the team as the
  design brief for this challenge entry.
- It is used as the **visual identity source**: extracted tokens (emerald
  `#14655A`, mint surfaces, DNA+leaf mark concept) are recorded in
  `02_DESIGN_SYSTEM.md`.
- No third-party brand assets, stock photography, or licensed images are
  embedded — the logo and all illustrations are **original SVGs drawn for this
  project**, inspired by the reference's "genetics + growth" idea.

## 5. Third-party resources (code/font level only)

| Resource | Used for | Licence/origin | Data sent |
| --- | --- | --- | --- |
| React, React Router, Vite, Tailwind, PostCSS, Autoprefixer | Build/runtime (npm packages) | MIT (standard OSS licences) | None at runtime |
| `@supabase/supabase-js` | Optional backend client (Auth + Postgres) — **inactive until configured** | MIT | Only when `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` are set: sign-in credentials and app rows go to *the team's own* Supabase project; no third-party data broker is involved |
| Supabase Auth + PostgreSQL (hosted, free tier) | Optional account/database backend | Supabase terms; the team's own project | Account email/password and synthetic app rows, protected by Row Level Security (`supabase/migrations/0001_init.sql`) |
| Google Fonts: Plus Jakarta Sans, Cairo | Typefaces | SIL Open Font License | Browser fetches the font CSS/files from `fonts.googleapis.com`/`fonts.gstatic.com` (standard web-font behaviour; no app data is sent) |

- **No analytics, tracking, advertising, crash reporting, or AI APIs** are
  called anywhere in the codebase.
- **No credentials or API keys exist** in the repository (checked; `.env*` is
  git-ignored as a standing rule — `.env.local` holds the Supabase values
  locally and is never committed).
- **Challenge-constraint note:** the original constraint set listed Supabase
  as out of scope for the prototype phase. The team made a documented,
  deliberate decision to add it as an *optional* backend; this document and
  `05_` were updated to match that reality. Removing `.env.local` returns the
  app to frontend-only mode. Firebase, Firestore and Google AI Studio remain
  unused and forbidden.

## 6. Data created at runtime (by the user of the demo)

- Account state, consent grants/revocations, settings and the activity log are
  written to **`localStorage` in the user's own browser** (always, in both
  modes — this is also the demo mode's only store).
- In backend mode (configured `.env.local`), sign-up/sign-in credentials go to
  the team's own Supabase Auth service, and the sync layer in `src/lib/db.js`
  mirrors app rows to the team's own Postgres tables (best-effort, owner-only
  RLS; full sync verification is still in progress — see `11`).
- **Uploaded documents** in backend mode go to the team's own private Supabase
  Storage bucket (`screening-documents`) under the owner's folder — nothing
  else, no third-party services. In demo mode no upload happens at all; the
  screen says so explicitly (`journey.errDemo`).
- In demo mode nothing is transmitted at all — there is no server to transmit
  to.
- "Export my data" downloads a local JSON `Blob` — a real download, never
  uploaded.

## 7. Governance rules for future work

1. Any future dataset must be listed in this document **before** integration,
   with licence and right-to-use stated.
2. Real patient data must never enter the repo, even with consent, without a
   formal governance approval — the target architecture uses synthetic data
   until then.
3. If AI features are added, prompts and outputs containing user data stay
   server-side (Supabase functions), and the AI provider + data-handling terms
   must be added to this file.
4. Educational content additions require attribution of origin and a note on
   clinical-review status.

## 8. Declaration

> We declare that all data in this submission is either (a) original synthetic
> content created by the team for demonstration, or (b) openly licensed software
> dependencies listed above. No identifiable patient data, no purchased or
> scraped datasets, and no data we lack the right to use are present.

**Review status:** internal self-declaration. No external data-governance audit
has been performed.
