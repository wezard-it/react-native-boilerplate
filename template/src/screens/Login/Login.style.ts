import { StyleSheet } from 'react-native'

const Style = (theme: Theme) =>
  StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: theme.colors.white },
    pressableContainer: { flex: 1 },
    container: { flex: 1, backgroundColor: theme.colors.white },
    titleContainer: { paddingHorizontal: theme.spacing.s },
    title: { ...theme.typography.h1, color: theme.colors.black },
    body: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    pressable: { padding: 10, paddingBottom: 20 },
    navigation: { ...theme.typography.p, color: theme.colors.black },
  })

export default Style
