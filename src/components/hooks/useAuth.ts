import { useContext } from 'react'
import { AuthStoreContext } from '../../contexts/auth.store'

function useAuth () {
  const { isAuthenticated, setAuth } = useContext(AuthStoreContext)
  const { isOnboardingVisited, setOnboardingVisited } = useContext(AuthStoreContext)
  const { arePermissionsShown, setArePermissionsShown } = useContext(AuthStoreContext)
  const { showSplash, setShowSplash } = useContext(AuthStoreContext)

  return {
    isAuthenticated,
    isOnboardingVisited,
    arePermissionsShown,
    showSplash,
    setAuth,
    setOnboardingVisited,
    setArePermissionsShown,
    setShowSplash
  }
}

export default useAuth
