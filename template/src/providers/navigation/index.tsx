import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import TabsNavigator from './stacks/tabs'

const NavigationProvider = (): JSX.Element => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default NavigationProvider
