import { supabase, supabaseEnabled } from './supabase.js'

/**
 * Authentication helpers — the only place the UI talks to Supabase Auth.
 *
 * Every function is a no-op-friendly wrapper: when the backend is not
 * configured (`supabaseEnabled === false`) callers keep their original
 * demo behaviour and never hit the network.
 *
 * Errors are mapped to translation keys (not raw provider messages) so
 * the UI always speaks the user's language and never leaks internals.
 */

/** Build the app's user object shape from a Supabase auth user. */
export function mapAuthUser(authUser) {
  const meta = authUser.user_metadata || {}
  const fullName =
    meta.full_name ||
    meta.name ||
    (authUser.email ? authUser.email.split('@')[0] : 'GeneClarity user')
  const display = fullName.charAt(0).toUpperCase() + fullName.slice(1)
  return {
    id: authUser.id,
    fullName: display,
    email: authUser.email || '',
    // Never stored client-side; present only to match the demo shape.
    password: '',
    joinedAt: (authUser.created_at || new Date().toISOString()).slice(0, 10),
    locale: 'en',
    avatarInitials: display
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0] || '')
      .join('')
      .toUpperCase(),
  }
}

/**
 * Translate a Supabase error into a catalogue key.
 * Returns `null` for success.
 */
function mapError(error) {
  if (!error) return null
  // Prefer the structured error_code when the API provides one.
  const code = String(error.error_code || '').toLowerCase()
  if (code === 'email_address_invalid') return 'auth.errEmailShape'
  if (code === 'user_already_exists') return 'auth.errEmailTaken'
  if (code === 'invalid_credentials') return 'auth.errInvalid'
  if (code === 'email_not_confirmed') return 'auth.errConfirm'
  if (code === 'user_not_found') return 'auth.errNoAccount'
  if (code === 'weak_password') return 'auth.errPasswordShort'
  if (code.startsWith('over_email_send_rate_limit')) return 'auth.errRate'
  const msg = String(error.message || '').toLowerCase()
  if (msg.includes('invalid login credentials')) return 'auth.errInvalid'
  if (msg.includes('already registered') || msg.includes('already been registered'))
    return 'auth.errEmailTaken'
  if (/email address .* is invalid/.test(msg)) return 'auth.errEmailShape'
  if (msg.includes('user not found')) return 'auth.errNoAccount'
  if (msg.includes('rate limit') || msg.includes('for security purposes'))
    return 'auth.errRate'
  if (msg.includes('different from the old')) return 'auth.errPasswordReuse'
  if (msg.includes('confirm') || msg.includes('verification')) return 'auth.errConfirm'
  if (msg.includes('password')) return 'auth.errPasswordShort'
  if (msg.includes('fetch') || msg.includes('network') || msg.includes('failed to fetch'))
    return 'auth.errNetwork'
  return 'auth.errGeneric'
}

/**
 * Register a new account.
 * @returns {{ok: boolean, errorKey?: string, needsConfirmation?: boolean}}
 */
export async function signUpWithBackend({ fullName, email, password }) {
  if (!supabaseEnabled) return { ok: false, errorKey: 'auth.errGeneric' }
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { full_name: fullName.trim() } },
    })
    if (error) return { ok: false, errorKey: mapError(error) }
    // `session` is null when email confirmation is required — tell the
    // user to check their inbox instead of pretending they are signed in.
    if (!data.session) return { ok: false, needsConfirmation: true }
    return { ok: true, user: mapAuthUser(data.user) }
  } catch {
    return { ok: false, errorKey: 'auth.errNetwork' }
  }
}

/**
 * Sign in with email + password.
 * @returns {{ok: boolean, errorKey?: string, user?: object}}
 */
export async function signInWithBackend(email, password) {
  if (!supabaseEnabled) return { ok: false, errorKey: 'auth.errGeneric' }
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    if (error) return { ok: false, errorKey: mapError(error) }
    return { ok: true, user: mapAuthUser(data.user) }
  } catch {
    return { ok: false, errorKey: 'auth.errNetwork' }
  }
}

/** Sign out of Supabase (no-op when the backend is not configured). */
export async function signOutBackend() {
  if (!supabaseEnabled) return
  try {
    await supabase.auth.signOut()
  } catch {
    /* the local session is cleared regardless — non-fatal */
  }
}

/** Restore the session on app load (returns the mapped user or null). */
export async function restoreSession() {
  if (!supabaseEnabled) return null
  try {
    const { data } = await supabase.auth.getSession()
    return data.session?.user ? mapAuthUser(data.session.user) : null
  } catch {
    return null
  }
}

/** Subscribe to auth state changes; returns the subscription. */
export function onAuthChange(handler) {
  if (!supabaseEnabled) return { unsubscribe() {} }
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    handler(session?.user ? mapAuthUser(session.user) : null)
  })
  return data.subscription
}

/* ── Password reset ───────────────────────────────────────────────── */

/**
 * Set once the app is opened from an emailed password-recovery link
 * (the URL fragment contains `access_token=`). The flag — not the URL —
 * is the source of truth afterwards: the Supabase client clears the
 * fragment as soon as it has exchanged the tokens, so anything running
 * later must remember the landing happened here.
 */
let recoveryLanding = false

/** True when this page load started from a password-recovery email. */
export function isRecoveryLanding() {
  return recoveryLanding
}

/**
 * Record a password-recovery landing. Called once from `main.jsx`
 * before the first render. The token exchange itself is done by the
 * Supabase client (it starts when the client is created); this only
 * remembers that a link was opened so `App` can hold the router back
 * and then route to the set-new-password screen.
 */
export function captureRecoveryLink() {
  if (!supabaseEnabled) return false
  if (!(window.location.hash || '').includes('access_token=')) return false
  recoveryLanding = true
  return true
}

/**
 * Wait for the client to finish handling the URL — a successful token
 * exchange, or an expired/invalid link. Safe to call repeatedly: it
 * awaits the same initialisation promise the client already started.
 */
export async function settleRecoveryLanding() {
  if (!supabaseEnabled) return
  try {
    await supabase.auth.initialize()
  } catch {
    /* expired or invalid link — the screen shows the honest state */
  }
}

/**
 * Ask Supabase to email a password-reset link.
 * @returns {{ok: boolean, errorKey?: string}}
 */
export async function resetPasswordWithBackend(address) {
  if (!supabaseEnabled) return { ok: false, errorKey: 'auth.errGeneric' }
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(address.trim(), {
      // Supabase appends `#access_token=…&type=recovery` to this URL, so
      // it is sent without a hash of our own — `captureRecoveryLink()`
      // turns that fragment into the `#/reset-password` route.
      // The URL must be listed in the Supabase dashboard under
      // Authentication → URL Configuration → Redirect URLs, otherwise
      // the emailed link is refused when it is opened.
      redirectTo: `${window.location.origin}${window.location.pathname}`,
    })
    if (error) return { ok: false, errorKey: mapError(error) }
    return { ok: true }
  } catch {
    return { ok: false, errorKey: 'auth.errNetwork' }
  }
}

/**
 * Save a new password for the signed-in (recovery) session.
 * @returns {{ok: boolean, errorKey?: string}}
 */
export async function updatePasswordWithBackend(password) {
  if (!supabaseEnabled) return { ok: false, errorKey: 'auth.errGeneric' }
  try {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) return { ok: false, errorKey: mapError(error) }
    return { ok: true }
  } catch {
    return { ok: false, errorKey: 'auth.errNetwork' }
  }
}
