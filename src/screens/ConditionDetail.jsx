import { useNavigate, useParams, Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { SafetyNote, EmptyState, Pill, Button } from '../components/UI.jsx'
import {
  CellsArt,
  DnaArt,
  InheritanceArt,
  ProbabilityArt,
  FamilyIllustration,
  CounsellorIllustration,
} from '../components/Illustrations.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import { learnTopics } from '../data/demoData.js'

/**
 * Single education lesson.
 *
 * Every lesson follows the same simple structure:
 *   1. "What does this mean?"  — a short, plain-language explanation
 *   2. An optional diagram, where one genuinely helps
 *   3. A few optional information sections (only where they add value)
 *   4. "What should I remember?" — a three-point summary
 *
 * The copy is general information with an explicit "education only"
 * boundary, and the page ends by offering a route to a qualified
 * counsellor rather than any conclusion about the reader.
 */

// Diagrams are optional — a lesson only shows one where it helps.
const ART = {
  cells: CellsArt,
  dna: DnaArt,
  inheritance: InheritanceArt,
  probability: ProbabilityArt,
  family: FamilyIllustration,
  counsellor: CounsellorIllustration,
}

const CATEGORY_LABEL = {
  basics: 'learn.basics',
  conditions: 'learn.conditions',
  counselling: 'learn.counselling',
}

/** Optional information section — rendered only when a lesson has one. */
function InfoCard({ icon, title, text, list }) {
  return (
    <section className="mt-4 rounded-card border border-mint-200 bg-white p-5 shadow-card">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-brand-700">
          <Icon name={icon} size={17} />
        </span>
        <h2 className="text-[15.5px] font-extrabold text-ink-900">{title}</h2>
      </div>
      {text && <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">{text}</p>}
      {list && (
        <ul className="mt-3 space-y-2">
          {list.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-700"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function ConditionDetail() {
  const { conditionId } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const user = useRequireAuth()

  const topic = learnTopics.find((x) => x.id === conditionId)
  const related = learnTopics
    .filter((x) => x.id !== conditionId && x.category === topic?.category)
    .slice(0, 2)

  if (!user) return null

  if (!topic) {
    return (
      <Screen>
        <AppBar title={t('learn.title')} onBack={() => navigate('/learn')} />
        <div className="flex flex-1 flex-col justify-center">
          <EmptyState
            icon="book"
            title={t('learn.empty')}
            action={
              <Button variant="soft" size="sm" onClick={() => navigate('/learn')}>
                {t('act.back')}
              </Button>
            }
          />
        </div>
      </Screen>
    )
  }

  const isAr = lang === 'ar'
  const title = isAr ? topic.titleAr : topic.titleEn
  const mean = isAr ? topic.meanAr : topic.meanEn
  const remember = isAr ? topic.rememberAr : topic.rememberEn
  const example = isAr ? topic.exampleAr : topic.exampleEn
  const important = isAr ? topic.importantAr : topic.importantEn
  const misunderstanding = isAr
    ? topic.misunderstandingAr
    : topic.misunderstandingEn
  const screening = isAr ? topic.screeningAr : topic.screeningEn
  const questions = isAr ? topic.questionsAr : topic.questionsEn
  const Art = topic.art ? ART[topic.art] : null

  return (
    <Screen>
      <AppBar
        title={t('learn.title')}
        onBack={() => navigate('/learn')}
        right={
          <Pill tone="neutral">
            {topic.readMins} {t('learn.readTime')}
          </Pill>
        }
      />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-5">
        <p className="eyebrow">{t(CATEGORY_LABEL[topic.category])}</p>

        <h1 className="mt-2 text-[25px] font-extrabold leading-tight text-ink-900">
          {title}
        </h1>

        <div className="mt-4">
          <SafetyNote text={t('learn.educationOnly')} />
        </div>

        {/* 1. What does this mean? */}
        <section className="mt-4">
          <h2 className="text-[16.5px] font-extrabold text-ink-900">
            {t('learn.whatMean')}
          </h2>
          <div className="mt-2.5 space-y-3">
            {mean.map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-ink-700 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* 2. Diagram — only where the lesson actually uses one */}
        {Art && (
          <div className="mt-5 flex justify-center rounded-card border border-mint-200 bg-white py-4 shadow-card">
            {/* max-w-full keeps the diagram inside the card on narrow phones */}
            <Art className="max-w-full h-auto" />
          </div>
        )}

        {/* 3. Optional information sections — only where they help */}
        {important && (
          <InfoCard icon="info" title={t('learn.important')} text={important} />
        )}
        {misunderstanding && (
          <InfoCard
            icon="alert"
            title={t('learn.misunderstanding')}
            text={misunderstanding}
          />
        )}
        {example && (
          <InfoCard icon="sparkle" title={t('learn.example')} text={example} />
        )}
        {screening && (
          <InfoCard
            icon="shield"
            title={t('learn.screeningMean')}
            text={screening}
          />
        )}
        {questions && (
          <InfoCard
            icon="help"
            title={t('learn.questions')}
            list={questions}
          />
        )}

        {/* 4. What should I remember? */}
        <section className="mt-5 rounded-card border border-brand-200 bg-mint-100 p-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
              <Icon name="checkCircle" size={17} />
            </span>
            <h2 className="text-[15.5px] font-extrabold text-brand-800">
              {t('learn.remember')}
            </h2>
          </div>
          <ul className="mt-3 space-y-2.5">
            {remember.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[14.5px] leading-relaxed text-brand-900"
              >
                <span className="mt-0.5 shrink-0 text-brand-700">
                  <Icon name="check" size={15} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Related topics */}
        {related.length > 0 && (
          <section className="mt-6">
            <h2 className="section-title">{t('learn.related')}</h2>
            <ul className="mt-3 space-y-2.5">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    to={`/learn/${r.id}`}
                    className="flex items-center justify-between gap-3 rounded-control border border-mint-200 bg-white px-4 py-3.5 transition-colors hover:border-brand-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >
                    <span className="text-[14.5px] font-bold text-ink-900">
                      {isAr ? r.titleAr : r.titleEn}
                    </span>
                    <Icon
                      name={isAr ? 'chevronLeft' : 'chevronRight'}
                      size={18}
                      className="shrink-0 text-ink-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Route to a professional */}
        <div className="mt-6 rounded-card bg-brand-800 p-5 text-center">
          <h2 className="text-[16.5px] font-extrabold text-white">
            {t('faq.helpTitle')}
          </h2>
          <p className="mt-1 text-[13.5px] text-brand-200">{t('faq.helpBody')}</p>
          <Link to="/support" className="btn btn--secondary mt-4">
            <Icon name="message" size={18} />
            {t('act.getSupport')}
          </Link>
        </div>
      </main>
    </Screen>
  )
}