import {
  Asset,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'
import { IMAGE_PICKER_OPTIONS } from './variables'

export const onLaunchCamera = async (): Promise<Asset | null> => {
  const result: ImagePickerResponse = await launchCamera(IMAGE_PICKER_OPTIONS)
  if (result.didCancel) {
    console.log('User cancelled image picker')
  } else if (result.errorMessage) {
    console.log('ImagePicker Error: ', result.errorMessage)
  } else {
    if (result?.assets) {
      const [asset] = result.assets
      return asset
    }
  }
  return null
}

export const onLaunchImageLibrary = async (): Promise<Asset | null> => {
  const result: ImagePickerResponse = await launchImageLibrary(IMAGE_PICKER_OPTIONS)
  if (result.didCancel) {
    console.log('User cancelled image picker')
  } else if (result.errorMessage) {
    console.log('ImagePicker Error: ', result.errorMessage)
  } else {
    if (result?.assets) {
      const [asset] = result.assets
      return asset
    }
  }
  return null
}
