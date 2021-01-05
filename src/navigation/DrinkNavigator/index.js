import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrinkListScreen from '../../screens/Categories/compose/DrinkList';
import DrinkDetailsScreen from '../../screens/Categories/compose/DrinkDetails';

const Stack = createStackNavigator();

const DrinkStack = (props) => {
  const { name: categoryName } = props.route.params;

  return (
    <Stack.Navigator initialRouteName="DrinkList">
      <Stack.Screen
        name="DrinkList"
        options={{ title: categoryName }}
        initialParams={{ name: categoryName }}
        component={DrinkListScreen}
      />
      <Stack.Screen
        name="DrinkDetails"
        options={({ route }) => ({ title: route.params.name })}
        component={DrinkDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default DrinkStack;
