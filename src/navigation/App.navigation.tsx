import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';
import { HomeStack } from './Home.navigation';

const Stack = createStackNavigator();

export const AppNavigator = (props: any): React.ReactElement => (
    <Stack.Navigator {...props} headerMode='none'>
    <Stack.Screen name={AppRoute.AUTH} component={HomeStack}/>
    <Stack.Screen name={AppRoute.HOME} component={HomeStack}/>
  </Stack.Navigator>
);