import {Alert, StyleSheet,  View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenContainer from '../components/screen-container';
import Logo from '../components/logo';
import {colors} from '../constants/app.constants';
import TextBox from '../components/textbox';
import CustomButton from '../components/custom-button';
import ClickableText from '../components/clickable-text';
import {Formik} from 'formik';
import * as yup from 'yup';
import { getTodoByOwnerId, getTodos } from '../Api/api';
import { getUser, getUserById } from '../Api/auth';
import { getCategory } from '../Api/category';




const validationSchema = yup.object().shape({
  userName: yup.string().required('User name is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required'),
  password: yup
    .string()
    .required('Password id required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

interface formInput {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = ({navigation}) => {
  const [isSecurePassword, setIsSecurePassword] = useState(false);

  const intialValues: formInput = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

 useEffect(()  => {
  // console.log('results',getTodos())
  console.log('owner',getTodoByOwnerId('b74d697b-1089-4462-a13c-92e8b442f584'))
  // console.log('user',getUser())
  // // console.log('details',getUserById('3'))
  // console.log('category',getCategory())


 }, [])
 
  const iconPressed = () => {
    setIsSecurePassword(!isSecurePassword);
  };

  const onSignUp = () => {
    Alert.alert('Registered successfully');
  };

  const onSignIn = (form: formInput) => {
    navigation.navigate('Signinpage');

    const onLoad = {
        password: form.password,
        email: form.email
    }
  };
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <Logo />

        <Formik
          initialValues={intialValues}
          validationSchema={validationSchema}
          onSubmit={onSignUp}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <TextBox
                placeholder={'Username'}
                onChangedText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.userName}
                textStyle={{
                  borderColor: errors.email ? colors.red : colors.primary,
                }}
              />
              <TextBox
                placeholder={'Username'}
                onChangedText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.userName}
                textStyle={{
                  borderColor: errors.email ? colors.red : colors.primary,
                }}
              />
              <TextBox
                placeholder={'Username'}
                onChangedText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.userName}
                textStyle={{
                  borderColor: errors.email ? colors.red : colors.primary,
                }}
              />
              <TextBox
                placeholder={'Email'}
                onChangedText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                textStyle={{
                  borderColor: errors.email ? colors.red : colors.primary,
                }}
              />
              <TextBox
                onIconPressed={iconPressed}
                placeholder={'Password'}
                onChangedText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                textSecure={isSecurePassword}
                toggleIcon={
                  isSecurePassword ? 'eye-slash' : 'eye'
                }
                textStyle={{
                  borderColor: errors.password ? colors.red : colors.primary,
                }}
              />
              <CustomButton onPress={handleSubmit} title={'Sign Up'} />

              <ClickableText
                onPress={onSignIn}
                title={'Go back to sign in'}
                style={{color: colors.primary}}
              />
            </>
          )}
        </Formik>
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

