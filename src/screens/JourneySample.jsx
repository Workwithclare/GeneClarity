import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import { sampleReport } from '../data/journeyContent.js'

/**
 * Sample document — an ORIGINAL SYNTHETIC screening report rendered
 * in-app for demonstration.
 *
 * ─────────────────────────────────────────────────────────────────
 * • Clearly labelled synthetic (badge + prominent note): not a real
 *   report, no real patient data, not a medical record (docs/10 §3).
 * • Built into the app — it is NOT stored in the private document
 *   bucket, and it is visibly distinguished from user uploads.
 * • It demonstrates what a report can look like and how to read the
 *   labels; it makes no claim about any real person.
 * ─────────────────────────────────────────────────────────────────
 */
export default function JourneySample() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()

  if (!user) return null

  const s = sampleReport
  const statusTone = { carrier: 'caution', negative: 'ok', uncertain: 'neutral' }

  return (
    <Screen>
      <AppBar title={t('journey.sampleTitle')} onBack={() => navigate('/journey/documents')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        {/* The distinction user uploads vs this built-in sample */}
        <div className="flex items-center gap-2 animate-fade-up">
          <Pill tone="sample">{lang === 'ar' ? s.badgeAr : s.badgeEn}</Pill>
          <span className="text-[12.5px] text-ink-400">{t('journey.sampleHint')}</span>
        </div>

        <div className="mt-3 rounded-card border border-caution-400/40 bg-caution-100 px-4 py-3">
          <div className="flex gap-2.5">
            <span className="mt-0.5 shrink-0 text-caution-600">
              <Icon name="alert" size={17} />
            </span>
            <p className="text-[12.5px] leading-snug text-caution-600">
              {lang === 'ar' ? s.noteAr : s.noteEn}
            </p>
          </div>
        </div>

        {/* The synthetic document itself */}
        <article className="mt-4 rounded-card border border-ink-100 bg-white p-5 shadow-card animate-fade-up">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-wide text-ink-300">
                {lang === 'ar' ? s.badgeAr : s.badgeEn}
              </p>
              <h1 className="mt-1 text-[19px] font-extrabold leading-tight text-ink-900">
                {lang === 'ar' ? s.titleAr : s.titleEn}
              </h1>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
              <Icon name="dna" size={22} />
            </span>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-ink-100 pt-4">
            {s.fields.map((f) => (
              <div key={f.labelEn}>
                <dt className="text-[11.5px] text-ink-300">
                  {lang === 'ar' ? f.labelAr : f.labelEn}
                </dt>
                <dd className="text-[13px] font-bold text-ink-900">
                  {lang === 'ar' ? f.valueAr : f.valueEn}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 space-y-3">
            {s.rows.map((row) => (
              <div
                key={row.gene}
                className="rounded-control border border-ink-100 bg-mint-50/60 p-3.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[13.5px] font-extrabold text-ink-900">
                    {row.gene}
                  </span>
                  <Pill tone={statusTone[row.status] || 'neutral'}>
                    {lang === 'ar' ? row.findingAr : row.findingEn}
                  </Pill>
                </div>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
                  {lang === 'ar' ? row.plainAr : row.plainEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-ink-100 pt-3">
            <p className="text-[11.5px] leading-relaxed text-ink-400">
              {lang === 'ar' ? s.footerAr : s.footerEn}
            </p>
          </div>
        </article>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            variant="secondary"
            icon="file"
            onClick={() => navigate('/journey/documents')}
          >
            {t('journey.backToDocs')}
          </Button>
          <Button variant="ghost" icon="book" onClick={() => navigate('/learn')}>
            {t('journey.educationLink')}
          </Button>
        </div>

        <div className="mt-5">
          <SafetyNote text={t('notice.notDiagnostic')} />
        </div>
      </main>
    </Screen>
  )
}
