import React from 'react'
import { Provider } from 'react-redux'
import { DynamicModuleLoader, IModuleStore, IModuleTuple } from 'redux-dynamic-modules'
import { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { MainState } from 'store/types'

const NavigationWrapper =
  (
    ReduxScreen: ({ ...props }) => JSX.Element,
    store: IModuleStore<MainState>,
    persistor: Persistor,
    dynamicReduxModules: IModuleTuple = [],
  ) =>
  (props: { componentId: string; rootTag: number }) => {
    const children = (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <DynamicModuleLoader modules={dynamicReduxModules}>
        <ReduxScreen {...props} />
      </DynamicModuleLoader>
    )

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    )
  }

export default NavigationWrapper
