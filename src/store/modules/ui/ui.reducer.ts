import { createReducer } from '@reduxjs/toolkit'
import getTypedReducerMap from '../../../utils/redux/get-typed-reducer-map'
import { UIActions, initialState, STATE_KEY } from './ui.consts'

const reducer = createReducer<UIState>(initialState, (builder) => {
  builder
    .addCase(UIActions.SHOW_SPLASH, (state) => {
      state.splash_show = true
    })
    .addCase(UIActions.HIDE_SPLASH, (state) => {
      state.splash_show = false
    })
    .addCase(UIActions.RESTORE_NAVBAR, (state) => {
      state.navbar_index = 0
      state.navbar_hidden = false
    })
    .addCase(UIActions.NAVBAR_HOME_SELECTED, (state) => {
      state.navbar_index = 0
    })
    .addCase(UIActions.NAVBAR_EXPERIENCE_SELECTED, (state) => {
      state.navbar_index = 1
    })
    .addCase(UIActions.NAVBAR_CHAT_SELECTED, (state) => {
      state.navbar_index = 2
    })
    .addCase(UIActions.NAVBAR_PROFILE_SELECTED, (state) => {
      state.navbar_index = 3
    })
    .addCase(UIActions.NAVBAR_VISIBLE_NAVBAR, (state) => {
      state.navbar_hidden = false
    })
    .addCase(UIActions.HIDDEN_NAVBAR, (state) => {
      state.navbar_hidden = true
    })
})

export const reducerMap = getTypedReducerMap<UIState>({
  [STATE_KEY]: reducer,
})

export default reducer
