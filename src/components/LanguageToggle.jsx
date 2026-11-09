import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * EN | العربية switch, styled after the toggle in the reference design.
 * `variant` controls size: 'inline' for the welcome screen,
 * 'chip' for the settings row.
 */
export default function LanguageToggle({ variant = 'inline', className = '' }) {
  const { lang, setLang, t } = useLanguage()

  if (variant === 'chip') {
    return (
      <div className={`flex rounded-full border border-ink-100 bg-white p-1 ${className}`}>
        {['en', 'ar'].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`rounded-full px-4 py-1.5 text-[13px] font-bold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${
              lang === code
                ? 'bg-brand-700 text-white'
                : 'text-ink-400 hover:text-ink-700'
            }`}
          >
            {code === 'en' ? 'English' : 'العربية'}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-1.5 text-[13px] font-bold ${className}`}
      role="group"
      aria-label={t('set.language')}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`rounded px-1 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${
          lang === 'en' ? 'text-brand-700 underline decoration-brand-400 underline-offset-4' : 'text-ink-300 hover:text-ink-500'
        }`}
      >
        EN
      </button>
      <span className="text-ink-200">|</span>
      <button
        type="button"
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        lang="ar"
        className={`rounded px-1 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${
          lang === 'ar' ? 'text-brand-700 underline decoration-brand-400 underline-offset-4' : 'text-ink-300 hover:text-ink-500'
        }`}
      >
        العربية
      </button>
    </div>
  )
}
