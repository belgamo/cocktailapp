import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from '../HomeNavigator';

const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="glass-cocktail"
            size={size}
            color={color}
          />
        ),
      }}
      component={HomeStack}
    />
    <Tab.Screen
      name="Favorites"
      options={{
        title: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" size={size} color={color} />
        ),
      }}
      component={HomeStack}
    />
  </Tab.Navigator>
);

export default AppTabs;
