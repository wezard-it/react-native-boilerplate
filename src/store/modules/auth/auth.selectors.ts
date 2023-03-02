// Direct access to variables from screens
export const authLoadingSelector = (state: RootState): boolean => {
  return state.auth.loading
}

export const authAuthenticatedSelector = (state: RootState): boolean => {
  return state.auth.isAuthenticated
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authErrorSelector = (state: RootState): any => {
  return state.auth.error
}
