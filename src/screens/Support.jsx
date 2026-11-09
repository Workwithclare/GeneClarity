import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, Pill } from '../components/UI.jsx'
import { CounsellorIllustration } from '../components/Illustrations.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import { counsellorDirectory } from '../data/demoData.js'

/**
 * Help & Support — matches the reference layout: title, subtitle, three
 * contact rows with the headset illustration floating to the right, and
 * a "Send a Message" button. Genetic counselling access (a required
 * screen) follows underneath.
 *
 * Every contact action here is inert: no appointment is booked and no
 * message is transmitted. The screen says so explicitly, because
 * implying a live clinical service that does not exist would be
 * misleading in a health context.
 */
const REASONS = ['sup.why1', 'sup.why2', 'sup.why3']

export default function Support() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()
  const [sent, setSent] = useState(false)

  if (!user) return null

  const handleContact = () => {
    // Demonstrates the intended flow without pretending to send anything.
    setSent(true)
    window.setTimeout(() => setSent(false), 3500)
  }

  const rows = [
    { icon: 'help', labelKey: 'sup.faq', onClick: () => navigate('/faqs') },
    { icon: 'mail', labelKey: 'sup.contact', onClick: handleContact },
    {
      icon: 'chat',
      labelKey: 'sup.liveChat',
      badge: 'sup.available',
      onClick: handleContact,
    },
  ]

  return (
    <Screen>
      <AppBar title="" onBack={() => navigate('/dashboard')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        {/* Title block, as in the reference */}
        <div className="text-center animate-fade-up">
          <h1 className="text-[24px] font-extrabold text-ink-900">
            {t('set.helpSupport')}
          </h1>
          <p className="mt-1 text-[14px] text-ink-400">{t('sup.helpSub')}</p>
        </div>

        {/* Contact rows with the floating headset illustration */}
        <section className="relative mt-5">
          <div className="divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white pe-28 shadow-card">
            {rows.map((row) => (
              <button
                key={row.labelKey}
                type="button"
                onClick={row.onClick}
                className="flex w-full items-center gap-3.5 px-4 py-4 pe-4 text-start transition-colors hover:bg-mint-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
                  <Icon name={row.icon} size={18} />
                </span>
                <span className="text-[14.5px] font-bold text-ink-900">
                  {t(row.labelKey)}
                </span>
                {row.badge && (
                  <span className="ms-auto">
                    <Pill tone="ok">{t(row.badge)}</Pill>
                  </span>
                )}
              </button>
            ))}
          </div>

          <span
            className="pointer-events-none absolute end-1 top-1/2 w-24 -translate-y-1/2 animate-fade-in"
            aria-hidden="true"
          >
            <CounsellorIllustration width={96} />
          </span>
        </section>

        {sent && (
          <div className="mt-4 flex items-start gap-2.5 rounded-card border border-brand-200 bg-mint-100 px-4 py-3.5 animate-fade-up">
            <span className="mt-0.5 shrink-0 text-brand-700">
              <Icon name="info" size={17} />
            </span>
            <p className="text-[13px] leading-snug text-brand-900">{t('sup.demoNote')}</p>
          </div>
        )}

        <div className="mt-4">
          <Button size="lg" icon="message" onClick={handleContact}>
            {t('sup.message')}
          </Button>
        </div>

        {/* ── Genetic counselling access ─────────────────────────── */}
        <h2 className="mt-8 section-title">{t('sup.title')}</h2>
        <p className="mt-1.5 text-[14px] leading-relaxed text-ink-500">{t('sup.lead')}</p>

        {/* Why counselling helps */}
        <section className="mt-4 rounded-card border border-brand-200 bg-mint-100 p-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
              <Icon name="heart" size={17} />
            </span>
            <h3 className="text-[15.5px] font-extrabold text-brand-800">
              {t('sup.whyTitle')}
            </h3>
          </div>
          <ul className="mt-3 space-y-2.5">
            {REASONS.map((reason) => (
              <li key={reason} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-brand-600">
                  <Icon name="checkCircle" size={17} />
                </span>
                <p className="text-[14px] leading-relaxed text-ink-700">{t(reason)}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Counsellor directory — explicitly illustrative */}
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="section-title">{t('sup.directoryTitle')}</h3>
            <Pill tone="sample">{t('nav.demo')}</Pill>
          </div>
          <ul className="space-y-3">
            {counsellorDirectory.map((c) => (
              <li
                key={c.id}
                className="flex items-center gap-3.5 rounded-card border border-mint-200 bg-white p-4 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-700 text-[13px] font-extrabold text-white">
                  {(lang === 'ar' ? c.nameAr : c.nameEn)
                    .split(' ')
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[14.5px] font-extrabold text-ink-900">
                    {lang === 'ar' ? c.nameAr : c.nameEn}
                  </p>
                  <p className="text-[12.5px] text-brand-700">
                    {lang === 'ar' ? c.roleAr : c.roleEn}
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-ink-400">
                    {lang === 'ar' ? c.focusAr : c.focusEn}
                  </p>
                </div>
                <Button variant="soft" size="sm" onClick={handleContact}>
                  {t('sup.book')}
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-2.5 text-[12px] leading-relaxed text-ink-400">
            {t('sup.directoryNote')}
          </p>
        </section>

        {/* Escalation card */}
        <div className="mt-5 flex items-center gap-3.5 rounded-card bg-brand-800 p-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/12 text-white">
            <Icon name="message" size={24} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-extrabold text-white">
              {t('faq.helpTitle')}
            </p>
            <p className="mt-0.5 text-[13px] text-brand-200">{t('faq.helpBody')}</p>
          </div>
        </div>

        <div className="mt-4">
          <SafetyNote text={t('sup.emergency')} />
        </div>
      </main>
    </Screen>
  )
}
