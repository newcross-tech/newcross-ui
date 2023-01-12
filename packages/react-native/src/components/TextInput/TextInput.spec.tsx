import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import TextInput, { TextInputProps } from './TextInput';

describe('TextInput Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
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
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('text-input-eye-icon')); // make password visible
    fireEvent.press(getByTestId('text-input-eye-icon')); // hide password

    // Assert
    expect(getByTestId('text-input-eye-icon')).toBeTruthy();
  });

  it('similar to previous test but with a different textContentType - `newPassword` type is selected and eye icon is pressed', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'newPassword',
      secureTextEntry: true,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('text-input-eye-icon')); // make password visiible
    fireEvent.press(getByTestId('text-input-eye-icon')); // hide password

    // Assert
    expect(getByTestId('text-input-eye-icon')).toBeTruthy();
  });

  it('shows the validation check mark when isValid is true', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      isValid: true,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-validation-check')).toBeTruthy();
  });

  it('displays label successfuly', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      label: 'This is the label',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId, getByText } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-label')).toBeTruthy();
    expect(getByText(/This is the label/i)).toBeTruthy();
  });

  it('displays helper text sucessfully', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      helperText: 'this is helper text',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-message-text')).toBeTruthy();
  });

  it('displays error text sucessfully - errorText is true', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      errorText: 'this is helper text',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-message-text')).toBeTruthy();
  });

  it('renders a text input that is disabled when the disabled prop is passed', () => {
    // Arrange
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
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
    const onBlur = jest.fn();
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      onFocus,
      onBlur,
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    act(() => {
      fireEvent(getByTestId('text-input-component'), 'onFocus');
      fireEvent(getByTestId('text-input-component'), 'onBlur');
    });

    // Assert
    expect(getByTestId('text-input-component')).toBeTruthy();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('updates selected state to true when component is pressed', () => {
    // Arrange
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      onChangeText: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent(getByTestId('text-input-component'), 'onFocus');
    fireEvent(getByTestId('text-input-component'), 'onBlur');

    // Assert
    expect(getByTestId('text-input-component')).toBeTruthy();
  });
});

describe('SearchBar Component', () => {
  it('displays text input as a search bar component when search prop is passed', () => {
    // Arrange
    const props: TextInputProps = {
      value: '',
      onChangeText: jest.fn(),
      search: true,
      onClosePress: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-search-icon')).toBeTruthy();
  });

  it('displays close icon when search bar value is not empty', () => {
    // Arrange
    const props: TextInputProps = {
      value: 'I am search for ...',
      onChangeText: jest.fn(),
      search: true,
      onClosePress: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);

    // Assert
    expect(getByTestId('text-input-search-close-icon')).toBeTruthy();
  });

  it('triggers an onPress when onClosePress is pressed', () => {
    // Arrange
    const onClosePress = jest.fn();
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'I am search for ...',
      onChangeText: jest.fn(),
      search: true,
      onClosePress,
    };

    // Act
    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('text-input-search-close-icon'));

    // Assert
    expect(onClosePress).toBeCalled();
  });
});
