import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { SafetyNote, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * My Screening Journey — the hub of the feature.
 *
 * Three destinations:
 *   • My Screening Results  → private document store (/journey/documents)
 *   • Understand My Results → plain-language terminology (/journey/understand)
 *   • Professional Guidance → counselling info + question bank (/journey/guidance)
 *
 * Privacy is stated up front: documents are private by default, and
 * sharing is shown as a PLANNED feature only — there is no sharing
 * function in this prototype (docs/11).
 */
export default function Journey() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()

  if (!user) return null

  const cards = [
    {
      to: '/journey/documents',
      icon: 'file',
      titleKey: 'journey.resultsCard',
      subKey: 'journey.resultsSub',
      chip: 'bg-mint-100 text-brand-700',
    },
    {
      to: '/journey/understand',
      icon: 'info',
      titleKey: 'journey.understandCard',
      subKey: 'journey.understandSub',
      chip: 'bg-sky-100 text-sky-500',
    },
    {
      to: '/journey/guidance',
      icon: 'heart',
      titleKey: 'journey.guidanceCard',
      subKey: 'journey.guidanceSub',
      chip: 'bg-blush-100 text-blush-500',
    },
  ]

  const chevron = lang === 'ar' ? 'chevronLeft' : 'chevronRight'

  return (
    <Screen>
      <AppBar title={t('journey.title')} onBack={() => navigate('/dashboard')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <div className="animate-fade-up">
          <h1 className="text-[24px] font-extrabold leading-tight text-ink-900">
            {t('journey.title')}
          </h1>
          <p className="mt-1 text-[14px] leading-relaxed text-ink-400">
            {t('journey.subtitle')}
          </p>
        </div>

        {/* The three journey steps */}
        <section className="mt-5 space-y-3">
          {cards.map((card, i) => (
            <button
              key={card.to}
              type="button"
              onClick={() => navigate(card.to)}
              className="flex w-full items-center gap-3.5 rounded-card border border-mint-200 bg-white p-4 text-start shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-button focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${card.chip}`}>
                <Icon name={card.icon} size={23} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-extrabold text-ink-900">
                  {t(card.titleKey)}
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-400">
                  {t(card.subKey)}
                </span>
              </span>
              <Icon name={chevron} size={20} className="shrink-0 text-ink-300" />
            </button>
          ))}
        </section>

        {/* Privacy by default */}
        <section className="mt-6">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-brand-700">
              <Icon name="shield" size={17} />
            </span>
            <h2 className="text-[15.5px] font-extrabold text-ink-900">
              {t('journey.privacyTitle')}
            </h2>
          </div>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
            {t('journey.privacyBody')}
          </p>
        </section>

        {/* Sharing — PLANNED feature only, stated honestly */}
        <section className="mt-4 rounded-card border border-ink-100 bg-ink-50/60 p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] font-extrabold text-ink-700">
              {t('journey.sharingTitle')}
            </h3>
            <Pill tone="neutral">{t('journey.planned')}</Pill>
          </div>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-400">
            {t('journey.sharingBody')}
          </p>
        </section>

        <div className="mt-5">
          <SafetyNote text={t('notice.notDiagnostic')} />
        </div>
      </main>
    </Screen>
  )
}
