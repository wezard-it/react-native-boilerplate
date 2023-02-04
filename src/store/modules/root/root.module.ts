import { ISagaModule } from 'redux-dynamic-modules-saga'

import { STATE_KEY } from './root.consts'
import { reducerMap } from './root.reducer'
import sagas from './root.sagas'

const getRootModule = (): ISagaModule<RootState> => {
  return {
    id: STATE_KEY,
    reducerMap,
    sagas: [sagas],
  }
}

export default getRootModule
