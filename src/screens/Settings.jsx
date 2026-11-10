import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Switch, Pill } from '../components/UI.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * Settings — a single flat list matching the reference design:
 * Language, Notifications (toggle), Privacy & Security, Data Sharing,
 * About App, Help & Support.
 */
export default function Settings() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state, dispatch } = useStore()
  const user = useRequireAuth()

  if (!user) return null

  const chevron = lang === 'ar' ? 'chevronLeft' : 'chevronRight'

  const navRows = [
    { icon: 'lock', labelKey: 'set.privacySecurity', to: '/settings/privacy' },
    { icon: 'share', labelKey: 'set.dataSharing', to: '/couple' },
    { icon: 'info', labelKey: 'set.aboutApp', to: '/support' },
    { icon: 'help', labelKey: 'set.helpSupport', to: '/support' },
  ]

  return (
    <Screen>
      <AppBar title={t('set.title')} onBack={() => navigate('/profile')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <div className="divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white shadow-card">
          {/* Language — the row carries the toggle itself */}
          <div className="flex items-center gap-3.5 px-4 py-3.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center text-ink-500">
              <Icon name="globe" size={19} />
            </span>
            <span className="flex-1 text-[14.5px] font-bold text-ink-900">
              {t('set.language')}
            </span>
            <LanguageToggle variant="chip" />
          </div>

          {/* Notifications — one master switch, as in the reference */}
          <div className="px-4">
            <Switch
              id="set-notifications"
              checked={Boolean(state.settings.notifyNotifications)}
              onChange={(value) =>
                dispatch({ type: 'SET_SETTING', key: 'notifyNotifications', value })
              }
              label={t('set.notifications')}
            />
          </div>

          {/* Navigation rows */}
          {navRows.map((row) => (
            <button
              key={row.labelKey}
              type="button"
              onClick={() => navigate(row.to)}
              className="menu-row focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center text-ink-500">
                <Icon name={row.icon} size={19} />
              </span>
              <span className="flex-1 text-[14.5px] font-bold text-ink-900">
                {t(row.labelKey)}
              </span>
              <Icon name={chevron} size={18} className="shrink-0 text-ink-300" />
            </button>
          ))}
        </div>

        {/* Honest note about where data lives */}
        <div className="mt-5 flex items-start gap-2.5 rounded-control bg-brand-100 px-4 py-3">
          <span className="mt-0.5 shrink-0 text-brand-700">
            <Icon name="shield" size={17} />
          </span>
          <p className="text-[12.5px] leading-relaxed text-brand-900">
            {t('act2.note')}
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <Pill tone="sample">{t('nav.demo')}</Pill>
        </div>
      </main>
    </Screen>
  )
}
