import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Small presentational primitives shared by every screen. Keeping them
 * here means the visual language (radii, colours, spacing) is defined
 * in exactly one place.
 */

const VARIANTS = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  ghost: 'btn--ghost',
  soft: 'btn--soft',
  danger: 'btn--danger',
}

/** Primary / secondary / ghost button. */
export function Button({
  children,
  variant = 'primary',
  size,
  icon,
  iconEnd,
  className = '',
  ...props
}) {
  // Looked up through a map (not interpolated) so the class names stay
  // visible to Tailwind's content scanner.
  const variantClass = VARIANTS[variant] || VARIANTS.primary
  const sizeClass = size === 'lg' ? 'btn--lg' : size === 'sm' ? 'btn--sm' : ''
  return (
    <button type="button" className={`btn ${variantClass} ${sizeClass} ${className}`} {...props}>
      {icon && <Icon name={icon} size={18} />}
      {children}
      {iconEnd && <Icon name={iconEnd} size={18} />}
    </button>
  )
}

/**
 * The persistent "this is a demonstration" notice.
 *
 * Safety rule: sample results must never be presented as real. This
 * component is deliberately prominent and appears on every screen that
 * shows screening data.
 */
export function SampleBanner({ compact = false }) {
  const { t } = useLanguage()
  return (
    <div
      role="note"
      className={`flex gap-3 rounded-control border border-caution-400/35 bg-caution-100 ${
        compact ? 'px-3 py-2' : 'px-4 py-3'
      }`}
    >
      <span className="mt-0.5 shrink-0 text-caution-600">
        <Icon name="alert" size={compact ? 16 : 18} />
      </span>
      <div className="min-w-0">
        <p className="text-[12.5px] font-bold leading-snug text-caution-600">
          {t('notice.sampleHeading')}
        </p>
        {!compact && (
          <p className="mt-0.5 text-[12.5px] leading-snug text-caution-600/90">
            {t('notice.sampleBody')}
          </p>
        )}
      </div>
    </div>
  )
}

/** The "not a diagnosis" safety note. */
export function SafetyNote({ text, className = '' }) {
  return (
    <div
      role="note"
      className={`flex items-start gap-2.5 rounded-control bg-brand-100 px-4 py-3 ${className}`}
    >
      <span className="mt-0.5 shrink-0 text-brand-700">
        <Icon name="shield" size={17} />
      </span>
      <p className="text-[12.5px] font-semibold leading-snug text-brand-800">
        {text}
      </p>
    </div>
  )
}

/** Status pill. `tone` is 'ok' | 'sample' | 'neutral' | 'caution'. */
export function Pill({ children, tone = 'neutral', className = '' }) {
  const tones = {
    ok: 'bg-brand-100 text-brand-800',
    sample: 'bg-caution-100 text-caution-600',
    neutral: 'bg-ink-50 text-ink-500',
    caution: 'bg-caution-100 text-caution-600',
  }
  return (
    <span className={`pill ${tones[tone]} ${className}`}>{children}</span>
  )
}

/** Section heading with an optional trailing action. */
export function SectionTitle({ children, action }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="section-title">{children}</h2>
      {action}
    </div>
  )
}

/**
 * Accessible switch. Uses a real checkbox under the hood so keyboard
 * and screen-reader behaviour comes for free.
 */
export function Switch({ checked, onChange, label, description, id }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start justify-between gap-4 py-3"
    >
      <span className="min-w-0">
        <span className="block text-[15px] font-bold text-ink-900">{label}</span>
        {description && (
          <span className="mt-0.5 block text-[13px] leading-snug text-ink-400">
            {description}
          </span>
        )}
      </span>
      <span className="relative mt-0.5 inline-flex shrink-0">
        <input
          id={id}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="block h-6 w-11 rounded-full bg-ink-200 transition-colors duration-200 peer-checked:bg-brand-700 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-200" />
        <span className="pointer-events-none absolute start-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 peer-checked:translate-x-5 rtl:peer-checked:-translate-x-5" />
      </span>
    </label>
  )
}

/** Checkbox with a tick, used in consent and registration forms. */
export function Tick({ checked, onChange, children, id, error }) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <span className="relative mt-0.5 inline-flex shrink-0">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="peer sr-only"
          />
          <span
            className={`grid h-5 w-5 place-items-center rounded-md border transition-colors peer-checked:border-brand-700 peer-checked:bg-brand-700 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-200 ${
              error ? 'border-danger-500' : 'border-ink-200'
            }`}
          >
            <Icon
              name="check"
              size={13}
              strokeWidth={3}
              className={`text-white transition-opacity ${checked ? 'opacity-100' : 'opacity-0'}`}
            />
          </span>
        </span>
        <span className="text-[13.5px] leading-snug text-ink-500">{children}</span>
      </label>
      {error && <p className="mt-1.5 text-[12.5px] font-semibold text-danger-500">{error}</p>}
    </div>
  )
}

/** Text field with a leading icon and optional password reveal. */
export function TextField({
  id,
  label,
  type = 'text',
  error,
  icon,
  canReveal = false,
  revealToggle,
  ...props
}) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute inset-y-0 start-3.5 flex items-center text-ink-300">
            <Icon name={icon} size={18} />
          </span>
        )}
        <input
          id={id}
          type={type}
          className={`field ${icon ? 'ps-11' : ''} ${
            canReveal ? 'pe-12' : ''
          } ${error ? 'field--error' : ''}`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {canReveal && revealToggle}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[12.5px] font-semibold text-danger-500">
          {error}
        </p>
      )}
    </div>
  )
}

/** Empty-state block. */
export function EmptyState({ icon = 'info', title, body, action }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-100 text-brand-700">
        <Icon name={icon} size={26} />
      </span>
      <h3 className="text-base font-extrabold text-ink-900">{title}</h3>
      {body && <p className="max-w-xs text-sm leading-relaxed text-ink-400">{body}</p>}
      {action}
    </div>
  )
}
