import React from 'react';
import { List, Avatar } from 'react-native-paper';

const Drink = ({ drink }) => (
  <List.Item
    style={{ backgroundColor: '#fff' }}
    title={drink.strDrink}
    left={(props) => (
      <Avatar.Image
        {...props}
        size={50}
        source={{ uri: drink.strDrinkThumb }}
      />
    )}
    right={(props) => <List.Icon {...props} icon="chevron-right" />}
  />
);

export default Drink;
