import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Dropdown, { DropdownProps } from './Dropdown';

describe('Dropdown Component', () => {
  it('renders successfully with placeholder', () => {
    // Arrange
    const props: DropdownProps = {
      label: 'Dropdown',
      placeholder: 'Click to open dropdown',
      testID: '1',
    };

    // Act
    const { getByText } = render(<Dropdown {...props} />);

    // Assert

    expect(getByText('Click to open dropdown')).toBeTruthy();
  });

  it('renders successfully with selected value', () => {
    // Arrange
    const props: DropdownProps = {
      label: 'Dropdown',
      selectedValue: 'Option 1',
      testID: '1',
    };

    // Act
    const { getByText } = render(<Dropdown {...props} />);

    // Assert
    expect(getByText('Option 1')).toBeTruthy();
  });

  it('renders successfully with error text', () => {
    // Arrange
    const props: DropdownProps = {
      label: 'Dropdown',
      errorText: 'Error',
      testID: '1',
    };

    // Act
    const { getByText } = render(<Dropdown {...props} />);

    // Assert
    expect(getByText('Error')).toBeTruthy();
  });

  it('renders successfully as disabled', () => {
    // Arrange
    const props: DropdownProps = {
      label: 'Dropdown',
      disabled: true,
      testID: '1',
    };

    // Act
    const { getByTestId } = render(<Dropdown {...props} />);

    // Assert
    expect(getByTestId(/dropdown-label-1/i)).toBeTruthy();
    expect(getByTestId(/dropdown-pressable-1/i)).toBeTruthy();
    expect(getByTestId(/dropdown-placeholder-1/i)).toBeTruthy();
  });
  it('triggers onPress successfully', () => {
    // Arrange

    const onDropdownPress = jest.fn();

    const props: DropdownProps = {
      placeholder: 'Dropdown',
      testID: '1',
      onPress: onDropdownPress,
    };

    // Act
    const { getByTestId } = render(<Dropdown {...props} />);
    fireEvent.press(getByTestId('dropdown-pressable-1'));

    // Assert
    expect(onDropdownPress).toHaveBeenCalled();
  });
  it('does not triggers onPress when disabled is true', () => {
    // Arrange

    const onDropdownPress = jest.fn();

    const props: DropdownProps = {
      placeholder: 'Dropdown',
      testID: '1',
      onPress: onDropdownPress,
      disabled: true,
    };

    // Act
    const { getByTestId } = render(<Dropdown {...props} />);
    fireEvent.press(getByTestId('dropdown-pressable-1'));

    // Assert
    expect(onDropdownPress).not.toHaveBeenCalled();
  });
});
