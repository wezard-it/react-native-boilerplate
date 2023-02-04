import { isEqual } from 'lodash'
import { select, take } from 'redux-saga/effects'

const arraysHaveSameItems = (array1 = [], array2 = []) => {
  if (array1.length !== array2.length) return false

  let check = true

  array1.forEach((i) => {
    if (!array2.includes(i)) {
      check = false
    }
  })

  return check
}

function* waitAndSelect(selector, checksFn, actions) {
  let value = yield select(selector)
  let checks = checksFn(value)

  const actionsRecived = []

  if (checks === false) {
    while (checks === false && !arraysHaveSameItems(actionsRecived, actions)) {
      const action = yield take(actions)

      if (!actionsRecived.includes(action.type)) {
        actionsRecived.push(action.type)
      }

      value = yield select(selector)
      checks = checksFn(value)
    }
  }

  if (isEqual(actions, actionsRecived) && checks === false) {
    throw new Error('All "waiting for" actions were recived but the checks still not pass')
  }

  return value
}

export default waitAndSelect
