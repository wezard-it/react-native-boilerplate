/* BottomSheet interface */
interface IBottomSheetHandler {
  openBottomSheet: () => void
  closeBottomSheet: () => void
}

/* BottomSheet props */
interface BottomSheetProps {
  title: string | null
  children: React.ReactNode
  hasHeader: boolean
  onCloseBottomSheet?: () => void
}

/* Screen props */
interface ScreenProps {
  componentId: string
}

type NAVIGATION_APP = {
  name: string
  testURL: string
  navigationURL: string
  storeURL: string
  androidURL?: string
}

type FontWeightType =
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
