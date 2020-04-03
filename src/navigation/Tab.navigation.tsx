import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import HomeScreen from '../screens/Home.screen';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = (): React.ReactElement => {
  return (
    <React.Fragment>

    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
    </React.Fragment>
  );
}