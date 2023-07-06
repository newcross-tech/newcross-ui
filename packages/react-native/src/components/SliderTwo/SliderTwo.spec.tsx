import React from 'react';
import { render } from '@testing-library/react-native';
import SliderTwo from './SliderTwo';

describe('SliderTwo Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props = {
      sliderValue: 50,
      onChangeValue: jest.fn(),
      maximumValue: 100,
      minimumValue: 0,
      disabled: false,
      testID: 'slider-two',
    };

    // Act
    const { getByTestId } = render(<SliderTwo {...props} />);

    // Assert
    expect(getByTestId('slider-two')).toBeTruthy();
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
      testID: 'slider-two',
    };

    // Act
    const { getByTestId } = render(<SliderTwo {...props} />);

    // Assert
    expect(getByTestId('slider-two')).toBeTruthy();
  });
});
