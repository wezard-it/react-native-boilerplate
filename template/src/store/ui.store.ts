import React from 'react'
import { observable, action, makeAutoObservable } from 'mobx'
import { persist } from 'mobx-persist'

class UIStore {
  @observable showSplash = true
  @persist @observable isOnboardingVisited = false
  @persist @observable arePermissionsShown = false

  constructor() {
    makeAutoObservable(this, {
      isOnboardingVisited: observable,
      arePermissionsShown: observable,
      showSplash: observable,
      setOnboardingVisited: action.bound,
      setArePermissionsShown: action.bound,
      setShowSplash: action.bound,
    })
  }

  setShowSplash(status = true) {
    this.showSplash = status
  }

  setOnboardingVisited(status = false) {
    this.isOnboardingVisited = status
  }

  setArePermissionsShown(status = false) {
    this.arePermissionsShown = status
  }
}

// Instantiate the ui store.
export const uiStore = new UIStore()
export const UIStoreContext = React.createContext(uiStore)
