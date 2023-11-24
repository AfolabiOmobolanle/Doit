import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../screens/signin';
import Signup from '../screens/signup';
import Landing from '../screens/landing';
import dashboard from '../screens/dashboard';
import Dashboard from '../screens/dashboard';

const Stack = createNativeStackNavigator();
const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="Signinpage"
          component={Signin}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Signupage"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LandingPage"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
