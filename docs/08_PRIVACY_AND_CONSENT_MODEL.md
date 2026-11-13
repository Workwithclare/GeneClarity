# 08 — Privacy & Consent Model

The privacy model is the product's backbone: GeneClarity deals with genetic
information, so sharing must be **default-off, explicit, granular, and
revocable**.

---

## Accounts are separate

- Each person holds their **own private account**. There is no "joint login",
  no shared session, no merged profile.
- In **demo mode** state lives only in the browser's `localStorage` under
  `geneclarity.state.v1`, per browser profile — there is no server at all.
  One consequence stated honestly in the UI: clearing browser data resets the
  demo account.
- In **backend mode** the account lives in Supabase Authentication; server
  data is separated per user by Row Level Security (`supabase/migrations/`),
  so one signed-in user's queries can only return their own rows.

## Consent gate #1 — account level (`/consent`)

Before registration, the user must **actively accept** the privacy & consent
notice:

- No pre-ticked checkboxes.
- No "continue" without an affirmative action.
- The notice states what is stored, that everything is synthetic demo data, and
- that nothing is transmitted anywhere.

The acceptance is written to the activity log with a timestamp.

## Consent gate #2 — partner level (`/couple/consent`)

Sharing with a partner is **separate, granular, and revocable**:

| Scope toggle | What it would share | Default |
| --- | --- | --- |
| Shared carrier summary | Plain-language carrier findings only | **Off** |
| Full report access | Complete report contents | **Off** |
| Activity notifications | "Added a new result" style events | **Off** |

Rules as implemented in `AppStore.jsx`:

1. **Nothing is shared until both sides consent.** The reducer holds no shared
   state before `GRANT_PARTNER`.
2. **Granularity** — granting the summary does not grant the full report.
3. **Revocation** — `REVOKE_PARTNER` immediately clears granted scopes and sets
   status back; revocation is available from the consent screen *and* from
   Privacy & Security → Partner access.
4. **Honesty about history** — the UI states that withdrawal stops *future*
   access and does not erase information already lawfully viewed. This avoids
   the false promise that revocation retroactively unsees anything.
5. **Audit** — every grant and revoke is appended to the user's own activity
   log (`act_…` entries) with a timestamp, visible on the Activity screen.

## What is never done

- No partner can open, view, or infer the other's results without an active,
  scoped grant — there is no code path that renders partner results
  automatically.
- No sensitive result content is written into the activity log (the log records
  *events*: "consent granted", "report viewed" — not findings).
- In **demo mode** no data leaves the browser: no analytics, no crash
  reporting. In **backend mode** data goes only to the project's own Supabase
  (auth session, synced rows, uploaded documents) — every table and the
  document bucket are protected by owner-only RLS, and document bytes are
  reachable only through short-lived signed URLs, never public URLs.
- The research-donation toggle (`shareResearch`) **defaults to OFF**, is inert,
  and its description says plainly that no data leaves the prototype in any
  case.

## Screening documents are private by default (`/journey/documents`)

- Files go to a **private** Supabase Storage bucket
  (`screening-documents`, `public = false`); there is no code path that
  produces a public URL, and no service-role key exists in the repository.
- Every object lives under the owner's folder (`<auth.uid()>/…`) and the
  storage policies compare that folder to the signed-in user, so a second
  account cannot select, read, list, or delete it — **verified with two
  accounts** (see "Verification status").
- Documents are **never shared automatically** with a partner, relative, or
  any other account. There is no partner-read policy on
  `screening_documents` at all.
- **Sharing is not implemented.** The UI shows it as a planned feature only,
  stating it would require explicit, revocable consent and its own security
  test before being built.
- Uploads are never interpreted: the app stores and lists documents; it does
  not read their contents (see `07_MEDICAL_SAFETY_AND_CONTENT_RULES.md`).
- Deletion removes the stored file first, then its metadata row — both steps
  verified.

## User data controls (implemented)

- **Export** — Privacy & Security → "Export my data" produces a real local JSON
  download (`geneclarity-my-data.json`) of profile, settings, consent state,
  results and activity. It uses a `Blob` + object URL; nothing is uploaded.
- **Erase** — the erase action opens an honest confirmation: in this prototype
  there is no server copy to erase, only this browser's local state.

## Backend mapping (schema implemented; some UI paths pending)

The Supabase project exists (credentials gitignored in `.env.local`);
`supabase/migrations/0001–0005` implement:

- `consent_grants(user_id, partner_id, scope, granted_at, revoked_at)` —
  revocation is a timestamp, not a delete, preserving an honest audit trail.
- Results readable only by their owner (`RLS`), partner access granted through
  `has_consent()` requiring an unrevoked row.
- Document storage with owner-only policies (`0005`) — **live and tested**
  with two accounts on 13 Nov 2026.

Still pending: the partner-consent UI does not yet call these tables
end-to-end, and no AI processing exists in any form.

## Verification status

- Manually tested in-browser: grant → status becomes active → revoke → status
  returns to none; activity log records both.
- **Document isolation tested with two separate accounts (13 Nov 2026):**
  test2 saw an empty list and zero rows while test1 had 3 documents; five
  cross-account attack attempts were blocked (signed URL for the other user's
  file, direct object GET, upload into the other user's folder, REST row
  delete, folder listing); the reverse direction (test1 → test2's file) was
  blocked as well. This is a functional two-account test, **not** a
  penetration test.
- **Not tested:** penetration testing, formal privacy audit, DPIA — none have
  been performed and none are claimed. RLS policies on the *other* tables
  remain written-but-not-adversarially-tested (see `11`).
