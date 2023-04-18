import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Style from './profile.style'

type Props = NativeStackScreenProps<ProfileStackParamList, 'Profile'>

const ProfileScreen: React.FC<Props> = () => {
  return (
    <View style={Style.container}>
      <View style={Style.body}>
        <Pressable style={Style.logout}>
          <Text>Profile</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ProfileScreen
