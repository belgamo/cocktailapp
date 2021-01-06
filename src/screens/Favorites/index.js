import React from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../../components/Container';
import Favorite from './compose/Favorite';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);

  if (!favorites.length)
    return (
      <Container>
        <MaterialCommunityIcons name="heart-broken" size={30} color="gray" />
        <Text>No favorite drinks!</Text>
      </Container>
    );

  return (
    <FlatList
      data={favorites}
      renderItem={(item) => <Favorite drink={item.item} />}
      keyExtractor={(item, index) => index}
    />
  );
};

export default Favorites;
