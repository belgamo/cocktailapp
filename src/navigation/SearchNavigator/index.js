import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../../screens/Search';
import DrinkDetailsScreen from '../../screens/Categories/compose/DrinkDetails';

const Stack = createStackNavigator();

const SearchStack = () => (
  <Stack.Navigator initialRouteName="FavoritesScreen">
    <Stack.Screen
      name="SearchScreen"
      options={{ title: 'Search drinks' }}
      component={SearchScreen}
    />
    <Stack.Screen
      name="DrinkDetails"
      options={({ route }) => ({ title: route.params.name })}
      component={DrinkDetailsScreen}
    />
  </Stack.Navigator>
);

export default SearchStack;
