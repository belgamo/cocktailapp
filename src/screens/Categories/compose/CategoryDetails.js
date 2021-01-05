import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import useFetch from 'use-http';
import { useRoute } from '@react-navigation/native';

import Container from '../../../components/Container';
import Error from '../../../components/Error';
import Drink from '../../../components/Drink';

import { normalizeCategoryName } from '../../../utils/normalizers';

const CategoryDetails = () => {
  const route = useRoute();
  const { data = [], loading, error } = useFetch(
    `/filter.php?c=${normalizeCategoryName(route.params.name)}`,
    {},
    []
  );

  if (error) return <Error message="Não foi possível exibir os drinks" />;

  if (loading)
    return (
      <Container>
        <ActivityIndicator animating />
      </Container>
    );

  return (
    <FlatList
      data={data.drinks}
      renderItem={(item) => <Drink drink={item.item} />}
      keyExtractor={(item, index) => index}
    />
  );
};

export default CategoryDetails;
