import React from 'react';
import { IconButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../../screens/Categories';
import SearchStack from '../SearchNavigator';
import DrinkStack from '../DrinkNavigator';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="CategoriesScreen">
    <Stack.Screen
      name="CategoriesScreen"
      options={({ navigation }) => ({
        title: 'Categories',
        headerRight: () => (
          <IconButton
            icon="magnify"
            onPress={() => navigation.navigate('SearchStack')}
          />
        ),
      })}
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
      name="SearchStack"
      options={{ title: 'Search drinks', headerShown: false }}
      component={SearchStack}
    />
  </Stack.Navigator>
);

export default HomeStack;
