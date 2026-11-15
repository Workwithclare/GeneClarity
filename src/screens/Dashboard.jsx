import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, BottomNav } from '../components/Shell.jsx'
import { AvatarArt } from '../components/Illustrations.jsx'
import { SectionTitle, SampleBanner } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * Individual dashboard — the hub all other screens hang off.
 * Layout follows the reference art exactly: greeting, one journey card,
 * the Quick Access grid, bottom tab bar. CoupleConnect and the result
 * counter live elsewhere (Profile → Family Access, and the Report
 * screen) so this screen stays as uncluttered as the design.
 */
export default function Dashboard() {
  const user = useRequireAuth()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()

  if (!user) return null

  const quickAccess = [
    { key: 'dash.myReport', icon: 'file', to: '/report', tile: 'bg-tile-grey' },
    { key: 'dash.healthTips', icon: 'heartSolid', to: '/learn', tile: 'bg-tile-blush' },
    { key: 'dash.faqs', icon: 'helpSolid', to: '/faqs', tile: 'bg-tile-mint' },
    { key: 'dash.settings', icon: 'gearSolid', to: '/settings', tile: 'bg-tile-lilac' },
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

        {/* Your Health Journey — the single prominent card from the
            reference art, leading into the Screening Journey hub. */}
        <button
          type="button"
          onClick={() => navigate('/journey')}
          className="mt-4 flex w-full items-center gap-3.5 rounded-card bg-mint-100 p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 animate-fade-up"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-300 text-brand-700">
            <Icon name="dna" size={24} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-extrabold text-ink-900">
              {t('dash.journey')}
            </span>
            <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-500">
              {t('dash.journeySub')}
            </span>
          </span>
          <Icon
            name={lang === 'ar' ? 'arrowLeft' : 'arrowRight'}
            size={22}
            className="shrink-0 text-brand-800"
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
                className={`flex flex-col items-center gap-2.5 rounded-card px-3 py-5 text-center shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 animate-fade-up ${item.tile}`}
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {/* Bare dark-green glyph on a pale tinted tile, as in the
                    reference art (no chip behind the icon). */}
                <Icon name={item.icon} size={28} className="text-brand-700" />
                <span className="text-[14px] font-extrabold text-ink-900">
                  {t(item.key)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-[11.5px] leading-snug text-ink-300">
          {t('learn.educationOnly')}
        </p>
      </main>

      <BottomNav active="home" />
    </Screen>
  )
}
