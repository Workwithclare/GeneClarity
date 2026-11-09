/**
 * Flat vector illustrations used in place of stock photography.
 *
 * They are drawn in the brand palette so they sit naturally inside the
 * interface, and they avoid using any third-party image that would need
 * a licence declaration.
 */

const TONES = {
  deep: '#0F4F46',
  mid: '#14655A',
  light: '#3FAE8B',
  pale: '#A3DFC9',
  wash: '#E6F5EF',
  ink: '#12201D',
  cream: '#F4FBF7',
}

/** A single simplified person: head, shoulders, optional hair. */
function Figure({ x, y, scale = 1, body, hair = 'none', skin = '#E8B98F' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* body */}
      <path
        d="M-26 60c0-16 11.6-27 26-27s26 11 26 27v6H-26z"
        fill={body}
      />
      {/* neck */}
      <rect x="-7" y="20" width="14" height="16" rx="6" fill={skin} />
      {/* head */}
      <circle cx="0" cy="4" r="20" fill={skin} />
      {hair === 'short' && (
        // A cap covering the top half of the head, with a soft hairline.
        <path
          d="M-20 4a20 20 0 0140 0C16 8, 10 10, 0 10C-10 10, -16 8, -20 4Z"
          fill={TONES.ink}
        />
      )}
      {hair === 'long' && (
        <path
          d="M-21 6a21 21 0 0142 0c0 6 2 16 3 24-4-2-6-8-6-14-6 3-14 4-21 2s-13-7-15-12c-1 6-2 16-3 22-2-8-2-18 0-22z"
          fill={TONES.ink}
        />
      )}
      {hair === 'curls' && (
        <g fill={TONES.ink}>
          <circle cx="0" cy="-14" r="11" />
          <circle cx="-15" cy="-6" r="10" />
          <circle cx="15" cy="-6" r="10" />
          <circle cx="-11" cy="-16" r="8" />
          <circle cx="11" cy="-16" r="8" />
        </g>
      )}
      {/* simple, neutral face */}
      <g fill={TONES.ink} opacity="0.75">
        <circle cx="-7" cy="5" r="1.9" />
        <circle cx="7" cy="5" r="1.9" />
      </g>
      <path
        d="M-5.5 13a7 7 0 0011 0"
        stroke={TONES.ink}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </g>
  )
}

/** Welcome screen: a family group on a soft mint disc. */
export function FamilyIllustration({ className = '', width = 300 }) {
  return (
    <svg
      viewBox="0 0 320 210"
      width={width}
      className={className}
      role="img"
      aria-label="An illustration of a family"
    >
      <ellipse cx="160" cy="176" rx="126" ry="30" fill={TONES.wash} />
      <circle cx="160" cy="104" r="94" fill={TONES.wash} />

      {/* adults */}
      <Figure x={86} y={70} scale={1.02} body={TONES.mid} hair="short" />
      <Figure x={234} y={70} scale={1.02} body={TONES.light} hair="long" skin="#F0C9A6" />
      {/* child */}
      <Figure x={160} y={104} scale={0.78} body={TONES.pale} hair="curls" skin="#E8B98F" />

      {/* a small leaf sprig, tying back to the logo */}
      <g transform="translate(160 22)" opacity="0.9">
        <path d="M0 8c0-7 6-12 14-12 0 8-6 13-14 12z" fill={TONES.light} />
        <path d="M0 8c0-7-6-12-14-12 0 8 6 13 14 12z" fill={TONES.pale} />
        <path d="M0 14V4" stroke={TONES.mid} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </svg>
  )
}

/** CoupleConnect screen: two people with a shared link between them. */
export function CoupleIllustration({ className = '', width = 260 }) {
  return (
    <svg
      viewBox="0 0 280 170"
      width={width}
      className={className}
      role="img"
      aria-label="An illustration of two people connected by consent"
    >
      <circle cx="140" cy="88" r="76" fill={TONES.wash} />
      <Figure x={76} y={58} scale={0.92} body={TONES.mid} hair="short" />
      <Figure x={204} y={58} scale={0.92} body={TONES.light} hair="long" skin="#F0C9A6" />

      {/* consent link between them */}
      <g stroke={TONES.mid} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.65">
        <path d="M116 96a24 24 0 0148 0" strokeDasharray="7 8" />
      </g>
      <g transform="translate(140 108)">
        <circle r="17" fill={TONES.mid} />
        <path
          d="M-6 0.5l4.2 4.2L7-5"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  )
}

