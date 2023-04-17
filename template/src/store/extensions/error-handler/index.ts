import { PayloadAction } from '@reduxjs/toolkit'
import { IExtension } from 'redux-dynamic-modules'

interface Action {
  type: string
}

const emitter =
  (_store: unknown) =>
  (next: (action: Action) => void) =>
  (action: PayloadAction<unknown>): unknown => {
    if (!process.env.JEST_WORKER_ID && action.type.includes('_FAIL')) {
      if (__DEV__) {
        console.error(action.payload)
      }
    }

    return next(action)
  }

const getErrorHandlerExtension = (): IExtension => {
  return {
    middleware: [emitter],
  }
}

export default getErrorHandlerExtension
