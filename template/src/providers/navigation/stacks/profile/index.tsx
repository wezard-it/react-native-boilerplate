import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<ProfileStackParamList>()

const ProfileStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        getComponent={(): React.ComponentType => require('screens/profile/profile').default}
      />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
