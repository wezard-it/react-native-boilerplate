import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { useAuth } from '../../components/hooks'
import { appRoot } from '../navigator'
import Style from './OnBoarding.style'

// Language variable
const base = 'onboarding_screen'

interface Props {
  componentId: string,
}

const OnBoarding = observer(({
  componentId = ''
}: Partial<Props>) => {
  const { t } = useTranslation()
  // Auth variables
  const { setOnboardingVisited } = useAuth()

  // Methods
  const _onBoardingCompleted = () => {
    setOnboardingVisited(true)
    Navigation.setRoot(appRoot)
  }

  return (
    <SafeAreaView style={Style.safeArea}>
      <Pressable style={{ flex: 1 }} onPress={_onBoardingCompleted}>
        <View style={Style.container}>
          <Text style={Style.title}>{t(`${base}.title`)}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  )
})

export default OnBoarding
