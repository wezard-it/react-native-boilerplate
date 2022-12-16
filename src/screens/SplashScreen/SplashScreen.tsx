import React, { useEffect } from 'react'
import { SafeAreaView, View, Image } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useAuth } from '../../components/hooks'
import Style from './SplashScreen.style'

const logo = require('../../assets/pngs/logo.png')

// Interface
interface Props {
  componentId: string,
}

const SplashScreen = observer(({
  componentId = ''
}: Partial<Props>) => {
  // Auth variables
  const { setShowSplash } = useAuth()

  // Hooks
  useEffect(() => {
    setTimeout(() => setShowSplash(false), 1500)
  }, [])

  return (
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.container}>
        <Image source={logo} style={Style.image} />
      </View>
    </SafeAreaView>
  )
})

export default SplashScreen
