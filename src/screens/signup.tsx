import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../components/screen-container';
import Logo from '../components/logo';
import {colors} from '../constants/app.constants';
import TextBox from '../components/textbox';
import CustomButton from '../components/custom-button';
import ClickableText from '../components/clickable-text';

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isFirstnameFocused, setIsFirstnameFocused] = useState(false);
  const [isLastnameFocused, setIsLastnameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);






 const onSignUp = ()=>{
  Alert.alert('Registered successfully')
 };

const onSignIn = ()=>{
  navigation.navigate('Signinpage')
};
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <Logo />
        <View style={styles.container}>
        <TextBox
            placeholder={'Username'}
            secureTextEntry={false}
            onChangeText={(value: string) => setUsername(value)}
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(false)}
            style={isUsernameFocused && {borderColor: colors.primary}}
          />
          <TextBox
            placeholder={'First Name'}
            secureTextEntry={false}
            onChangeText={(value: string) => setFirstname(value)}
            onFocus={() => setIsFirstnameFocused(true)}
            onBlur={() => setIsFirstnameFocused(false)}
            style={isFirstnameFocused && {borderColor: colors.primary}}
          />
          <TextBox
            placeholder={'Last Name'}
            secureTextEntry={false}
            onChangeText={(value: string) => setLastname(value)}
            onFocus={() => setIsLastnameFocused(true)}
            onBlur={() => setIsLastnameFocused(false)}
            style={isLastnameFocused && {borderColor: colors.primary}}
          />
          <TextBox
            placeholder={'Email'}
            secureTextEntry={false}
            onChangeText={(value: string) => setEmail(value)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            style={isEmailFocused && {borderColor: colors.primary}}
          />
          <TextBox
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={(value: string) => setPassword(value)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            style={isPasswordFocused && {borderColor: colors.primary}}
          />

        </View>
          <CustomButton 
          onPress={onSignUp} 
          title={'Sign Up'} />

        <ClickableText 
        onPress={onSignIn}
         title={'Go back to sign in'}
         style={{color:colors.primary}}
         />
      </View>
    </ScreenContainer>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.offwhite,
  },

});
