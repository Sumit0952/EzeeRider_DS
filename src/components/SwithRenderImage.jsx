import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNavigationContainerRef } from '@react-navigation/native'

const SwithRenderImage = () => {
  return (
    <View>
      <Image style = {{height:20,width:20}}source={require("../screens/two_wheeler.png")}/>
    </View>
  )
}

export default SwithRenderImage

const styles = StyleSheet.create({
  
})