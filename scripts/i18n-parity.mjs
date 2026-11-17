/**
 * i18n parity check — run with `npm run i18n:check`.
 *
 * Every supported language must ship EXACTLY the same keys as
 * English in both catalogues:
 *
 *   • UI chrome   — `src/i18n/translations.js` (+ fr/es/sw/ha siblings)
 *   • content     — `src/i18n/content.js` (+ content_fr/es/sw/ha)
 *
 * and every shared key must use the SAME `{placeholder}` names, so a
 * `{n}` in English is a `{n}` in Swahili too. Missing or extra keys
 * mean a screen would fall back to English (or show a raw key) in
 * that language — the build should fail loudly instead.
 *
 * It also verifies the language metadata (picker list, BCP-47 locale
 * map, dir) stays in step with the catalogues.
 *
 * Exit code 0 = parity OK, 1 = problems found (listed per language).
 */

import { catalogs, languages, locales } from '../src/i18n/translations.js'

// Imported dynamically so a missing sibling catalogue (e.g. a language
// file that has not been written yet) prints a plain message instead
// of an ESM stack trace.
let contentCatalogs
try {
  ;({ contentCatalogs } = await import('../src/i18n/content.js'))
} catch (err) {
  console.error('✗ could not load the content catalogue — a language file is missing or broken.')
  console.error(`    ${err.message}`)
  process.exit(1)
}

const PLACEHOLDER = /\{(\w+)\}/g

function placeholderNames(value) {
  const names = new Set()
  for (const match of String(value).matchAll(PLACEHOLDER)) names.add(match[1])
  return names
}

function samePlaceholders(a, b) {
  const x = placeholderNames(a)
  const y = placeholderNames(b)
  if (x.size !== y.size) return false
  for (const name of x) if (!y.has(name)) return false
  return true
}

let problems = 0

function checkGroup(label, group) {
  const base = group.en
  if (!base) {
    console.error(`✗ ${label}: no English catalogue found`)
    problems += 1
    return
  }
  const baseKeys = Object.keys(base)
  console.log(
    `\n${label}: ${baseKeys.length} English keys · languages: ${Object.keys(group).join(', ')}`,
  )

  for (const [lang, catalog] of Object.entries(group)) {
    if (lang === 'en') continue
    const missing = baseKeys.filter((key) => !(key in catalog))
    const extra = Object.keys(catalog).filter((key) => !(key in base))
    const badPlaceholders = baseKeys.filter(
      (key) => key in catalog && !samePlaceholders(base[key], catalog[key]),
    )

    if (!missing.length && !extra.length && !badPlaceholders.length) {
      console.log(`  ✓ ${lang}: ${Object.keys(catalog).length} keys, parity OK`)
      continue
    }

    problems += missing.length + extra.length + badPlaceholders.length
    console.error(`  ✗ ${lang}: ${Object.keys(catalog).length} keys`)
    if (missing.length) {
      console.error(`      missing (${missing.length}): ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? ', …' : ''}`)
    }
    if (extra.length) {
      console.error(`      extra (${extra.length}): ${extra.slice(0, 10).join(', ')}${extra.length > 10 ? ', …' : ''}`)
    }
    if (badPlaceholders.length) {
      console.error(`      placeholder mismatch (${badPlaceholders.length}): ${badPlaceholders.slice(0, 10).join(', ')}${badPlaceholders.length > 10 ? ', …' : ''}`)
    }
  }
}

checkGroup('UI catalogue', catalogs)
checkGroup('Content catalogue', contentCatalogs)

// Language metadata must agree with the catalogues: every language in
// the picker needs a catalogue, a BCP-47 locale for Intl, and a dir.
{
  const codes = Object.keys(catalogs)
  const metaProblems = []
  for (const lang of languages) {
    if (!codes.includes(lang.code)) metaProblems.push(`languages: '${lang.code}' has no catalogue`)
    if (!(lang.code in locales)) metaProblems.push(`languages: '${lang.code}' has no locale`)
    if (lang.dir !== 'ltr' && lang.dir !== 'rtl') metaProblems.push(`languages: '${lang.code}' has invalid dir '${lang.dir}'`)
  }
  for (const code of codes) {
    if (!languages.some((l) => l.code === code)) metaProblems.push(`catalogues: '${code}' missing from languages metadata`)
    if (!(code in locales)) metaProblems.push(`catalogues: '${code}' missing a locale`)
  }
  for (const code of Object.keys(locales)) {
    if (!codes.includes(code)) metaProblems.push(`locales: '${code}' has no catalogue`)
    if (!languages.some((l) => l.code === code)) metaProblems.push(`locales: '${code}' missing from languages metadata`)
  }
  if (metaProblems.length) {
    problems += metaProblems.length
    console.error(`\n✗ language metadata:`)
    for (const p of metaProblems) console.error(`    ${p}`)
  } else {
    console.log(`\n✓ language metadata: ${languages.length} languages, catalogues + locales + dirs all in step`)
  }
}

if (problems) {
  console.error(`\n✗ i18n parity FAILED — ${problems} problem(s). Fix the catalogues above.`)
  process.exit(1)
}
console.log('\n✓ i18n parity OK — all six languages share identical key sets.')
