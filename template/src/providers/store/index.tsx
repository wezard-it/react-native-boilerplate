import * as React from 'react'
import { useStoreListener } from 'hooks'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from 'store'

interface StoreProviderProps {
  children: React.ReactNode
}

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  useStoreListener({
    '@@Internal/ModuleManager/ModuleAdded': (payload) => {
      console.log('Module persist:', payload)
      persistor.persist()
    },
  })
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  )
}

export default StoreProvider
