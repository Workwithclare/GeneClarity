import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStore } from './AppStore.jsx'

/**
 * Route guard for screens that need a signed-in account.
 *
 * It waits for the store to finish hydrating before deciding, so a
 * returning user with a saved session is never redirected by mistake.
 * The user object itself is returned, which every protected screen uses
 * to personalise the page.
 */
export function useRequireAuth() {
  const { state, ready } = useStore()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!ready) return
    if (!state.user) {
      // `replace` keeps the login screen out of the back-button history.
      navigate('/login', { replace: true, state: { from: location.pathname } })
    }
  }, [ready, state.user, navigate, location.pathname])

  return ready ? state.user : null
}
