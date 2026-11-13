/**
 * Shared line-icon set.
 *
 * All icons are hand-drawn on a 24×24 grid with a 1.8px stroke so they
 * feel like one family. Keeping them inline avoids an icon-font
 * dependency and keeps the bundle small.
 */

const paths = {
  dna: (
    <>
      <path d="M7 2c0 5 10 6 10 10s-10 5-10 10" />
      <path d="M17 2c0 5-10 6-10 10s10 5 10 10" />
      <path d="M8.5 6h7M7 12h10M8.5 18h7" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.4-3 8.2-7 10-4-1.8-7-5.6-7-10V6l7-3z" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-9.2A4.2 4.2 0 0112 8a4.2 4.2 0 017 2.8C19 15.6 12 20 12 20z" />
  ),
  home: <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z" />,
  file: (
    <>
      <path d="M14 3H7a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V7z" />
      <path d="M14 3v4h4M9 13h6M9 17h4" />
    </>
  ),
  tips: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0012 3z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20a7.5 7.5 0 0115 0" />
    </>
  ),
  userPlus: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.5 20a6.5 6.5 0 0113 0" />
      <path d="M18 7v6M15 10h6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20a6.5 6.5 0 0113 0" />
      <path d="M16 5.2a3.2 3.2 0 010 5.6M17.5 20a6.6 6.6 0 00-2-4.7" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 14.5a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.6 1.6 0 009 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 110-4h.1A1.6 1.6 0 004.6 9a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V3a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z" />
    </>
  ),
  bell: (
    <>
      <path d="M18 9a6 6 0 10-12 0c0 5-2 6-2 6h16s-2-1-2-6z" />
      <path d="M13.7 20a2 2 0 01-3.4 0" />
    </>
  ),
  chevronRight: <path d="M9 5l7 7-7 7" />,
  chevronLeft: <path d="M15 5l-7 7 7 7" />,
  chevronDown: <path d="M5 9l7 7 7-7" />,
  arrowRight: <path d="M4 12h16M14 6l6 6-6 6" />,
  arrowLeft: <path d="M20 12H4M10 6l-6 6 6 6" />,
  check: <path d="M5 13l4.5 4.5L19 7" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.7 2.7L16.5 9.5" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" />,
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  eyeOff: (
    <>
      <path d="M3 3l18 18" />
      <path d="M10.6 6.1A9.7 9.7 0 0112 6c6 0 9.5 6 9.5 6a17.6 17.6 0 01-3.4 4.1M6.6 7.7A17.4 17.4 0 002.5 12S6 18 12 18a9.4 9.4 0 003.4-.6" />
      <path d="M9.9 9.9a3 3 0 004.2 4.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2" />
      <path d="M8 10V7.5a4 4 0 018 0V10" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18-2.5-2.6-2.5-15.4 0-18z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  phone: (
    <path d="M5 3.5h3.2l1.6 4-2 1.3a12 12 0 005.4 5.4l1.3-2 4 1.6V19a1.5 1.5 0 01-1.7 1.5A15.5 15.5 0 013.5 5.2 1.5 1.5 0 015 3.5z" />
  ),
  message: <path d="M20.5 11.5a7.7 7.7 0 01-8.3 7.7c-.7 0-1.4-.1-2-.3L4 20.5l1.6-4.4A7.7 7.7 0 1120.5 11.5z" />,
  chat: (
    <>
      <path d="M20.5 11.5a7.7 7.7 0 01-8.3 7.7c-.7 0-1.4-.1-2-.3L4 20.5l1.6-4.4A7.7 7.7 0 1120.5 11.5z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </>
  ),
  logout: (
    <>
      <path d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3" />
      <path d="M10 8l-4 4 4 4M6 12h9" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.6 9.4a2.5 2.5 0 114 2.4c-.9.6-1.6 1.1-1.6 2.2" />
      <path d="M12 17.5h.01" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 015.5 4H11v16H5.5A1.5 1.5 0 014 18.5z" />
      <path d="M20 5.5A1.5 1.5 0 0018.5 4H13v16h5.5a1.5 1.5 0 001.5-1.5z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </>
  ),
  download: <path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M4.5 19.5h15" />,
  upload: <path d="M12 19V8M7.5 12.5L12 8l4.5 4.5M4.5 4.5h15" />,
  share: (
    <>
      <circle cx="17.5" cy="6" r="2.5" />
      <circle cx="6.5" cy="12" r="2.5" />
      <circle cx="17.5" cy="18" r="2.5" />
      <path d="M8.8 10.8l6.5-3.6M8.8 13.2l6.5 3.6" />
    </>
  ),
  link: (
    <>
      <path d="M10 13.5a3.5 3.5 0 005 0l3-3a3.5 3.5 0 00-5-5l-1 1" />
      <path d="M14 10.5a3.5 3.5 0 00-5 0l-3 3a3.5 3.5 0 005 5l1-1" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4l9 15.5H3z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
  ),
  trash: (
    <>
      <path d="M4.5 6.5h15M9.5 6.5V4.8A1.3 1.3 0 0110.8 3.5h2.4a1.3 1.3 0 011.3 1.3v1.7" />
      <path d="M6.5 6.5l.9 12.2A1.8 1.8 0 009.2 20.5h5.6a1.8 1.8 0 001.8-1.8l.9-12.2" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 11-2.6-5.9" />
      <path d="M20 4v4.5h-4.5" />
    </>
  ),
  // --- Brand-mark icons (used only in the sign-in buttons) ---------
  leaf: (
    <>
      <path d="M5 19c0-7.5 5.5-13.5 14-14 1 9-4.5 15-11.5 15H5z" />
      <path d="M5 19c3-4.5 6.5-7 10.5-9" />
    </>
  ),
  apple: (
    <path
      d="M16.4 1.5c0 1.1-.4 2.2-1.2 3-.9.9-2.1 1.6-3.2 1.5-.1-1.1.4-2.2 1.2-3 .9-.9 2.3-1.5 3.2-1.5zm4 15.6c-.5 1.2-.8 1.8-1.5 2.9-1 1.6-2.4 3.5-4.1 3.5-1.5 0-1.9-1-4-1s-2.5 1-4 1c-1.7 0-3-1.7-4-3.3C.4 15.7 0 10.6 1.7 7.9 2.9 6 4.8 4.8 6.6 4.8c1.8 0 3 1 4.5 1 1.5 0 2.4-1 4.5-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.3 9.9z"
      fill="currentColor"
      stroke="none"
    />
  ),
  google: (
    <g fill="none" stroke="none">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.2z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.7 0-10.6-3.9-12.3-9.1H4.3v5.7C8 41.1 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.7 28.2c-.4-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3C2.9 17.1 2 20.4 2 24s.9 6.9 2.3 9.9l7.4-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.8c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 29.9 2 24 2 15.4 2 8 6.9 4.3 14.1l7.4 5.7c1.7-5.2 6.6-9.1 12.3-9.1z"
      />
    </g>
  ),
}

// A few icons are drawn on a different grid than the shared 24×24.
const customViewBox = {
  google: '0 0 48 48',
}

export default function Icon({ name, size = 22, className = '', strokeWidth = 1.8 }) {
  const content = paths[name]
  if (!content) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox={customViewBox[name] || '0 0 24 24'}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  )
}
