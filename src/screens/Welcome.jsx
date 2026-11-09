import { useNavigate } from 'react-router-dom'
import { LogoLockup } from '../components/Logo.jsx'
import { FamilyIllustration } from '../components/Illustrations.jsx'
import { Button } from '../components/UI.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/** Welcome screen — the front door described in the reference design. */
export default function Welcome() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <div className="screen relative overflow-hidden bg-white">
      {/* Soft brand wash behind the illustration */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[62%]"
        style={{
          background:
            'linear-gradient(180deg, #F4FBF7 0%, #E6F5EF 55%, rgba(255,255,255,0) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Language switch, top-right as in the reference */}
      <div className="relative z-10 flex justify-end px-5 pt-5">
        <LanguageToggle />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-6 pb-8">
        <div className="mt-2">
          <LogoLockup markSize={68} showTagline={false} />
        </div>

        <div className="mt-4 text-center">
          <h1 className="text-[26px] font-extrabold leading-tight text-ink-900">
            {t('brand.promise1')}{' '}
            <span className="text-brand-700">{t('brand.promise2')}</span>
          </h1>
          <p className="mx-auto mt-2 max-w-[19rem] text-[14.5px] leading-relaxed text-ink-500">
            {t('brand.promiseSub')}
          </p>
        </div>

        <div className="mt-2 flex justify-center">
          <FamilyIllustration width={300} />
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-4">
          <Button size="lg" iconEnd="arrowRight" onClick={() => navigate('/onboarding')}>
            {t('act.getStarted')}
          </Button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="btn btn--ghost"
          >
            {t('act.signIn')}
          </button>
        </div>

        <p className="mt-5 text-center text-[11.5px] leading-snug text-ink-300">
          {t('notice.notDiagnostic')} · {t('notice.sampleHeading')}
        </p>
      </div>
    </div>
  )
}
