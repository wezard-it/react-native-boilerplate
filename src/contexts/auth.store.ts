import React from 'react'
import { observable, action, makeAutoObservable } from 'mobx'
import { persist } from 'mobx-persist'

class AuthStore {
  @persist @observable isAuthenticated: boolean = false
  @persist @observable isOnboardingVisited: boolean = false
  @persist @observable arePermissionsShown: boolean = false
  @observable showSplash: boolean = true

  constructor () {
    makeAutoObservable(this, {
      isAuthenticated: observable,
      isOnboardingVisited: observable,
      arePermissionsShown: observable,
      showSplash: observable,
      setAuth: action.bound,
      setOnboardingVisited: action.bound,
      setArePermissionsShown: action.bound,
      setShowSplash: action.bound
    })
  }

  setAuth (status: boolean = false) {
    this.isAuthenticated = status
  }

  setOnboardingVisited (status: boolean = false) {
    this.isOnboardingVisited = status
  }

  setArePermissionsShown (status: boolean = false) {
    this.arePermissionsShown = status
  }

  setShowSplash (status: boolean = true) {
    this.showSplash = status
  }
}

// Instantiate the auth store.
export const authStore = new AuthStore()
export const AuthStoreContext = React.createContext(authStore)
