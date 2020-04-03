import React, { useState, useEffect } from 'react';
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
import { AppNavigator } from './navigation/App.navigation';
import { AppRoute } from './navigation/AppRoutes';
import { Appearance, useColorScheme } from 'react-native-appearance';

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

Appearance.getColorScheme();

export default function Main() {
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  useEffect(() => {
    changeTheme()
  }, [])

  function changeTheme() {
    if (colorScheme === 'dark') {
        setIsDarkTheme(true)
      } else {
        setIsDarkTheme(false)
      }
  }
  
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme} >
          <AppNavigator initialRouteName={AppRoute.HOME} />
        </NavigationContainer>
      </PaperProvider>
  );
}


