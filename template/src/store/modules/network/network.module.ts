import { ISagaModule } from 'redux-dynamic-modules-saga'
import { STATE_KEY } from './network.consts'
import { reducerMap } from './network.reducer'
import sagas from './network.sagas'

const getNetworkModule = (): ISagaModule<NetworkState> => {
  return {
    id: STATE_KEY,
    reducerMap,
    sagas: [sagas],
  }
}

export default getNetworkModule
