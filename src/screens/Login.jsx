import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Button, TextField, SafetyNote } from '../components/UI.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore, demoUser } from '../store/AppStore.jsx'
import { supabaseEnabled } from '../lib/supabase.js'
import { signInWithBackend, resetPasswordWithBackend } from '../lib/auth.js'

/**
 * Sign-in screen — dual mode.
 *
 * Backend mode (Supabase configured): passwords are checked against
 * Supabase Authentication for real; errors are mapped to catalogue
 * strings, never raw provider messages.
 *
 * Demo mode (no backend): passwords are NOT checked against a real
 * credential store — any well-formed input signs you in, and the sample
 * button fills the demo account. This is stated on the screen itself so
 * nobody mistakes it for real authentication.
 */
export default function Login() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { dispatch } = useStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [reveal, setReveal] = useState(false)
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState({})
  const [socialNote, setSocialNote] = useState(false)
  const [forgotNote, setForgotNote] = useState(false)
  // Password-reset panel: false (sign-in) | 'form' | 'sent'.
  // Backend mode uses it for the real reset request; in demo mode the
  // button only reveals the honest `auth.forgotNote` message instead.
  const [forgotMode, setForgotMode] = useState(false)
  const [busy, setBusy] = useState(false)
  const [formNote, setFormNote] = useState(null)

  const validate = () => {
    const next = {}
    if (!email.trim()) next.email = t('auth.errEmail')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = t('auth.errEmailShape')
    if (!password) next.password = t('auth.errPassword')
    else if (password.length < 6) next.password = t('auth.errPasswordShort')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const signIn = (overrides = {}) => {
    const name =
      overrides.fullName ||
      (email.trim() ? email.trim().split('@')[0] : demoUser.fullName)
    dispatch({
      type: 'SIGN_IN',
      user: {
        ...demoUser,
        ...overrides,
        fullName: name.charAt(0).toUpperCase() + name.slice(1),
        email: overrides.email || email.trim(),
      },
    })
    navigate('/dashboard', { replace: true })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormNote(null)
    if (!validate()) return

    if (supabaseEnabled) {
      // Real credential check against Supabase Authentication.
      setBusy(true)
      const result = await signInWithBackend(email, password)
      setBusy(false)
      if (result.ok) {
        // Optimistic set; the session loader logs the single official
        // audit entry after the server data lands.
        dispatch({ type: 'SET_USER', user: result.user })
        navigate('/dashboard', { replace: true })
        return
      }
      if (result.errorKey === 'auth.errInvalid') {
        setErrors({ password: t('auth.errInvalid') })
      } else if (result.errorKey === 'auth.errEmailTaken') {
        setErrors({ email: t('auth.errEmailTaken') })
      } else {
        setFormNote(result.errorKey || 'auth.errGeneric')
      }
      return
    }

    // Demo mode: no credential store exists — accept well-formed input.
    signIn()
  }

  const fillDemo = () => {
    setEmail(demoUser.email)
    setPassword(demoUser.password)
    setErrors({})
  }

  // "Forgot password?" — in backend mode this sends a real reset email
  // through Supabase Authentication; in demo mode it only shows the
  // honest note (no email exists to send to).
  const openForgot = () => {
    setFormNote(null)
    setErrors({})
    if (supabaseEnabled) setForgotMode('form')
    else setForgotNote(true)
  }

  const closeForgot = () => {
    setForgotMode(false)
    setFormNote(null)
    setErrors({})
  }

  const sendReset = async (e) => {
    e.preventDefault()
    setFormNote(null)
    if (!email.trim()) {
      setErrors({ email: t('auth.errEmail') })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrors({ email: t('auth.errEmailShape') })
      return
    }
    setErrors({})
    setBusy(true)
    const result = await resetPasswordWithBackend(email)
    setBusy(false)
    if (result.ok) {
      // Honest confirmation: whether an account exists is not revealed.
      setForgotMode('sent')
      return
    }
    setFormNote(result.errorKey || 'auth.errGeneric')
  }

  // Heading swaps with the panel so the screen never shows the
  // sign-in title over the reset form.
  const heading =
    forgotMode === 'form'
      ? { title: t('auth.forgotTitle'), sub: t('auth.forgotSub') }
      : forgotMode === 'sent'
        ? { title: t('auth.forgotSentTitle'), sub: '' }
        : { title: t('auth.welcomeBack'), sub: t('auth.signInToContinue') }

  return (
    <div className="screen bg-white">
      {/* Header: back arrow only, matching the reference art */}
      <header className="px-4 pt-5">
        <button
          type="button"
          onClick={() => navigate('/welcome')}
          aria-label={t('act.back')}
          className="grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <Icon name="chevronLeft" size={22} />
        </button>
      </header>

      <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-8">
        <div className="mt-4 text-center">
          {/* Round teal badge with the brand leaf — the reference art uses
              a lighter teal than the button so it reads as an emblem. */}
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-white shadow-button">
            <Icon name="leaf" size={30} strokeWidth={1.8} />
          </span>
          <h1 className="mt-4 text-[25px] font-extrabold text-ink-900">
            {heading.title}
          </h1>
          {heading.sub && (
            <p className="mt-1 text-[14px] text-ink-400">{heading.sub}</p>
          )}
        </div>

        {forgotMode === 'form' && (
          <form className="mt-7 flex flex-col gap-4" onSubmit={sendReset} noValidate>
            <TextField
              id="forgot-email"
              label={t('auth.email')}
              hideLabel
              type="email"
              icon="mail"
              autoComplete="email"
              placeholder={t('auth.email')}
              value={email}
              error={errors.email}
              onChange={(e) => setEmail(e.target.value)}
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
              {busy ? t('auth.working') : t('auth.forgotSend')}
            </Button>

            <button
              type="button"
              onClick={closeForgot}
              className="text-[13.5px] font-bold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded"
            >
              {t('auth.forgotBack')}
            </button>
          </form>
        )}

        {forgotMode === 'sent' && (
          <div className="mt-7 flex flex-col items-center text-center animate-fade-up">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint-100 text-brand-700">
              <Icon name="mail" size={30} strokeWidth={1.7} />
            </span>
            <p className="mx-auto mt-4 max-w-[20rem] text-[14px] leading-relaxed text-ink-400">
              {t('auth.forgotSentBody', { email: email.trim() })}
            </p>
            <Button
              size="lg"
              className="mt-6 w-full max-w-[19rem]"
              onClick={closeForgot}
            >
              {t('auth.forgotBack')}
            </Button>
          </div>
        )}

        {!forgotMode && (
          <>
            <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
              <TextField
                id="login-email"
                label={t('auth.email')}
                hideLabel
                type="email"
                icon="mail"
                autoComplete="email"
                placeholder={t('auth.email')}
                value={email}
                error={errors.email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                id="login-password"
                label={t('auth.password')}
                hideLabel
                type={reveal ? 'text' : 'password'}
                icon="lock"
                autoComplete="current-password"
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

              <div className="flex items-center justify-between gap-3">
                <label htmlFor="remember" className="flex cursor-pointer items-center gap-2.5">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="peer sr-only"
                  />
                  <span className="grid h-5 w-5 place-items-center rounded-md border border-ink-200 transition-colors peer-checked:border-brand-700 peer-checked:bg-brand-700 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-200">
                    <Icon
                      name="check"
                      size={13}
                      strokeWidth={3}
                      className={`text-white ${remember ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </span>
                  <span className="text-[13.5px] font-semibold text-ink-500">
                    {t('auth.remember')}
                  </span>
                </label>

                <button
                  type="button"
                  onClick={openForgot}
                  className="text-[13.5px] font-bold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded"
                >
                  {t('auth.forgot')}
                </button>
              </div>

              {formNote && (
                <p
                  role="alert"
                  className="rounded-control bg-danger-100 px-3.5 py-2.5 text-[12.5px] font-semibold leading-snug text-danger-600 animate-fade-up"
                >
                  {t(formNote)}
                </p>
              )}

              <Button size="lg" type="submit" className="mt-1" disabled={busy}>
                {busy ? t('auth.working') : t('act.signIn')}
              </Button>
            </form>

            {forgotNote && (
              <p className="mt-3 text-center text-[12px] leading-snug text-ink-400 animate-fade-up">
                {t('auth.forgotNote')}
              </p>
            )}
          </>
        )}

        {/* "or" divider + social sign-in, as in the reference design.
            These buttons are visual only: nothing is connected, and the
            note below says so rather than implying a real integration.
            Hidden while the password-reset panel is open — they belong
            to the sign-in screen only. */}
        {!forgotMode && (
          <>
            <div className="my-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px flex-1 bg-ink-100" />
              <span className="text-[12.5px] font-bold text-ink-300">{t('auth.or')}</span>
              <span className="h-px flex-1 bg-ink-100" />
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setSocialNote(true)}
                className="btn btn--social"
              >
                <Icon name="google" size={18} />
                {t('auth.continueGoogle')}
              </button>
              <button
                type="button"
                onClick={() => setSocialNote(true)}
                className="btn btn--social"
              >
                <Icon name="apple" size={18} />
                {t('auth.continueApple')}
              </button>
            </div>

            {socialNote && (
              <p className="mt-2.5 text-center text-[12px] leading-snug text-ink-400 animate-fade-up">
                {t('auth.socialDemo')}
              </p>
            )}
          </>
        )}

        {/* Honest note about how sign-in works in the current mode. */}
        {supabaseEnabled ? (
          <div className="mt-4 rounded-control border border-mint-200 bg-mint-50 px-3.5 py-3">
            <p className="text-[12.5px] font-extrabold text-brand-800">
              {t('auth.backendTitle')}
            </p>
            <p className="mt-1 text-[12px] leading-snug text-ink-500">
              {t('auth.backendBody')}
            </p>
          </div>
        ) : (
          <div className="mt-4 rounded-control border border-mint-200 bg-mint-50 px-3.5 py-3">
            <p className="text-[12px] leading-snug text-ink-500">{t('auth.demoBody')}</p>
            <button
              type="button"
              onClick={fillDemo}
              className="mt-1.5 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-700 underline decoration-brand-400 underline-offset-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded"
            >
              <Icon name="sparkle" size={14} />
              {t('auth.demoFill')}
            </button>
          </div>
        )}

        {!forgotMode && (
          <p className="mt-5 text-center text-[14px] text-ink-400">
            {t('auth.noAccount')}{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="font-extrabold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded"
            >
              {t('act.signUp')}
            </button>
          </p>
        )}

        <SafetyNote text={t('res.safety')} className="mt-5" />
      </div>
    </div>
  )
}
