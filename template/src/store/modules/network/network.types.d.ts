interface NetworkState {
  isConnected?: boolean
  networkStateType?: NetInfoStateType
  actionsQueue?: PayloadAction<unknown>[]
}

interface NetworkChangePayload {
  isConnected: boolean
  networkStateType: NetInfoStateType
}

type NetworkActionBehaviour = 'QUEUED' | 'ROLLBACK' | undefined

type NetworkMeta = {
  offline: {
    behaviour: NetworkActionBehaviour
  }
}
