import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { useStoreListener } from 'hooks'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { useDispatch } from 'react-redux'
import { authRoot } from 'screens/navigator'
import { logout } from 'store/modules/auth/auth.actions'
import { AuthActions } from 'store/modules/auth/auth.consts'
import Style from './Homepage.style'

// Language
const base = 'homepage_screen'

// Interfaces
type Props = ScreenProps

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  const { t } = useTranslation()

  // Dispatch
  const dispatch = useDispatch()

  // Methods
  const _onLogoutPressed = () => {
    dispatch(logout())
  }

  // Store listener
  useStoreListener({
    [AuthActions.SIGN_OUT_SUCCESS]: () => {
      Navigation.setRoot(authRoot)
    },
  })

  return (
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.container}>
        <View style={Style.titleContainer}>
          <Text style={Style.title}>{t(`${base}.title`)}</Text>
        </View>
        <View style={Style.body}>
          <Pressable style={Style.logout} onPress={_onLogoutPressed}>
            <Text>{t(`${base}.logout`)}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Homepage
