import React from 'react'
import { SafeAreaView, View, Text, Pressable, StatusBar } from 'react-native'
import { useTheme } from 'hooks'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { useDispatch } from 'react-redux'
import { signIn } from 'store/modules/auth/auth.actions'
import { SubscribeScreen, ForgotPasswordScreen } from '../navigator'
import Style from './Login.style'

// Language
const base = 'login_screen'

// Interfaces
type Props = ScreenProps

const Login = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  const { t } = useTranslation()

  // Dispatch
  const dispatch = useDispatch()

  // Theme
  const selectedTheme = useTheme(Style)

  // Methods
  const _onLoginPressed = () => {
    dispatch(signIn())
    console.log('login')
  }

  const _onForgotPressed = () => {
    Navigation.push(componentId, {
      component: {
        name: ForgotPasswordScreen.name,
        options: {
          popGesture: false,
        },
      },
    })
  }

  const _onSubscribePressed = () => {
    Navigation.push(componentId, {
      component: {
        name: SubscribeScreen.name,
        options: {
          popGesture: false,
        },
      },
    })
  }

  return (
    <SafeAreaView style={selectedTheme.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={selectedTheme.container}>
        <View style={selectedTheme.titleContainer}>
          <Text style={selectedTheme.title}>{t(`${base}.title`)}</Text>
        </View>
        <View style={selectedTheme.body}>
          <Pressable style={selectedTheme.pressable} onPress={_onLoginPressed}>
            <Text style={selectedTheme.navigation}>{t(`${base}.home`)}</Text>
          </Pressable>
          <Pressable style={selectedTheme.pressable} onPress={_onForgotPressed}>
            <Text style={selectedTheme.navigation}>{t(`${base}.forgot`)}</Text>
          </Pressable>
          <Pressable style={selectedTheme.pressable} onPress={_onSubscribePressed}>
            <Text style={selectedTheme.navigation}>{t(`${base}.subscribe`)}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
