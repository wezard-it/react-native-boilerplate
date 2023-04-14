import * as React from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useDispatch } from 'react-redux'
import { emptyActionsQueue, networkChange } from 'store/modules/network/network.actions'

const NetworkStateProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    NetInfo.addEventListener((event) => {
      dispatch(emptyActionsQueue(event.isConnected))
      dispatch(
        networkChange({ isConnected: event.isConnected ?? false, networkStateType: event.type }),
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default NetworkStateProvider
