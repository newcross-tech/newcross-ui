import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Slider from './Slider';

describe('Slider Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props = {
      value: 50,
      onValueChange: jest.fn(),
      maximumValue: 100,
      minimumValue: 0,
      disabled: false,
      testID: 'slider',
    };

    // Act
    render(<Slider {...props} animationType="spring" />);

    // Assert
    expect(screen.getByTestId('slider')).toBeTruthy();
  });

  it('renders successfully with disabled slider', () => {
    // Arrange
    const props = {
      animationType: 'spring',
      value: 50,
      onValueChange: jest.fn(),
      maximumValue: 100,
      minimumValue: 0,
      step: 5,
      disabled: true,
      testID: 'slider',
    };

    // Act
    render(<Slider {...props} animationType="spring" />);

    // Assert
    expect(screen.getByTestId('slider')).toBeTruthy();
  });
});
