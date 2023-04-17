import { Action as ReduxAction } from 'redux'

export interface MainState {
  loading: boolean
  error?: string
}

export type Action<T extends string = string> =
  | ActionWithoutPayload<T>
  | ActionWithPayload<unknown, T>

export type ActionWithoutPayload<T extends string = string> = ReduxAction<T>

export interface ActionWithPayload<P, T extends string = string> extends ReduxAction<T> {
  payload: P
}
