import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { useSelector } from 'react-redux'
import { selectAuthIsAuthenticated } from 'store/modules/auth/auth.selectors'
import LoginStack from './stacks/login'
import TabsNavigator from './stacks/tabs'

const NavigationProvider = (): JSX.Element => {
  const isAuthenticated = useSelector(selectAuthIsAuthenticated)

  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  const content = React.useMemo(() => {
    if (isAuthenticated) return <TabsNavigator />
    return <LoginStack />
  }, [isAuthenticated])

  return <NavigationContainer>{content}</NavigationContainer>
}

export default NavigationProvider
