import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, EmptyState } from '../components/UI.jsx'
import { CounsellorIllustration } from '../components/Illustrations.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const FAQS = ['faq.q1', 'faq.q2', 'faq.q3', 'faq.q4']
const FAQ_ANSWERS = ['faq.a1', 'faq.a2', 'faq.a3', 'faq.a4']

/**
 * Frequently Asked Questions — search field, accordion, and the
 * counsellor help card, exactly as laid out in the reference design.
 *
 * The answers are general education, and the safety note at the bottom
 * says so. Escalation goes to a real professional (the Support screen).
 */
export default function Faq() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(0)

  const items = FAQS.map((qKey, i) => ({
    qKey,
    aKey: FAQ_ANSWERS[i],
    q: t(qKey),
    a: t(FAQ_ANSWERS[i]),
  })).filter(
    (item) =>
      !query.trim() ||
      item.q.toLowerCase().includes(query.trim().toLowerCase()) ||
      item.a.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <Screen>
      <AppBar title={t('faq.title')} onBack={() => navigate('/dashboard')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        {/* Search */}
        <div className="relative animate-fade-up">
          <span className="pointer-events-none absolute inset-y-0 start-3.5 flex items-center text-ink-300">
            <Icon name="search" size={17} />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('faq.search')}
            aria-label={t('faq.search')}
            className="field ps-11"
          />
        </div>

        {/* Accordion */}
        {items.length > 0 ? (
          <div className="mt-4 divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white shadow-card">
            {items.map((item, i) => {
              const isOpen = open === FAQS.indexOf(item.qKey)
              return (
                <div key={item.qKey} className="animate-fade-up" style={{ animationDelay: `${i * 55}ms` }}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : FAQS.indexOf(item.qKey))}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-start transition-colors hover:bg-mint-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >
                    <span className="text-[14.5px] font-bold text-ink-900">{item.q}</span>
                    <Icon
                      name="chevronDown"
                      size={18}
                      className={`shrink-0 text-ink-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-250 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-[13.5px] leading-relaxed text-ink-500">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <EmptyState icon="search" title={t('faq.noResults')} />
        )}

        {/* Counsellor help card */}
        <div className="mt-5 flex items-center gap-3.5 rounded-card border border-brand-200 bg-mint-100 p-4 animate-fade-up">
          <CounsellorIllustration width={84} className="shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-extrabold text-ink-900">{t('faq.helpTitle')}</p>
            <p className="mt-0.5 text-[13px] leading-snug text-ink-500">
              {t('faq.helpBody')}
            </p>
            <Button size="sm" className="mt-3" onClick={() => navigate('/support')}>
              {t('act.getSupport')}
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <SafetyNote text={t('faq.safety')} />
        </div>
      </main>
    </Screen>
  )
}