/** Support screen: a counsellor wearing a headset. */
export function CounsellorIllustration({ className = '', width = 170 }) {
  return (
    <svg
      viewBox="0 0 180 170"
      width={width}
      className={className}
      role="img"
      aria-label="An illustration of a genetic counsellor"
    >
      <circle cx="90" cy="86" r="72" fill={TONES.wash} />
      <Figure x={90} y={54} scale={1.05} body={TONES.mid} hair="curls" skin="#8C5A3C" />

      {/* headset */}
      <g stroke={TONES.deep} strokeWidth="5" fill="none" strokeLinecap="round">
        <path d="M64 44a27 27 0 0152 0" />
      </g>
      <rect x="56" y="42" width="13" height="20" rx="6" fill={TONES.deep} />
      <rect x="111" y="42" width="13" height="20" rx="6" fill={TONES.deep} />
      <path d="M62 60c0 14 8 22 20 24" stroke={TONES.deep} strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="84" cy="85" r="5" fill={TONES.deep} />

      {/* lab coat collar detail */}
      <path d="M74 92l16 14 16-14" stroke={TONES.cream} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Profile / dashboard portrait — original flat artwork, no photo stock. */
export function AvatarArt({ size = 96, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label="Profile portrait"
    >
      <circle cx="48" cy="48" r="48" fill={TONES.wash} />
      {/* shoulders / top */}
      <path d="M14 96c2.5-18 16-28 34-28s31.5 10 34 28z" fill={TONES.mid} />
      {/* neck */}
      <rect x="41" y="52" width="14" height="18" rx="7" fill="#8C5A3C" />
      {/* hair mass behind the head */}
      <circle cx="48" cy="40" r="22" fill="#12201D" />
      {/* face */}
      <circle cx="48" cy="43" r="18" fill="#8C5A3C" />
      {/* fringe / curls over the forehead */}
      <path
        d="M31 42a17 17 0 0134 0c-4-6-9-9-17-9s-13 3-17 9z"
        fill="#12201D"
      />
      <circle cx="29" cy="46" r="7" fill="#12201D" />
      <circle cx="67" cy="46" r="7" fill="#12201D" />
      {/* simple, friendly face */}
      <g fill="#12201D" opacity="0.8">
        <circle cx="42" cy="44" r="1.9" />
        <circle cx="54" cy="44" r="1.9" />
      </g>
      <path
        d="M43 51.5a6.5 6.5 0 0010 0"
        stroke="#12201D"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
      {/* collar detail */}
      <path d="M40 70l8 8 8-8" stroke={TONES.cream} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Report-ready success mark used on the report and completion screens. */
export function SuccessMark({ size = 96, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label="Complete"
    >
      <circle cx="48" cy="48" r="44" fill={TONES.mid} />
      <circle cx="48" cy="48" r="44" fill="none" stroke={TONES.light} strokeWidth="3" opacity="0.5" />
      <path
        d="M31 49l12 12 23-25"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* celebration confetti — green and gold, as in the reference */}
      <g stroke={TONES.light} strokeWidth="4" strokeLinecap="round">
        <path d="M82 20l6-6M14 76l-6 6M48 6V1M48 95v-5" />
      </g>
      <g stroke="#F5C842" strokeWidth="4" strokeLinecap="round">
        <path d="M14 20l-6-6M82 76l6 6" />
      </g>
      <g fill="#F5C842">
        <circle cx="9" cy="48" r="3" />
        <circle cx="87" cy="48" r="3" />
      </g>
      <g fill={TONES.light}>
        <circle cx="24" cy="12" r="2.5" />
        <circle cx="72" cy="84" r="2.5" />
      </g>
    </svg>
  )
}
