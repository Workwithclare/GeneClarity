import { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react'
import { catalogs } from './translations.js'

const STORAGE_KEY = 'geneclarity.language'
const LanguageContext = createContext(null)

/**
 * Provides the active language plus a `t()` translation function.
 *
 * The choice is persisted to localStorage so a returning visitor keeps
 * their language. We deliberately read it once on first render rather
 * than on every mount, to avoid a flash of the wrong language.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'ar') return saved
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

  const toggle = useCallback(() => {
    setLang((current) => (current === 'en' ? 'ar' : 'en'))
  }, [])

  const t = useCallback(
    (key) => {
      const catalog = catalogs[lang] || catalogs.en
      // Fall back to English rather than showing a raw key on screen.
      return catalog[key] ?? catalogs.en[key] ?? key
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, toggle, t, isRTL: lang === 'ar' }),
    [lang, toggle, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
