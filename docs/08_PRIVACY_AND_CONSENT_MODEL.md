# 08 — Privacy & Consent Model

The privacy model is the product's backbone: GeneClarity deals with genetic
information, so sharing must be **default-off, explicit, granular, and
revocable**.

---

## Accounts are separate

- Each person holds their **own private account**. There is no "joint login",
  no shared session, no merged profile.
- In this prototype there is no server at all: state lives in the browser's
  `localStorage` under `geneclarity.state.v1`, per browser profile.
- One consequence stated honestly in the UI: clearing browser data resets the
  demo account.

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
- No data leaves the browser: no analytics, no crash reporting, no network
  calls with app data.
- The research-donation toggle (`shareResearch`) **defaults to OFF**, is inert
  (no server exists), and its description says plainly that no data leaves the
  prototype in any case.

## User data controls (implemented)

- **Export** — Privacy & Security → "Export my data" produces a real local JSON
  download (`geneclarity-my-data.json`) of profile, settings, consent state,
  results and activity. It uses a `Blob` + object URL; nothing is uploaded.
- **Erase** — the erase action opens an honest confirmation: in this prototype
  there is no server copy to erase, only this browser's local state.

## Planned backend mapping (not implemented)

When a real backend exists (Supabase Auth + PostgreSQL, per `05`):

- `consent_grants(user_id, partner_id, scope, granted_at, revoked_at)` —
  revocation is a timestamp, not a delete, preserving an honest audit trail.
- Results readable only by their owner (`RLS`), partner access granted through a
  view that requires an unrevoked row.
- Any AI processing happens in server-side functions; API keys never reach the
  browser.

**No backend, database, or credential exists in this repository today.**

## Verification status

- Manually tested in-browser: grant → status becomes active → revoke → status
  returns to none; activity log records both.
- **Not tested:** penetration testing, formal privacy audit, DPIA — none have
  been performed and none are claimed.
