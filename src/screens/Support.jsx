import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, Pill, SampleBanner, EmptyState } from '../components/UI.jsx'
import { CounsellorIllustration } from '../components/Illustrations.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import { counsellorDirectory } from '../data/demoData.js'

/**
 * Genetic counselling access + FAQ + support channels.
 *
 * Every contact action here is inert: no appointment is booked and no
 * message is transmitted. The screen says so explicitly, because
 * implying a live clinical service that does not exist would be
 * misleading in a health context.
 */
const FAQS = ['faq.q1', 'faq.q2', 'faq.q3', 'faq.q4']
const FAQ_ANSWERS = ['faq.a1', 'faq.a2', 'faq.a3', 'faq.a4']

const REASONS = ['sup.why1', 'sup.why2', 'sup.why3']

export default function Support() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)

  if (!user) return null

  const handleContact = () => {
    // Demonstrates the intended flow without pretending to send anything.
    setSent(true)
    window.setTimeout(() => setSent(false), 3500)
  }

  return (
    <Screen>
      <AppBar title={t('sup.title')} onBack={() => navigate('/dashboard')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        {/* Intro */}
        <div className="flex flex-col items-center text-center animate-fade-up">
          <CounsellorIllustration width={168} />
          <h1 className="mt-1 text-[22px] font-extrabold text-ink-900">
            {t('sup.title')}
          </h1>
          <p className="mt-1.5 max-w-sm text-[14px] leading-relaxed text-ink-500">
            {t('sup.lead')}
          </p>
        </div>

        <div className="mt-4">
          <SampleBanner />
        </div>

        {/* Why counselling helps */}
        <section className="mt-5 rounded-card border border-brand-200 bg-mint-100 p-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
              <Icon name="heart" size={17} />
            </span>
            <h2 className="text-[15.5px] font-extrabold text-brand-800">
              {t('sup.whyTitle')}
            </h2>
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

        {/* Contact options, as in the reference "Help & Support" screen */}
        <section className="mt-5">
          <div className="divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white shadow-card">
            {[
              { icon: 'help', labelKey: 'sup.faq', onClick: () => setOpenFaq(0) },
              { icon: 'mail', labelKey: 'sup.contact', onClick: handleContact },
              {
                icon: 'chat',
                labelKey: 'sup.liveChat',
                badge: 'sup.available',
                onClick: handleContact,
              },
            ].map((row) => (
              <button
                key={row.labelKey}
                type="button"
                onClick={row.onClick}
                className="menu-row focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
                  <Icon name={row.icon} size={18} />
                </span>
                <span className="flex-1 text-[14.5px] font-bold text-ink-900">
                  {t(row.labelKey)}
                </span>
                {row.badge && <Pill tone="ok">{t(row.badge)}</Pill>}
                <Icon
                  name={lang === 'ar' ? 'chevronLeft' : 'chevronRight'}
                  size={18}
                  className="shrink-0 text-ink-300"
                />
              </button>
            ))}
          </div>
        </section>

        {sent && (
          <div className="mt-4 flex items-start gap-2.5 rounded-card border border-brand-200 bg-mint-100 px-4 py-3.5 animate-fade-up">
            <span className="mt-0.5 shrink-0 text-brand-700">
              <Icon name="info" size={17} />
            </span>
            <p className="text-[13px] leading-snug text-brand-900">{t('sup.demoNote')}</p>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2">
          <Button size="lg" icon="message" onClick={handleContact}>
            {t('sup.message')}
          </Button>
        </div>

        {/* Counsellor directory — explicitly illustrative */}
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="section-title">{t('sup.directoryTitle')}</h2>
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

        {/* FAQ accordion, as in the reference */}
        <section className="mt-6">
          <h2 className="section-title">{t('faq.title')}</h2>
          <div className="relative mt-3">
            <span className="pointer-events-none absolute inset-y-0 start-3.5 flex items-center text-ink-300">
              <Icon name="search" size={17} />
            </span>
            <input
              type="search"
              placeholder={t('faq.search')}
              aria-label={t('faq.search')}
              className="field ps-11"
            />
          </div>

          <div className="mt-3 divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white shadow-card">
            {FAQS.map((qKey, i) => {
              const open = openFaq === i
              return (
                <div key={qKey}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-start transition-colors hover:bg-mint-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >
                    <span className="text-[14.5px] font-bold text-ink-900">
                      {t(qKey)}
                    </span>
                    <Icon
                      name="chevronDown"
                      size={18}
                      className={`shrink-0 text-ink-400 transition-transform duration-200 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-250 ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-[13.5px] leading-relaxed text-ink-500">
                        {t(FAQ_ANSWERS[i])}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
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
