import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../../screens/Categories';
import DrinkStack from '../DrinkNavigator';

const Stack = createStackNavigator();

const Component = () => <></>;

const HomeStack = () => (
  <Stack.Navigator initialRouteName="CategoriesScreen">
    <Stack.Screen
      name="CategoriesScreen"
      options={{ title: 'Categorias' }}
      component={CategoriesScreen}
    />
    <Stack.Screen
      name="DrinkStack"
      options={({ route }) => ({
        title: route.params.name,
        headerShown: false,
      })}
      component={DrinkStack}
    />
    <Stack.Screen
      name="SearchScreen"
      options={{ title: 'Pesquisar' }}
      component={Component}
    />
  </Stack.Navigator>
);

export default HomeStack;
