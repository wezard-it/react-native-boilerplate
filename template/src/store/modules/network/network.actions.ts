import { PayloadAction, createAction } from '@reduxjs/toolkit'
import { NetworkActions } from './network.consts'

export const networkChange = createAction<NetworkChangePayload>(NetworkActions.NETWORK_CHANGE)
export const enqueueAction = createAction<PayloadAction<unknown>>(NetworkActions.ENQUEUE_ACTION)
export const emptyActionsQueue = createAction<boolean | null>(NetworkActions.EMPTY_ACTION_QUEUE)
