import { useContext } from 'react'
import { UIStoreContext } from 'store'

function useUI() {
  const { isOnboardingVisited, setOnboardingVisited } = useContext(UIStoreContext)
  const { arePermissionsShown, setArePermissionsShown } = useContext(UIStoreContext)
  const { showSplash, setShowSplash } = useContext(UIStoreContext)

  return {
    isOnboardingVisited,
    arePermissionsShown,
    showSplash,
    setOnboardingVisited,
    setArePermissionsShown,
    setShowSplash,
  }
}

export default useUI
