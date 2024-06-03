import React from 'react';
import { render } from '@testing-library/react-native';
import PhoneInput, { PhoneInputProps } from './PhoneInput';

describe('Phone Input Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: PhoneInputProps = {
      phoneInputSelected: {
        name: {
          en: 'United Kingdom',
        },
        dial_code: '+44',
        code: 'GB',
        flag: '🇬🇧',
        format: { minLength: 10, maxLength: 10 },
      },
      phoneNumber: '5646456456',
      setPhoneNumber: jest.fn(),
      handleDropDownSelect: jest.fn(),
      setIsPhoneNumberValid: jest.fn(),
      isPhoneNumberValid: false,
      label: 'Enter phone number',
    };

    // Act
    const { getByText, getByTestId } = render(<PhoneInput {...props} />);

    // Assert

    expect(getByText('Enter phone number')).toBeTruthy();
    expect(getByTestId(`phone-input-${props.phoneNumber}`)).toBeTruthy();
  });

  it('renders error text without numbers', () => {
    // Arrange
    const props: PhoneInputProps = {
      phoneInputSelected: {
        name: {
          en: 'United Kingdom',
        },
        dial_code: '+44',
        code: 'GB',
        flag: '🇬🇧',
        format: { minLength: 10, maxLength: 10 },
      },
      phoneNumber: 'A',
      setPhoneNumber: jest.fn(),
      handleDropDownSelect: jest.fn(),
      setIsPhoneNumberValid: jest.fn(),
      isPhoneNumberValid: false,
    };

    // Act
    const { getByText } = render(<PhoneInput {...props} />);

    // Assert

    expect(getByText('Only numbers are valid')).toBeTruthy();
  });

  it('renders error text with less numbers', () => {
    // Arrange
    const props: PhoneInputProps = {
      phoneInputSelected: {
        name: {
          en: 'United Kingdom',
        },
        dial_code: '+44',
        code: 'GB',
        flag: '🇬🇧',
        format: { minLength: 10, maxLength: 10 },
      },
      phoneNumber: '1',
      setPhoneNumber: jest.fn(),
      handleDropDownSelect: jest.fn(),
      setIsPhoneNumberValid: jest.fn(),
      isPhoneNumberValid: false,
    };

    // Act
    const { getByText } = render(<PhoneInput {...props} />);

    // Assert

    expect(getByText('Phone number needs a minimum length of 10')).toBeTruthy();
  });

  it('renders error text is empty', () => {
    // Arrange
    const props: PhoneInputProps = {
      phoneInputSelected: {
        name: {
          en: 'United Kingdom',
        },
        dial_code: '+44',
        code: 'GB',
        flag: '🇬🇧',
        format: { minLength: 10, maxLength: 10 },
      },
      phoneNumber: '',
      setPhoneNumber: jest.fn(),
      handleDropDownSelect: jest.fn(),
      setIsPhoneNumberValid: jest.fn(),
      isPhoneNumberValid: false,
    };

    // Act
    const { getByTestId } = render(<PhoneInput {...props} />);

    // Assert
    expect(getByTestId(`phone-input-${props.phoneNumber}`)).toBeTruthy();
    expect(() => getByTestId('message-text')).toThrow();
  });
});
