/**
 * GeneClarity brand marks.
 *
 * The primary mark is a DNA double helix that resolves into two leaves,
 * echoing the reference design's "genetics + growth" idea. It is drawn
 * as SVG so it stays crisp at any size and needs no image asset.
 */
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function LogoMark({ size = 72, className = '', light = false }) {
  // `light` swaps the palette for placement on the deep-green splash.
  const strandA = light ? '#FFFFFF' : 'url(#gcLeaf)'
  const strandB = light ? '#C9EBDD' : 'url(#gcLeafB)'
  const rung = light ? '#FFFFFF' : '#0F4F46'
  const leafA = light ? '#FFFFFF' : 'url(#gcLeaf)'
  const leafB = light ? '#C9EBDD' : 'url(#gcLeafB)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      role="img"
      aria-label="GeneClarity logo"
    >
      <defs>
        <linearGradient id="gcLeaf" x1="10" y1="8" x2="86" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3FAE8B" />
          <stop offset="0.55" stopColor="#22856B" />
          <stop offset="1" stopColor="#0F4F46" />
        </linearGradient>
        <linearGradient id="gcLeafB" x1="80" y1="14" x2="20" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6FC9AC" />
          <stop offset="1" stopColor="#14655A" />
        </linearGradient>
      </defs>

      {/* Left helix strand */}
      <path
        d="M34 12c0 16 28 20 28 36S34 64 34 84"
        stroke={strandA}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Right helix strand */}
      <path
        d="M62 12c0 16-28 20-28 36s28 16 28 36"
        stroke={strandB}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Rungs */}
      <g stroke={rung} strokeWidth="3.4" strokeLinecap="round" opacity={light ? 0.6 : 0.55}>
        <path d="M37 24h22M33 48h30M37 72h22" />
      </g>

      {/* Two leaves sprouting from the helix */}
      <path d="M70 20c8-1 14 3 16 10-8 2-15-1-17-7-.6-1.8.4-3 1-3z" fill={leafA} />
      <path d="M26 66c-8 1-14-3-16-10 8-2 15 1 17 7 .6 1.8-.4 3-1 3z" fill={leafB} />
    </svg>
  )
}

export function Wordmark({ size = 'text-3xl', className = '' }) {
  return (
    <span
      className={`${size} font-extrabold tracking-tight text-brand-800 ${className}`}
      style={{ letterSpacing: '-0.02em' }}
    >
      Gene<span className="text-brand-500">Clarity</span>
    </span>
  )
}

/** Full lockup: mark above wordmark, used on splash and welcome. */
export function LogoLockup({ markSize = 84, showTagline = true }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <LogoMark size={markSize} />
      <div className="flex flex-col items-center">
        <Wordmark size="text-4xl" />
        {showTagline && (
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-600">
            {t('brand.line')}
          </p>
        )}
      </div>
    </div>
  )
}
