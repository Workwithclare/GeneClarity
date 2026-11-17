/**
 * Synthetic demonstration data for GeneClarity.
 *
 * ─────────────────────────────────────────────────────────────────
 * EVERY record in this file is an original example written for this
 * prototype. It is not derived from any patient, clinic, registry or
 * published dataset. Names are invented, dates are illustrative, and
 * the clinical narratives are simplified for education.
 *
 * See docs/10_DATA_SOURCES_AND_GOVERNANCE.md for the full declaration.
 * ─────────────────────────────────────────────────────────────────
 */

/** The signed-in demonstration account. */
export const demoUser = {
  id: 'usr_demo_001',
  fullName: 'Chioma Clare',
  email: 'chioma@example.com',
  // Not a real credential. This prototype has no server and no password check.
  password: 'demo1234',
  joinedAt: '2026-03-14',
  locale: 'en',
  avatarInitials: 'CC',
}

/**
 * Screening results for the demo account.
 * `status` drives the plain-language explanation on the results screen.
 *
 * Possible status values:
 *   carrier      – a changed copy of the gene was found
 *   negative     – no changed copy detected in this screening
 *   uncertain    – a change was found but its meaning is not understood
 *
 * The four narrative fields (summary / plain / forYou / forCouple) are
 * NOT stored here: they live in `i18n/content.js` as
 * `content.result.{conditionId}.*` and are read with `tc()` in the
 * language of the moment. A new conditionId therefore needs content
 * keys added there for all six languages (`npm run i18n:check`).
 */
export const demoResults = [
  {
    id: 'res_hbs',
    conditionId: 'sickle-cell',
    gene: 'HBB',
    trait: 'Sickle cell trait (HbAS)',
    status: 'carrier',
    nextSteps: ['read', 'counsellor', 'no-panic'],
    updatedAt: '2026-09-02',
    sample: true,
  },
  {
    id: 'res_tay',
    conditionId: 'tay-sachs',
    gene: 'HEXA',
    trait: 'Tay-Sachs carrier screen',
    status: 'negative',
    nextSteps: ['read'],
    updatedAt: '2026-09-02',
    sample: true,
  },
  {
    id: 'res_cf',
    conditionId: 'cystic-fibrosis',
    gene: 'CFTR',
    trait: 'Cystic fibrosis carrier screen',
    status: 'uncertain',
    nextSteps: ['counsellor', 'no-panic', 'read'],
    updatedAt: '2026-09-02',
    sample: true,
  },
]

/**
 * Education library. These are short, general explanations written for
 * this project. They deliberately avoid individual medical advice.
 *
 * All body copy lives in `i18n/content.js` as `content.learn.{id}.*`
 * (title, excerpt, mean.N, remember.N and optional example /
 * important / misunderstanding / screening / questions) and is read
 * with `tc()` / `tList()` — this file keeps only structure.
 */
export const learnTopics = [
  {
    id: 'cells-chromosomes',
    category: 'basics',
    readMins: 2,
    art: 'cells',
  },
  {
    id: 'dna-genes',
    category: 'basics',
    readMins: 2,
    art: 'dna',
  },
  {
    id: 'inheritance',
    category: 'basics',
    readMins: 3,
    art: 'inheritance',
  },
  {
    id: 'inherited-conditions',
    category: 'conditions',
    readMins: 2,
    art: 'family',
  },
  {
    id: 'sickle-cell',
    category: 'conditions',
    readMins: 3,
  },
  {
    id: 'carrier-status',
    category: 'basics',
    readMins: 3,
  },
  {
    id: 'probabilities',
    category: 'basics',
    readMins: 3,
    art: 'probability',
  },
  {
    id: 'screening-counselling',
    category: 'counselling',
    readMins: 3,
    art: 'counsellor',
  },
]

/**
 * Illustrative counsellor entries for layout purposes only.
 * These are NOT a real directory, not referrals, and not endorsements.
 *
 * Name/role/focus text lives in `i18n/content.js` as
 * `content.counsellor.{id}.*` — only structure stays here. Names are
 * fictional and stay in Latin script in every language.
 */
export const counsellorDirectory = [
  { id: 'cns_01', demo: true },
  { id: 'cns_02', demo: true },
  { id: 'cns_03', demo: true },
]

/**
 * Seed notifications for the demonstration account.
 * Title/body live in `i18n/content.js` as `content.notify.{contentId}.*`.
 * `contentId` is a STABLE key: unlike `id`, it is never rewritten with
 * an account prefix on server sync, so the content lookup keeps working.
 */
export const demoNotifications = [
  {
    id: 'ntf_01',
    contentId: 'ntf_01',
    type: 'report',
    at: '2026-09-02T09:15:00Z',
    read: false,
  },
  {
    id: 'ntf_02',
    contentId: 'ntf_02',
    type: 'privacy',
    at: '2026-09-02T09:14:00Z',
    read: false,
  },
  {
    id: 'ntf_03',
    contentId: 'ntf_03',
    type: 'education',
    at: '2026-08-28T17:40:00Z',
    read: true,
  },
]

/**
 * Seed activity log entries.
 *
 * Each entry names its content key (`content.act.*` in
 * `i18n/content.js`); the English/Arabic audit columns written to the
 * database are derived from it at sync time (see `lib/db.js`). Older
 * saved entries without `detailKey` still render from their legacy
 * `detailEn`/`detailAr` fields — see Activity.jsx.
 */
export const demoActivity = [
  {
    id: 'act_01',
    kind: 'reportViewed',
    at: '2026-09-02T09:20:00Z',
    detailKey: 'content.act.reportViewed',
    detailParams: null,
  },
  {
    id: 'act_02',
    kind: 'signedIn',
    at: '2026-09-02T09:12:00Z',
    detailKey: 'content.act.signedIn',
    detailParams: null,
  },
  {
    id: 'act_03',
    kind: 'languageChanged',
    at: '2026-08-30T11:05:00Z',
    detailKey: 'content.act.languageChanged',
    detailParams: null,
  },
]
