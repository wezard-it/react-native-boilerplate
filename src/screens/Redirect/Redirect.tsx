/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, Suspense } from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useSelector } from 'react-redux'
import { authAuthenticatedSelector } from 'store/modules/auth/auth.selectors'
import { uiSplashShowSelector } from 'store/modules/ui/ui.selectors'
import { appRoot, LoginScreen, SplashScreen } from '../navigator'
import Style from './Redirect.style'

// Global variables
import '../i18n'

type Props = ScreenProps

const Redirect = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  // const isAuthenticated = false
  const isAuthenticated = useSelector(authAuthenticatedSelector)
  const showSplash = useSelector(uiSplashShowSelector)

  // Hooks
  // useEffect(() => {
  //   if (isFirstLaunch) {
  //     if (!isOnboardingVisited) {
  //       setAuth(false)
  //     }
  //     setIsFirstLaunch(false)
  //   }
  // }, [isFirstLaunch])

  // Screens redirect handler
  const handleRedirect = useCallback(() => {
    if (showSplash) {
      onNavigate(SplashScreen.name, { push: { enabled: false } })
    } else {
      if (isAuthenticated) {
        Navigation.setRoot(appRoot)
      } else {
        onNavigate(LoginScreen.name)
      }
    }
  }, [componentId, isAuthenticated, showSplash])

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
}

export default Redirect
