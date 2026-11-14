import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import Icon from './Icon.jsx'

/**
 * Language picker, styled after the toggle in the reference design.
 * `variant` controls size: 'inline' for the welcome screen, 'chip' for
 * the settings row. Both open the same dropdown listing every
 * supported language, with a checkmark on the active one.
 */
export default function LanguageToggle({ variant = 'inline', className = '' }) {
  const { lang, setLang, languages, isRTL, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  // Close when clicking or tapping outside the picker, and on Escape.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const current = languages.find((l) => l.code === lang) || languages[0]

  const menu = (
    <ul
      role="listbox"
      aria-label={t('set.language')}
      className={`absolute z-40 mt-2 min-w-[190px] overflow-hidden rounded-card border border-ink-100 bg-white py-1 shadow-lift ${
        isRTL ? 'left-0' : 'right-0'
      }`}
    >
      {languages.map((l) => {
        const active = l.code === lang
        return (
          <li key={l.code}>
            <button
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-start text-[14px] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand-200 ${
                active
                  ? 'bg-brand-50 font-bold text-brand-700'
                  : 'text-ink-700 hover:bg-ink-50'
              }`}
            >
              <span>{l.native}</span>
              {active && (
                <span aria-hidden="true" className="text-brand-700">
                  ✓
                </span>
              )}
            </button>
          </li>
        )
      })}
    </ul>
  )

  if (variant === 'chip') {
    // Compact pill for the settings row: shows the active language.
    return (
      <div ref={wrapRef} className={`relative ${className}`}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className="flex items-center gap-1.5 rounded-full border border-ink-100 bg-white px-4 py-1.5 text-[13px] font-bold text-ink-700 transition-colors hover:text-brand-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
        >
          {current.native}
          <Icon
            name="chevronDown"
            size={14}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
        {open && menu}
      </div>
    )
  }

  // 'inline' — the welcome screen's picker, slightly larger.
  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-2 rounded-full border border-ink-200 bg-white/90 px-5 py-2.5 text-[14px] font-bold text-ink-700 shadow-card backdrop-blur transition-colors hover:text-brand-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
      >
        {current.native}
        <Icon
          name="chevronDown"
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && menu}
    </div>
  )
}
