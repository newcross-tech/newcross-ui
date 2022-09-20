import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ToggleButton, { ToggleButtonProps } from './ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';

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
      leftIcon: <FontAwesomeIcon icon={faCalendarDays} />,
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
    fireEvent.press(getByTestId('test-selected'));

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
  it(`renders successfully when left icon prop is given`, () => {
    // Arrange
    const props: ToggleButtonProps = {
      children: 'Sort',
      selected: false,
      testID: 'test',
      leftIcon: <FontAwesomeIcon icon={faCalendarDays} />,
    };

    // Act
    const { getByTestId } = render(<ToggleButton {...props} />);

    // Assert
    expect(getByTestId('toggle-button-left-icon')).toBeTruthy();
  });
  it(`renders successfully when right icon prop is given`, () => {
    // Arrange
    const props: ToggleButtonProps = {
      children: 'Sort',
      selected: false,
      testID: 'test',
      rightIcon: <FontAwesomeIcon icon={faCalendarDays} />,
    };

    // Act
    const { getByTestId } = render(<ToggleButton {...props} />);

    // Assert
    expect(getByTestId('toggle-button-right-icon')).toBeTruthy();
  });
});
