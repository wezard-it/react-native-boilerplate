interface RootState {
  loading: boolean
  ui: UIState
  auth: AuthState
  network: NetworkState
}

interface INavigatePayload {
  routeName: string
  params?: unknown
}
