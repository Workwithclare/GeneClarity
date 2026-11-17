import { useNavigate } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Welcome screen — the SECOND screen in the sequence:
 *
 *   1. Splash        → src/screens/Splash.jsx (untouched)
 *   2. THIS screen   → the supplied onboarding artwork, verbatim
 *   3. Authentication → /register (Get Started) or /login (Sign In)
 *
 * ─────────────────────────────────────────────────────────────────
 * WHY THIS SCREEN LOOKS DIFFERENT FROM THE OTHERS
 *
 * The visual is the exact image supplied for approval — logo, family
 * illustration, headline, colours and the two buttons are all baked
 * into `public/assets/welcome-onboarding.png` (226 × 490). Two
 * background-only edits were made to the file, as requested: the
 * mock-up's 9:41 status bar was cropped off the top, and the
 * artwork's own background was extended 20px top and bottom so the
 * picture matches the 9:19.5 phone-screen ratio and fills the
 * viewport exactly like every other screen. No illustration pixels
 * were redrawn, re-created or approximated here; the file is the
 * design.
 *
 * Because "Get Started", "Sign In" and "EN | العربية" are pixels in
 * that picture rather than DOM nodes, they are made tappable with
 * TRANSPARENT <button> hit areas layered over their measured
 * positions (percentages of the artwork box). The wrapper carries the
 * image's own aspect ratio, so the artwork and the wrapper are the
 * same rectangle at every viewport size and the hit areas cannot
 * drift away from the buttons they stand in for.
 *
 * ─────────────────────────────────────────────────────────────────
 * HONEST LIMITS OF THIS APPROACH (also recorded in docs):
 *   • The headline inside the image is English in every language —
 *     the artwork is a flat picture, so switching language does not
 *     re-translate it. The language PICKER itself is live (it opens
 *     the real menu and really changes the app language).
 *   • The "EN | العربية" label is likewise part of the picture; only
 *     the tap target over it is functional.
 * ─────────────────────────────────────────────────────────────────
 *
 * The medical-safety line the old screen printed under the buttons is
 * kept in the DOM as visually-hidden text: the artwork has no room
 * for it and adding visible chrome would alter the approved image.
 */
export default function Welcome() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Hit-area geometry, measured pixel-by-pixel against the 226 × 490
  // source image and converted to percentages of that box, then padded
  // to a comfortable tap size (the raw text boxes are far smaller
  // than the recommended 44px touch target).
  //   Get Started pill : x 19–209, y 385–419
  //   Sign In label    : x 97–130, y 437–447 (expanded to a tap size)
  //   Language label   : x 160–204, y 38–47  (expanded to a tap size)
  const HIT = {
    getStarted: { left: '8.41%', top: '78.57%', width: '84.51%', height: '7.14%' },
    signIn: { left: '34.4%', top: '86.8%', width: '32%', height: '7%' },
    language: { left: '65.8%', top: '4.8%', width: '30%', height: '8%' },
  }

  return (
    <div className="screen relative overflow-hidden bg-white">
      {/* Centre the artwork and cap it at the visible viewport height
          so it fills the screen as closely as its ratio allows. */}
      <div className="flex h-[100dvh] w-full items-center justify-center">
        <div className="welcome-art relative">
          <img
            src="/assets/welcome-onboarding.png"
            alt="GeneClarity. Know more. Plan better. Get clear, simple insights about your genetic health. A family of three."
            className="block h-full w-full"
            draggable={false}
          />

          {/* Get Started → account registration */}
          <button
            type="button"
            onClick={() => navigate('/register')}
            aria-label={t('act.getStarted')}
            style={HIT.getStarted}
            className="absolute rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
          />

          {/* Sign In → login */}
          <button
            type="button"
            onClick={() => navigate('/login')}
            aria-label={t('act.signIn')}
            style={HIT.signIn}
            className="absolute rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
          />

          {/* Language selector — transparent hit area over the label
              drawn into the artwork; opens the real language menu. */}
          <div className="absolute" style={HIT.language}>
            <LanguageToggle variant="bare" className="h-full w-full" />
          </div>
        </div>
      </div>

      {/* Safety copy, visually hidden — the approved artwork has no
          space for it and drawing over the image would change it. */}
      <p className="sr-only">
        {t('notice.notDiagnostic')} · {t('notice.sampleHeading')}
      </p>
    </div>
  )
}
