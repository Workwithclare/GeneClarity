import { createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import {
  demoUser,
  demoResults,
  demoNotifications,
  demoActivity,
} from '../data/demoData.js'
import { supabaseEnabled } from '../lib/supabase.js'
import { restoreSession, onAuthChange } from '../lib/auth.js'
import { loadServerData, syncDiffs, syncActivityEntries } from '../lib/db.js'

/**
 * GeneClarity application state.
 *
 * Everything lives in one reducer so privacy-critical changes (granting
 * or revoking partner access) go through a single, auditable code path.
 *
 * ── Storage note (dual mode) ───────────────────────────────────────
 * Demo mode (no backend configured): state is mirrored to localStorage
 * only. Nothing is transmitted, and localStorage is scoped to this
 * browser on this device. This is a demonstration convenience, not a
 * security boundary — see docs/11.
 *
 * Backend mode (Supabase configured): the reducer still updates state
 * immediately (local-first, the UI never waits for the network), while
 * `src/lib/db.js` mirrors changes to the database and pulls the
 * account's rows back in on sign-in. Row Level Security on the server
 * is the security boundary; the mirror itself is best-effort.
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
    /** Real Supabase account id of the partner (backend mode only). */
    partnerId: null,
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

    case 'SERVER_LOAD':
      // Backend mode only: replace the synced slices with the account's
      // server rows (loaded BEFORE SIGN_IN, in that order). Device-level
      // UX state (onboarding) stays local; privacy acceptance comes from
      // the profile row so the gate follows the account.
      return {
        ...state,
        consentAccepted: action.payload.consentAccepted ?? state.consentAccepted,
        consentAt: action.payload.consentAt ?? state.consentAt,
        settings: action.payload.settings ?? state.settings,
        results: action.payload.results ?? state.results,
        notifications: action.payload.notifications ?? state.notifications,
        activity: action.payload.activity ?? state.activity,
        partner: action.payload.partner ?? state.partner,
      }

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

    case 'SET_USER':
      // Optimistic sign-in for the login/register screens in backend
      // mode: sets the user WITHOUT an audit entry, because applyUser's
      // SIGN_IN (after the server load) writes the single official one.
      return { ...state, user: action.user }

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
          // Backend mode passes the resolved Supabase account id so the
          // consent row can be written server-side; demo mode has none.
          partnerId: action.partnerId ?? null,
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
          partnerId: state.partner.partnerId,
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

  // ── Backend sync refs ──────────────────────────────────────────
  // stateRef  — always the latest committed state (for the diff sync)
  // prevRef   — previous commit; syncDiffs(prev, next) on each change
  // skipRef   — set when SERVER_LOAD is about to land, so the big
  //             replace is not misread as "new rows to insert"
  // syncedRef — activity ids known to be on the server already
  const stateRef = useRef(state)
  stateRef.current = state
  const prevRef = useRef(state)
  const skipRef = useRef(false)
  const syncedRef = useRef(new Set())
  // Account whose server data is loaded (StrictMode-safe: a cancelled
  // load resets this so the remount retries it).
  const loadedForRef = useRef(null)
  const currentUserRef = useRef(null)

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
  // signed in. On each NEW sign-in the account's server rows are loaded
  // FIRST, then SIGN_IN is dispatched (so its audit entry syncs after
  // the load, not before it). Demo mode never runs this effect.
  useEffect(() => {
    if (!supabaseEnabled) return
    let alive = true

    const applyUser = async (user) => {
      if (!user) {
        // No Supabase session = signed out in backend mode — even when
        // localStorage still holds a hydrated (stale) user object.
        currentUserRef.current = null
        loadedForRef.current = null
        syncedRef.current = new Set()
        skipRef.current = false
        if (stateRef.current.user) dispatch({ type: 'SIGN_OUT' })
        return
      }
      if (currentUserRef.current === user.id) return // token refresh: nothing to do
      currentUserRef.current = user.id

      const payload = await loadServerData(user)
      if (!alive) return // unmounted mid-load; remount retries cleanly
      if (loadedForRef.current !== user.id) {
        // First load for this account (fresh sign-in or account switch).
        syncedRef.current = new Set()
        payload.activity?.forEach((a) => syncedRef.current.add(a.id))
        loadedForRef.current = user.id
        skipRef.current = true
      }
      dispatch({ type: 'SERVER_LOAD', payload })
      // SERVER_LOAD may have replaced an optimistic (screen-initiated)
      // session; always dispatch SIGN_IN afterwards so exactly one
      // audit entry exists per real sign-in, from this single source.
      dispatch({ type: 'SIGN_IN', user })
    }

    restoreSession().then((user) => {
      if (alive) applyUser(user)
    })
    const subscription = onAuthChange((user) => {
      applyUser(user)
    })
    return () => {
      alive = false
      subscription.unsubscribe()
      // A load cancelled by StrictMode's double-mount must be retried.
      if (loadedForRef.current !== currentUserRef.current) {
        currentUserRef.current = null
      }
    }
  }, [])

  // Persist to localStorage on every change (both modes — it is the
  // demo store, and a device-level cache in backend mode), but never
  // before the first read — writing too early would clobber the saved
  // session with default state.
  useEffect(() => {
    if (!ready) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* non-fatal: state simply won't survive a refresh */
    }
  }, [state, ready])

  // Backend mode: after each committed change, mirror the DIFF to
  // Supabase (fire-and-forget — the reducer already won locally).
  useEffect(() => {
    const hadSkip = skipRef.current
    if (hadSkip) skipRef.current = false
    const prev = prevRef.current
    prevRef.current = state
    if (!supabaseEnabled || !state.user) return
    if (loadedForRef.current !== state.user.id) return
    const ctx = { userId: state.user.id, syncedActivity: syncedRef.current }

    if (hadSkip) {
      // SERVER_LOAD just landed: rows came FROM the server. Only push
      // activity entries created after the load (this sign-in's entry).
      syncActivityEntries(
        state.activity.filter((a) => !ctx.syncedActivity.has(a.id)),
        ctx,
      )
      return
    }
    syncDiffs(prev, state, ctx)
  }, [state])

  const value = useMemo(() => ({ state, dispatch, ready }), [state, ready])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside <AppProvider>')
  return ctx
}

export { demoUser }
