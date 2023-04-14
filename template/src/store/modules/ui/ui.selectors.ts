// Direct access to variables from screens
export const selectUISplashVisible = (state: RootState): boolean => {
  return state.ui.splashVisible
}

export const selectUINavbarIndex = (state: RootState): number => {
  return state.ui.navbarIndex
}

export const selectUINavbarVisible = (state: RootState): boolean | undefined => {
  return state.ui.navbarVisible
}
