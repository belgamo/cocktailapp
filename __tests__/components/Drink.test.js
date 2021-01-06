import React from 'react';
import { render } from '@testing-library/react-native';
import Drink from '../../src/components/Drink';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Drink component', () => {
  it('render props correctly', () => {
    const drink = {
      strDrink: 'Cocktail',
      strDrinkThumb: 'image://',
    };

    const { getByText } = render(<Drink drink={drink} />);

    getByText('Cocktail');

    // to do: search a way to check if image
    // source contains strDrinkThumb address
  });
});
