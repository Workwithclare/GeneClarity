import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { Button, TextField, Tick } from '../components/UI.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useStore } from '../store/AppStore.jsx'

/**
 * Registration screen.
 *
 * Data-minimisation note: only a name and an email are requested. No
 * date of birth, address, national ID or health history is collected —
 * none of it is needed for this demonstration, and collecting it would
 * create risk for no benefit. See docs/10.
 */
export default function Register() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { dispatch } = useStore()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [reveal, setReveal] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [errors, setErrors] = useState({})

  const setField = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = t('auth.errName')
    if (!form.email.trim()) next.email = t('auth.errEmail')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = t('auth.errEmailShape')
    if (!form.password) next.password = t('auth.errPassword')
    else if (form.password.length < 6) next.password = t('auth.errPasswordShort')
    if (form.confirmPassword !== form.password)
      next.confirmPassword = t('auth.errMatch')
    if (!accepted) next.terms = t('auth.errTerms')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    dispatch({
      type: 'SIGN_IN',
      user: {
        id: `usr_${Date.now()}`,
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        // Never stored in plaintext in a real build; kept only so the
        // demo screen shows the value the user typed.
        password: '',
        joinedAt: new Date().toISOString().slice(0, 10),
        locale: 'en',
        avatarInitials: form.fullName
          .trim()
          .split(/\s+/)
          .slice(0, 2)
          .map((w) => w[0]?.toUpperCase() || '')
          .join(''),
      },
    })
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="screen bg-white">
      <header className="flex items-center justify-between px-4 pt-5">
        <button
          type="button"
          onClick={() => navigate('/login')}
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
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint-100 text-brand-700">
            <Icon name="userPlus" size={30} strokeWidth={1.7} />
          </span>
          <h1 className="mt-4 text-[25px] font-extrabold text-ink-900">
            {t('auth.createTitle')}
          </h1>
          <p className="mt-1 text-[14px] text-ink-400">{t('auth.createSub')}</p>
        </div>

        <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <TextField
            id="reg-name"
            label={t('auth.fullName')}
            icon="user"
            autoComplete="name"
            placeholder="Chioma Clare"
            value={form.fullName}
            error={errors.fullName}
            onChange={setField('fullName')}
          />

          <TextField
            id="reg-email"
            label={t('auth.email')}
            type="email"
            icon="mail"
            autoComplete="email"
            placeholder="name@example.com"
            value={form.email}
            error={errors.email}
            onChange={setField('email')}
          />

          <TextField
            id="reg-password"
            label={t('auth.password')}
            type={reveal ? 'text' : 'password'}
            icon="lock"
            autoComplete="new-password"
            placeholder="••••••••"
            value={form.password}
            error={errors.password}
            canReveal
            onChange={setField('password')}
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
            id="reg-confirm"
            label={t('auth.confirmPassword')}
            type={reveal ? 'text' : 'password'}
            icon="lock"
            autoComplete="new-password"
            placeholder="••••••••"
            value={form.confirmPassword}
            error={errors.confirmPassword}
            onChange={setField('confirmPassword')}
          />

          <Tick
            id="reg-terms"
            checked={accepted}
            onChange={(v) => {
              setAccepted(v)
              if (v) setErrors((p) => ({ ...p, terms: undefined }))
            }}
            error={errors.terms}
          >
            {t('auth.terms')}
          </Tick>

          <Button size="lg" type="submit" className="mt-1">
            {t('act.signUp')}
          </Button>
        </form>

        <p className="mt-5 text-center text-[14px] text-ink-400">
          {t('auth.hasAccount')}{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="font-extrabold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 rounded"
          >
            {t('act.signIn')}
          </button>
        </p>
      </div>
    </div>
  )
}
