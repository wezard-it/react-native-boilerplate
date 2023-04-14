export const selectIsConnected = (state: RootState): boolean | undefined => {
  return state.network?.isConnected ?? undefined
}
