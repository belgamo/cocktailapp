import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../../screens/Categories';
import CategoriesDetailsScreen from '../../screens/Categories/compose/CategoryDetails';

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
      name="CategoryDetails"
      options={({ route }) => ({ title: route.params.name })}
      component={CategoriesDetailsScreen}
    />
    <Stack.Screen
      name="SearchScreen"
      options={{ title: 'Pesquisar' }}
      component={Component}
    />
  </Stack.Navigator>
);

export default HomeStack;
