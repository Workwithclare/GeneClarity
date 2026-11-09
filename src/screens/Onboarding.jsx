import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Button } from '../components/UI.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'

/**
 * Three-step walkthrough matching the reference's "What is GeneClarity?"
 * screen and its page dots. Each step carries the same three-item
 * structure so the layout stays consistent as the copy changes.
 */
const STEPS = [
  {
    icon: 'dna',
    titleKey: 'onb.whatTitle',
    bodyKey: 'onb.whatBody',
    items: [
      { icon: 'shield', labelKey: 'onb.f1' },
      { icon: 'info', labelKey: 'onb.f2' },
      { icon: 'heart', labelKey: 'onb.f3' },
    ],
  },
  {
    icon: 'lock',
    titleKey: 'onb.privacyTitle',
    bodyKey: 'onb.privacyBody',
    items: [
      { icon: 'user', labelKey: 'onb.p1' },
      { icon: 'users', labelKey: 'onb.p2' },
      { icon: 'refresh', labelKey: 'onb.p3' },
    ],
  },
  {
    icon: 'shield',
    titleKey: 'onb.safetyTitle',
    bodyKey: 'onb.safetyBody',
    items: [
      { icon: 'message', labelKey: 'onb.s1' },
      { icon: 'alert', labelKey: 'onb.s2' },
      { icon: 'users', labelKey: 'onb.s3' },
    ],
  },
]

export default function Onboarding() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { dispatch } = useStore()
  const [index, setIndex] = useState(0)

  const step = STEPS[index]
  const isLast = index === STEPS.length - 1

  const handleNext = () => {
    if (isLast) {
      dispatch({ type: 'COMPLETE_ONBOARDING' })
      navigate('/consent')
    } else {
      setIndex((i) => i + 1)
    }
  }

  return (
    <div className="screen bg-white">
      {/* Header: back, language, progress */}
      <header className="flex items-center justify-between px-4 pt-5">
        <button
          type="button"
          onClick={() => (index === 0 ? navigate('/welcome') : setIndex((i) => i - 1))}
          aria-label={t('act.back')}
          className="grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <Icon name={lang === 'ar' ? 'chevronRight' : 'chevronLeft'} size={22} />
        </button>

        <LanguageToggle />

        <span className="min-w-10 text-end text-[12.5px] font-bold text-ink-300">
          {t('onb.step')} {index + 1} {t('onb.of')} {STEPS.length}
        </span>
      </header>

      <div className="flex flex-1 flex-col px-6 pt-6" key={index}>
        {/* Step icon */}
        <div className="mx-auto animate-scale-in" key={`icon-${index}`}>
          <span className="grid h-20 w-20 place-items-center rounded-full bg-mint-100 text-brand-700">
            <Icon name={step.icon} size={38} strokeWidth={1.6} />
          </span>
        </div>

        <div className="mt-6 text-center animate-fade-up" key={`copy-${index}`}>
          <h1 className="text-[23px] font-extrabold leading-tight text-ink-900">
            {t(step.titleKey)}
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-500">
            {t(step.bodyKey)}
          </p>
        </div>

        {/* Feature list */}
        <ul className="mt-7 space-y-3.5">
          {step.items.map((item, i) => (
            <li
              key={item.labelKey}
              className="flex items-center gap-3.5 animate-fade-up"
              style={{ animationDelay: `${80 + i * 70}ms` }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                <Icon name={item.icon} size={20} />
              </span>
              <span className="text-[15px] font-semibold leading-snug text-ink-700">
                {t(item.labelKey)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pb-8 pt-8">
          {/* Page dots */}
          <div className="mb-5 flex justify-center gap-2" aria-hidden="true">
            {STEPS.map((s, i) => (
              <span
                key={s.titleKey}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-brand-700' : 'w-2 bg-ink-200'
                }`}
              />
            ))}
          </div>

          <Button size="lg" iconEnd="arrowRight" onClick={handleNext}>
            {t('act.next')}
          </Button>

          {!isLast && (
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'COMPLETE_ONBOARDING' })
                navigate('/consent')
              }}
              className="btn btn--ghost mt-2"
            >
              {t('act.skip')}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
