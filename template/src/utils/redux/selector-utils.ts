import { isEqual } from 'lodash'
import * as Reselect from 'reselect'

export function createStructuredSelector<S>() {
  return function <T>(selectors: { [K in keyof T]: Reselect.Selector<S, T[K]> }): Reselect.Selector<
    S,
    T
  > {
    return Reselect.createStructuredSelector<S, T>(selectors)
  }
}

export const createDeepEqualSelector = Reselect.createSelectorCreator(
  Reselect.defaultMemoize,
  isEqual,
)
