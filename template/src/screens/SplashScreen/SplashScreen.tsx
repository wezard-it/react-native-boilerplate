/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { SafeAreaView, View, Image } from 'react-native'
import { useUI } from 'hooks'
import { observer } from 'mobx-react-lite'
import Style from './SplashScreen.style'

// Global
const logo = require('../../assets/pngs/logo.png')

const SplashScreen = observer((): JSX.Element => {
  // Auth variables
  const { setShowSplash } = useUI()

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
