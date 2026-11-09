import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar, BottomNav } from '../components/Shell.jsx'
import { AvatarArt } from '../components/Illustrations.jsx'
import { Button, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * Profile hub. Account-level actions live here; privacy controls are a
 * separate screen because they deserve their own deliberate space.
 *
 * Matches the reference layout: portrait, name, e-mail, then the menu
 * list ending in Log Out. Notifications and Activity History stay in
 * the list because the challenge requires both to be reachable.
 */
export default function Profile() {
  const user = useRequireAuth()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state, dispatch } = useStore()
  const [confirmOut, setConfirmOut] = useState(false)

  if (!user) return null

  const unread = state.notifications.filter((n) => !n.read).length

  const rows = [
    { icon: 'file', labelKey: 'prof.myReports', to: '/report' },
    { icon: 'users', labelKey: 'prof.familyAccess', to: '/couple' },
    { icon: 'lock', labelKey: 'prof.privacySettings', to: '/settings/privacy' },
    { icon: 'bell', labelKey: 'prof.notifications', to: '/notifications', badge: unread },
    { icon: 'clock', labelKey: 'prof.activity', to: '/activity' },
    { icon: 'info', labelKey: 'prof.about', to: '/support' },
  ]

  const chevron = lang === 'ar' ? 'chevronLeft' : 'chevronRight'

  return (
    <Screen>
      {/* Profile is a root tab: no back chevron, only the settings gear. */}
      <AppBar
        title={t('prof.title')}
        hideBack
        right={
          <button
            type="button"
            onClick={() => navigate('/settings')}
            aria-label={t('set.title')}
            className="grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
          >
            <Icon name="settings" size={21} />
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto px-5 pb-4 pt-5">
        {/* Identity */}
        <div className="flex flex-col items-center text-center animate-fade-up">
          <span className="rounded-full ring-4 ring-brand-100">
            <AvatarArt size={104} />
          </span>

          <h1 className="mt-4 text-[21px] font-extrabold text-ink-900">
            {user.fullName}
          </h1>
          {/* Email is only ever shown to its own owner — never in a shared view. */}
          <p className="text-[13.5px] text-ink-400">{user.email}</p>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Pill tone="ok">
              {t('prof.memberSince')} {user.joinedAt}
            </Pill>
            <Pill tone="sample">{t('nav.demo')}</Pill>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-6 divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white shadow-card">
          {rows.map((row) => (
            <button
              key={row.labelKey}
              type="button"
              onClick={() => navigate(row.to)}
              className="menu-row focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center text-brand-700">
                <Icon name={row.icon} size={19} />
              </span>
              <span className="flex-1 text-[14.5px] font-bold text-ink-900">
                {t(row.labelKey)}
              </span>
              {row.badge > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-danger-500 px-1.5 text-[11px] font-bold text-white">
                  {row.badge}
                </span>
              )}
              <Icon name={chevron} size={18} className="shrink-0 text-ink-300" />
            </button>
          ))}

          {/* Log out — always last, visually separated */}
          <button
            type="button"
            onClick={() => setConfirmOut(true)}
            className="menu-row text-danger-500 hover:bg-danger-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center">
              <Icon name="logout" size={19} />
            </span>
            <span className="flex-1 text-[14.5px] font-bold">{t('act.signOut')}</span>
          </button>
        </div>

        {confirmOut && (
          <div className="mt-4 rounded-card border border-danger-500/40 bg-danger-100 p-4 animate-scale-in">
            <p className="text-[13.5px] font-semibold leading-snug text-danger-600">
              {t('act.signOut')}?
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  dispatch({ type: 'SIGN_OUT' })
                  navigate('/login', { replace: true })
                }}
              >
                {t('act.signOut')}
              </Button>
              <Button variant="secondary" size="sm" onClick={() => setConfirmOut(false)}>
                {t('act.cancel')}
              </Button>
            </div>
          </div>
        )}

        <p className="mt-5 text-center text-[11.5px] leading-snug text-ink-300">
          GeneClarity · {t('brand.tagline')}
        </p>
      </main>

      <BottomNav active="profile" />
    </Screen>
  )
}
