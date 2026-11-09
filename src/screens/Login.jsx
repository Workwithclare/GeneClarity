import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Button, TextField, SafetyNote } from '../components/UI.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore, demoUser } from '../store/AppStore.jsx'

/**
 * Sign-in screen.
 *
 * ⚠ There is no server in this prototype. Passwords are NOT checked
 * against a real credential store — any well-formed input signs you in,
 * and the sample button fills the demo account. This is stated on the
 * screen itself so nobody mistakes it for real authentication.
 * Supabase Authentication replaces this in the backend phase.
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) signIn()
  }

  const fillDemo = () => {
    setEmail(demoUser.email)
    setPassword(demoUser.password)
    setErrors({})
  }

  return (
    <div className="screen bg-white">
      <header className="flex items-center justify-between px-4 pt-5">
        <button
          type="button"
          onClick={() => navigate('/welcome')}
          aria-label={t('act.back')}
          className="grid h-10 w-10 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          <Icon name="chevronLeft" size={22} />
        </button>
        <LanguageToggle />
        <span className="min-w-10" />
      </header>

      <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-8">
        <div className="mt-4 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-700 text-white shadow-button">
            <Icon name="leaf" size={30} strokeWidth={1.8} />
          </span>
          <h1 className="mt-4 text-[25px] font-extrabold text-ink-900">
            {t('auth.welcomeBack')}
          </h1>
          <p className="mt-1 text-[14px] text-ink-400">{t('auth.signInToContinue')}</p>
        </div>

        <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <TextField
            id="login-email"
            label={t('auth.email')}
            type="email"
            icon="mail"
            autoComplete="email"
            placeholder="name@example.com"
            value={email}
            error={errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="login-password"
            label={t('auth.password')}
            type={reveal ? 'text' : 'password'}
            icon="lock"
            autoComplete="current-password"
            placeholder="••••••••"
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
              className="text-[13.5px] font-bold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded"
            >
              {t('auth.forgot')}
            </button>
          </div>

          <Button size="lg" type="submit" className="mt-1">
            {t('act.signIn')}
          </Button>
        </form>

        {/* "or" divider + social sign-in, as in the reference design.
            These buttons are visual only: nothing is connected, and the
            note below says so rather than implying a real integration. */}
        <div className="my-5 flex items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 bg-ink-100" />
          <span className="text-[12.5px] font-bold text-ink-300">{t('auth.or')}</span>
          <span className="h-px flex-1 bg-ink-100" />
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => setSocialNote(true)}
            className="btn btn--secondary"
          >
            <Icon name="google" size={18} />
            {t('auth.continueGoogle')}
          </button>
          <button
            type="button"
            onClick={() => setSocialNote(true)}
            className="btn btn--secondary"
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

        {/* Demonstration notice — makes the absence of a real auth backend explicit. */}
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

        <SafetyNote text={t('res.safety')} className="mt-5" />
      </div>
    </div>
  )
}
