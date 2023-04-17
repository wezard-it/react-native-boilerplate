// Direct access to variables from screens
export const selectAuthIsLoading = (state: RootState): boolean => {
  return state.auth.loading
}

export const selectAuthIsAuthenticated = (state: RootState): boolean => {
  return state.auth.isAuthenticated
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectAuthError = (state: RootState): any => {
  return state.auth.error
}
