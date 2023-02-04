import { AnyAction, ReducersMapObject } from 'redux'

const getTypedReducerMap = <StateType>(map: unknown): ReducersMapObject<StateType, AnyAction> => {
  return map as ReducersMapObject<StateType, AnyAction>
}

export default getTypedReducerMap
