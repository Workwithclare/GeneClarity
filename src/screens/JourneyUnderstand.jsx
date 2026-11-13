import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, Pill, SectionTitle } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import {
  understandSections,
  resultLabels,
  interpretationBoundaryEn,
  interpretationBoundaryAr,
  futureAiEn,
  futureAiAr,
  understandLinks,
} from '../data/journeyContent.js'
import { learnTopics } from '../data/demoData.js'

/**
 * Understand My Results — plain-language terminology only.
 *
 * ─────────────────────────────────────────────────────────────────
 * SAFETY RULES ENFORCED HERE:
 *   • No automatic diagnosis, classification or interpretation of
 *     uploaded documents — this screen never reads a document at all.
 *   • No clinical conclusions and no reproductive recommendations.
 *   • "Screening is not a diagnosis" and "carrier ≠ patient" are
 *     stated explicitly.
 *   • The future-AI guardrail (separate consent-gated, clinically
 *     validated, professionally overseen feature) is displayed.
 *   • Links go to Education Centre topics for further reading —
 *     education stays supporting, not central.
 * ─────────────────────────────────────────────────────────────────
 */
export default function JourneyUnderstand() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()

  if (!user) return null

  const boundary = lang === 'ar' ? interpretationBoundaryAr : interpretationBoundaryEn
  const futureAi = lang === 'ar' ? futureAiAr : futureAiEn
  const boundaryText = [...boundary, futureAi].join(' ')

  return (
    <Screen>
      <AppBar title={t('journey.understandTitle')} onBack={() => navigate('/journey')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <p className="text-[13.5px] leading-relaxed text-ink-400 animate-fade-up">
          {t('journey.understandIntro')}
        </p>

        {/* Core concepts */}
        <section className="mt-5 space-y-3">
          {understandSections.map((section, i) => (
            <article
              key={section.id}
              className="rounded-card border border-mint-200 bg-white p-4 shadow-card animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
                  <Icon name={section.icon} size={18} />
                </span>
                <h2 className="text-[15.5px] font-extrabold text-ink-900">
                  {lang === 'ar' ? section.titleAr : section.titleEn}
                </h2>
              </div>
              <div className="mt-2.5 space-y-2">
                {(lang === 'ar' ? section.bodyAr : section.bodyEn).map((para, j) => (
                  <p key={j} className="text-[13.5px] leading-relaxed text-ink-500">
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Common result labels */}
        <section className="mt-6">
          <SectionTitle>{t('journey.labelsTitle')}</SectionTitle>
          <ul className="space-y-3">
            {resultLabels.map((label) => (
              <li
                key={label.id}
                className="rounded-card border border-ink-100 bg-white p-4"
              >
                <Pill tone={label.tone}>
                  {lang === 'ar' ? label.labelAr : label.labelEn}
                </Pill>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  {lang === 'ar' ? label.descAr : label.descEn}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* The boundary — what this app will not do */}
        <section className="mt-6">
          <SectionTitle>{t('journey.boundaryTitle')}</SectionTitle>
          <SafetyNote text={boundaryText} />
        </section>

        {/* Further reading in the Education Centre (supporting role) */}
        <section className="mt-6">
          <SectionTitle>{t('journey.educationLink')}</SectionTitle>
          <ul className="space-y-2.5">
            {understandLinks.map((id) => {
              const topic = learnTopics.find((tp) => tp.id === id)
              if (!topic) return null
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => navigate(`/learn/${id}`)}
                    className="flex w-full items-center gap-3 rounded-card border border-mint-200 bg-white px-4 py-3.5 text-start shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-500">
                      <Icon name="book" size={17} />
                    </span>
                    <span className="min-w-0 flex-1 text-[14px] font-bold text-ink-900">
                      {lang === 'ar' ? topic.titleAr : topic.titleEn}
                    </span>
                    <Icon
                      name={lang === 'ar' ? 'chevronLeft' : 'chevronRight'}
                      size={18}
                      className="shrink-0 text-ink-300"
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="secondary" icon="shield" onClick={() => navigate('/journey/guidance')}>
            {t('journey.guidanceTitle')}
          </Button>
          <Button variant="ghost" icon="file" onClick={() => navigate('/journey/documents')}>
            {t('journey.docsTitle')}
          </Button>
        </div>
      </main>
    </Screen>
  )
}
