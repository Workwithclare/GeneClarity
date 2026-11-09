import { useNavigate } from 'react-router-dom'
import { Screen } from '../components/Shell.jsx'
import { Button, EmptyState } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/** Simple 404 so a mistyped route never strands the user. */
export default function NotFound() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <Screen white>
      <div className="flex flex-1 flex-col justify-center px-6">
        <EmptyState
          icon="help"
          title={t('err.title')}
          body={t('err.body')}
          action={
            <div className="mt-2 flex w-full max-w-xs flex-col gap-2">
              <Button onClick={() => navigate('/dashboard')}>
                {t('act.goToDashboard')}
              </Button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => navigate('/')}
              >
                {t('notice.backHome')}
              </button>
            </div>
          }
        />
      </div>
    </Screen>
  )
}
