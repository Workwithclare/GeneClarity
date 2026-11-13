import { useParams, useNavigate, Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SampleBanner, SafetyNote, Pill, EmptyState } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

const STATUS_TITLE = {
  carrier: 'res.carrierStatus',
  negative: 'res.notCarried',
  uncertain: 'res.uncertain',
}

// Each sample finding links to its matching educational topic so the
// "Learn More" button lands somewhere relevant. Keyed on `conditionId`
// (not the record id) because synced ids carry an account suffix.
const TOPIC_BY_CONDITION = {
  'sickle-cell': 'sickle-cell',
  'tay-sachs': 'carrier-status',
  'cystic-fibrosis': 'screening-counselling',
}

/**
 * Plain-language result explanation — the "Key Insights" screen.
 *
 * ── Medical safety rules enforced on this screen ───────────────────
 * • Every finding leads with what it means, in ordinary words.
 * • Couple-level consequences are always described as chances, never
 *   as outcomes, and are deferred to a qualified counsellor.
 * • Uncertain findings are labelled as incomplete knowledge and are
 *   explicitly marked as something not to act on.
 * • The screen ends by pointing at a real professional.
 * ───────────────────────────────────────────────────────────────────
 */
export default function ResultDetail() {
  const { resultId } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state } = useStore()
  const user = useRequireAuth()

  if (!user) return null

  const result = state.results.find((r) => r.id === resultId)

  if (!result) {
    return (
      <Screen>
        <AppBar title={t('res.keyInsights')} onBack={() => navigate('/report')} />
        <div className="flex flex-1 flex-col justify-center">
          <EmptyState
            icon="file"
            title={t('rep.none')}
            action={
              <Button variant="soft" size="sm" onClick={() => navigate('/report')}>
                {t('act.viewReport')}
              </Button>
            }
          />
        </div>
      </Screen>
    )
  }

  const isAr = lang === 'ar'
  const summary = isAr ? result.summaryAr : result.summaryEn
  const plain = isAr ? result.plainAr : result.plainEn
  const forYou = isAr ? result.forYouAr : result.forYouEn
  const forCouple = isAr ? result.forCoupleAr : result.forCoupleEn

  const stepLabel = {
    read: 'res.step1',
    counsellor: 'res.step2',
    'no-panic': 'res.step3',
  }

  return (
    <Screen>
      <AppBar
        title={t('res.keyInsights')}
        onBack={() => navigate('/report')}
        right={<Pill tone="sample">{t('rep.sampleTag')}</Pill>}
      />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <div className="animate-fade-up">
          <SampleBanner />
        </div>

        {/* Headline finding — icon, status name, plain sentence, as in
            the reference "Key Insights" card. */}
        <section className="mt-4 rounded-card border border-brand-200 bg-mint-100 p-5 text-center animate-fade-up">
          <span className="mx-auto flex justify-center text-brand-700">
            <Icon name="dna" size={46} strokeWidth={1.6} />
          </span>
          <h1 className="mt-2 text-[17px] font-extrabold text-ink-900">
            {t(STATUS_TITLE[result.status])}
          </h1>
          <p className="mt-1.5 text-[15px] font-semibold leading-snug text-ink-700">
            {summary}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Pill tone="neutral">
              {result.gene} · {result.trait}
            </Pill>
            <Pill tone="sample">{t('rep.sampleTag')}</Pill>
          </div>
        </section>

        {/* Plain-language explanation */}
        <section className="mt-4 rounded-card border border-mint-200 bg-white p-5 shadow-card animate-fade-up">
          <h2 className="text-[16px] font-extrabold text-ink-900">
            {t('res.whatThisMeans')}
          </h2>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-700">{plain}</p>

          <div className="mt-4 border-t border-ink-100 pt-4">
            <p className="eyebrow">{t('res.plainTitle')}</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700">{forYou}</p>
          </div>

          {/* "Learn More" leads into the matching educational topic. */}
          <Link
            to={`/learn/${TOPIC_BY_CONDITION[result.conditionId] || 'carrier-status'}`}
            className="btn btn--secondary mt-4"
          >
            {t('act.learnMore')}
            <Icon name="arrowRight" size={18} />
          </Link>
        </section>

        {/* Uncertainty block — only when the finding is uncertain */}
        {result.status === 'uncertain' && (
          <section className="mt-4 rounded-card border border-ink-100 bg-ink-50 p-5 animate-fade-up">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink-500 shadow-sm">
                <Icon name="info" size={17} />
              </span>
              <h2 className="text-[16px] font-extrabold text-ink-900">
                {t('res.uncertainTitle')}
              </h2>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
              {t('res.uncertainBody')}
            </p>
          </section>
        )}

        {/* Couple framing — deliberately cautious */}
        <section className="mt-4 rounded-card border border-mint-200 bg-white p-5 shadow-card animate-fade-up">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-brand-700">
              <Icon name="users" size={17} />
            </span>
            <h2 className="text-[16px] font-extrabold text-ink-900">
              {t('res.forCouple')}
            </h2>
          </div>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">{forCouple}</p>

          <div className="mt-4 flex gap-2.5 rounded-control bg-caution-100 px-3.5 py-3">
            <span className="mt-0.5 shrink-0 text-caution-600">
              <Icon name="alert" size={16} />
            </span>
            <p className="text-[12.5px] font-semibold leading-snug text-caution-600">
              {t('cc.never')}
            </p>
          </div>

          <Link
            to="/couple"
            className="btn btn--secondary mt-4"
          >
            <Icon name="users" size={18} />
            {t('cc.title')}
          </Link>
        </section>

        {/* Next steps */}
        <section className="mt-4 rounded-card border border-mint-200 bg-white p-5 shadow-card animate-fade-up">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-brand-700">
              <Icon name="check" size={17} />
            </span>
            <h2 className="text-[16px] font-extrabold text-ink-900">
              {t('res.nextSteps')}
            </h2>
          </div>
          <ol className="mt-3 space-y-2.5">
            {result.nextSteps.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-700 text-[11px] font-extrabold text-white">
                  {i + 1}
                </span>
                <p className="text-[14px] leading-relaxed text-ink-700">
                  {t(stepLabel[step])}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Glossary */}
        <section className="mt-4 rounded-card border border-mint-200 bg-white p-5 shadow-card animate-fade-up">
          <h2 className="flex items-center gap-2.5 text-[16px] font-extrabold text-ink-900">
            <span className="text-brand-700">
              <Icon name="book" size={18} />
            </span>
            {t('res.glossary')}
          </h2>
          <dl className="mt-3 space-y-3">
            <div>
              <dt className="text-[14px] font-extrabold text-brand-800">
                {t('res.gCarrier')}
              </dt>
              <dd className="mt-1 text-[13.5px] leading-relaxed text-ink-500">
                {t('res.gCarrierDef')}
              </dd>
            </div>
            <div>
              <dt className="text-[14px] font-extrabold text-brand-800">
                {t('res.gRecessive')}
              </dt>
              <dd className="mt-1 text-[13.5px] leading-relaxed text-ink-500">
                {t('res.gRecessiveDef')}
              </dd>
            </div>
            <div>
              <dt className="text-[14px] font-extrabold text-brand-800">
                {t('res.gVariant')}
              </dt>
              <dd className="mt-1 text-[13.5px] leading-relaxed text-ink-500">
                {t('res.gVariantDef')}
              </dd>
            </div>
          </dl>
        </section>

        <div className="mt-4">
          <SafetyNote text={t('res.safety')} />
        </div>

        {/* Escalation to a real professional */}
        <div className="mt-4 rounded-card bg-brand-800 p-5 text-center animate-fade-up">
          <h2 className="text-[17px] font-extrabold text-white">
            {t('faq.helpTitle')}
          </h2>
          <p className="mt-1 text-[13.5px] text-brand-200">{t('faq.helpBody')}</p>
          <Link to="/support" className="btn btn--secondary mt-4">
            <Icon name="message" size={18} />
            {t('act.getSupport')}
          </Link>
        </div>

        <p className="mt-4 text-center text-[11.5px] leading-snug text-ink-300">
          {result.updatedAt ? `${t('rep.updated')} ${result.updatedAt}` : ''} ·{' '}
          {t('rep.sampleTag')}
        </p>
      </main>
    </Screen>
  )
}
