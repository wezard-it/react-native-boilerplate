import { PayloadAction, createReducer } from '@reduxjs/toolkit'
import { ActionWithPayload } from 'store/types'
import getTypedReducerMap from 'utils/redux/get-typed-reducer-map'
import { NetworkActions, STATE_KEY, initialState } from './network.consts'

const reducer = createReducer<NetworkState>(initialState, (builder) => {
  builder
    .addCase(
      NetworkActions.NETWORK_CHANGE,
      (state, action: PayloadAction<NetworkChangePayload>) => {
        const {
          payload: { isConnected, networkStateType },
        } = action
        state.isConnected = isConnected
        state.networkStateType = networkStateType
      },
    )
    .addCase(
      NetworkActions.ENQUEUE_ACTION,
      (state, action: PayloadAction<PayloadAction<unknown>>) => {
        const { payload: actionToEnqueue } = action
        state.actionsQueue = [...(state.actionsQueue ?? []), actionToEnqueue]
      },
    )

    .addCase(
      NetworkActions.EMPTY_ACTION_QUEUE_SUCCESS,
      (state, action: ActionWithPayload<boolean | null>) => {
        if (action.payload) state.actionsQueue = []
      },
    )
})

export const reducerMap = getTypedReducerMap<NetworkState>({
  [STATE_KEY]: reducer,
})

export default reducer
