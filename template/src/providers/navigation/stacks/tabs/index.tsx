import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator<TabsParamList>()

const TabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FeedStack"
        getComponent={(): React.ComponentType =>
          require('providers/navigation/stacks/feed').default
        }
      />
      <Tab.Screen
        name="ProfileStack"
        getComponent={(): React.ComponentType =>
          require('providers/navigation/stacks/profile').default
        }
      />
    </Tab.Navigator>
  )
}

export default TabsNavigator
