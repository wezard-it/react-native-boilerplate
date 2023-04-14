import { ActionWithPayload } from 'store/types'
import { put, select, takeLatest } from 'typed-redux-saga/macro'
import { NetworkActions } from './network.consts'

function* emptyActionsQueueSaga(action: ActionWithPayload<boolean | null>): Generator {
  const { payload } = action
  try {
    const { actionsQueue, isConnected } = (yield select((state) => state.network)) as NetworkState

    if (actionsQueue !== undefined && payload === true && isConnected === false) {
      for (const actionQueued of actionsQueue) {
        yield put({ type: actionQueued.type, payload: actionQueued.payload })
      }
    }
    yield put({ type: NetworkActions.EMPTY_ACTION_QUEUE_SUCCESS, payload })
  } catch (error) {
    yield put({ type: NetworkActions.EMPTY_ACTION_QUEUE_FAIL })
  }
}

function* sagas(): Generator {
  yield takeLatest(NetworkActions.EMPTY_ACTION_QUEUE, emptyActionsQueueSaga)
}

export default sagas
