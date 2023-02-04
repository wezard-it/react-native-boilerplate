import { Platform } from 'react-native'

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export const formatFontWeight = (value: number) => {
  const weight: number = value * 1
  const parsedValue: FontWeight = value.toString() as FontWeight

  if (Platform.OS === 'android') {
    let androidWeight: FontWeight = 'normal'

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
