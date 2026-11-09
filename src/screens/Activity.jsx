import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { EmptyState, SafetyNote, Pill } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

const KIND_META = {
  signedIn: { icon: 'user', tone: 'bg-brand-100 text-brand-700' },
  consentGranted: { icon: 'users', tone: 'bg-brand-100 text-brand-700' },
  consentRevoked: { icon: 'lock', tone: 'bg-danger-100 text-danger-500' },
  reportViewed: { icon: 'file', tone: 'bg-mint-100 text-brand-700' },
  settingsChanged: { icon: 'settings', tone: 'bg-ink-50 text-ink-500' },
  languageChanged: { icon: 'globe', tone: 'bg-ink-50 text-ink-500' },
}

/**
 * Activity history — an audit trail of meaningful account events.
 *
 * Consent changes are the important entries here: a reviewer should be
 * able to see that granting and revoking partner access are both
 * recorded, and that the user can inspect their own history.
 */
export default function Activity() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state } = useStore()
  const user = useRequireAuth()

  if (!user) return null

  const isAr = lang === 'ar'

  return (
    <Screen>
      <AppBar title={t('act2.title')} onBack={() => navigate('/profile')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <p className="text-[14px] leading-relaxed text-ink-500">{t('act2.lead')}</p>

        <div className="mt-3 flex justify-end">
          <Pill tone="neutral">
            <Icon name="lock" size={12} />
            {t('act2.note')}
          </Pill>
        </div>

        {state.activity.length === 0 ? (
          <EmptyState icon="clock" title={t('act2.empty')} />
        ) : (
          <ol className="relative mt-5 ps-6">
            {/* Timeline spine */}
            <span
              className="absolute inset-y-2 start-[7px] w-0.5 rounded bg-mint-200"
              aria-hidden="true"
            />

            {state.activity.map((entry, i) => {
              const meta = KIND_META[entry.kind] || KIND_META.settingsChanged
              return (
                <li
                  key={entry.id}
                  className="relative pb-5 animate-fade-up"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  {/* Node on the spine */}
                  <span
                    className={`absolute -start-6 top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-white ${meta.tone}`}
                    aria-hidden="true"
                  />

                  <div className="rounded-card border border-mint-200 bg-white p-4 shadow-card">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${meta.tone}`}
                      >
                        <Icon name={meta.icon} size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[14px] font-extrabold text-ink-900">
                          {t(`act2.${entry.kind}`)}
                        </p>
                        <p className="mt-0.5 text-[12px] text-ink-300">
                          {new Date(entry.at).toLocaleString(
                            isAr ? 'ar' : 'en-GB',
                            {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            },
                          )}
                        </p>
                      </div>
                    </div>

                    <p className="mt-2.5 border-t border-ink-100 pt-2.5 text-[13px] leading-relaxed text-ink-500">
                      {isAr ? entry.detailAr : entry.detailEn}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        )}

        <div className="mt-2">
          <SafetyNote text={t('priv.logNote')} />
        </div>
      </main>
    </Screen>
  )
}
