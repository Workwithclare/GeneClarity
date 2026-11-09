import { useNavigate } from 'react-router-dom'
import { SuccessMark } from '../components/Illustrations.jsx'
import { Button, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Completion screen — the reference design's "You're all set!" moment,
 * shown after a demonstration account is created.
 */
export default function Done() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <div className="screen bg-white">
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <div className="animate-scale-in">
          <SuccessMark size={120} />
        </div>

        <h1 className="mt-7 text-[26px] font-extrabold text-ink-900 animate-fade-up">
          {t('done.title')}
        </h1>
        <p className="mt-2 max-w-xs text-[14.5px] leading-relaxed text-ink-500 animate-fade-up">
          {t('done.body')}
        </p>

        <div className="mt-8 w-full max-w-xs animate-fade-up">
          <Button size="lg" onClick={() => navigate('/dashboard', { replace: true })}>
            {t('act.goToDashboard')}
          </Button>
        </div>

        <p className="mt-6">
          <Pill tone="sample">{t('nav.demo')}</Pill>
        </p>
      </div>
    </div>
  )
}
