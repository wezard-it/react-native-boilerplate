import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './stacks/tabs'

const NavigationProvider = (): JSX.Element => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default NavigationProvider
