import React, { useState } from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import { FlatList } from 'react-native';
import useFetch from 'use-http';

import Container from '../../components/Container';
import Drink from '../../components/Drink';
import { StyledSearchBar } from './styles';

const Search = () => {
  const { data = [], loading, get } = useFetch('/search.php');
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => {
    const lowercase = query.toLowerCase();

    setSearchQuery(lowercase);
    get(`?s=${encodeURI(lowercase)}`);
  };

  const render = () => {
    if (loading)
      return (
        <Container>
          <ActivityIndicator animating />
        </Container>
      );

    if (!searchQuery)
      return (
        <Container>
          <Text>Type something...</Text>
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

  return (
    <>
      <StyledSearchBar
        placeholder="Search cocktail by name"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {render()}
    </>
  );
};

export default Search;
