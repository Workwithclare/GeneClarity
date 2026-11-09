import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, Pill, Switch } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

const OPTIONS = [
  { key: 'summary', labelKey: 'pc.optSummary', bodyKey: 'pc.optSummaryBody', icon: 'file' },
  { key: 'full', labelKey: 'pc.optFull', bodyKey: 'pc.optFullBody', icon: 'book' },
  { key: 'activity', labelKey: 'pc.optActivity', bodyKey: 'pc.optActivityBody', icon: 'bell' },
]

/**
 * Partner-sharing consent screen.
 *
 * This is the single place where access is granted or withdrawn. The
 * default state of every category is OFF — the owner must opt in to
 * each one deliberately, and can un-share at any time.
 */
export default function PartnerConsent() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { state, dispatch } = useStore()
  const user = useRequireAuth()

  const { partner } = state
  const isActive = partner.status === 'active'

  const [shares, setShares] = useState(partner.shares)
  const [saved, setSaved] = useState(false)
  const [confirmingRevoke, setConfirmingRevoke] = useState(false)

  // Re-sync if the store changes underneath us (e.g. revoked elsewhere).
  useEffect(() => {
    setShares(partner.shares)
  }, [partner.shares])

  if (!user) return null

  const toggle = (key) => (value) => {
    setShares((s) => ({ ...s, [key]: value }))
    setSaved(false)
  }

  const anySelected = Object.values(shares).some(Boolean)

  const handleGrant = () => {
    if (!anySelected) return
    dispatch({
      type: 'GRANT_PARTNER',
      name: partner.name || t('cc.demoPartner'),
      shares,
    })
    setSaved(true)
    setConfirmingRevoke(false)
  }

  const handleRevoke = () => {
    dispatch({ type: 'REVOKE_PARTNER' })
    setShares({ summary: false, full: false, activity: false })
    setConfirmingRevoke(false)
    setSaved(false)
  }

  return (
    <Screen>
      <AppBar
        title={t('pc.title')}
        onBack={() => navigate('/couple')}
        right={<Pill tone={isActive ? 'ok' : 'neutral'}>{isActive ? t('cc.statusActive') : t('cc.statusNone')}</Pill>}
      />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <p className="text-[14px] leading-relaxed text-ink-500">{t('pc.lead')}</p>

        {/* Current standing */}
        <div
          className={`mt-4 flex items-start gap-3 rounded-card border p-4 ${
            isActive
              ? 'border-brand-200 bg-mint-100'
              : 'border-ink-100 bg-ink-50'
          }`}
        >
          <span
            className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full ${
              isActive ? 'bg-white text-brand-700' : 'bg-white text-ink-400'
            }`}
          >
            <Icon name={isActive ? 'shield' : 'lock'} size={18} />
          </span>
          <div className="min-w-0">
            <p className="text-[14.5px] font-extrabold text-ink-900">
              {isActive ? partner.name || t('cc.demoPartner') : t('cc.noPartner')}
            </p>
            <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
              {isActive ? t('cc.seesConsent') : t('pc.none')}
            </p>
          </div>
        </div>

        {/* Opt-in switches — default off */}
        <section className="mt-5">
          <h2 className="section-title">{t('pc.scope')}</h2>
          <div className="mt-2 divide-y divide-ink-100 rounded-card border border-mint-200 bg-white px-4 shadow-card">
            {OPTIONS.map((option) => (
              <Switch
                key={option.key}
                id={`share-${option.key}`}
                checked={shares[option.key]}
                onChange={toggle(option.key)}
                label={t(option.labelKey)}
                description={t(option.bodyKey)}
              />
            ))}
          </div>
        </section>

        {/* Explicit statement about the boundary */}
        <div className="mt-4">
          <SafetyNote text={t('cc.bothConsent')} />
        </div>

        {/* Primary action */}
        <div className="mt-5 flex flex-col gap-2.5">
          {isActive ? (
            <Button
              size="lg"
              onClick={handleGrant}
              disabled={!anySelected}
              icon="check"
            >
              {t('act.save')}
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={handleGrant}
              disabled={!anySelected}
              icon="users"
            >
              {t('pc.grant')}
            </Button>
          )}

          {isActive && !confirmingRevoke && (
            <Button
              variant="ghost"
              className="text-danger-500 hover:bg-danger-100"
              icon="lock"
              onClick={() => setConfirmingRevoke(true)}
            >
              {t('pc.revoke')}
            </Button>
          )}
        </div>

        {/* Revoke confirmation */}
        {confirmingRevoke && (
          <div className="mt-4 rounded-card border border-danger-500/40 bg-danger-100 p-4 animate-scale-in">
            <p className="text-[13.5px] font-bold leading-snug text-danger-600">
              {t('pc.revokeWarning')}
            </p>
            <div className="mt-3 flex gap-2">
              <Button variant="danger" size="sm" onClick={handleRevoke}>
                {t('pc.revoke')}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setConfirmingRevoke(false)}
              >
                {t('act.cancel')}
              </Button>
            </div>
          </div>
        )}

        {/* Saved confirmation */}
        {saved && (
          <div className="mt-4 flex items-center gap-2.5 rounded-card border border-brand-200 bg-mint-100 px-4 py-3.5 animate-fade-up">
            <span className="text-brand-700">
              <Icon name="checkCircle" size={18} />
            </span>
            <p className="text-[13.5px] font-semibold text-brand-800">{t('pc.saved')}</p>
          </div>
        )}

        {/* Withdrawal is always available and always framed as normal */}
        <section className="mt-5 rounded-card border border-mint-200 bg-white p-5 shadow-card">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-mint-100 text-brand-700">
              <Icon name="refresh" size={17} />
            </span>
            <h2 className="text-[15.5px] font-extrabold text-ink-900">
              {t('pc.withdrawTitle')}
            </h2>
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
            {t('pc.withdrawBody')}
          </p>
        </section>

        <div className="mt-4">
          <SafetyNote text={t('cc.never')} />
        </div>
      </main>
    </Screen>
  )
}
