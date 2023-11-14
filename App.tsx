import {StatusBar} from 'react-native';
import React from 'react';
import Navigations from './src/navigations/navigations';


const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <Navigations/>
    </>
  );
};

export default App;
