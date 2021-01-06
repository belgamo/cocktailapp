import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import useFetch from 'use-http';

import Container from '../../components/Container';
import Category from '../../components/Category';
import Error from '../../components/Error';

const Categories = () => {
  const { data = [], loading, error } = useFetch('/list.php?c=list', {}, []);

  if (error) return <Error message="There was an error on fetch categories!" />;

  if (loading)
    return (
      <Container>
        <ActivityIndicator animating />
      </Container>
    );

  return (
    <FlatList
      data={data.drinks}
      renderItem={(item) => <Category name={item.item.strCategory} />}
      keyExtractor={(item, index) => index}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      ListEmptyComponent={() => (
        <Container>
          <Text>Nenhuma categoria disponível!</Text>
        </Container>
      )}
      centerContent
    />
  );
};

export default Categories;
