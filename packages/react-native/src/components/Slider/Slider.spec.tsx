import React from 'react';
import { render } from '@testing-library/react-native';
import Slider from './Slider';

describe('Slider Component', () => {
  it('renders successfully', () => {
    // Act
    const { queryByTestId } = render(<Slider />);

    // Assert
    expect(queryByTestId('slider')).toBeTruthy();
  });
});
