import { createAction } from '@reduxjs/toolkit'
import { AuthActions } from './auth.consts'

export const signIn = createAction(AuthActions.SIGN_IN)
export const logout = createAction(AuthActions.SIGN_OUT)
