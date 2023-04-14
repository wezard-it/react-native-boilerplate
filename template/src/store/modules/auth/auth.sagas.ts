import AsyncStorage from '@react-native-async-storage/async-storage'
import { call, put, takeLatest } from 'redux-saga/effects'
import { ActionWithPayload } from 'store/types'
import { AuthActions } from './auth.consts'

function* signInSaga(action: ActionWithPayload<string>): Generator {
  const { payload: phoneNumber } = action
  try {
    yield put({
      type: AuthActions.SIGN_IN_SUCCESS,
      payload: phoneNumber,
    })
  } catch (error) {
    yield put({ type: AuthActions.SIGN_IN_FAIL, payload: 'Error while signin' })
  }
}

function* signOutSaga(): Generator {
  try {
    yield call(AsyncStorage.removeItem, 'basic_auth')
    yield put({ type: AuthActions.SIGN_OUT_SUCCESS })
  } catch (error) {
    yield put({ type: AuthActions.SIGN_OUT_FAIL, payload: 'Error while signout' })
  }
}

function* sagas(): Generator {
  yield takeLatest(AuthActions.SIGN_IN, signInSaga)
  yield takeLatest(AuthActions.SIGN_OUT, signOutSaga)
}

export default sagas
