import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Style from './feed.style'

type Props = NativeStackScreenProps<FeedStackParamList, 'Feed'>

const FeedScreen: React.FC<Props> = () => {
  return (
    <View style={Style.container}>
      <View style={Style.body}>
        <Pressable style={Style.logout}>
          <Text>Feed</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FeedScreen
