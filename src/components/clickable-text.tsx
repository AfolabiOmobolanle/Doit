import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/app.constants'

const ClickableText = ({onPress,title,style}) => {
  return (
   
    <TouchableOpacity style={styles.signUpWrapper} onPress={onPress}>
    <Text style ={[styles.signUpText, style]} >
        {title}
    </Text>
  </TouchableOpacity>
  )
}

export default ClickableText

const styles = StyleSheet.create({
    
    signUpWrapper:{
        justifyContent: "center",
        alignItems: 'center',
      },
    
})