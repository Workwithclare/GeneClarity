import { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react'
import { catalogs, languages, locales } from './translations.js'
import { lookupContent, contentList, interpolate } from './content.js'

const STORAGE_KEY = 'geneclarity.language'
const LanguageContext = createContext(null)

const languageCodes = Object.keys(catalogs)

/**
 * Provides the active language plus the translation functions:
 *
 *   t(key, params)   — UI chrome (buttons, headings); falls back to
 *                      English, then to the raw key, so labels never
 *                      disappear. `{name}` placeholders are filled
 *                      from `params`.
 *   tc(key, params)  — long-form CONTENT tied to data records
 *                      (i18n/content.js); returns `undefined` when a
 *                      key does not exist, so optional lesson
 *                      sections can simply not render.
 *   tList(key)       — an indexed content list (`key.0`, `key.1`, …);
 *                      the count comes from the English catalogue.
 *   locale           — the BCP-47 locale for Intl formatting.
 *
 * The choice is persisted to localStorage so a returning visitor keeps
 * their language. We deliberately read it once on first render rather
 * than on every mount, to avoid a flash of the wrong language.
 *
 * The saved value is validated against the catalogue list: a removed or
 * misspelled language falls back to English instead of rendering raw
 * keys.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved && languageCodes.includes(saved)) return saved
    } catch {
      /* storage may be unavailable (private browsing) — fall back to English */
    }
    return 'en'
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore — the language simply won't persist */
    }
  }, [lang])

  const t = useCallback(
    (key, params) => {
      const catalog = catalogs[lang] || catalogs.en
      // Fall back to English rather than showing a raw key on screen.
      return interpolate(catalog[key] ?? catalogs.en[key] ?? key, params)
    },
    [lang],
  )

  // Content lookup — undefined when the key exists nowhere (used for
  // optional lesson sections); English fallback otherwise.
  const tc = useCallback((key, params) => lookupContent(lang, key, params), [lang])

  // Indexed content lists (`…mean.0`, `…mean.1`, …).
  const tList = useCallback((key) => contentList(lang, key), [lang])

  // Layout direction comes from the language metadata — only Arabic is
  // right-to-left among the supported languages.
  const dir = languages.find((l) => l.code === lang)?.dir || 'ltr'
  const locale = locales[lang] || locales.en

  const value = useMemo(
    () => ({ lang, setLang, languages, dir, isRTL: dir === 'rtl', locale, t, tc, tList }),
    [lang, dir, locale, t, tc, tList],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
