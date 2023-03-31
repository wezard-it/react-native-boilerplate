import { StyleSheet } from 'react-native'
import theme from 'providers/theme'

const Style = StyleSheet.create({
  h1: {
    ...theme.typography.h1,
  },
  h2: {
    ...theme.typography.h2,
  },
  h3: {
    ...theme.typography.h3,
  },
  titleSm: {
    ...theme.typography.title2,
  },
  titleMd: {
    ...theme.typography.title1,
  },
  titleLg: {
    ...theme.typography.title,
  },
})

export default Style
