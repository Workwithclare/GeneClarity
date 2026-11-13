import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, BottomNav } from '../components/Shell.jsx'
import { AvatarArt } from '../components/Illustrations.jsx'
import { SectionTitle, SampleBanner, Pill } from '../components/UI.jsx'
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

  const carrierCount = state.results.filter((r) => r.status === 'carrier').length

  const quickAccess = [
    { key: 'dash.myReport', icon: 'file', to: '/report', chip: 'bg-mint-100 text-brand-700' },
    {
      key: 'dash.healthTips',
      icon: 'heart',
      to: '/learn',
      chip: 'bg-blush-100 text-blush-500',
    },
    { key: 'dash.faqs', icon: 'help', to: '/faqs', chip: 'bg-sky-100 text-sky-500' },
    { key: 'dash.settings', icon: 'settings', to: '/settings', chip: 'bg-ink-50 text-ink-500' },
  ]

  return (
    <Screen>
      {/* Home has no back button — the reference header carries the
          greeting on the left and the account portrait on the right. */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-3 bg-white/90 px-5 py-3.5 backdrop-blur-md">
        <div className="min-w-0">
          <h1 className="truncate text-[22px] font-extrabold leading-tight text-ink-900">
            {t('dash.hello')} {user.fullName.split(' ')[0]}{' '}
            <span aria-hidden="true">👋</span>
          </h1>
          <p className="truncate text-[13px] text-ink-400">{t('dash.companion')}</p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/profile')}
          aria-label={t('dash.profile')}
          className="shrink-0 rounded-full ring-2 ring-brand-100 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <AvatarArt size={44} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-5 pb-4">
        <div className="pt-1">
          <SampleBanner />
        </div>

        {/* My Screening Journey — the feature hub (prominent entry) */}
        <button
          type="button"
          onClick={() => navigate('/journey')}
          className="mt-4 flex w-full items-center gap-3.5 rounded-card border border-brand-300 bg-brand-800 p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 animate-fade-up"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/12 text-white">
            <Icon name="dna" size={24} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-extrabold text-white">
              {t('journey.title')}
            </span>
            <span className="mt-0.5 block text-[12.5px] leading-snug text-brand-200">
              {t('journey.cardSub')}
            </span>
          </span>
          <Icon
            name={lang === 'ar' ? 'chevronLeft' : 'chevronRight'}
            size={20}
            className="shrink-0 text-white"
          />
        </button>

        {/* Health journey card */}
        <button
          type="button"
          onClick={() => navigate('/report')}
          className="mt-4 flex w-full items-center gap-3.5 rounded-card border border-brand-200 bg-mint-100 p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
            <Icon name="shield" size={24} />
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
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${item.chip}`}>
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

        {/* Result count strip — the whole strip opens the report */}
        <button
          type="button"
          onClick={() => navigate('/report')}
          className="mt-4 flex w-full items-center justify-between rounded-card border border-mint-200 bg-white px-4 py-3.5 text-start shadow-card transition-all hover:-translate-y-0.5 hover:shadow-button focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
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
          {/* Visual affordance only — the strip itself is the button. */}
          <span className="btn btn--soft btn--sm pointer-events-none">
            {t('act.viewReport')}
          </span>
        </button>

        <p className="mt-4 text-center text-[11.5px] leading-snug text-ink-300">
          {t('learn.educationOnly')}
        </p>
      </main>

      <BottomNav active="home" />
    </Screen>
  )
}
