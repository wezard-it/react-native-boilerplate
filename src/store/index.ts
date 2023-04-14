import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore, IModuleStore } from 'redux-dynamic-modules'
import { getSagaExtension } from 'redux-dynamic-modules-saga'
import { persistStore } from 'redux-persist'
import persistCombineReducers from 'redux-persist/es/persistCombineReducers'
import concatenateReducers from '../utils/redux/concatenate-reducers'
import getActionsEmitterExtension from './extensions/actions-emitter'
import getErrorHandlerExtension from './extensions/error-handler'
import getNetworkHandlerExtention from './extensions/network-handler'
import { getAuthModule, getNetworkModule, getRootModule, getUIModule } from './modules'
import { MainState } from './types'

const sagaContext = {}

const store: IModuleStore<MainState> = createStore(
  {
    initialState: {},
    enhancers: [],
    extensions: [
      getSagaExtension(sagaContext),
      getErrorHandlerExtension(),
      getNetworkHandlerExtention(),
      getActionsEmitterExtension(),
    ],
    advancedCombineReducers: (allReducers) => {
      const { root, ...reducers } = allReducers as unknown as {
        root: RootState
      }
      return concatenateReducers([
        root,
        persistCombineReducers({ key: 'root', storage: AsyncStorage, whitelist: [] }, reducers),
      ])
    },
  },
  getRootModule(),
  getNetworkModule(),
  getUIModule(),
  getAuthModule(),
)

export const persistor = persistStore(store)

export default store
