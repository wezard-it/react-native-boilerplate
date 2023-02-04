import { IExtension } from 'redux-dynamic-modules'

const getReduxFlipperExtension = (): IExtension => {
  if (__DEV__ && !process.env.JEST_WORKER_ID) {
    // const reduxDebugger = require('redux-flipper').default
    return {
      // middleware: [reduxDebugger()]
      middleware: [],
    }
  }

  return {}
}

export default getReduxFlipperExtension
