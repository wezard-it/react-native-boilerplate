import React from 'react'
import { observable, action, makeAutoObservable } from 'mobx'
import { persist } from 'mobx-persist'

class AuthStore {
  @persist @observable isAuthenticated = false

  constructor() {
    makeAutoObservable(this, {
      isAuthenticated: observable,
      setIsAuthenticated: action.bound,
    })
  }

  setIsAuthenticated(status = false) {
    this.isAuthenticated = status
  }
}

// Instantiate the auth store.
export const authStore = new AuthStore()
export const AuthStoreContext = React.createContext(authStore)
