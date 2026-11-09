import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Button, Tick, SafetyNote, EmptyState } from '../components/UI.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'

/**
 * Privacy and consent gate.
 *
 * Four plain-language commitments must be acknowledged before an account
 * can be created. Declining is a first-class path: it leads to a calm
 * exit screen rather than a dead end or a guilt-trip.
 */
const POINTS = [
  { icon: 'lock', titleKey: 'consent.c1t', bodyKey: 'consent.c1b' },
  { icon: 'users', titleKey: 'consent.c2t', bodyKey: 'consent.c2b' },
  { icon: 'shield', titleKey: 'consent.c3t', bodyKey: 'consent.c3b' },
  { icon: 'file', titleKey: 'consent.c4t', bodyKey: 'consent.c4b' },
]

export default function Consent() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { dispatch } = useStore()

  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [declined, setDeclined] = useState(false)

  const handleAgree = () => {
    if (!agreed) {
      setError(t('consent.required'))
      return
    }
    setError('')
    dispatch({ type: 'ACCEPT_CONSENT' })
    navigate('/register')
  }

  if (declined) {
    return (
      <div className="screen bg-white">
        <div className="flex flex-1 flex-col justify-center px-6">
          <EmptyState
            icon="shield"
            title={t('consent.declinedTitle')}
            body={t('consent.declinedBody')}
            action={
              <div className="mt-2 flex w-full max-w-xs flex-col gap-2">
                <Button onClick={() => setDeclined(false)}>{t('act.back')}</Button>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => navigate('/welcome')}
                >
                  {t('notice.backHome')}
                </button>
              </div>
            }
          />
        </div>
      </div>
    )
  }

  return (
    <div className="screen bg-white">
      <header className="flex items-center justify-between px-4 pt-5">
        <button
          type="button"
          onClick={() => navigate('/onboarding')}
          aria-label={t('act.back')}
          className="grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <Icon name="chevronLeft" size={22} />
        </button>
        <LanguageToggle />
        <span className="min-w-10" />
      </header>

      <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-8">
        <div className="mt-3 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-700">
            <Icon name="shield" size={30} strokeWidth={1.7} />
          </span>
          <h1 className="mt-4 text-[24px] font-extrabold text-ink-900">
            {t('consent.title')}
          </h1>
          <p className="mx-auto mt-2 max-w-sm text-[14.5px] leading-relaxed text-ink-500">
            {t('consent.lead')}
          </p>
        </div>

        {/* The four commitments */}
        <ul className="mt-6 space-y-3">
          {POINTS.map((point, i) => (
            <li
              key={point.titleKey}
              className="flex gap-3.5 rounded-card border border-mint-200 bg-mint-50 p-4 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
                <Icon name={point.icon} size={19} />
              </span>
              <div className="min-w-0">
                <h2 className="text-[14.5px] font-extrabold text-ink-900">
                  {t(point.titleKey)}
                </h2>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
                  {t(point.bodyKey)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <SafetyNote text={t('res.safety')} className="mt-5" />

        <div className="mt-6">
          <Tick
            id="consent-agree"
            checked={agreed}
            onChange={(v) => {
              setAgreed(v)
              if (v) setError('')
            }}
            error={error}
          >
            {t('consent.agree')}
          </Tick>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-6">
          <Button size="lg" onClick={handleAgree}>
            {t('act.continue')}
          </Button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => setDeclined(true)}
          >
            {t('consent.decline')}
          </button>
        </div>
      </div>
    </div>
  )
}
