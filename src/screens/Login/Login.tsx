import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { useAuth } from '../../components/hooks'
import { SubscribeScreen, ForgotPasswordScreen } from '../navigator'
import Style from './Login.style'

// Language variable
const base = 'login_screen'

interface Props {
  componentId: string,
}

const Login = observer(({
  componentId = ''
}: Partial<Props>) => {
  const { t } = useTranslation()

  // Auth variables
  const { setAuth } = useAuth()

  // Methods
  const _onLoginPressed = () => {
    setAuth(true)
  }

  const _onForgotPressed = () => {
    Navigation.push(componentId, {
      component: {
        name: ForgotPasswordScreen.name,
        options: {
          popGesture: false
        }
      }
    })
  }

  const _onSubscribePressed = () => {
    Navigation.push(componentId, {
      component: {
        name: SubscribeScreen.name,
        options: {
          popGesture: false
        }
      }
    })
  }

  return (
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.container}>
        <View style={Style.titleContainer}>
          <Text style={Style.title}>{t(`${base}.title`)}</Text>
        </View>
        <View style={Style.body}>
          <Pressable style={{ padding: 10, paddingBottom: 20 }} onPress={_onLoginPressed}>
            <Text>Go to Home</Text>
          </Pressable>
          <Pressable style={{ padding: 10, paddingBottom: 20 }} onPress={_onForgotPressed}>
            <Text>Go to Forgot password</Text>
          </Pressable>
          <Pressable style={{ padding: 10, paddingBottom: 20 }} onPress={_onSubscribePressed}>
            <Text>Go to Subscribe</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
})

export default Login
