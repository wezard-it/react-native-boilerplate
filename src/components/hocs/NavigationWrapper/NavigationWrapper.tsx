import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const NavigationWrapper = (ReduxScreen: any, store: any, persistor: any) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ReduxScreen {...props} />
      </PersistGate>
    </Provider>
  )
}

export default NavigationWrapper
