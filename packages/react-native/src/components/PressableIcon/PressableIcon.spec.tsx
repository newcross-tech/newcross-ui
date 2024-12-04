import React from 'react';
import { PressableProps } from 'react-native';
import { render, fireEvent, screen } from '@testing-library/react-native';
import PressableIcon from './PressableIcon';

describe('PressableIcon', () => {
  it('renders successfully', () => {
    // Arrange
    const onPress = jest.fn();
    const props: PressableProps = { onPress, testID: 'pressable-icon' };

    // Act
    render(<PressableIcon {...props}></PressableIcon>);

    // Assert
    expect(screen.getByTestId('pressable-icon')).toBeTruthy();
  });

  it('calls onPress handler', () => {
    // Arrange
    const onPress = jest.fn();
    const props: PressableProps = { onPress, testID: 'pressable-icon' };

    // Act
    render(<PressableIcon {...props}></PressableIcon>);

    fireEvent.press(screen.getByTestId('pressable-icon'));

    // Assert
    expect(onPress).toBeCalled();
  });
});
