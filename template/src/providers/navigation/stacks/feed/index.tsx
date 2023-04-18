import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<FeedStackParamList>()

const FeedStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        getComponent={(): React.ComponentType => require('screens/feed/feed').default}
      />
    </Stack.Navigator>
  )
}

export default FeedStackNavigator
