import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import Style from './Subscribe.style'

// Language
const base = 'subscribe_screen'

// Interfaces
type Props = ScreenProps

const Subscribe = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  const { t } = useTranslation()

  // Methods
  const _onNavigateBack = () => {
    Navigation.pop(componentId)
  }

  return (
    <SafeAreaView style={Style.safeArea}>
      <Pressable style={Style.pressableContainer} onPress={_onNavigateBack}>
        <View style={Style.container}>
          <View style={Style.titleContainer}>
            <Text style={Style.title}>{t(`${base}.title`)}</Text>
          </View>
          <View style={Style.body}>
            <Text>{t(`${base}.description`)}</Text>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  )
}

export default Subscribe
