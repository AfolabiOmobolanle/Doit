import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ScreenContainer from '../components/screen-container';
import assets, {colors} from '../constants/app.constants';

import Logo from '../components/logo';
import CustomButton from '../components/custom-button';

const Landing = ({navigation}) => {
  const onGetStarted = () => {
    navigation.navigate('Signinpage');
  };
  return (
    <ScreenContainer>
      <View style={styles.homeScreen}>
        <Logo />
        <Image source={assets.draw} />
        <View style={{height: 30}} />

        <View style={styles.textWrapper}>
          <Text style={styles.header}>Get things done.</Text>
          <View style={{height: 10}} />

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            facere ex dolores! In quos enim, incidunt, perspiciatis porro illum,
            sapiente id numquam quia corporis voluptatibus vero reiciendis
            excepturi officia quae?
          </Text>
          <CustomButton onPress={onGetStarted} title={'Get Started'} />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Landing;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.offwhite,
  },
  textWrapper:{
    flexDirection: 'column',
    paddingHorizontal:10,
    paddingVertical:5
  },
  header:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'800',
    color:colors.dark,
    textTransform: 'uppercase'
  },
  text:{
    padding: 4,
  }
});
