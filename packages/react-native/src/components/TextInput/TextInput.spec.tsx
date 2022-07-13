import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextInput, { TextInputProps } from './TextInput';

describe('TextInput Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      hasError: false,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-component')).toBeTruthy();
  });

  it('displays the placeholder successfuly', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      hasError: false,
      placeholder: 'this is placeholder text',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByPlaceholderText } = render(<TextInput {...props} />);

    // Assert
    expect(getByPlaceholderText(/this is placeholder text/i)).toBeTruthy();
  });

  it('show/hide password eye icon successfully when `password` type is selected and pressed', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'password',
      secureTextEntry: true,
      hasError: false,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('eye-icon')); // make password visiible
    fireEvent.press(getByTestId('eye-icon')); // hide password

    // Assert
    expect(getByTestId('eye-icon')).toBeTruthy();
  });

  it('similar to previous test but with a different textContentType - `newPassword` type is selected and eye icon is pressed', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'newPassword',
      secureTextEntry: true,
      hasError: false,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('eye-icon')); // make password visiible
    fireEvent.press(getByTestId('eye-icon')); // hide password

    // Assert
    expect(getByTestId('eye-icon')).toBeTruthy();
  });

  it('shows the validation check mark when isValid is true', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      hasError: false,
      isValid: true,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('validation-check')).toBeTruthy();
  });

  it('displays label successfuly', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      hasError: false,
      label: 'This is the label',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId, getByText } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('label')).toBeTruthy();
    expect(getByText(/This is the label/i)).toBeTruthy();
  });

  it('displays helper text sucessfully', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      hasError: false,
      helperText: 'this is helper text',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('message-text')).toBeTruthy();
  });

  it('displays error text sucessfully - hasError is true', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      hasError: true,
      errorText: 'this is helper text',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('message-text')).toBeTruthy();
  });

  it('renders a text input that is disabled when the disabled prop is passed', () => {
    // Arrange
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      hasError: false,
      disabled: true,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-component')).toBeTruthy();
  });

  it('focuses the text input when selected is true', () => {
    // Arrange
    const onFocus = jest.fn();
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      hasError: false,
      onFocus,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent(getByTestId('text-input-component'), 'onFocus');

    // Assert
    expect(getByTestId('text-input-component')).toBeTruthy();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('updates selected state to true when component is pressed', () => {
    // Arrange
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      hasError: false,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    getByTestId('text-input-component').props.onFocus();

    // Assert
    expect(getByTestId('text-input-component')).toBeTruthy();
  });
});
