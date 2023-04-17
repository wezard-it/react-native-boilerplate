import { createReducer } from '@reduxjs/toolkit'
import getTypedReducerMap from '../../../utils/redux/get-typed-reducer-map'
import { UIActions, initialState, STATE_KEY } from './ui.consts'

const reducer = createReducer<UIState>(initialState, (builder) => {
  builder
    .addCase(UIActions.SHOW_SPLASH, (state) => {
      state.splashVisible = true
    })
    .addCase(UIActions.HIDE_SPLASH, (state) => {
      state.splashVisible = false
    })
    .addCase(UIActions.RESTORE_NAVBAR, (state) => {
      state.navbarIndex = 0
      state.navbarVisible = false
    })
    .addCase(UIActions.NAVBAR_HOME_SELECTED, (state) => {
      state.navbarIndex = 0
    })
    .addCase(UIActions.NAVBAR_EXPERIENCE_SELECTED, (state) => {
      state.navbarIndex = 1
    })
    .addCase(UIActions.NAVBAR_CHAT_SELECTED, (state) => {
      state.navbarIndex = 2
    })
    .addCase(UIActions.NAVBAR_PROFILE_SELECTED, (state) => {
      state.navbarIndex = 3
    })
    .addCase(UIActions.NAVBAR_VISIBLE_NAVBAR, (state) => {
      state.navbarVisible = false
    })
    .addCase(UIActions.HIDDEN_NAVBAR, (state) => {
      state.navbarVisible = true
    })
})

export const reducerMap = getTypedReducerMap<UIState>({
  [STATE_KEY]: reducer,
})

export default reducer
