import {StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import React, {useState} from 'react';
import assets, {colors} from '../constants/app.constants';
import ScreenContainer from '../components/screen-container';
import TextBox from '../components/textbox';
import CustomButton from '../components/custom-button';
import ClickableText from '../components/clickable-text';
import Logo from '../components/logo';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const onSignIn = () => {
    Alert.alert('Signed In successsfully');
  };
  const homeScreen = ()=>{
    navigation.navigate('LandingPage')
  }
  const onSignUp = () => {
    navigation.navigate('Signupage');
  };
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.signin}>Sign in</Text>

        <View style={{height: 20}} />

        <View style={styles.inputWrapper}>
          <TextBox
            placeholder={'Email'}
            secureTextEntry={false}
            onChangeText={(value: string) => setEmail(value)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            style={isEmailFocused && {borderColor: colors.primary}}
          />
          <View style={{height: 20}} />

          <TextBox
            placeholder={'Password'}
            secureTextEntry={false}
            onChangeText={(value: string) => setPassword(value)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            style={isPasswordFocused && {borderColor: colors.primary}}
          />
          <View style={{height: 30}} />

        </View>
          <CustomButton onPress={onSignIn} title={'Sign In'} />
          <ClickableText
          onPress={onSignUp}
          title={'Dont have an account? Sign Up'}
         style={{color:colors.primary}}

        />
        <ClickableText
          onPress={homeScreen}
          title={'Go back'}
         style={{color:colors.border}}

        />
      </View>
    </ScreenContainer>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
  },

  signin: {
    color: colors.border,
    textAlign: 'center',
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  inputWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});
