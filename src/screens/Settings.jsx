import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Switch, Pill } from '../components/UI.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * Settings hub — mirrors the reference "Settings" screen: language,
 * notifications, privacy, data sharing, about and help.
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

  const notifySwitches = [
    ['notifyResults', 'set.notifications', 'set.notificationsSub'],
    ['notifyEmail', 'set.emailSub', null],
    ['notifyReminders', 'set.remindersSub', null],
    ['notifyMarketing', 'set.marketingSub', null],
  ]

  return (
    <Screen>
      <AppBar title={t('set.title')} onBack={() => navigate('/profile')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-5">
        {/* Language — always first, matching the reference */}
        <section>
          <h2 className="eyebrow">{t('set.appearance')}</h2>
          <div className="mt-2 flex items-center gap-3 rounded-card border border-mint-200 bg-white px-4 py-3.5 shadow-card">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
              <Icon name="globe" size={18} />
            </span>
            <span className="flex-1 text-[14.5px] font-bold text-ink-900">
              {t('set.language')}
            </span>
            <LanguageToggle variant="chip" />
          </div>
          <p className="mt-1.5 px-1 text-[12px] text-ink-400">
            {lang === 'ar' ? 'يتطلب الوضع من اليمين إلى اليسار تخطيطًا معكوسًا تلقائيًا.' : 'Arabic automatically switches the whole interface to right-to-left.'}
          </p>
        </section>

        {/* Notifications */}
        <section className="mt-6">
          <h2 className="eyebrow">{t('set.notifications')}</h2>
          <div className="mt-2 divide-y divide-ink-100 rounded-card border border-mint-200 bg-white px-4 shadow-card">
            {notifySwitches.map(([key, labelKey, descKey]) => (
              <Switch
                key={key}
                id={`set-${key}`}
                checked={state.settings[key]}
                onChange={(value) => dispatch({ type: 'SET_SETTING', key, value })}
                label={t(labelKey)}
                description={descKey ? t(descKey) : undefined}
              />
            ))}
          </div>
        </section>

        {/* Navigation rows */}
        <section className="mt-6">
          <h2 className="eyebrow">{t('set.privacySecurity')}</h2>
          <div className="mt-2 divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white shadow-card">
            {navRows.map((row) => (
              <button
                key={row.labelKey}
                type="button"
                onClick={() => navigate(row.to)}
                className="menu-row focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
                  <Icon name={row.icon} size={18} />
                </span>
                <span className="flex-1 text-[14.5px] font-bold text-ink-900">
                  {t(row.labelKey)}
                </span>
                <Icon name={chevron} size={18} className="shrink-0 text-ink-300" />
              </button>
            ))}
          </div>
        </section>

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
