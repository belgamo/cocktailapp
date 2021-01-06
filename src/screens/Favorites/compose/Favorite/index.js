import React from 'react';
import { List, Avatar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { removeFavorite } from '../../../../store/modules/favorites/actions';

const Favorite = ({ drink }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      right={(props) => (
        <IconButton
          {...props}
          icon="delete"
          size={30}
          onPress={() => dispatch(removeFavorite({ drinkId: drink.idDrink }))}
        />
      )}
      onPress={() =>
        navigation.navigate('DrinkDetails', {
          id: drink.idDrink,
          name: drink.strDrink,
        })
      }
    />
  );
};

export default Favorite;
