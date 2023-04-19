import React from 'react'
import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '@wezard/react-native-ylem'
import { useDispatch } from 'react-redux'
import { signIn } from 'store/modules/auth/auth.actions'
import Style from './login.style'

type Props = NativeStackScreenProps<LoginStackParamList, 'Login'>

const LoginScreen: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const handleLogin = React.useCallback(() => {
    dispatch(signIn())
  }, [dispatch])

  return (
    <View style={Style.container}>
      <View style={Style.body}>
        <Button title="login" onPress={handleLogin} />
      </View>
    </View>
  )
}

export default LoginScreen
