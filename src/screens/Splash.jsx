import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoMark, Wordmark } from '../components/Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Splash screen — matches the reference design: light background with
 * the green brand mark and wordmark, and a deep-green organic wave at
 * the bottom carrying the spinner and "Loading…" label.
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

  // Tapping anywhere skips the wait — same destination as the timer.
  const skip = () => {
    let hasSession = false
    try {
      const raw = window.localStorage.getItem('geneclarity.state.v1')
      hasSession = Boolean(raw && JSON.parse(raw)?.user)
    } catch {
      /* treat as a new visitor */
    }
    navigate(hasSession ? '/dashboard' : '/welcome', { replace: true })
  }

  return (
    <div
      className="screen relative cursor-pointer overflow-hidden bg-white"
      onClick={skip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') skip()
      }}
      aria-label={t('splash.loading')}
    >
      {/* Brand lockup, centred in the light area */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 px-8 pb-44 text-center animate-fade-in">
        <LogoMark size={104} />
        <div>
          <Wordmark size="text-4xl" />
          <p className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-600">
            {t('brand.line')}
          </p>
        </div>
      </div>

      {/* Deep-green organic wave at the bottom — drawn as an SVG path so
          the crest curves like the reference art rather than a dome. */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-60 w-full"
        viewBox="0 0 448 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gcWave" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#22856B" />
            <stop offset="0.55" stopColor="#14655A" />
            <stop offset="1" stopColor="#0F4F46" />
          </linearGradient>
        </defs>
        <path
          d="M0 64C90 20 180 88 264 56c70-27 130-33 184-13v197H0V64Z"
          fill="url(#gcWave)"
        />
      </svg>

      {/* Loading indicator, sitting inside the wave */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-60 flex-col items-center justify-end gap-3 pb-14 animate-fade-in">
        <span
          className="h-7 w-7 rounded-full border-[3px] border-white/25 border-t-white animate-spin-slow"
          aria-hidden="true"
        />
        <p className="text-[13px] font-semibold text-white/90">{t('splash.loading')}</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
          {t('splash.notice')}
        </p>
      </div>
    </div>
  )
}
