import * as React from 'react'
import NavigationProvider from 'providers/navigation'
import StoreProvider from 'providers/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <NavigationProvider />
      </StoreProvider>
    </SafeAreaProvider>
  )
}

export default App
