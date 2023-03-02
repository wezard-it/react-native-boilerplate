interface RootState {
  loading: boolean
  ui: UIState
  auth: AuthState
}

interface INavigatePayload {
  routeName: string
  params?: unknown
}
