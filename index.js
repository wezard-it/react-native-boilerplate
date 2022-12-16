import { LogBox } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'mobx-persist'
import { Navigation } from 'react-native-navigation'
import { ignore } from './dev'
import { authStore } from './src/contexts/auth.store'
import { authRoot } from './src/screens/navigator'

LogBox.ignoreLogs(ignore)

// Store hydration function.
async function hydrateStores () {
  const hydrate = create({ storage: AsyncStorage })
  Promise.all([
    hydrate('AuthStore', authStore)
  ])
}

Navigation.events().registerAppLaunchedListener(() => {
  hydrateStores().then(() => {
    Navigation.setRoot(authRoot)
  })
})
