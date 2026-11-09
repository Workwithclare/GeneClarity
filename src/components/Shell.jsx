import { useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Page shell. Provides the consistent mobile-first frame used across
 * the app: a soft mint background, a centred max-width column, and an
 * optional top app bar and bottom tab bar.
 */
export function Screen({ children, className = '', white = false }) {
  return (
    <div className={`min-h-screen w-full bg-mint-50 ${white ? 'bg-white' : ''}`}>
      <div className={`screen ${white ? 'screen--white' : ''} ${className}`}>{children}</div>
    </div>
  )
}

/**
 * Top app bar. Shows a back chevron (or a custom left node) and an
 * optional right-hand slot. `dir` is respected so the chevron mirrors
 * correctly in Arabic.
 */
export function AppBar({ title, onBack, right, subtitle, border = true, hideBack = false }) {
  const navigate = useNavigate()
  const { isRTL } = useLanguage()
  const handleBack = onBack || (() => navigate(-1))

  return (
    <header
      className={`sticky top-0 z-30 flex items-center gap-3 bg-white/90 px-3 py-3 backdrop-blur-md ${
        border ? 'border-b border-ink-100' : ''
      }`}
    >
      {hideBack ? (
        /* Root tab screens (e.g. Profile) have no back target — the
           reference design shows only the trailing action there. */
        <span className="h-10 w-10 shrink-0" aria-hidden="true" />
      ) : (
        <button
          type="button"
          onClick={handleBack}
          aria-label={isRTL ? 'التالي' : 'Back'}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <Icon name={isRTL ? 'chevronRight' : 'chevronLeft'} size={22} />
        </button>
      )}

      <div className="min-w-0 flex-1 text-center">
        {title && (
          <h1 className="truncate text-base font-extrabold text-ink-900">{title}</h1>
        )}
        {subtitle && (
          <p className="truncate text-xs font-medium text-ink-400">{subtitle}</p>
        )}
      </div>

      {/* Right slot keeps a fixed width so the title stays centred. */}
      <div className="flex min-w-10 shrink-0 justify-end">{right}</div>
    </header>
  )
}

const NAV_ITEMS = [
  { key: 'home', to: '/dashboard', icon: 'home', labelKey: 'dash.home' },
  { key: 'report', to: '/report', icon: 'file', labelKey: 'dash.report' },
  { key: 'tips', to: '/learn', icon: 'heart', labelKey: 'dash.tips' },
  { key: 'profile', to: '/profile', icon: 'user', labelKey: 'dash.profile' },
]

/** Bottom tab bar matching the four tabs in the design reference. */
export function BottomNav({ active }) {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <nav
      className="sticky bottom-0 z-30 mt-auto border-t border-ink-100 bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md"
      aria-label="Primary"
    >
      <ul className="flex items-stretch justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.key
          return (
            <li key={item.key} className="flex-1">
              <button
                type="button"
                onClick={() => navigate(item.to)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full flex-col items-center gap-1 rounded-xl py-1.5 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${
                  isActive ? 'text-brand-700' : 'text-ink-300 hover:text-ink-500'
                }`}
              >
                <Icon name={item.icon} size={22} strokeWidth={isActive ? 2.1 : 1.8} />
                <span className={`text-[11px] ${isActive ? 'font-bold' : 'font-semibold'}`}>
                  {t(item.labelKey)}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
