import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, Switch, SafetyNote, Pill, SampleBanner } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'

/**
 * Privacy and security controls.
 *
 * Notable defaults:
 *   • `shareResearch` is OFF and cannot send anything anyway — there is
 *     no server. The toggle demonstrates intent, and says so.
 *   • Account deletion is shown but is explicitly described as having
 *     nothing to erase in this prototype, rather than pretending.
 */
export default function PrivacySettings() {
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const { state, dispatch } = useStore()
  const user = useRequireAuth()
  const [note, setNote] = useState(null)

  if (!user) return null

  const { settings, partner, activity } = state
  const chevron = lang === 'ar' ? 'chevronLeft' : 'chevronRight'
  const isActive = partner.status === 'active'

  const handleExport = () => {
    // Produces a real, local download of this account's stored state —
    // nothing leaves the browser.
    try {
      const payload = {
        exportedAt: new Date().toISOString(),
        notice: 'GeneClarity demonstration export. Contains synthetic sample records only.',
        profile: { fullName: user.fullName, email: user.email, joinedAt: user.joinedAt },
        settings,
        partnerConsent: partner,
        results: state.results,
        activity,
      }
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: 'application/json',
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'geneclarity-my-data.json'
      a.click()
      URL.revokeObjectURL(url)
      setNote('ok')
    } catch {
      setNote('error')
    }
  }

  return (
    <Screen>
      <AppBar title={t('priv.title')} onBack={() => navigate('/settings')} />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <p className="text-[14px] leading-relaxed text-ink-500">{t('priv.lead')}</p>

        <div className="mt-4">
          <SampleBanner />
        </div>

        {/* Toggles */}
        <section className="mt-5">
          <h2 className="eyebrow">{t('set.privacySecurity')}</h2>
          <div className="mt-2 divide-y divide-ink-100 rounded-card border border-mint-200 bg-white px-4 shadow-card">
            <Switch
              id="pv-visibility"
              checked={settings.profileVisibility}
              onChange={(value) =>
                dispatch({ type: 'SET_SETTING', key: 'profileVisibility', value })
              }
              label={t('priv.profileVisibility')}
              description={t('priv.profileVisibilitySub')}
            />
            <Switch
              id="pv-research"
              checked={settings.shareResearch}
              onChange={(value) =>
                dispatch({ type: 'SET_SETTING', key: 'shareResearch', value })
              }
              label={t('priv.shareResearch')}
              description={t('priv.shareResearchSub')}
            />
            <Switch
              id="pv-autolock"
              checked={settings.autoLock}
              onChange={(value) =>
                dispatch({ type: 'SET_SETTING', key: 'autoLock', value })
              }
              label={t('priv.autoLock')}
              description={t('priv.autoLockSub')}
            />
          </div>
        </section>

        {/* Partner access */}
        <section className="mt-6">
          <h2 className="eyebrow">{t('priv.partnersTitle')}</h2>
          <div
            className={`mt-2 rounded-card border p-4 ${
              isActive ? 'border-brand-200 bg-mint-100' : 'border-mint-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[14.5px] font-extrabold text-ink-900">
                  {isActive ? partner.name || t('cc.demoPartner') : t('cc.noPartner')}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-ink-500">
                  {isActive ? t('cc.seesConsent') : t('priv.noPartner')}
                </p>
              </div>
              <Pill tone={isActive ? 'ok' : 'neutral'}>
                {isActive ? t('cc.statusActive') : t('cc.statusNone')}
              </Pill>
            </div>

            <Button
              variant="secondary"
              size="sm"
              className="mt-3"
              icon="users"
              onClick={() => navigate('/couple/consent')}
            >
              {t('priv.manage')}
            </Button>
          </div>
        </section>

        {/* Data actions */}
        <section className="mt-6">
          <h2 className="eyebrow">{t('set.dataSharing')}</h2>
          <div className="mt-2 divide-y divide-ink-100 overflow-hidden rounded-card border border-mint-200 bg-white shadow-card">
            <button
              type="button"
              onClick={handleExport}
              className="menu-row focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-100 text-brand-700">
                <Icon name="download" size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14.5px] font-bold text-ink-900">
                  {t('priv.export')}
                </span>
                <span className="block text-[12.5px] text-ink-400">
                  {t('priv.exportSub')}
                </span>
              </span>
              <Icon name={chevron} size={18} className="shrink-0 text-ink-300" />
            </button>

            <button
              type="button"
              onClick={() => setNote('erase')}
              className="menu-row text-danger-500 hover:bg-danger-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-danger-100 text-danger-500">
                <Icon name="trash" size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14.5px] font-bold">{t('priv.erase')}</span>
                <span className="block text-[12.5px] text-danger-500/80">
                  {t('priv.eraseSub')}
                </span>
              </span>
            </button>
          </div>

          {note === 'ok' && (
            <p className="mt-2.5 flex items-center gap-2 text-[13px] font-semibold text-brand-700 animate-fade-up">
              <Icon name="checkCircle" size={16} />
              geneclarity-my-data.json
            </p>
          )}
          {note === 'error' && (
            <p className="mt-2.5 flex items-center gap-2 text-[13px] font-semibold text-danger-500 animate-fade-up">
              <Icon name="alert" size={16} />
              {t('act.tryAgain')}
            </p>
          )}
          {note === 'erase' && (
            <div className="mt-3 rounded-card border border-danger-500/40 bg-danger-100 p-4 animate-scale-in">
              <p className="text-[13px] leading-relaxed text-danger-600">
                {t('priv.eraseConfirm')}
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="mt-3"
                onClick={() => setNote(null)}
              >
                {t('act.close')}
              </Button>
            </div>
          )}
        </section>

        {/* Privacy log */}
        <section className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="eyebrow">{t('priv.logTitle')}</h2>
            <Pill tone="neutral">{activity.length}</Pill>
          </div>
          <div className="rounded-card border border-mint-200 bg-white p-4 shadow-card">
            <p className="text-[13px] leading-relaxed text-ink-500">
              {t('priv.logNote')}
            </p>
            <ul className="mt-3 space-y-2.5">
              {activity.slice(0, 4).map((entry) => (
                <li key={entry.id} className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-ink-700">
                      {lang === 'ar' ? entry.detailAr : entry.detailEn}
                    </p>
                    <p className="text-[11.5px] text-ink-300">{entry.at.slice(0, 16).replace('T', ' ')}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-5">
          <SafetyNote text={t('notice.notDiagnostic')} />
        </div>
      </main>
    </Screen>
  )
}
