import { PayloadAction } from '@reduxjs/toolkit'
import PubSub from 'pubsub-js'
import { IExtension } from 'redux-dynamic-modules'

interface Action {
  type: string
}

const emitter =
  () =>
  (next: (action: Action) => void) =>
  (action: PayloadAction<unknown>): unknown => {
    PubSub.publish(action.type, action.payload)

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      console.log(`Publishing action: ${action.type} | payload: `, action.payload)
    }

    return next(action)
  }

const getActionsEmitterExtension = (): IExtension => {
  return {
    middleware: [emitter],
  }
}

export default getActionsEmitterExtension
