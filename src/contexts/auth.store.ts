import React from 'react'
import { observable, action, makeAutoObservable } from 'mobx'
import { persist } from 'mobx-persist'

class AuthStore {
  @persist @observable isAuthenticated = false
  @persist @observable isOnboardingVisited = false
  @persist @observable arePermissionsShown = false
  @observable showSplash = true

  constructor() {
    makeAutoObservable(this, {
      isAuthenticated: observable,
      isOnboardingVisited: observable,
      arePermissionsShown: observable,
      showSplash: observable,
      setAuth: action.bound,
      setOnboardingVisited: action.bound,
      setArePermissionsShown: action.bound,
      setShowSplash: action.bound,
    })
  }

  setAuth(status = false) {
    this.isAuthenticated = status
  }

  setOnboardingVisited(status = false) {
    this.isOnboardingVisited = status
  }

  setArePermissionsShown(status = false) {
    this.arePermissionsShown = status
  }

  setShowSplash(status = true) {
    this.showSplash = status
  }
}

// Instantiate the auth store.
export const authStore = new AuthStore()
export const AuthStoreContext = React.createContext(authStore)
