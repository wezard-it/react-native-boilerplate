import { ISagaModule } from 'redux-dynamic-modules-saga'
import { STATE_KEY } from './auth.consts'
import { reducerMap } from './auth.reducer'
import sagas from './auth.sagas'

const getAuthModule = (): ISagaModule<UIState> => {
  return {
    id: STATE_KEY,
    reducerMap,
    sagas: [sagas],
    // initialActions: [],
  }
}

export default getAuthModule
