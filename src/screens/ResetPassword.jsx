import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Button, TextField, SafetyNote } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { supabaseEnabled } from '../lib/supabase.js'
import {
  restoreSession,
  signOutBackend,
  updatePasswordWithBackend,
} from '../lib/auth.js'

/**
 * Set-a-new-password screen — the destination of the emailed
 * password-recovery link (`#/reset-password`; see `captureRecoveryLink`
 * in lib/auth.js for how the link's tokens become this route).
 *
 * Backend mode: arriving from the link means this device already holds
 * a signed-in recovery session, so saving really updates the password
 * through Supabase Authentication — then the session is dropped so the
 * next step is a genuine sign-in with the password just chosen. The
 * screen also works when a signed-in user opens the route directly
 * (equivalent to a "change my password" action).
 *
 * Demo mode (no backend): no email can be sent or followed, so the
 * screen states that honestly instead of pretending a reset is running.
 */
export default function ResetPassword() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  // checking → form | expired   (demo mode starts and stays on 'demo')
  const [phase, setPhase] = useState(supabaseEnabled ? 'checking' : 'demo')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [reveal, setReveal] = useState(false)
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)
  const [formNote, setFormNote] = useState(null)
  const [done, setDone] = useState(false)

  // A recovery link gives this device a session. Without one there is
  // nothing to reset — an expired link, or the route opened by hand.
  useEffect(() => {
    if (!supabaseEnabled) return
    let alive = true
    restoreSession().then((user) => {
      if (alive) setPhase(user ? 'form' : 'expired')
    })
    return () => {
      alive = false
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormNote(null)
    const next = {}
    if (!password) next.password = t('auth.errPassword')
    else if (password.length < 6) next.password = t('auth.errPasswordShort')
    if (confirm !== password) next.confirm = t('auth.errMatch')
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setBusy(true)
    const result = await updatePasswordWithBackend(password)
    setBusy(false)
    if (!result.ok) {
      setFormNote(result.errorKey || 'auth.errGeneric')
      return
    }
    // Saved server-side. Drop the recovery session so what happens next
    // is a real sign-in with the password the user just chose.
    setDone(true)
    signOutBackend()
  }

  return (
    <div className="screen bg-white">
      {/* Header: back arrow only, matching the other auth screens */}
      <header className="px-4 pt-5">
        <button
          type="button"
          onClick={() => navigate('/login')}
          aria-label={t('act.back')}
          className="grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <Icon name="chevronLeft" size={22} />
        </button>
      </header>

      <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-8">
        {phase === 'checking' && (
          <div
            className="flex flex-1 flex-col items-center justify-center text-center"
            role="status"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-mint-100 text-brand-700">
              <Icon name="refresh" size={30} strokeWidth={1.7} />
            </span>
            <p className="mt-4 text-[14px] font-semibold text-ink-400">
              {t('auth.working')}
            </p>
          </div>
        )}

        {phase === 'demo' && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-mint-100 text-brand-700">
              <Icon name="lock" size={30} strokeWidth={1.7} />
            </span>
            <h1 className="mt-5 text-[23px] font-extrabold text-ink-900">
              {t('auth.forgotTitle')}
            </h1>
            <p className="mx-auto mt-2 max-w-[20rem] text-[14px] leading-relaxed text-ink-400">
              {t('auth.forgotNote')}
            </p>
            <Button
              size="lg"
              className="mx-auto mt-7 w-full max-w-[19rem]"
              onClick={() => navigate('/login')}
            >
              {t('auth.forgotBack')}
            </Button>
          </div>
        )}

        {phase === 'expired' && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-caution-100 text-caution-600">
              <Icon name="alert" size={30} strokeWidth={1.7} />
            </span>
            <h1 className="mt-5 text-[23px] font-extrabold text-ink-900">
              {t('auth.forgotTitle')}
            </h1>
            <p className="mx-auto mt-2 max-w-[19rem] text-[14px] leading-relaxed text-ink-400">
              {t('auth.resetExpired')}
            </p>
            <Button
              size="lg"
              className="mx-auto mt-7 w-full max-w-[19rem]"
              onClick={() => navigate('/login')}
            >
              {t('auth.forgotBack')}
            </Button>
          </div>
        )}

        {phase === 'form' && !done && (
          <>
            <div className="mt-4 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint-100 text-brand-700">
                <Icon name="lock" size={30} strokeWidth={1.7} />
              </span>
              <h1 className="mt-4 text-[25px] font-extrabold text-ink-900">
                {t('auth.resetTitle')}
              </h1>
              <p className="mt-1 text-[14px] text-ink-400">
                {t('auth.resetSub')}
              </p>
            </div>

            <form
              className="mt-7 flex flex-col gap-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <TextField
                id="reset-password"
                label={t('auth.password')}
                hideLabel
                type={reveal ? 'text' : 'password'}
                icon="lock"
                autoComplete="new-password"
                placeholder={t('auth.password')}
                value={password}
                error={errors.password}
                canReveal
                onChange={(e) => setPassword(e.target.value)}
                revealToggle={
                  <button
                    type="button"
                    onClick={() => setReveal((v) => !v)}
                    aria-label={reveal ? t('auth.hide') : t('auth.show')}
                    className="absolute inset-y-0 end-0 grid w-12 place-items-center text-ink-300 transition-colors hover:text-ink-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded-e-control"
                  >
                    <Icon name={reveal ? 'eyeOff' : 'eye'} size={18} />
                  </button>
                }
              />

              <TextField
                id="reset-confirm"
                label={t('auth.confirmPassword')}
                hideLabel
                type={reveal ? 'text' : 'password'}
                icon="lock"
                autoComplete="new-password"
                placeholder={t('auth.confirmPassword')}
                value={confirm}
                error={errors.confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />

              {formNote && (
                <p
                  role="alert"
                  className="rounded-control bg-danger-100 px-3.5 py-2.5 text-[12.5px] font-semibold leading-snug text-danger-600 animate-fade-up"
                >
                  {t(formNote)}
                </p>
              )}

              <Button size="lg" type="submit" className="mt-1" disabled={busy}>
                {busy ? t('auth.working') : t('auth.resetSubmit')}
              </Button>
            </form>

            <p className="mt-4 text-center text-[14px] text-ink-400">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="font-extrabold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded"
              >
                {t('auth.forgotBack')}
              </button>
            </p>
          </>
        )}

        {done && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-mint-100 text-brand-700">
              <Icon name="checkCircle" size={32} strokeWidth={1.7} />
            </span>
            <h1 className="mt-5 text-[23px] font-extrabold text-ink-900">
              {t('auth.resetDoneTitle')}
            </h1>
            <p className="mx-auto mt-2 max-w-[19rem] text-[14px] leading-relaxed text-ink-400">
              {t('auth.resetDoneBody')}
            </p>
            <Button
              size="lg"
              className="mx-auto mt-7 w-full max-w-[19rem]"
              onClick={() => navigate('/login')}
            >
              {t('act.signIn')}
            </Button>
          </div>
        )}

        <SafetyNote text={t('res.safety')} className="mt-5" />
      </div>
    </div>
  )
}