import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { useTranslation } from 'react-i18next'
import { ScreenProps } from 'types'
import Style from './Homepage.style'

// Language variable
const base = 'homepage_screen'

type Props = ScreenProps

const Homepage = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  const { t } = useTranslation()

  // Auth variables
  // const { setAuth } = useAuth()

  const _onLogoutPressed = () => {
    // Navigation.setRoot(authRoot)
    // setAuth(false)
    console.log('logout')
  }

  console.log(componentId)

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
