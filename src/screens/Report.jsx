import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar, BottomNav } from '../components/Shell.jsx'
import { Button, SampleBanner, SafetyNote, Pill, EmptyState } from '../components/UI.jsx'
import { SuccessMark } from '../components/Illustrations.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

const STATUS_TONE = { carrier: 'caution', negative: 'ok', uncertain: 'neutral' }
const STATUS_LABEL = {
  carrier: 'res.carrierStatus',
  negative: 'res.notCarried',
  uncertain: 'res.uncertain',
}

/**
 * Report overview — the "Your Genetic Report" screen from the design.
 *
 * Printing: the browser's own print dialogue is used, which lets the
 * user save a PDF without pulling in a heavyweight PDF library. The
 * printed sheet includes the demonstration banner.
 */
export default function Report() {
  const user = useRequireAuth()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state } = useStore()

  if (!user) return null

  const hasResults = state.results.length > 0
  const lastUpdated = state.results[0]?.updatedAt

  return (
    <Screen>
      <AppBar title={t('rep.title')} onBack={() => navigate('/dashboard')} />

      <main className="flex-1 overflow-y-auto px-5 pb-4 pt-5">
        {/* Ready state, as in the reference */}
        <div className="flex flex-col items-center text-center animate-scale-in">
          <SuccessMark size={88} />
          <h2 className="mt-4 text-[22px] font-extrabold text-ink-900">
            {t('rep.allSet')}
          </h2>
          <p className="mt-1 text-[14px] text-ink-400">{t('rep.ready')}</p>
        </div>

        <div className="mt-5 flex flex-col gap-2.5">
          <Button
            size="lg"
            onClick={() => navigate(`/report/${state.results[0]?.id ?? ''}`)}
            disabled={!hasResults}
          >
            {t('act.viewReport')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon="download"
            onClick={() => window.print()}
            disabled={!hasResults}
          >
            {t('act.downloadPdf')}
          </Button>
        </div>

        <div className="mt-5">
          <SafetyNote text={t('rep.note')} />
        </div>

        <div className="mt-4">
          <SampleBanner />
        </div>

        {/* Summary figures */}
        {hasResults && (
          <div className="mt-5 grid grid-cols-3 gap-2.5 text-center">
            <div className="rounded-control border border-mint-200 bg-white py-3">
              <p className="text-[19px] font-extrabold text-ink-900">
                {state.results.length}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold leading-tight text-ink-400">
                {t('rep.testedCount')}
              </p>
            </div>
            <div className="rounded-control border border-mint-200 bg-white py-3">
              <p className="text-[19px] font-extrabold text-ink-900">
                {state.results.filter((r) => r.status === 'carrier').length}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold leading-tight text-ink-400">
                {t('rep.carrierCount')}
              </p>
            </div>
            <div className="rounded-control border border-mint-200 bg-white py-3">
              <p className="text-[19px] font-extrabold text-ink-900">
                {state.results.filter((r) => r.status === 'uncertain').length}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold leading-tight text-ink-400">
                {t('res.uncertain')}
              </p>
            </div>
          </div>
        )}

        {/* Individual findings */}
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="section-title">{t('rep.summary')}</h3>
            {lastUpdated && (
              <span className="text-[12px] font-semibold text-ink-300">
                {t('rep.updated')} {lastUpdated}
              </span>
            )}
          </div>

          {hasResults ? (
            <ul className="space-y-3">
              {state.results.map((result, i) => (
                <li key={result.id} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <button
                    type="button"
                    onClick={() => navigate(`/report/${result.id}`)}
                    className="flex w-full items-center gap-3.5 rounded-card border border-mint-200 bg-white p-4 text-start shadow-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
                        result.status === 'negative'
                          ? 'bg-brand-100 text-brand-700'
                          : result.status === 'uncertain'
                            ? 'bg-ink-50 text-ink-500'
                            : 'bg-caution-100 text-caution-600'
                      }`}
                    >
                      <Icon
                        name={
                          result.status === 'negative'
                            ? 'checkCircle'
                            : result.status === 'uncertain'
                              ? 'info'
                              : 'dna'
                        }
                        size={21}
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[14.5px] font-extrabold text-ink-900">
                          {lang === 'ar' ? result.summaryAr : result.summaryEn}
                        </span>
                      </span>
                      <span className="mt-1 flex flex-wrap items-center gap-1.5">
                        <Pill tone={STATUS_TONE[result.status]}>
                          {t(STATUS_LABEL[result.status])}
                        </Pill>
                        <Pill tone="sample">{t('rep.sampleTag')}</Pill>
                      </span>
                    </span>

                    <Icon
                      name={lang === 'ar' ? 'chevronLeft' : 'chevronRight'}
                      size={20}
                      className="shrink-0 text-ink-300"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState icon="file" title={t('rep.none')} />
          )}
        </div>

        <p className="mt-4 rounded-control bg-mint-100 px-4 py-3 text-[12px] leading-relaxed text-brand-800">
          {t('rep.disclaimer')}
        </p>
      </main>

      <BottomNav active="report" />
    </Screen>
  )
}
