import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, BottomNav } from '../components/Shell.jsx'
import { LogoMark } from '../components/Logo.jsx'
import { Button, SectionTitle, SampleBanner, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * Individual dashboard — the hub all other screens hang off.
 * Layout follows the reference: greeting, journey card, quick-access
 * grid, bottom tab bar.
 */
export default function Dashboard() {
  const user = useRequireAuth()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state } = useStore()

  if (!user) return null

  const unread = state.notifications.filter((n) => !n.read).length
  const carrierCount = state.results.filter((r) => r.status === 'carrier').length

  const quickAccess = [
    { key: 'dash.myReport', icon: 'file', to: '/report' },
    { key: 'dash.healthTips', icon: 'heart', to: '/learn' },
    { key: 'dash.faqs', icon: 'help', to: '/support' },
    { key: 'dash.settings', icon: 'settings', to: '/settings' },
  ]

  return (
    <Screen>
      {/* Home has no back button — it is a root screen. The header carries
          the brand plus notifications and account access instead. */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-3 bg-white/90 px-5 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <LogoMark size={28} />
          <span className="text-[16px] font-extrabold tracking-tight text-brand-800">
            Gene<span className="text-brand-500">Clarity</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => navigate('/notifications')}
            aria-label={t('notif.title')}
            className="relative grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
          >
            <Icon name="bell" size={21} />
            {unread > 0 && (
              <span className="absolute end-2 top-2 grid h-4 min-w-4 place-items-center rounded-full bg-danger-500 px-1 text-[10px] font-bold text-white">
                {unread}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate('/profile')}
            aria-label={t('dash.profile')}
            className="grid h-9 w-9 place-items-center rounded-full bg-brand-700 text-[12px] font-extrabold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
          >
            {user.avatarInitials || 'GC'}
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-5 pb-4">
        {/* Greeting */}
        <div className="pt-1">
          <h1 className="text-[24px] font-extrabold leading-tight text-ink-900">
            {t('dash.hello')} {user.fullName.split(' ')[0]}{' '}
            <span aria-hidden="true">👋</span>
          </h1>
          <p className="mt-0.5 text-[13.5px] text-ink-400">{t('dash.companion')}</p>
        </div>

        <div className="mt-4">
          <SampleBanner />
        </div>

        {/* Health journey card */}
        <button
          type="button"
          onClick={() => navigate('/report')}
          className="mt-4 flex w-full items-center gap-3.5 rounded-card border border-brand-200 bg-mint-100 p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
            <Icon name="sparkle" size={24} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-extrabold text-brand-800">
              {t('dash.journey')}
            </span>
            <span className="mt-0.5 block text-[12.5px] leading-snug text-brand-700/85">
              {t('dash.journeySub')}
            </span>
          </span>
          <Icon
            name={lang === 'ar' ? 'chevronLeft' : 'chevronRight'}
            size={20}
            className="shrink-0 text-brand-700"
          />
        </button>

        {/* Quick access */}
        <div className="mt-6">
          <SectionTitle>{t('dash.quickAccess')}</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {quickAccess.map((item, i) => (
              <button
                key={item.key}
                type="button"
                onClick={() => navigate(item.to)}
                className="flex flex-col items-start gap-3 rounded-card border border-mint-200 bg-white p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 animate-fade-up"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-mint-100 text-brand-700">
                  <Icon name={item.icon} size={21} />
                </span>
                <span className="text-[14px] font-extrabold text-ink-900">
                  {t(item.key)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CoupleConnect entry */}
        <button
          type="button"
          onClick={() => navigate('/couple')}
          className="mt-4 flex w-full items-center gap-3.5 rounded-card border border-mint-200 bg-white p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
            <Icon name="users" size={24} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-2">
              <span className="text-[15px] font-extrabold text-ink-900">
                {t('dash.coupleCard')}
              </span>
              <Pill tone={state.partner.status === 'active' ? 'ok' : 'neutral'}>
                {t(
                  state.partner.status === 'active'
                    ? 'cc.statusActive'
                    : state.partner.status === 'pending'
                      ? 'cc.statusPending'
                      : state.partner.status === 'revoked'
                        ? 'cc.statusRevoked'
                        : 'cc.statusNone',
                )}
              </Pill>
            </span>
            <span className="mt-1 block text-[12.5px] leading-snug text-ink-400">
              {t('dash.coupleSub')}
            </span>
          </span>
          <Icon
            name={lang === 'ar' ? 'chevronLeft' : 'chevronRight'}
            size={20}
            className="shrink-0 text-ink-300"
          />
        </button>

        {/* Result count strip */}
        <div className="mt-4 flex items-center justify-between rounded-card border border-mint-200 bg-white px-4 py-3.5">
          <div>
            <p className="text-[12px] font-semibold text-ink-400">
              {t('rep.carrierCount')}
            </p>
            <p className="text-[20px] font-extrabold text-ink-900">{carrierCount}</p>
          </div>
          <div className="h-9 w-px bg-ink-100" aria-hidden="true" />
          <div>
            <p className="text-[12px] font-semibold text-ink-400">
              {t('rep.testedCount')}
            </p>
            <p className="text-[20px] font-extrabold text-ink-900">
              {state.results.length}
            </p>
          </div>
          <Button variant="soft" size="sm" onClick={() => navigate('/report')}>
            {t('act.viewReport')}
          </Button>
        </div>

        <p className="mt-4 text-center text-[11.5px] leading-snug text-ink-300">
          {t('learn.educationOnly')}
        </p>
      </main>

      <BottomNav active="home" />
    </Screen>
  )
}
