import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Style = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
  },
  image: { width: 'auto', height: height * 0.5, resizeMode: 'contain', aspectRatio: 1 },
})

export default Style
