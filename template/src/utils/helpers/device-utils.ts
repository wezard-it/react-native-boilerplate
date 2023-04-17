import { Dimensions, Platform } from 'react-native'

const SMALL_SCREEN_HEIGHT = 700

export const isSmallDevice = (): boolean => {
  const { height } = Dimensions.get('window')
  return height < SMALL_SCREEN_HEIGHT
}

export const isIOSDevice = (): boolean => {
  return Platform.OS === 'ios'
}

export const isAndroidDevice = (): boolean => {
  return Platform.OS === 'android'
}

export const isWindowsDevice = (): boolean => {
  return Platform.OS === 'windows'
}

export const isWebDevice = (): boolean => {
  return Platform.OS === 'web'
}
