import Animated, { runOnUI, withTiming } from 'react-native-reanimated'

const onHide = (opacity: Animated.SharedValue<number>): void => {
  'worklet'
  opacity.value = withTiming(1, { duration: 500 })
}

const onShow = (opacity: Animated.SharedValue<number>): void => {
  'worklet'
  opacity.value = withTiming(1, { duration: 500 })
}

export const onHideScreen = (opacity: Animated.SharedValue<number>) => {
  runOnUI(onHide)(opacity)
}

export const onShowScreen = (opacity: Animated.SharedValue<number>) => {
  runOnUI(onShow)(opacity)
}
