/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Component classes that are assembled at runtime (e.g. `btn--${variant}`)
  // are invisible to Tailwind's content scanner, so they must be pinned
  // here or they get purged out of the stylesheet.
  safelist: [
    'btn--primary',
    'btn--secondary',
    'btn--ghost',
    'btn--soft',
    'btn--danger',
    'btn--sm',
    'btn--lg',
    'screen--white',
    'card--mint',
    'field--error',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand greens, sampled from the GeneClarity design reference.
        brand: {
          50: '#F2FAF6',
          100: '#E6F5EF',
          200: '#C9EBDD',
          300: '#A3DFC9',
          400: '#6FC9AC',
          500: '#3FAE8B',
          600: '#22856B',
          700: '#14655A',
          800: '#0F4F46',
          900: '#0B3B35',
        },
        // Neutral text colours with a slight green cast to match the brand.
        ink: {
          900: '#12201D',
          700: '#2C3B38',
          500: '#4A5A57',
          400: '#6B7C79',
          300: '#93A29F',
          200: '#C6D1CE',
          100: '#E4EBE9',
          50: '#F6F9F8',
        },
        // Soft mint surfaces used for page backgrounds and cards.
        mint: {
          50: '#F4FBF7',
          100: '#EAF7F1',
          200: '#DCF2E9',
          300: '#C2E9DC',
        },
        // Semantic colours. Amber is used for "needs attention", never for alarm.
        caution: {
          100: '#FEF4E0',
          400: '#E9A93C',
          600: '#A9711A',
        },
        // Pastel accent chips used on the dashboard Quick Access tiles.
        blush: {
          100: '#FDECEC',
          500: '#D9736E',
        },
        sky: {
          100: '#E9F2FD',
          500: '#5B84D9',
        },
        // Pale blue informational note (the report screen's "Note:" box).
        note: {
          100: '#EAF3FB',
          700: '#3E6E8E',
        },
        danger: {
          100: '#FDECEA',
          500: '#C0453B',
          600: '#A5382F',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'Segoe UI',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        arabic: [
          'Cairo',
          '"Segoe UI"',
          'Tahoma',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '1.25rem',
        control: '0.875rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(18, 32, 29, 0.04), 0 8px 24px rgba(18, 32, 29, 0.06)',
        lift: '0 2px 4px rgba(18, 32, 29, 0.06), 0 16px 40px rgba(18, 32, 29, 0.10)',
        button: '0 6px 16px rgba(20, 101, 90, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.45s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'spin-slow': 'spin-slow 1.4s linear infinite',
      },
    },
  },
  plugins: [],
}
