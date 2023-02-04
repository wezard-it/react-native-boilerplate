/* BottomSheet interface */
export interface IBottomSheetHandler {
  openBottomSheet: () => void
  closeBottomSheet: () => void
}

/* BottomSheet props */
export interface BottomSheetProps {
  title: string | null
  children: React.ReactNode
  hasHeader: boolean
  onCloseBottomSheet?: () => void
}

/* Screen props */
export interface ScreenProps {
  componentId: string
}
