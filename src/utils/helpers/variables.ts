import { CameraOptions } from 'react-native-image-picker'

export const IMAGE_PICKER_OPTIONS: CameraOptions = {
  mediaType: 'mixed',
  includeBase64: true,
}

export const NAVIGATION: { [key: string]: NAVIGATION_APP[] } = {
  ios: [
    {
      name: 'Google Maps',
      testURL: 'comgooglemaps://',
      navigationURL: 'https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=',
      storeURL: 'https://apps.apple.com/us/app/google-maps-transit-food/id585027354',
    },
    {
      name: 'Maps',
      testURL: 'maps://',
      navigationURL: 'http://maps.apple.com/?daddr=',
      storeURL: 'https://apps.apple.com/us/app/apple-maps/id915056765',
    },
    {
      name: 'Waze',
      testURL: 'waze://',
      navigationURL: 'https://waze.com/ul?ll=',
      storeURL: 'https://apps.apple.com/us/app/waze-navigation-live-traffic/id323229106',
    },
  ],
  android: [
    {
      name: 'Google Maps',
      testURL: '',
      navigationURL: 'https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=',
      storeURL: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
    },
    {
      name: 'Waze',
      testURL: '',
      androidURL: 'com.waze',
      navigationURL: 'https://waze.com/ul?ll=',
      storeURL: 'https://play.google.com/store/apps/details?id=com.waze',
    },
  ],
}
