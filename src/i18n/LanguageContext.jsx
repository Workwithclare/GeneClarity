import { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react'
import { catalogs, languages } from './translations.js'

const STORAGE_KEY = 'geneclarity.language'
const LanguageContext = createContext(null)

const languageCodes = Object.keys(catalogs)

/**
 * Provides the active language plus a `t()` translation function.
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
    (key) => {
      const catalog = catalogs[lang] || catalogs.en
      // Fall back to English rather than showing a raw key on screen.
      return catalog[key] ?? catalogs.en[key] ?? key
    },
    [lang],
  )

  // Layout direction comes from the language metadata — only Arabic is
  // right-to-left among the supported languages.
  const dir = languages.find((l) => l.code === lang)?.dir || 'ltr'

  const value = useMemo(
    () => ({ lang, setLang, languages, dir, isRTL: dir === 'rtl', t }),
    [lang, dir, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
