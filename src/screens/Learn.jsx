import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar, BottomNav } from '../components/Shell.jsx'
import { SafetyNote, EmptyState, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import { learnTopics } from '../data/demoData.js'

const CATEGORIES = [
  { key: 'all', labelKey: 'learn.all' },
  { key: 'basics', labelKey: 'learn.basics' },
  { key: 'conditions', labelKey: 'learn.conditions' },
  { key: 'counselling', labelKey: 'learn.counselling' },
]

/**
 * Education library. Content is short, general and deliberately free of
 * individual medical advice — see docs/05 and docs/10 for how the copy
 * is bounded.
 */
export default function Learn() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const topics = useMemo(() => {
    const q = query.trim().toLowerCase()
    return learnTopics.filter((topic) => {
      const inCategory = category === 'all' || topic.category === category
      if (!inCategory) return false
      if (!q) return true
      const haystack = [
        topic.titleEn,
        topic.titleAr,
        topic.excerptEn,
        topic.excerptAr,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, category])

  if (!user) return null

  return (
    <Screen>
      <AppBar title={t('learn.title')} onBack={() => navigate('/dashboard')} />

      <main className="flex-1 overflow-y-auto px-5 pb-4 pt-4">
        <p className="text-[13.5px] leading-relaxed text-ink-500">
          {t('learn.subtitle')}
        </p>

        {/* Search */}
        <div className="relative mt-4">
          <span className="pointer-events-none absolute inset-y-0 start-3.5 flex items-center text-ink-300">
            <Icon name="search" size={18} />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('learn.search')}
            aria-label={t('learn.search')}
            className="field ps-11"
          />
        </div>

        {/* Category chips */}
        <div className="hide-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setCategory(cat.key)}
              aria-pressed={category === cat.key}
              className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-bold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${
                category === cat.key
                  ? 'bg-brand-700 text-white shadow-button'
                  : 'border border-ink-100 bg-white text-ink-500 hover:border-brand-300'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <SafetyNote text={t('learn.educationOnly')} />
        </div>

        {/* Topic list */}
        {topics.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {topics.map((topic, i) => (
              <li key={topic.id} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <button
                  type="button"
                  onClick={() => navigate(`/learn/${topic.id}`)}
                  className="flex w-full items-start gap-3.5 rounded-card border border-mint-200 bg-white p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                >
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
                    <Icon
                      name={
                        topic.category === 'conditions'
                          ? 'dna'
                          : topic.category === 'counselling'
                            ? 'message'
                            : 'book'
                      }
                      size={19}
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-extrabold leading-snug text-ink-900">
                      {lang === 'ar' ? topic.titleAr : topic.titleEn}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-ink-400">
                      {lang === 'ar' ? topic.excerptAr : topic.excerptEn}
                    </span>
                    <span className="mt-2 flex items-center gap-2">
                      <Pill tone="neutral">
                        <Icon name="clock" size={12} />
                        {topic.readMins} {t('learn.readTime')}
                      </Pill>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon="search" title={t('learn.empty')} />
        )}
      </main>

      <BottomNav active="tips" />
    </Screen>
  )
}
