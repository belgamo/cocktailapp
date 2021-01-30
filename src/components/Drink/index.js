import React from 'react';
import { List, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Drink = ({ drinkObject }) => {
  const navigation = useNavigation();

  return (
    <List.Item
      style={{ backgroundColor: '#fff' }}
      title={drinkObject.strDrink}
      left={(props) => (
        <Avatar.Image
          {...props}
          size={50}
          source={{ uri: drinkObject.strDrinkThumb }}
        />
      )}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      onPress={() =>
        navigation.navigate('DrinkDetails', {
          id: drinkObject.idDrink,
          name: drinkObject.strDrink,
        })
      }
    />
  );
};

export default Drink;
