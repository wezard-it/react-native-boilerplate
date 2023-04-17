/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { SafeAreaView, View, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { hideSplashscreen } from 'store/modules/ui/ui.actions'
import Style from './SplashScreen.style'

// Global
const logo = require('../../assets/pngs/logo.png')

// Interfaces
type Props = ScreenProps

const SplashScreen = ({ componentId = '' }: Partial<Props>): JSX.Element => {
  const dispatch = useDispatch()

  // Hooks
  useEffect(() => {
    setTimeout(() => dispatch(hideSplashscreen()), 1500)
  }, [])

  console.log(componentId)

  return (
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.container}>
        <Image source={logo} style={Style.image} />
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen
