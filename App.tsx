import React, { useState } from 'react';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { AppNavigator } from './src/navigation/App.navigation';
import { AppRoute } from './src/navigation/AppRoutes';

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors },
};

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: { ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors },
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; 
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme} >
        <AppNavigator initialRouteName={AppRoute.HOME} />
      </NavigationContainer>
    </PaperProvider>
  );
}


