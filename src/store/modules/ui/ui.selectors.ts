// Direct access to variables from screens
export const uiSplashShowSelector = (state: RootState): boolean => {
  return state.ui.splash_show
}

export const uiNavabarIndexSelector = (state: RootState): number => {
  return state.ui.navbar_index
}

export const uiNavabarHiddenSelector = (state: RootState): boolean | undefined => {
  return state.ui.navbar_hidden
}
