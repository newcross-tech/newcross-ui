import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ToggleButton, { ToggleButtonProps } from './ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons';

describe('Toggle Button Component', () => {
  it('renders sucessfully', () => {
    // Arrange
    const props: ToggleButtonProps = {
      children: 'Sort',
      onPress: jest.fn(),
      selected: false,
      testID: 'test',
    };

    // Act
    const { getByTestId, getByText } = render(<ToggleButton {...props} />);

    // Assert
    expect(getByTestId('test')).toBeTruthy();
    expect(getByText(/sort/i)).toBeTruthy();
  });

  it('renders successfully when icon prop is given', () => {
    // Arrange
    const props: ToggleButtonProps = {
      children: 'Sort',
      onPress: jest.fn(),
      selected: false,
      icon: <FontAwesomeIcon icon={faCalendarDays} />,
      testID: 'test',
    };

    // Act
    const { getByTestId } = render(<ToggleButton {...props} />);

    // Assert
    expect(getByTestId('test')).toBeTruthy();
  });

  it('triggers onPress successfully when selected is false', () => {
    // Arrange
    const onPress = jest.fn();
    const props: ToggleButtonProps = {
      children: 'Sort',
      onPress: onPress,
      selected: false,
      testID: 'test',
    };

    // Act
    const { getByTestId } = render(<ToggleButton {...props} />);
    fireEvent.press(getByTestId('test'));

    // Assert
    expect(onPress).toHaveBeenCalled();
  });

  it('triggers onPress successfully when selected is true', () => {
    // Arrange
    const onPress = jest.fn();
    const props: ToggleButtonProps = {
      children: 'Sort',
      onPress: onPress,
      selected: true,
      testID: 'test',
    };

    // Act
    const { getByTestId } = render(<ToggleButton {...props} />);
    fireEvent.press(getByTestId('test'));

    // Assert
    expect(onPress).toHaveBeenCalled();
  });

  it('does not trigger any event when onPress prop is not provided', () => {
    // Arrange
    const onPress = jest.fn();
    const props: ToggleButtonProps = {
      children: 'Sort',
      selected: false,
      testID: 'test',
    };

    // Act
    const { getByTestId } = render(<ToggleButton {...props} />);
    fireEvent.press(getByTestId('test'));

    // Assert
    expect(onPress).not.toHaveBeenCalled();
  });
});
