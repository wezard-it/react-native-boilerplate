import gestureHandlerRootHOC from 'components/hocs/GestureHandlerRoot/GestureHandlerRoot'
import NavigationWrapper from 'components/hocs/NavigationWrapper/NavigationWrapper'
import { Navigation } from 'react-native-navigation'
import { IModuleStore } from 'redux-dynamic-modules'
import { Persistor } from 'redux-persist'
import { MainState } from 'store/types'

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
  id: 'BOTTOM_TABS',
}
export const TabsStack = {
  id: 'STACK_TABS',
}
export const HomepageScreen = {
  id: 'HOME_PAGE',
  name: 'basic.Homepage',
}
export const AuthStack = {
  id: 'STACK_AUTH',
}
export const RedirectScreen = {
  id: 'REDIRECT',
  name: 'basic.Redirect',
}
export const LoginScreen = {
  id: 'LOGIN',
  name: 'basic.Login',
}
export const SplashScreen = {
  id: 'SPLASHSCREEN',
  name: 'basic.SplasScreen',
}
export const SubscribeScreen = {
  id: 'SUBSCRIBE',
  name: 'basic.Subscribe',
}
export const ForgotPasswordScreen = {
  id: 'FORGOT_PASSWORD',
  name: 'basic.ForgotPassword',
}
export const OnBoardingScreen = {
  id: 'ON_BOARDING',
  name: 'basic.OnBoarding',
}

// Global options
Navigation.setDefaultOptions({
  layout: {
    orientation: ['portrait'],
    backgroundColor: 'white',
  },
  animations: {
    setRoot: {
      waitForRender: true,
      alpha: { from: 0, to: 1, duration: 400 },
    },
    showModal: {
      waitForRender: true,
    },
    push: {
      waitForRender: true,
    },
  },
})

export const globalStackOptions = {
  topBar: {
    visible: false,
  },
  bottomTabs: {
    visible: false,
  },
}

export const globalComponentOptions = {
  layout: {
    componentBackgroundColor: 'white',
  },
}

// Register screens
export const registerScreens = (store: IModuleStore<MainState>, persistor: Persistor) => {
  Navigation.registerComponent(
    SplashScreen.name,
    () => gestureHandlerRootHOC(NavigationWrapper(Splash, store, persistor)),
    () => Splash,
  )
  Navigation.registerComponent(
    RedirectScreen.name,
    () => gestureHandlerRootHOC(NavigationWrapper(Redirect, store, persistor)),
    () => Redirect,
  )
  Navigation.registerComponent(
    LoginScreen.name,
    () => gestureHandlerRootHOC(NavigationWrapper(Login, store, persistor)),
    () => Login,
  )
  Navigation.registerComponent(
    SubscribeScreen.name,
    () => gestureHandlerRootHOC(NavigationWrapper(Subscribe, store, persistor)),
    () => Subscribe,
  )
  Navigation.registerComponent(
    ForgotPasswordScreen.name,
    () => gestureHandlerRootHOC(NavigationWrapper(ForgotPassword, store, persistor)),
    () => ForgotPassword,
  )
  Navigation.registerComponent(
    OnBoardingScreen.name,
    () => gestureHandlerRootHOC(NavigationWrapper(OnBoarding, store, persistor)),
    () => OnBoarding,
  )
  Navigation.registerComponent(
    HomepageScreen.name,
    () => gestureHandlerRootHOC(NavigationWrapper(Homepage, store, persistor)),
    () => Homepage,
  )
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
                    ...globalComponentOptions,
                  },
                },
              },
            ],
            options: {
              ...globalStackOptions,
            },
          },
        },
      ],
      options: {
        bottomTabs: {
          visible: false,
        },
      },
    },
  },
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
              ...globalComponentOptions,
            },
          },
        },
      ],
      options: {
        ...globalStackOptions,
      },
    },
  },
}

export { appRoot, authRoot }
