import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, Pill, SectionTitle, Tick } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * Professional Guidance — genetic counselling information and a
 * question- preparation tool.
 *
 * ─────────────────────────────────────────────────────────────────
 * SAFETY RULES ENFORCED HERE:
 *   • No invented healthcare providers, clinics, appointments or
 *     partnerships — this screen gives information and a personal
 *     question list, and points to the existing (clearly labelled
 *     demo) Support screen for contact options.
 *   • No medical decisions, no recommendations about marriage or
 *     reproduction, no guarantees.
 *   • The question selection stays on this device only (component
 *     state) — nothing is uploaded.
 * ─────────────────────────────────────────────────────────────────
 */
export default function JourneyGuidance() {
  const navigate = useNavigate()
  const { t, tc, tList } = useLanguage()
  const user = useRequireAuth()
  const [picked, setPicked] = useState(() => new Set())

  if (!user) return null

  // Positional content lists — counts come from the English catalogue.
  const useful = tList('content.useful')
  const questions = tList('content.question')

  const toggle = (index) => {
    setPicked((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <Screen>
      <AppBar title={t('journey.guidanceTitle')} onBack={() => navigate('/journey')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        {/* What genetic counselling is */}
        <section className="rounded-card border border-brand-200 bg-mint-100 p-5 animate-fade-up">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
              <Icon name="heart" size={18} />
            </span>
            <h2 className="text-[15.5px] font-extrabold text-brand-800">
              {t('journey.counsellingTitle')}
            </h2>
          </div>
          <div className="mt-2.5 space-y-2">
            <p className="text-[13.5px] leading-relaxed text-brand-900/85">
              {tc('content.counselling')}
            </p>
          </div>
        </section>

        {/* When guidance may be useful */}
        <section className="mt-6">
          <SectionTitle>{t('journey.whenTitle')}</SectionTitle>
          <ul className="space-y-2.5">
            {useful.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-brand-600">
                  <Icon name="checkCircle" size={17} />
                </span>
                <p className="text-[13.5px] leading-relaxed text-ink-700">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* My Appointments — consultation requests and their status */}
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <SectionTitle>{t('journey.apptTitle')}</SectionTitle>
          </div>
          <p className="mb-3 text-[13.5px] leading-relaxed text-ink-500">
            {t('journey.apptSub')}
          </p>
          <div className="rounded-card border border-ink-100 bg-white p-4">
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink-50 text-ink-400 mb-3">
                <Icon name="calendar" size={24} />
              </span>
              <h3 className="text-[15px] font-extrabold text-ink-900 mb-1">
                {t('journey.apptNone')}
              </h3>
              <p className="text-[13px] leading-relaxed text-ink-400 max-w-xs">
                {t('journey.apptNoneBody')}
              </p>
            </div>
          </div>
        </section>

        {/* Question bank — tick to build a personal list */}
        <section className="mt-6">
          <div className="mb-1 flex items-center justify-between gap-3">
            <h2 className="section-title">{t('journey.questionsTitle')}</h2>
            <Pill tone={picked.size > 0 ? 'ok' : 'neutral'}>
              {t('journey.selected').replace('{n}', String(picked.size))}
            </Pill>
          </div>
          <p className="mb-3 text-[12.5px] leading-relaxed text-ink-400">
            {t('journey.questionsSub')}
          </p>
          <div className="rounded-card border border-mint-200 bg-white p-4">
            <ul className="space-y-3">
              {questions.map((q, i) => (
                <li key={i}>
                  <Tick
                    id={`q-${i}`}
                    checked={picked.has(i)}
                    onChange={() => toggle(i)}
                  >
                    {q}
                  </Tick>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-5">
          <SafetyNote text={t('notice.notDiagnostic')} />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="secondary" icon="info" onClick={() => navigate('/journey/understand')}>
            {t('journey.understandTitle')}
          </Button>
          <Button variant="ghost" icon="help" onClick={() => navigate('/support')}>
            {t('set.helpSupport')}
          </Button>
        </div>
      </main>
    </Screen>
  )
}
