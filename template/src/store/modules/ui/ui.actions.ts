import { createAction } from '@reduxjs/toolkit'
import { UIActions } from './ui.consts'

export const showSplashscreen = createAction(UIActions.SHOW_SPLASH)
export const hideSplashscreen = createAction(UIActions.HIDE_SPLASH)
export const homeSelected = createAction(UIActions.NAVBAR_HOME_SELECTED)
export const experienceSelected = createAction(UIActions.NAVBAR_EXPERIENCE_SELECTED)
export const chatSelected = createAction(UIActions.NAVBAR_CHAT_SELECTED)
export const profileSelected = createAction(UIActions.NAVBAR_PROFILE_SELECTED)
export const navbarVisible = createAction(UIActions.NAVBAR_VISIBLE_NAVBAR)
export const navbarHidden = createAction(UIActions.HIDDEN_NAVBAR)
export const restoreNavbar = createAction(UIActions.RESTORE_NAVBAR)
