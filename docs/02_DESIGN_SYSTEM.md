# 02 — Design System

Derived directly from the supplied GeneClarity reference image (not a generic
healthcare template). Tokens live in `src/styles/index.css` and
`tailwind.config.js`.

## Colour

| Token | Hex | Role |
| --- | --- | --- |
| `brand-700` | `#14655A` | Primary action colour, headings accent — the deep emerald from the reference |
| `brand-500` | `#2E8B7A` | Hover/active, icons, links |
| `brand-200` | `#A3DFC9` | Focus rings, borders |
| `brand-100` | `#DFF4EC` | Soft fills, info notes |
| `mint-50` | `#F3FAF7` | Page background |
| `mint-100` | `#E8F6F0` | Card highlights, icon chips |
| `mint-200` | `#C9EBDD` | Card borders |
| `ink-900 → ink-300` | `#1B2B27 → #93A29F` | Text hierarchy (headings → muted → faint) |
| `danger-500` | `#D64545` | Destructive actions, unread dots |
| `caution-100/600` | `#FDF3DE / #9A6B1F` | "Demonstration data" banners |

Rules:

- Green means *primary action* or *positive state* — never "diagnosis green".
- Amber is reserved for demonstration/sample-data notices so they can never be
  mistaken for content.
- Red is only for destructive/consent-revoking actions.

## Typography

| Language | Font | Notes |
| --- | --- | --- |
| English | **Plus Jakarta Sans** (400–800) | Friendly, modern, high legibility |
| Arabic | **Cairo** (400–800) | Designed for Arabic; loaded alongside |

Scale (mobile-first):

- Screen title: 20–24 px, weight 800
- Section eyebrow: 11 px, uppercase, tracked `0.14em`, `brand-600`
- Body: 14–15 px, weight 400–500, line-height 1.6
- Caption/label: 12–13 px
- Buttons: 15 px, weight 700

## Shape, spacing, elevation

- Card radius: `1rem` (rounded-card); controls `0.875rem`; pills fully round.
- 4 px spacing base; screen gutters `1.25rem` (20 px).
- Cards: white on mint background with a soft 1-level shadow (`shadow-card`);
  primary buttons carry `shadow-button` (subtle lift).
- Content column is capped at `max-w-md` so the app reads as a phone app even
  on desktop browsers.

## Components (defined once, used everywhere)

| Component | File | Purpose |
| --- | --- | --- |
| `.btn` + variants | `styles/index.css` | `primary` (emerald fill), `secondary` (outline), `ghost`, `soft`, `danger`; sizes `sm/lg` |
| `.card`, `.field`, `.menu-row`, `.eyebrow` | `styles/index.css` | Layout primitives |
| `Button, Pill, Switch, TextField, SampleBanner, SafetyNote, SectionTitle, Tick, EmptyState` | `components/UI.jsx` | Shared UI kit |
| `Screen, AppBar, BottomNav` | `components/Shell.jsx` | Phone-frame chrome, top bar, tab bar |
| `LogoMark, Wordmark, LogoLockup` | `components/Logo.jsx` | DNA + leaf brand marks (pure SVG, no image assets) |
| `Illustrations` | `components/Illustrations.jsx` | Family, couple, counsellor, success scenes (SVG) |
| `Icon` | `components/Icon.jsx` | Inline SVG icon set |

## Motion

- Entrances: `fade-up` and `scale-in`, staggered 55 ms per list item.
- All motion is wrapped in `@media (prefers-reduced-motion: reduce)` to disable
  animation for users who request it (accessibility).

## Accessibility baked into the system

- Focus-visible rings (`ring-4 ring-brand-200`) on every interactive element.
- Minimum touch target ~40 px (icon buttons are `h-10 w-10`).
- Semantic landmarks (`banner`, `main`, `navigation`) and aria labels on
  icon-only buttons.
- Logical CSS properties (`ps-`, `pe-`, `start-`, `end-`) so RTL flips layout
  without duplicate stylesheets.

## Type safety of the design system

Dynamic class construction (e.g. `btn btn--${variant}`) is invisible to
Tailwind's content scanner and would be purged from the CSS. This project
therefore:

1. Builds variant classes through a **literal lookup map** in `UI.jsx`, and
2. Pins every runtime-built class in the Tailwind `safelist`.

This was a real bug found during browser QA (buttons rendering with no
background) and is documented here so it is not reintroduced.
