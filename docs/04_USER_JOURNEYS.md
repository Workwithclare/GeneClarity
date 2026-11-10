# 04 — User Journeys

Four representative end-to-end flows as implemented in the prototype.

---

## Journey 1 — First-time individual

1. **Splash** → brand, tagline, "Demonstration prototype" label.
2. **Welcome** → "Get Started".
3. **Onboarding (3 steps)** → what GeneClarity is, how privacy works, what it
   is *not* (not a diagnosis, not advice).
4. **Privacy & Consent** → the user must actively accept the privacy notice.
   There is no pre-ticked box and no way to proceed without an explicit action.
5. **Register** (demo) → or "Use sample account" on Login for a one-tap path.
6. **You're all set** → success confirmation, then continue to the app.
7. **Dashboard** → greeted by name, sees "Your Health Journey" and quick
   actions.
8. **Report** → three synthetic findings (carrier / negative / uncertain), each
   under a "Demonstration data" banner.
9. **Key Insight detail** → reads what the result means in plain language, what
   it does *not* mean, and is prompted towards counselling.
10. **Learn** → explores "What does carrier mean?" and related topics.

**Safety beats along the way:** consent gate at step 4; sample banners on 8–9;
uncertain result never states a risk number as fact; no decision-making
language anywhere.

---

## Journey 2 — Couple sharing (consent-first)

1. **Dashboard → CoupleConnect** → sees "Nothing shared" status.
2. Reads "How sharing works": separate private accounts; nothing shared until
   both sides consent; either side can withdraw.
3. **Partner Sharing Consent** → three *separate* toggles, all default **off**:
   - Shared carrier summary (plain-language findings only)
   - Full report access
   - Activity notifications
4. **Grant access** → recorded in the activity log with a timestamp.
5. Either partner can **revoke** at any time from the same screen or from
   Privacy & Security → Partner access.
6. Revocation is recorded too, and the UI states honestly: withdrawal stops
   *future* access; it does not erase history already lawfully viewed.

**Privacy beats:** no default sharing; granularity (summary ≠ full report);
revocation is as easy as granting; every change appears in the user's own
activity log.

---

## Journey 3 — Living with an uncertain result

1. Opens **Key Insight** for the uncertain finding.
2. Sees an explicit statement that the result **cannot** be used to state risk.
3. Reads "what this means / what this does not mean" — uncertainty is
   presented as uncertainty, never rounded into a reassuring or alarming number.
4. A **SafetyNote** explains that a genetic counsellor can explain what the
   result could mean for the individual situation.
5. **Support** screen explains what a counsellor does before offering contact
   paths (illustrative listings, clearly labelled).

**Safety beats:** no false precision; no fear; no recommendation to act — only
a pointer to qualified humans.

---

## Journey 4 — Arabic-speaking user

1. On any entry screen or in **Settings → Language**, taps **العربية**.
2. `document.documentElement` switches to `lang="ar" dir="rtl"`; the typeface
   switches to Cairo; the choice persists in `localStorage`.
3. All copy comes from the Arabic catalogue — no untranslated English remains
   on-screen (verified during QA, including banners and taglines).
4. Layout flips through logical properties: back chevron moves to the right
   edge, list bullets and timeline spine mirror, form fields align right.
5. Tapping **EN** restores English and `dir="ltr"`.

---

## What no journey contains (by design)

- No diagnosis, prognosis, or probability stated as certainty.
- No instruction to marry / not marry, have / not have children, or any
  reproductive directive.
- No automatic partner access, no silent sharing, no "your partner already
  sees this".
- No real personal data, no transmission to any server, no third-party analytics.
