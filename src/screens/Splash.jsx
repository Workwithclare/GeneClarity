import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoMark } from '../components/Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Splash screen. Mirrors the reference design: deep green brand wave,
 * light logo, spinner and a "Loading…" label.
 *
 * It routes onward automatically. Returning users who already have a
 * session go straight to the dashboard; new visitors see the welcome.
 */
export default function Splash() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  useEffect(() => {
    let session = null
    try {
      session = window.localStorage.getItem('geneclarity.state.v1')
    } catch {
      /* storage unavailable — treat as a new visitor */
    }

    const hasSession = (() => {
      try {
        return Boolean(session && JSON.parse(session)?.user)
      } catch {
        return false
      }
    })()

    const timer = window.setTimeout(
      () => navigate(hasSession ? '/dashboard' : '/welcome', { replace: true }),
      1700,
    )
    return () => window.clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-brand-800">
      {/* Decorative DNA watermark */}
      <div className="dna-watermark pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-8 pb-32 text-center animate-fade-in">
        <LogoMark size={96} light />
        <div>
          <p
            className="text-4xl font-extrabold tracking-tight text-white"
            style={{ letterSpacing: '-0.02em' }}
          >
            Gene<span className="text-brand-300">Clarity</span>
          </p>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-200/85">
            {t('brand.line')}
          </p>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="relative z-10 flex flex-col items-center gap-3 pb-40 animate-fade-in">
        <span
          className="h-7 w-7 rounded-full border-[3px] border-white/25 border-t-white animate-spin-slow"
          aria-hidden="true"
        />
        <p className="text-[13px] font-semibold text-white/85">{t('splash.loading')}</p>
      </div>

      {/* Brand wave */}
      <div
        className="brand-wave pointer-events-none absolute inset-x-0 bottom-0 h-56"
        style={{
          borderRadius: '100% 100% 0 0 / 34% 34% 0 0',
        }}
        aria-hidden="true"
      />

      <p className="absolute inset-x-0 bottom-6 z-10 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
        {t('splash.notice')}
      </p>
    </div>
  )
}
