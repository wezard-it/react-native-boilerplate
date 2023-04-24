import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { useAuth } from 'hooks'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { authRoot } from 'screens/navigator'
import Style from './Homepage.style'

// Language
const base = 'homepage_screen'

// Interfaces
type Props = ScreenProps

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = observer(({ componentId = '' }: Partial<Props>): JSX.Element => {
  const { t } = useTranslation()
  const { setIsAuthenticated } = useAuth()

  // Methods
  const _onLogoutPressed = () => {
    setIsAuthenticated(false)
    Navigation.setRoot(authRoot)
  }

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
})

export default Homepage
