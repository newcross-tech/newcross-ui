import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import TextInput, { TextInputProps } from './TextInput';

describe('TextInput Component', () => {
  it('renders successfully', () => {
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-component')).toBeTruthy();
  });

  it('displays the placeholder successfully', () => {
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      placeholder: 'this is placeholder text',
      onChangeText: jest.fn(),
    };

    const { getByPlaceholderText } = render(<TextInput {...props} />);

    expect(getByPlaceholderText(/this is placeholder text/i)).toBeTruthy();
  });

  it('shows/hides password eye icon successfully when `password` type is selected and pressed', () => {
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'password',
      secureTextEntry: true,
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('text-input-eye-icon')); // make password visible
    fireEvent.press(getByTestId('text-input-eye-icon')); // hide password

    expect(getByTestId('text-input-eye-icon')).toBeTruthy();
  });

  it('similar to previous test but with a different textContentType - `newPassword` type is selected and eye icon is pressed', () => {
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'newPassword',
      secureTextEntry: true,
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('text-input-eye-icon')); // make password visible
    fireEvent.press(getByTestId('text-input-eye-icon')); // hide password

    expect(getByTestId('text-input-eye-icon')).toBeTruthy();
  });

  it('shows the validation check mark when isValid is true', () => {
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      isValid: true,
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-validation-check')).toBeTruthy();
  });

  it('displays label successfully', () => {
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      label: 'This is the label',
      onChangeText: jest.fn(),
    };

    const { getByTestId, getByText } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-label')).toBeTruthy();
    expect(getByText(/This is the label/i)).toBeTruthy();
  });

  it('displays helper text successfully', () => {
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      helperText: 'this is helper text',
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-message-text')).toBeTruthy();
  });

  it('displays error text successfully - errorText is true', () => {
    const props: TextInputProps = {
      value: 'test',
      textContentType: 'name',
      errorText: 'this is error text',
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-message-text')).toBeTruthy();
  });

  it('renders a text input that is disabled when the disabled prop is passed', () => {
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      disabled: true,
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-component')).toBeTruthy();
  });

  it('focuses the text input when selected is true', () => {
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

    const { getByTestId } = render(<TextInput {...props} />);
    act(() => {
      fireEvent(getByTestId('text-input-component'), 'onFocus');
      fireEvent(getByTestId('text-input-component'), 'onBlur');
    });

    expect(getByTestId('text-input-component')).toBeTruthy();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('updates selected state to true when component is pressed', () => {
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'name',
      onChangeText: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent(getByTestId('text-input-component'), 'onFocus');
    fireEvent(getByTestId('text-input-component'), 'onBlur');

    expect(getByTestId('text-input-component')).toBeTruthy();
  });

  it('renders multiline text input and displays character count correctly', () => {
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'none',
      multiline: true,
      onChangeText: jest.fn(),
    };

    const { getByTestId, getByText } = render(<TextInput {...props} />);
    const textInput = getByTestId('text-input-component');

    // Simulate text input change
    fireEvent.changeText(textInput, 'test input with multiple lines');

    expect(getByTestId('text-input-component')).toBeTruthy();
    expect(getByText('4/400')).toBeTruthy();
  });

  it('does not display character count when multiline is false', () => {
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'test',
      textContentType: 'none',
      multiline: false,
      onChangeText: jest.fn(),
    };

    const { getByTestId, queryByTestId } = render(<TextInput {...props} />);
    const textInput = getByTestId('text-input-component');

    // Simulate text input change
    fireEvent.changeText(textInput, 'test input');

    expect(getByTestId('text-input-component')).toBeTruthy();
    expect(queryByTestId('text-input-message-size')).toBeNull();
  });
});

describe('SearchBar Component', () => {
  it('displays text input as a search bar component when search prop is passed', () => {
    const props: TextInputProps = {
      value: '',
      onChangeText: jest.fn(),
      search: true,
      onClosePress: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-search-icon')).toBeTruthy();
  });

  it('displays close icon when search bar value is not empty', () => {
    const props: TextInputProps = {
      value: 'I am search for ...',
      onChangeText: jest.fn(),
      search: true,
      onClosePress: jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);

    expect(getByTestId('text-input-search-close-icon')).toBeTruthy();
  });

  it('triggers an onPress when onClosePress is pressed', () => {
    const onClosePress = jest.fn();
    const props: TextInputProps = {
      testID: 'text-input-component',
      value: 'I am search for ...',
      onChangeText: jest.fn(),
      search: true,
      onClosePress,
    };

    const { getByTestId } = render(<TextInput {...props} />);
    fireEvent.press(getByTestId('text-input-search-close-icon'));

    expect(onClosePress).toBeCalled();
  });
});
