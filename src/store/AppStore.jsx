import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import {
  demoUser,
  demoResults,
  demoNotifications,
  demoActivity,
} from '../data/demoData.js'
import { supabaseEnabled } from '../lib/supabase.js'
import { restoreSession, onAuthChange } from '../lib/auth.js'

/**
 * GeneClarity application state.
 *
 * Everything lives in one reducer so privacy-critical changes (granting
 * or revoking partner access) go through a single, auditable code path.
 *
 * ── Storage note ────────────────────────────────────────────────────
 * State is mirrored to localStorage. There is NO server in this
 * prototype: nothing is transmitted, and localStorage is scoped to this
 * browser on this device. This is a demonstration convenience, not a
 * security boundary — see docs/11 for the honest limitation.
 * ────────────────────────────────────────────────────────────────────
 */

const STORAGE_KEY = 'geneclarity.state.v1'

const initialState = {
  /** Authenticated user, or null when signed out. */
  user: null,
  /** True once the privacy & consent screen has been accepted. */
  consentAccepted: false,
  consentAt: null,
  /** True once the onboarding walkthrough has been completed. */
  onboardingDone: false,
  /** Partner sharing. `shares` is empty until explicitly granted. */
  partner: {
    status: 'none', // 'none' | 'pending' | 'active' | 'revoked'
    name: null,
    shares: { summary: false, full: false, activity: false },
    grantedAt: null,
    revokedAt: null,
  },
  settings: {
    // Single master switch, matching the reference design's Settings list.
    notifyNotifications: false,
    autoLock: true,
    shareResearch: false, // Off by default. Nothing leaves the device anyway.
    profileVisibility: true,
  },
  notifications: demoNotifications,
  activity: demoActivity,
  /** Results are always labelled as sample data in the UI. */
  results: demoResults,
}

function logActivity(state, kind, detailEn, detailAr) {
  const entry = {
    id: `act_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    kind,
    at: new Date().toISOString(),
    detailEn,
    detailAr,
  }
  return [entry, ...state.activity].slice(0, 60)
}

function reducer(state, action) {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, ...action.payload }

    case 'SIGN_IN':
      return {
        ...state,
        user: action.user,
        activity: logActivity(
          state,
          'signedIn',
          'Signed in on this device.',
          'تسجيل دخول على هذا الجهاز.',
        ),
      }

    case 'SIGN_OUT':
      // Signing out clears the session but keeps consent + settings.
      return { ...state, user: null }

    case 'ACCEPT_CONSENT':
      return {
        ...state,
        consentAccepted: true,
        consentAt: new Date().toISOString(),
        activity: logActivity(
          state,
          'settingsChanged',
          'Accepted the privacy and consent notice.',
          'قبول إشعار الخصوصية والموافقة.',
        ),
      }

    case 'DECLINE_CONSENT':
      return { ...state, consentAccepted: false, user: null }

    case 'COMPLETE_ONBOARDING':
      return { ...state, onboardingDone: true }

    case 'INVITE_PARTNER':
      // An invitation alone shares nothing — it only records intent.
      return {
        ...state,
        partner: {
          ...state.partner,
          status: 'pending',
          name: action.name,
          shares: { summary: false, full: false, activity: false },
          grantedAt: null,
          revokedAt: null,
        },
        activity: logActivity(
          state,
          'settingsChanged',
          'Sent a partner invitation. Nothing shared yet.',
          'إرسال دعوة شريك. لم يُشارك شيء بعد.',
        ),
      }

    case 'GRANT_PARTNER':
      return {
        ...state,
        partner: {
          status: 'active',
          name: action.name,
          shares: action.shares,
          grantedAt: new Date().toISOString(),
          revokedAt: null,
        },
        activity: logActivity(
          state,
          'consentGranted',
          `Granted partner access (${Object.values(action.shares).filter(Boolean).length} categories).`,
          `منح الوصول للشريك (${Object.values(action.shares).filter(Boolean).length} فئات).`,
        ),
      }

    case 'REVOKE_PARTNER':
      return {
        ...state,
        partner: {
          ...state.partner,
          status: 'revoked',
          shares: { summary: false, full: false, activity: false },
          revokedAt: new Date().toISOString(),
        },
        activity: logActivity(
          state,
          'consentRevoked',
          'Revoked partner access. Future access stopped.',
          'سحب الوصول من الشريك. توقف الوصول المستقبلي.',
        ),
      }

    case 'CLEAR_PARTNER':
      return {
        ...state,
        partner: initialState.partner,
        activity: logActivity(
          state,
          'consentRevoked',
          'Removed partner connection entirely.',
          'إزالة ربط الشريك بالكامل.',
        ),
      }

    case 'SET_SETTING':
      return {
        ...state,
        settings: { ...state.settings, [action.key]: action.value },
        activity: logActivity(
          state,
          'settingsChanged',
          `Setting "${action.key}" changed to ${String(action.value)}.`,
          `تغيير الإعداد "${action.key}" إلى ${String(action.value)}.`,
        ),
      }

    case 'MARK_ALL_READ':
      return {
        ...state,
        notifications: state.notifications.map((n) => ({ ...n, read: true })),
      }

    case 'MARK_READ':
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.id ? { ...n, read: true } : n,
        ),
      }

    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [action.notification, ...state.notifications] }

    case 'RESET_ALL':
      return { ...initialState }

    default:
      return state
  }
}

const StoreContext = createContext(null)

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // `ready` stays false until saved state has been read. Screens that
  // require a session must wait for it, otherwise a returning user is
  // bounced to the login screen for one frame before hydration lands.
  const [ready, setReady] = useState(false)

  // Hydrate once on mount. Wrapped in try/catch because storage can be
  // blocked (private browsing, strict enterprise policies).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw)
        dispatch({ type: 'HYDRATE', payload: saved })
      }
    } catch {
      /* start from the clean initial state */
    }
    setReady(true)
  }, [])

  // Backend mode: the Supabase session is the source of truth for WHO is
  // signed in. Demo mode never runs this effect, so localStorage-only
  // behaviour is unchanged.
  useEffect(() => {
    if (!supabaseEnabled) return
    let alive = true
    restoreSession().then((user) => {
      if (alive && user) dispatch({ type: 'SIGN_IN', user })
    })
    const subscription = onAuthChange((user) => {
      dispatch(user ? { type: 'SIGN_IN', user } : { type: 'SIGN_OUT' })
    })
    return () => {
      alive = false
      subscription.unsubscribe()
    }
  }, [])

  // Persist on every change, but never before the first read — writing
  // too early would clobber the saved session with default state.
  useEffect(() => {
    if (!ready) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* non-fatal: state simply won't survive a refresh */
    }
  }, [state, ready])

  const value = useMemo(() => ({ state, dispatch, ready }), [state, ready])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside <AppProvider>')
  return ctx
}

export { demoUser }
