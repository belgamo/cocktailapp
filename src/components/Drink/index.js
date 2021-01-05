import React from 'react';
import { List, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Drink = ({ drink }) => {
  const navigation = useNavigation();

  return (
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
      onPress={() =>
        navigation.navigate('DrinkDetails', {
          id: drink.idDrink,
          name: drink.strDrink,
        })
      }
    />
  );
};

export default Drink;
