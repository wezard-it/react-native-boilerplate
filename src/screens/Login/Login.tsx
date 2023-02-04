import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { ScreenProps } from 'types'
import { SubscribeScreen, ForgotPasswordScreen } from '../navigator'
import Style from './Login.style'

// Language variable
const base = 'login_screen'

type Props = ScreenProps

const Login = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  const { t } = useTranslation()

  // Methods
  const _onLoginPressed = () => {
    // setAuth(true)
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
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.container}>
        <View style={Style.titleContainer}>
          <Text style={Style.title}>{t(`${base}.title`)}</Text>
        </View>
        <View style={Style.body}>
          <Pressable style={Style.pressable} onPress={_onLoginPressed}>
            <Text>{t(`${base}.home`)}</Text>
          </Pressable>
          <Pressable style={Style.pressable} onPress={_onForgotPressed}>
            <Text>{t(`${base}.forgot`)}</Text>
          </Pressable>
          <Pressable style={Style.pressable} onPress={_onSubscribePressed}>
            <Text>{t(`${base}.subscribe`)}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
