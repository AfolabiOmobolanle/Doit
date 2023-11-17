import { StyleProp, StyleSheet,TextInput,View, ViewStyle,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants/app.constants'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


interface TextProps{
  onBlur: any;
  onChangedText:any;
  placeholder?:string;
  value:any;
  textSecure?:boolean;
  textStyle?:StyleProp<ViewStyle>;
  icon?:string;
  toggleIcon?:string;
  onIconPressed?:() => void;

}

const TextBox = ({
  onBlur,
  onChangedText,
  placeholder,
  value,
   textSecure, 
   textStyle,
   icon,
   toggleIcon,
   onIconPressed
  }: TextProps) => {

  return (

    <View style={styles.container}>
      {icon && (
      <View style={{width: 40}}>
        <FontAwesome name={icon} size={30} color ={colors.dark}/>
      </View>

      )}
      <TextInput
      onBlur={onBlur}
      onChangeText={onChangedText}
      placeholder={placeholder}
      value={value}
      secureTextEntry ={textSecure}
      style={[styles.input,textStyle]}
      />
      {toggleIcon && (
        <TouchableOpacity onPress={onIconPressed}style={{position: 'absolute', right: 10, top: 20, paddingHorizontal:20}}>
            <FontAwesome name={toggleIcon} size={24} color ={colors.dark}/>
        </TouchableOpacity>
      )}
    </View>
  )
}


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


export default TextBox