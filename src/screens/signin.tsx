import {StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import assets, {colors} from '../constants/app.constants';
import ScreenContainer from '../components/screen-container';
import TextBox from '../components/textbox';
import CustomButton from '../components/custom-button';
import ClickableText from '../components/clickable-text';
import Logo from '../components/logo';
import { Formik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../Api/auth';

const validationSchema = yup.object().shape({
  email: yup.string().required('email is required'),
  password: yup.string().required('password is required')
})

interface formInput{
  email: string;
  password:string;
}

const Signin = ({navigation}) => {
  
  const [isSecurePassword,  setIsSecurePassword] = useState(false);

  const initialValues : formInput ={
    email:'',
    password:''
  }
  useEffect(()=>{
    console.log('user logged in', loginUser({email:'email',password:'password'}));
  },[])

  const onSignIn = async (values: any) => {

    const response = await loginUser(values)
    console.log(response)

    // Alert.alert('Signed In successsfully');
    console.log(values)

  };
  const homeScreen = ()=>{
    navigation.navigate('LandingPage')
  }
  const onSignUp = () => {
    navigation.navigate('Signupage');
  };

  const iconPressed = () =>{
    setIsSecurePassword(!isSecurePassword);
  }




  return (
    <ScreenContainer>
      <View style={styles.container}>

        <Logo />
        <Text style={styles.signin}>Sign in</Text>

        <View style={{height: 20}} />

        <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSignIn}
    >
      {({handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors}) =>(
 <>
              <TextBox
              placeholder={'Email'}
              onChangedText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              textStyle={{ borderColor: errors.email ? colors.red : colors.primary }} 
              />
              <View style={{ height: 20 }} />

              <TextBox
            onIconPressed={iconPressed}
            placeholder={'Password'}
            onChangedText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            textSecure={isSecurePassword}
            toggleIcon={isSecurePassword ? 'eye-slash'  : 'eye'}
            textStyle={{ borderColor: errors.password ? colors.red : colors.primary }}  />
              <View style={{ height: 30 }} />

            <CustomButton onPress={handleSubmit} title={'Sign In'} /><ClickableText
                onPress={onSignUp}
                title={'Dont have an account? Sign Up'}
                style={{ color: colors.primary }} /><ClickableText
                onPress={homeScreen}
                title={'Go back'}
                style={{ color: colors.border }} />
        </>

      )

      }


       
        </Formik>
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
