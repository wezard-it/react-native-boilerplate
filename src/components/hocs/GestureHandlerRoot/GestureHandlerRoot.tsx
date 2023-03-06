import { StyleProp, ViewStyle } from 'react-native'
import { gestureHandlerRootHOC as _gestureHandlerRootHOC } from 'react-native-gesture-handler'

export default function gestureHandlerRootHOC<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  containerStyles?: StyleProp<ViewStyle>,
): React.ComponentType<P> {
  return _gestureHandlerRootHOC(Component, containerStyles)
}
