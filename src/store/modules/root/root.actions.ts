import { createAction } from '@reduxjs/toolkit'
import RootActions from './root.consts'

export const clean = createAction<string>(RootActions.CLEAN)
export const navigate = createAction<INavigatePayload>(RootActions.NAVIGATE)
export const debugNavigate = createAction<INavigatePayload>(RootActions.DEBUG_NAVIGATE)

export default {
  clean,
  navigate,
  debugNavigate,
}
