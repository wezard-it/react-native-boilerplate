import { ISagaModule } from 'redux-dynamic-modules-saga'
import { restoreNavbar, showSplashscreen } from './ui.actions'
import { STATE_KEY } from './ui.consts'
import { reducerMap } from './ui.reducer'
import sagas from './ui.sagas'

const getUIModule = (): ISagaModule<UIState> => {
  return {
    id: STATE_KEY,
    reducerMap,
    sagas: [sagas],
    initialActions: [showSplashscreen(), restoreNavbar()],
  }
}

export default getUIModule
