/**
 * My Screening Journey — structure for the Understand and Guidance
 * sections, plus the synthetic demonstration report.
 *
 * ─────────────────────────────────────────────────────────────────
 * Like `demoData.js`, EVERY item here is original writing for this
 * prototype describing well-established general genetics (see
 * docs/10 §3 and docs/07). It is general education — it does not
 * diagnose, classify, or interpret anyone's uploaded documents, and
 * it never makes recommendations about marriage or reproduction.
 *
 * All user-visible text lives in `i18n/content.js` (keys prefixed
 * `content.understand.`, `content.label.`, `content.useful.`,
 * `content.question.`, `content.sample.` …) and is read with `tc()`
 * / `tList()` in the language of the moment. This file keeps only
 * non-translatable structure: ids, icons, tones, genes, statuses.
 * ─────────────────────────────────────────────────────────────────
 */

/** Screen 3 — plain-language explanations of core concepts. */
export const understandSections = [
  { id: 'screening-vs-diagnosis', icon: 'shield' },
  { id: 'carrier-vs-disease', icon: 'dna' },
]

/** Screen 3 — what common result labels mean, in ordinary words. */
export const resultLabels = [
  { id: 'negative', tone: 'ok' },
  { id: 'carrier', tone: 'caution' },
  { id: 'uncertain', tone: 'neutral' },
]

/**
 * Screen 3 — the boundary plus the future-AI guardrail.
 * Text: `content.boundary` and `content.futureAi` (content.js).
 */

/** Screen 3 — where to read more (ids must exist in learnTopics). */
export const understandLinks = ['carrier-status', 'probabilities', 'screening-counselling']

/**
 * Screens 3–4 — the "when useful" list, the question bank and the
 * counselling paragraph are positional content lists:
 * `content.useful.N`, `content.question.N`, `content.counselling`
 * in content.js (counts derived from the English catalogue).
 */

/**
 * The synthetic demonstration document (Screen: /journey/sample).
 * Original fictional content — no real patient, laboratory, or report.
 * Every label and value is content (`content.sample.*`); this file
 * only holds the non-translatable structure.
 */
export const sampleReport = {
  /** Field rows of the header table, in order (labels keyed by id). */
  fields: ['prepared', 'issued', 'reference', 'date'],
  rows: [
    { gene: 'HBB', status: 'carrier' },
    { gene: 'HEXA', status: 'negative' },
    { gene: 'CFTR', status: 'uncertain' },
  ],
}
