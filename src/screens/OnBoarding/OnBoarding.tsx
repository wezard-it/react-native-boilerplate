import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { appRoot } from '../navigator'
import Style from './OnBoarding.style'

// Language
const base = 'onboarding_screen'

// Interfaces
type Props = ScreenProps

const OnBoarding = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  const { t } = useTranslation()

  // Methods
  const _onBoardingCompleted = () => {
    console.log('on boarding visited')
    Navigation.setRoot(appRoot)
  }

  console.log(componentId)

  return (
    <SafeAreaView style={Style.safeArea}>
      <Pressable style={Style.pressable} onPress={_onBoardingCompleted}>
        <View style={Style.container}>
          <Text style={Style.title}>{t(`${base}.title`)}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  )
}

export default OnBoarding
