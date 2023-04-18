import * as React from 'react'
import NavigationProvider from 'providers/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationProvider />
    </SafeAreaProvider>
  )
}

export default App
