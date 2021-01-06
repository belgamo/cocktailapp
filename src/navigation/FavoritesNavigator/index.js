import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesScreen from '../../screens/Favorites';
import DrinkDetailsScreen from '../../screens/Categories/compose/DrinkDetails';

const Stack = createStackNavigator();

const FavoritesStack = () => (
  <Stack.Navigator initialRouteName="FavoritesScreen">
    <Stack.Screen
      name="FavoritesScreen"
      options={{ title: 'Favorites' }}
      component={FavoritesScreen}
    />
    <Stack.Screen
      name="DrinkDetails"
      options={({ route }) => ({ title: route.params.name })}
      component={DrinkDetailsScreen}
    />
  </Stack.Navigator>
);

export default FavoritesStack;
