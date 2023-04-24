import React, { useCallback, useEffect, Suspense, useState } from 'react'
import { View, Text } from 'react-native'
import { useAuth, useUI } from 'hooks'
import { observer } from 'mobx-react-lite'
import { Navigation } from 'react-native-navigation'
import { appRoot, LoginScreen, OnBoardingScreen, SplashScreen } from '../navigator'
import Style from './Redirect.style'

// Global variables
import '../i18n'

// Interfaces
type Props = ScreenProps

const Redirect = observer(({ componentId = '' }: Partial<Props>): JSX.Element => {
  // State variables
  const [isFirstLaunch, setIsFirstLaunch] = useState(true)

  // Auth variables
  const { isAuthenticated, setIsAuthenticated } = useAuth()

  // UI variables
  const { showSplash, isOnboardingVisited } = useUI()

  // Hooks
  useEffect(() => {
    if (isFirstLaunch) {
      if (!isOnboardingVisited) {
        setIsAuthenticated(false)
      }
      setIsFirstLaunch(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstLaunch])

  // Screens redirect handler
  const handleRedirect = useCallback(() => {
    if (showSplash) {
      onNavigate(SplashScreen.name, { push: { enabled: false } })
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isFirstLaunch, isOnboardingVisited, showSplash])

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
                alpha: { from: 0, to: 1, duration: 300 },
              },
            },
          },
        },
      },
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
