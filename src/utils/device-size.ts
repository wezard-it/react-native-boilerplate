import { Dimensions } from 'react-native'

const SMALL_SCREEN_HEIGHT = 700

export const isSmallDevice = (): boolean => {
  const { height } = Dimensions.get('window')
  return height < SMALL_SCREEN_HEIGHT
}
