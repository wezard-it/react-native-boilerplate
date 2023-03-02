/* eslint-disable @typescript-eslint/no-explicit-any */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import getTypedReducerMap from '../../../utils/redux/get-typed-reducer-map'
import { AuthActions, initialState, STATE_KEY } from './auth.consts'

const reducer = createReducer<AuthState>(initialState, (builder) => {
  builder
    .addCase(AuthActions.SIGN_IN, (state) => {
      state.loading = true
    })
    .addCase(AuthActions.SIGN_IN_SUCCESS, (state) => {
      state.isAuthenticated = true
      state.loading = false
    })
    .addCase(AuthActions.SIGN_IN_FAIL, (state, action: PayloadAction<any>) => {
      state.isAuthenticated = false
      state.error = action.payload
      state.loading = false
    })

    // Logout actions
    .addCase(AuthActions.SIGN_OUT, (state) => {
      state.loading = true
    })
    .addCase(AuthActions.SIGN_OUT_SUCCESS, (state) => {
      state.isAuthenticated = false
      state.loading = false
    })
    .addCase(AuthActions.SIGN_OUT_FAIL, (state, action: PayloadAction<any>) => {
      state.error = action.payload
      state.loading = false
    })
})

export const reducerMap = getTypedReducerMap<UIState>({
  [STATE_KEY]: persistReducer(
    {
      key: STATE_KEY,
      version: 1,
      storage: AsyncStorage,
    },
    reducer,
  ),
})

export default reducer
