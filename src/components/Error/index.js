import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../Container';

const Error = ({ message }) => (
  <Container>
    <MaterialCommunityIcons name="exclamation-thick" size={30} />
    <Text>{message}</Text>
  </Container>
);

export default Error;
