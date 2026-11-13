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

/**
 * Education Centre diagrams. Drawn as simple, language-neutral shapes so
 * they can sit next to either language without needing translation.
 */

/** A cell with its nucleus and a few chromosomes inside. */
export function CellsArt({ className = '', width = 300 }) {
  const chromosome = (x, y) => (
    <g key={`${x}-${y}`} stroke={TONES.deep} strokeWidth="5" strokeLinecap="round">
      <path d={`M${x - 5} ${y - 7}l10 14`} />
      <path d={`M${x - 5} ${y + 7}l10 -14`} />
    </g>
  )
  return (
    <svg
      width={width}
      height={width * 0.5}
      viewBox="0 0 300 150"
      className={className}
      role="img"
      aria-label="A cell containing a nucleus with chromosomes"
    >
      {/* neighbouring cells for context */}
      <circle cx="40" cy="118" r="16" fill={TONES.wash} stroke={TONES.pale} strokeWidth="2" />
      <circle cx="266" cy="34" r="14" fill={TONES.wash} stroke={TONES.pale} strokeWidth="2" />
      {/* cell membrane */}
      <circle cx="150" cy="75" r="64" fill={TONES.wash} stroke={TONES.light} strokeWidth="3" />
      {/* nucleus */}
      <circle cx="150" cy="75" r="34" fill={TONES.pale} stroke={TONES.mid} strokeWidth="2.5" />
      {/* chromosomes inside the nucleus */}
      {chromosome(138, 65)}
      {chromosome(163, 65)}
      {chromosome(138, 87)}
      {chromosome(163, 87)}
    </svg>
  )
}

/** A simplified DNA double helix. */
export function DnaArt({ className = '', width = 220 }) {
  const rungs = [30, 48, 66, 84, 102, 120, 138]
  return (
    <svg
      width={width}
      height={width * 0.85}
      viewBox="0 0 200 170"
      className={className}
      role="img"
      aria-label="A DNA double helix"
    >
      {/* rungs (base pairs) drawn first so the strands sit on top */}
      <g stroke={TONES.light} strokeWidth="4" strokeLinecap="round">
        {rungs.map((y) => (
          <line key={y} x1="74" y1={y} x2="126" y2={y} />
        ))}
      </g>
      {/* the two strands */}
      <g stroke={TONES.deep} strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M100 14C62 38 138 62 100 86 62 110 138 134 100 158" />
        <path d="M100 14C138 38 62 62 100 86 138 110 62 134 100 158" />
      </g>
    </svg>
  )
}

/** Two parents each contributing one half, meeting in the child. */
export function InheritanceArt({ className = '', width = 300 }) {
  return (
    <svg
      width={width}
      height={width * 0.55}
      viewBox="0 0 300 165"
      className={className}
      role="img"
      aria-label="One gene copy from each biological parent combining in the child"
    >
      {/* parent A — left half highlighted */}
      <circle cx="70" cy="50" r="30" fill={TONES.pale} stroke={TONES.mid} strokeWidth="2.5" />
      <path d="M70 20A30 30 0 0 0 70 80Z" fill={TONES.deep} />
      {/* parent B — right half highlighted */}
      <circle cx="230" cy="50" r="30" fill={TONES.pale} stroke={TONES.mid} strokeWidth="2.5" />
      <path d="M230 20A30 30 0 0 1 230 80Z" fill={TONES.light} />
      {/* contribution lines */}
      <g stroke={TONES.mid} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" fill="none">
        <path d="M84 78C100 100 112 106 126 114" />
        <path d="M216 78C200 100 188 106 174 114" />
      </g>
      {/* child — one half from each parent */}
      <circle cx="150" cy="125" r="28" fill={TONES.pale} stroke={TONES.mid} strokeWidth="2.5" />
      <path d="M150 97A28 28 0 0 0 150 153Z" fill={TONES.deep} />
      <path d="M150 97A28 28 0 0 1 150 153Z" fill={TONES.light} />
    </svg>
  )
}

/** Four equally likely outcomes, one highlighted — the 25% picture. */
export function ProbabilityArt({ className = '', width = 260 }) {
  const cells = [
    { x: 56, y: 14, shaded: true },
    { x: 140, y: 14, shaded: false },
    { x: 56, y: 98, shaded: false },
    { x: 140, y: 98, shaded: false },
  ]
  return (
    <svg
      width={width}
      height={width * 0.58}
      viewBox="0 0 260 150"
      className={className}
      role="img"
      aria-label="Four equally likely outcomes with one highlighted"
    >
      {cells.map((c) => (
        <g key={`${c.x}-${c.y}`}>
          <rect
            x={c.x}
            y={c.y}
            width="64"
            height="64"
            rx="14"
            fill={c.shaded ? TONES.deep : TONES.wash}
            stroke={c.shaded ? TONES.deep : TONES.pale}
            strokeWidth="2.5"
          />
          <circle
            cx={c.x + 32}
            cy={c.y + 32}
            r="11"
            fill={c.shaded ? '#FFFFFF' : TONES.pale}
          />
        </g>
      ))}
    </svg>
  )
}
