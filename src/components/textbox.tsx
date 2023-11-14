import { StyleSheet,TextInput,View } from 'react-native'
import React from 'react'
import { colors } from '../constants/app.constants'

const TextBox = ({placeholder, secureTextEntry, onChangeText, onFocus, onBlur,style}) => {

  return (

    <View style={styles.container}>

      <TextInput
      style={[styles.input,style]}
      placeholder={placeholder}
      secureTextEntry ={secureTextEntry}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      />

    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
  input:{
    height: 55,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
})