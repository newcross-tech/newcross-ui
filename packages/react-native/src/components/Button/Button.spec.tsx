import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button, { ButtonProps } from './Button';

describe('Button Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: ButtonProps = { children: 'Primary', onPress: jest.fn() };

    // Act
    const { getByRole, getByText } = render(<Button {...props} />);

    // Assert
    expect(getByRole('button')).toBeTruthy();
    expect(getByText(/primary/i)).toBeTruthy();
  });

  it('triggers onPress successfully', () => {
    // Arrange
    const onPress = jest.fn();
    const props: ButtonProps = { children: 'Primary', onPress };

    // Act
    const { getByRole } = render(<Button {...props} />);

    const button = getByRole('button');

    fireEvent.press(button);

    // Assert
    expect(onPress).toBeCalled();
  });

  it(`doesn't triggers onPress when button is disabled`, () => {
    // Arrange
    const onPress = jest.fn();
    const props: ButtonProps = { children: 'Primary', disabled: true, onPress };

    // Act
    const { getByRole } = render(<Button {...props} />);

    const button = getByRole('button');

    fireEvent.press(button);

    // Assert
    expect(onPress).not.toBeCalled();
  });
});
