import React from 'react';
import { render } from '@testing-library/react-native';
import Slider from './Slider';

describe('Slider Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props = {
      sliderValue: 50,
      onChangeValue: jest.fn(),
      maximumValue: 100,
      minimumValue: 0,
      disabled: false,
      testID: 'slider',
    };

    // Act
    const { getByTestId } = render(<Slider {...props} />);

    // Assert
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('renders successfully with disabled slider', () => {
    // Arrange
    const props = {
      sliderValue: 50,
      onChangeValue: jest.fn(),
      maximumValue: 100,
      minimumValue: 0,
      step: 5,
      disabled: true,
      testID: 'slider',
    };

    // Act
    const { getByTestId } = render(<Slider {...props} />);

    // Assert
    expect(getByTestId('slider')).toBeTruthy();
  });
});
