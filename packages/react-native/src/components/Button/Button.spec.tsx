import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonProps } from './Button.types';
import Button from './Button';

describe('Button Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: ButtonProps = { text: 'Primary', onPress: jest.fn() };

    // Act
    const { getByRole, getByText } = render(<Button {...props} />);

    // Assert
    expect(getByRole('button')).toBeTruthy();
    expect(getByText(/primary/i)).toBeTruthy();
  });

  it('triggers onPress successfully', () => {
    // Arrange
    const onPress = jest.fn();
    const props: ButtonProps = { text: 'Primary', onPress };

    // Act
    const { getByRole } = render(<Button {...props} />);

    const button = getByRole('button');

    fireEvent.press(button);

    // Assert
    expect(onPress).toBeCalled();
  });
});
