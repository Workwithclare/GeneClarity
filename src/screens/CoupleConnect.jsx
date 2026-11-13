import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Screen, AppBar } from '../components/Shell.jsx'
import { Button, SafetyNote, Pill, SectionTitle, SampleBanner, TextField } from '../components/UI.jsx'
import { CoupleIllustration } from '../components/Illustrations.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'
import { useRequireAuth } from '../store/useRequireAuth.js'
import { supabaseEnabled } from '../lib/supabase.js'
import { resolvePartner } from '../lib/db.js'

const STATUS_META = {
  none: { labelKey: 'cc.statusNone', tone: 'neutral' },
  pending: { labelKey: 'cc.statusPending', tone: 'caution' },
  active: { labelKey: 'cc.statusActive', tone: 'ok' },
  revoked: { labelKey: 'cc.statusRevoked', tone: 'neutral' },
}

const RULES = ['cc.rule1', 'cc.rule2', 'cc.rule3', 'cc.rule4']

/**
 * CoupleConnect hub.
 *
 * Privacy model demonstrated here:
 *   • Separate accounts, always.
 *   • An invitation shares nothing by itself.
 *   • Only the categories the owner explicitly switched on are visible.
 *   • Revocation stops future access immediately.
 */
export default function CoupleConnect() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { state, dispatch } = useStore()
  const user = useRequireAuth()
  const [confirming, setConfirming] = useState(false)
  // Backend mode: invite a real account by email. Demo mode keeps the
  // one-tap invite (the "partner" is fictional there).
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteBusy, setInviteBusy] = useState(false)
  const [inviteError, setInviteError] = useState(null)

  if (!user) return null

  const { partner } = state
  const meta = STATUS_META[partner.status]
  const partnerName = partner.name || t('cc.demoPartner')
  const sharedCount = Object.values(partner.shares).filter(Boolean).length

  const handleInvite = async () => {
    if (!supabaseEnabled) {
      dispatch({ type: 'INVITE_PARTNER', name: t('cc.demoPartner') })
      navigate('/couple/consent')
      return
    }
    const email = inviteEmail.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setInviteError(t('auth.errEmailShape'))
      return
    }
    setInviteBusy(true)
    setInviteError(null)
    // Resolves to a real account or null — nothing is shared by an
    // invitation; it only records intent until the owner grants scopes.
    const found = await resolvePartner(email)
    setInviteBusy(false)
    if (!found) {
      setInviteError(t('cc.noAccountFound'))
      return
    }
    dispatch({
      type: 'INVITE_PARTNER',
      name: found.name,
      partnerId: found.partnerId,
    })
    navigate('/couple/consent')
  }

  const handleRevoke = () => {
    dispatch({ type: 'REVOKE_PARTNER' })
    setConfirming(false)
  }

  return (
    <Screen>
      <AppBar
        title={t('cc.title')}
        onBack={() => navigate('/dashboard')}
        right={<Pill tone={meta.tone}>{t(meta.labelKey)}</Pill>}
      />

      <main className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <CoupleIllustration width={250} />
          <p className="mt-1 max-w-sm text-[14px] leading-relaxed text-ink-500">
            {t('cc.lead')}
          </p>
        </div>

        <div className="mt-4">
          <SampleBanner />
        </div>

        {/* ── How sharing works ─────────────────────────────────── */}
        <section className="mt-5 rounded-card border border-mint-200 bg-white p-5 shadow-card">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-brand-700">
              <Icon name="shield" size={17} />
            </span>
            <h2 className="text-[15.5px] font-extrabold text-ink-900">
              {t('cc.ruleTitle')}
            </h2>
          </div>
          <ul className="mt-3 space-y-2.5">
            {RULES.map((rule) => (
              <li key={rule} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-brand-600">
                  <Icon name="checkCircle" size={17} />
                </span>
                <p className="text-[13.5px] leading-relaxed text-ink-700">{t(rule)}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Status-dependent panel ───────────────────────────── */}
        <div className="mt-5">
          <SectionTitle>{t('cc.yourConsent')}</SectionTitle>

          {partner.status === 'none' || partner.status === 'revoked' ? (
            <div className="rounded-card border border-mint-200 bg-white p-5 text-center shadow-card">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mint-100 text-brand-700">
                <Icon name="userPlus" size={26} />
              </span>
              <h3 className="mt-3 text-[16px] font-extrabold text-ink-900">
                {t('cc.noPartner')}
              </h3>
              <p className="mx-auto mt-1.5 max-w-xs text-[13.5px] leading-relaxed text-ink-400">
                {t('cc.noPartnerBody')}
              </p>
              <div className="mt-4">
                <p className="text-[13px] font-semibold text-ink-500">
                  {t('cc.inviteBody')}
                </p>
                {supabaseEnabled && (
                  <div className="mx-auto mt-3 max-w-xs">
                    <TextField
                      id="invite-email"
                      label={t('cc.partnerEmail')}
                      type="email"
                      icon="mail"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={inviteEmail}
                      error={inviteError}
                      onChange={(e) => {
                        setInviteEmail(e.target.value)
                        if (inviteError) setInviteError(null)
                      }}
                    />
                    <p className="mt-1.5 text-[11.5px] leading-snug text-ink-400">
                      {t('cc.partnerEmailHint')}
                    </p>
                  </div>
                )}
                <Button
                  size="lg"
                  className="mt-3"
                  icon="userPlus"
                  disabled={inviteBusy}
                  onClick={handleInvite}
                >
                  {inviteBusy ? t('cc.inviteWorking') : t('cc.invite')}
                </Button>
              </div>
            </div>
          ) : partner.status === 'pending' ? (
            <div className="rounded-card border border-caution-400/35 bg-caution-100 p-5 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-caution-600 shadow-sm">
                <Icon name="clock" size={26} />
              </span>
              <h3 className="mt-3 text-[16px] font-extrabold text-caution-600">
                {t('cc.statusPending')}
              </h3>
              <p className="mx-auto mt-1.5 max-w-xs text-[13.5px] leading-relaxed text-caution-600/90">
                {t('cc.bothConsent')}
              </p>
              <Button
                size="lg"
                className="mt-4"
                onClick={() => navigate('/couple/consent')}
              >
                {t('cc.manageConsent')}
              </Button>
              <button
                type="button"
                className="btn btn--ghost mt-2"
                onClick={() => dispatch({ type: 'CLEAR_PARTNER' })}
              >
                {t('act.cancel')}
              </button>
            </div>
          ) : (
            /* active or revoked-with-history */
            <div className="rounded-card border border-brand-200 bg-mint-100 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => navigate('/couple/consent')}
                    aria-label={t('cc.manageConsent')}
                    className="grid h-11 w-11 place-items-center rounded-full bg-brand-700 text-[13px] font-extrabold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >
                    {partnerName.slice(0, 2).toUpperCase()}
                  </button>
                  <div>
                    <p className="text-[15px] font-extrabold text-ink-900">
                      {partnerName}
                    </p>
                    <p className="text-[12.5px] text-ink-400">
                      {partner.grantedAt
                        ? `${t('pc.expires')} ${partner.grantedAt.slice(0, 10)}`
                        : ''}
                    </p>
                  </div>
                </div>
                <Pill tone={meta.tone}>{t(meta.labelKey)}</Pill>
              </div>

              {/* Exactly what is shared */}
              <div className="mt-4 rounded-control bg-white p-4">
                <p className="text-[13px] font-extrabold text-ink-900">
                  {t('cc.whatPartnerSees')}
                </p>
                <ul className="mt-2.5 space-y-2">
                  {[
                    ['summary', 'pc.optSummary'],
                    ['full', 'pc.optFull'],
                    ['activity', 'pc.optActivity'],
                  ].map(([key, labelKey]) => (
                    <li key={key} className="flex items-center gap-2.5">
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          partner.shares[key] ? 'bg-brand-700 text-white' : 'bg-ink-100 text-ink-300'
                        }`}
                      >
                        <Icon name={partner.shares[key] ? 'check' : 'close'} size={12} strokeWidth={3} />
                      </span>
                      <span
                        className={`text-[13.5px] ${
                          partner.shares[key] ? 'font-semibold text-ink-700' : 'text-ink-300 line-through'
                        }`}
                      >
                        {t(labelKey)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-ink-100 pt-3 text-[12.5px] leading-snug text-ink-400">
                  {t('cc.seesNoChart')}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="secondary" onClick={() => navigate('/couple/consent')}>
                  {t('cc.manageConsent')}
                </Button>

                {partner.status === 'active' && !confirming && (
                  <button
                    type="button"
                    className="btn btn--ghost text-danger-500 hover:bg-danger-100"
                    onClick={() => setConfirming(true)}
                  >
                    <Icon name="lock" size={17} />
                    {t('cc.revoke')}
                  </button>
                )}

                {confirming && (
                  <div className="rounded-control border border-danger-500/40 bg-danger-100 p-4 animate-scale-in">
                    <p className="text-[13.5px] font-semibold leading-relaxed text-danger-600">
                      {t('cc.revokeConfirm')}
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Button variant="danger" size="sm" onClick={handleRevoke}>
                        {t('pc.revoke')}
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setConfirming(false)}
                      >
                        {t('act.cancel')}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Combined view ─────────────────────────────────────── */}
        {partner.status === 'active' && partner.shares.summary && (
          <section className="mt-5 rounded-card border border-mint-200 bg-white p-5 shadow-card animate-fade-up">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-brand-700">
                <Icon name="users" size={17} />
              </span>
              <h2 className="text-[15.5px] font-extrabold text-ink-900">
                {t('cc.combinedTitle')}
              </h2>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
              {t('cc.combinedBody')}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill tone="sample">{t('rep.sampleTag')}</Pill>
              <Pill tone="neutral">
                {sharedCount} / 3
              </Pill>
            </div>
          </section>
        )}

        <div className="mt-5">
          <SafetyNote text={t('cc.never')} />
        </div>

        <p className="mt-4 text-center text-[11.5px] leading-snug text-ink-300">
          {t('priv.logNote')}
        </p>
      </main>
    </Screen>
  )
}
