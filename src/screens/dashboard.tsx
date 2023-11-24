import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from '../components/screen-container'
import { colors } from '../constants/app.constants'

const Dashboard = () => {
  return (
  <ScreenContainer>
    <View style = {styles.dashboard}>
        <View style ={styles.imageContainer}>
        {/* <Image source={}/> */}
        </View>
        <Text>WELCOME.</Text>

        <View>

        </View>


    </View>
  </ScreenContainer>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    dashboard:{
        flexDirection:'column',
        height: '40%',
        backgroundColor:colors.primary
    },
    imageContainer:{
        backgroundColor:colors.dark,
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // width:'30%',
        // height:"30%",
        // borderRadius: 100
        
    }

})