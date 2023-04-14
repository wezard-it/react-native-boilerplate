/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from '@reduxjs/toolkit'
import { IExtension } from 'redux-dynamic-modules'
import { NetworkActions } from 'store/modules/network/network.consts'

const emitter =
  ({ getState }: any) =>
  (next: (action: PayloadAction<unknown>) => void) =>
  (action: PayloadAction<unknown, string, NetworkMeta>): unknown => {
    const { network } = getState() as RootState

    if (!network?.isConnected && action.meta && action.meta.offline) {
      switch (action.meta.offline.behaviour) {
        case 'QUEUED':
          return next({ type: NetworkActions.ENQUEUE_ACTION, payload: action })
        case 'ROLLBACK':
          return next({ type: NetworkActions.ROLLBACK_ACTION, payload: action })
        default:
          return next(action)
      }
    } else {
      return next(action)
    }
  }

const getNetworkHandlerExtention = (): IExtension => {
  return {
    middleware: [emitter],
  }
}

export default getNetworkHandlerExtention
