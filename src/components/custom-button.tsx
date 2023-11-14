import { StyleSheet, Text, TouchableOpacity ,View} from 'react-native'
import React from 'react'
import { colors } from '../constants/app.constants'

const CustomButton = ({onPress,title}) => {
  return (
    <View style={styles.container}>

    <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
      paddingHorizontal: 20,
      paddingVertical:25,

    },
        button: {
            backgroundColor: colors.primary,
          
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 5,
            width: "100%",
            marginTop: 20,
            height: 48
        },
        
        buttonText: {
            color: colors.white,
            fontSize: 17,
            fontWeight: "bold"
        },
})