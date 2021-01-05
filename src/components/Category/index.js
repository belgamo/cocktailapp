import React from 'react';

import { Container, Name, StyledSurface } from './styles';

const Category = ({ name }) => (
  <Container onPress={console.log}>
    <StyledSurface style={{ flex: 1, width: '100%' }}>
      <Name>{name}</Name>
    </StyledSurface>
  </Container>
);

export default Category;
