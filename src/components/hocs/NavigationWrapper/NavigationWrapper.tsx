import React from 'react'
import { Provider } from 'react-redux'
import { IModuleStore } from 'redux-dynamic-modules'
import { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { MainState } from 'store/types'

const NavigationWrapper =
  (
    ReduxScreen: ({ ...props }) => JSX.Element,
    store: IModuleStore<MainState>,
    persistor: Persistor,
  ) =>
  (props: { componentId: string; rootTag: number }) => {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ReduxScreen {...props} />
        </PersistGate>
      </Provider>
    )
  }

export default NavigationWrapper
