import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Navigation } from 'react-native-navigation'

// Import Screens
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Homepage from './Homepage/Homepage'
import Login from './Login/Login'
import OnBoarding from './OnBoarding/OnBoarding'
import Redirect from './Redirect/Redirect'
import Splash from './SplashScreen/SplashScreen'
import Subscribe from './Subscribe/Subscribe'

// App stack
export const BottomTabs = {
  id: 'BOTTOM_TABS'
}
export const TabsStack = {
  id: 'STACK_TABS'
}
// export const TabsScreen = {
//   id: 'TABS',
//   name: 'vintageHunters.Tabs'
// }
export const HomepageScreen = {
  id: 'HOME_PAGE',
  name: 'basic.Homepage'
}

// Auth stack
export const AuthStack = {
  id: 'STACK_AUTH'
}
export const RedirectScreen = {
  id: 'REDIRECT',
  name: 'basic.Redirect'
}
export const LoginScreen = {
  id: 'LOGIN',
  name: 'basic.Login'
}
export const SplashScreen = {
  id: 'SPLASHSCREEN',
  name: 'basic.SplasScreen'
}
export const SubscribeScreen = {
  id: 'SUBSCRIBE',
  name: 'basic.Subscribe'
}
export const ForgotPasswordScreen = {
  id: 'FORGOT_PASSWORD',
  name: 'basic.ForgotPassword'
}
export const OnBoardingScreen = {
  id: 'ON_BOARDING',
  name: 'basic.OnBoarding'
}

// App screens
Navigation.registerComponent(HomepageScreen.name, () => gestureHandlerRootHOC(Homepage))

// Auth screens
Navigation.registerComponent(SplashScreen.name, () => gestureHandlerRootHOC(Splash))
Navigation.registerComponent(RedirectScreen.name, () => gestureHandlerRootHOC(Redirect))
Navigation.registerComponent(LoginScreen.name, () => gestureHandlerRootHOC(Login))
Navigation.registerComponent(SubscribeScreen.name, () => gestureHandlerRootHOC(Subscribe))
Navigation.registerComponent(ForgotPasswordScreen.name, () => gestureHandlerRootHOC(ForgotPassword))
Navigation.registerComponent(OnBoardingScreen.name, () => gestureHandlerRootHOC(OnBoarding))

// Global options
Navigation.setDefaultOptions({
  layout: {
    orientation: ['portrait'],
    backgroundColor: 'white'
  },
  animations: {
    setRoot: {
      waitForRender: true,
      alpha: { from: 0, to: 1, duration: 400 }
    },
    showModal: {
      waitForRender: true
    },
    push: {
      waitForRender: true
    }
  }
})

export const globalStackOptions = {
  topBar: {
    visible: false
  }
}

export const globalComponentOptions = {
  layout: {
    componentBackgroundColor: 'white'
  }
}

// App Root
const appRoot = {
  root: {
    bottomTabs: {
      id: BottomTabs.id,
      children: [
        {
          stack: {
            id: TabsStack.id,
            children: [
              {
                component: {
                  id: HomepageScreen.id,
                  name: HomepageScreen.name,
                  options: {
                    ...globalComponentOptions
                  }
                }
              }
            ],
            options: {
              ...globalStackOptions
            }
          }
        }
      ],
      options: {
        bottomTabs: {
          visible: false
        }
      }
    }
  }
}

// Auth root
const authRoot = {
  root: {
    stack: {
      id: AuthStack.id,
      children: [
        {
          component: {
            id: RedirectScreen.id,
            name: RedirectScreen.name,
            options: {
              ...globalComponentOptions
            }
          }
        }
      ],
      options: {
        ...globalStackOptions
      }
    }
  }
}

export { appRoot, authRoot }
