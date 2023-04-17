export const STATE_KEY = 'auth'

export const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
}

export const AuthActions = {
  SIGN_IN: `${STATE_KEY}/SIGN_IN`,
  SIGN_IN_SUCCESS: `${STATE_KEY}/SIGN_IN_SUCCESS`,
  SIGN_IN_FAIL: `${STATE_KEY}/SIGN_IN_FAIL`,

  SIGN_OUT: `${STATE_KEY}/SIGN_OUT`,
  SIGN_OUT_SUCCESS: `${STATE_KEY}/SIGN_OUT_SUCCESS`,
  SIGN_OUT_FAIL: `${STATE_KEY}/SIGN_OUT_FAIL`,
}
