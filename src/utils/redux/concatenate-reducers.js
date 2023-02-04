function isObject(value) {
  return typeof value !== 'undefined' && value !== null && value.constructor === Object
}

export default function concatenateReducers(reducers) {
  const empty = reducers.length === 0
  function applyNextState(previousState, nextState) {
    if (isObject(previousState) && isObject(nextState)) {
      return Object.assign(previousState, nextState)
    }
    return nextState
  }
  function checkHasChanged(previousState, nextState) {
    if (isObject(previousState) && isObject(nextState)) {
      if (previousState === nextState) {
        return false
      }
      const keys = Object.keys(nextState)
      for (let i = 0; i < keys.length; i++) {
        if (previousState[keys[i]] !== nextState[keys[i]]) {
          return true
        }
      }
      return false
    }
    return previousState !== nextState
  }
  return function (state, action) {
    if (empty) {
      throw Error('There are no reducers')
    }
    let finalNextState = isObject(state) ? { ...state } : state
    let hasChanged = false
    function getPreviousState() {
      return typeof state === 'undefined' ? state : finalNextState
    }
    for (let i = 0; i < reducers.length; i++) {
      const nextState = reducers[i](getPreviousState(), action)
      if (checkHasChanged(finalNextState, nextState)) {
        hasChanged = true
        finalNextState = applyNextState(finalNextState, nextState)
      }
    }

    return hasChanged ? finalNextState : state
  }
}
