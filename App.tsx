import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import Main from './src/Main';
 
export default () => (
  <AppearanceProvider>
    <Main />
  </AppearanceProvider>
);