import { Platform } from 'react-native'

export const formatFontWeight = (value: number) => {
  const weight: number = value * 1
  const parsedValue: FontWeightType = value.toString() as FontWeightType

  if (Platform.OS === 'android') {
    let androidWeight: FontWeightType = 'normal'

    if (weight <= 500) {
      androidWeight = 'normal'
      return androidWeight
    } else {
      androidWeight = 'bold'
      return androidWeight
    }
  }

  return parsedValue
}
