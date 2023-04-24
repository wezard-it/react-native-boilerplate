import { useContext } from 'react'
import { AuthStoreContext } from 'store'

function useAuth() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthStoreContext)
  return { isAuthenticated, setIsAuthenticated }
}

export default useAuth
