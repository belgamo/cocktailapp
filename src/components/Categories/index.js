import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import useFetch from 'use-http';

import Container from '../Container';
import Category from '../Category';
import Error from '../Error';

const Categories = () => {
  const { data = [], loading, error } = useFetch('/list.php?c=list', {}, []);

  if (error) return <Error message="Não foi possível exibir as categorias" />;

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
