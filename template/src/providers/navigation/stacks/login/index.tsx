import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<LoginStackParamList>()

const LoginStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        getComponent={(): React.ComponentType => require('screens/login/login').default}
      />
    </Stack.Navigator>
  )
}

export default LoginStack
