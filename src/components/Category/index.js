import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Name, StyledSurface } from './styles';

const Category = ({ name }) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('CategoryDetails', { name })}>
      <StyledSurface style={{ flex: 1, width: '100%' }}>
        <Name>{name}</Name>
      </StyledSurface>
    </Container>
  );
};

export default Category;
