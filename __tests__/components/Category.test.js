import React from 'react';
import { render } from '@testing-library/react-native';
import Category from '../../src/components/Category';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Category component', () => {
  it('render props correctly', () => {
    const { getByText } = render(<Category name="Cocktail" />);

    getByText('Cocktail');
  });
});
