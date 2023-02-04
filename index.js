import { LogBox } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { ignore } from './dev'
import { authRoot, registerScreens } from './src/screens/navigator'
import store, { persistor } from './src/store'

LogBox.ignoreLogs(ignore)

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens(store, persistor)
  Navigation.setRoot(authRoot)
})
