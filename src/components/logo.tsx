import { Dimensions, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import assets from '../constants/app.constants'
const {width , height} = Dimensions.get('window');



const Logo = () => {
  return (
    <View style ={styles.logoContainer}>
    <Image source={assets.logo}/>
  </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logoContainer:{
        width:'100%',
        height: height *.3,
        justifyContent:'center',
        alignItems: 'center'
      }
    })