import React from 'react';
import { render } from '@testing-library/react-native';
import Error from '../../src/components/Error';

describe('Error component', () => {
  it('render props correctly', () => {
    const { getByText } = render(<Error message="There was an error!" />);

    getByText('There was an error!');
  });
});
