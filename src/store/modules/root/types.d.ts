interface RootState {
  loading: boolean
  ui: UIState
}

interface INavigatePayload {
  routeName: string
  params?: unknown
}
