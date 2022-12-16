import React, { useCallback, useEffect, useState, Suspense } from 'react'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import { Navigation } from 'react-native-navigation'
import { useAuth } from '../../components/hooks'
import {
  appRoot,
  LoginScreen,
  OnBoardingScreen,
  SplashScreen
} from '../navigator'
import Style from './Redirect.style'

// Global variables
import '../i18n'

interface Props {
  componentId: string,
}

const Redirect = observer(({
  componentId = ''
}: Partial<Props>) => {
  const { isAuthenticated, setAuth } = useAuth()
  const { isOnboardingVisited, showSplash } = useAuth()
  const [isFirstLaunch, setIsFirstLaunch] = useState(true)

  // Hooks
  useEffect(() => {
    if (isFirstLaunch) {
      if (!isOnboardingVisited) {
        setAuth(false)
      }
      setIsFirstLaunch(false)
    }
  }, [isFirstLaunch])

  // Screens redirect handler
  const handleRedirect = useCallback(() => {
    if (showSplash) {
      onNavigate(SplashScreen.name, {
        push: { enabled: false }
      })
    } else {
      if (!isFirstLaunch) {
        if (isAuthenticated) {
          if (isOnboardingVisited) {
            Navigation.setRoot(appRoot)
          } else {
            onNavigate(OnBoardingScreen.name)
          }
        } else {
          onNavigate(LoginScreen.name)
        }
      }
    }
  }, [componentId, isAuthenticated, isFirstLaunch, showSplash])

  useEffect(() => {
    handleRedirect()
  }, [handleRedirect])

  // Methods
  const onNavigate = (screen: string, animation?: object) => {
    Navigation.push(componentId, {
      component: {
        name: screen,
        options: {
          popGesture: false,
          animations: animation || {
            push: {
              enabled: true,
              content: {
                alpha: { from: 0, to: 1, duration: 300 }
              }
            }
          }
        }
      }
    })
  }

  // Render components
  const renderFallback = (
    <View style={Style.fallback}>
      <Text>Fallback screen</Text>
    </View>
  )

  return (
    <Suspense fallback={renderFallback}>
      <View style={Style.boot} />
    </Suspense>
  )
})

export default Redirect
