import React from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '@wezard/react-native-ylem'
import { useDispatch } from 'react-redux'
import { logout } from 'store/modules/auth/auth.actions'
import Style from './feed.style'

type Props = NativeStackScreenProps<FeedStackParamList, 'Feed'>

const FeedScreen: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const handleLogout = React.useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <View style={Style.container}>
      <View style={Style.body}>
        <Text>Feed</Text>
      </View>
      <Button title="logout" onPress={handleLogout} />
    </View>
  )
}

export default FeedScreen
