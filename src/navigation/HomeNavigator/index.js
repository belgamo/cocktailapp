import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/Home';

const Stack = createStackNavigator();

const Component = () => <></>;

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      options={{ title: 'Categorias' }}
      component={HomeScreen}
    />
    <Stack.Screen
      name="SearchScreen"
      options={{ title: 'Pesquisar' }}
      component={Component}
    />
  </Stack.Navigator>
);

export default HomeStack;
