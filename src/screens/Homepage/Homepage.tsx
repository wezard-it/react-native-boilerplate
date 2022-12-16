import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import { useAuth } from '../../components/hooks'
import { authRoot } from '../navigator'
import Style from './Homepage.style'
// import Animated, {
//   useSharedValue,
//   runOnUI,
//   useAnimatedStyle,
//   withTiming
// } from 'react-native-reanimated'

// Language variable
const base = 'homepage_screen'

interface Props {
  componentId: string,
}

const Homepage = observer(({
  componentId = ''
}: Partial<Props>) => {
  const { t } = useTranslation()

  // Auth variables
  const { setAuth } = useAuth()

  // const cardScale = useSharedValue(1)

  // const lowerScale = () => {
  //   'worklet'
  //   cardScale.value = withTiming(0.98, { duration: 150 })
  // }

  // const restoreScale = () => {
  //   'worklet'
  //   cardScale.value = withTiming(1, { duration: 150 })
  // }

  // const cardAnimationStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ scale: cardScale.value }]
  //   }
  // })

  // const _onPressIn = () => {
  //   runOnUI(lowerScale)()
  // }

  // const _onPressOut = () => {
  //   runOnUI(restoreScale)()
  // }

  const _onLogoutPressed = () => {
    Navigation.setRoot(authRoot)
    setAuth(false)
  }

  return (
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.container}>
        <View style={Style.titleContainer}>
          <Text style={Style.title}>{t(`${base}.title`)}</Text>
        </View>
        <View style={Style.body}>
          <Pressable style={{ paddingVertical: 20 }} onPress={_onLogoutPressed}>
            <Text>Logout</Text>
          </Pressable>
          {/* <Animated.View style={[{ borderWidth: 0, borderRadius: 20, backgroundColor: '#f1f1f1' }, cardAnimationStyle]}>
          <Pressable style={{ padding: 20 }} onPressIn={_onPressIn} onPressOut={_onPressOut}>
            <Text style={Style.title}>{counter}</Text>
          </Pressable>
        </Animated.View> */}
        </View>
      </View>
    </SafeAreaView>
  )
})

export default Homepage
