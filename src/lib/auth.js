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
  if (code.startsWith('over_email_send_rate_limit')) return 'auth.errGeneric'
  const msg = String(error.message || '').toLowerCase()
  if (msg.includes('invalid login credentials')) return 'auth.errInvalid'
  if (msg.includes('already registered') || msg.includes('already been registered'))
    return 'auth.errEmailTaken'
  if (/email address .* is invalid/.test(msg)) return 'auth.errEmailShape'
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
