import React, { useEffect, useState } from 'react';
import { TextStyle, View } from 'react-native';
import Dropdown from '../Dropdown';
import TextInput from '../TextInput';
import Typography, { TypographyVariant } from '../Typography';
import phoneInputStyle from './PhoneInput.styles';
import { isMinLengthValid, isNotNumber } from './utils';

export type phoneInputSelectedType = {
  name: {
    en: string;
  };
  dial_code: string;
  code: string;
  flag: string;
  format: { maxLength: number; minLength: number };
};

export type PhoneInputProps = {
  /**
   * Controls bottom sheet opening
   */
  handleDropDownSelect?: VoidFunction;
  /**
   * Selected country data
   */
  phoneInputSelected: phoneInputSelectedType;
  /**
   * Phone number input
   */
  phoneNumber: string;
  /**
   * Phone number input
   */
  setPhoneNumber: (newState: string) => void;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * To set if phone number is valid or not
   */
  setIsPhoneNumberValid: (newState: boolean) => void;
  /**
   * is Phone number valid
   */
  isPhoneNumberValid: boolean;
  /**
   * TODO: Allow user to set default country awaiting bottomSheet hooks
   */
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Style for the input
   */
  style?: TextStyle;
};

const PhoneInput = ({
  // TODO: On refactor add defaultCountry prop
  setPhoneNumber,
  phoneNumber,
  setIsPhoneNumberValid,
  isPhoneNumberValid,
  handleDropDownSelect,
  phoneInputSelected,
  testID = 'phone-input',
  label,
  style,
}: PhoneInputProps) => {
  const [errorText, setErrorText] = useState<string>('');

  const validateInput = (numberToValidate: string) => {
    if (!numberToValidate) {
      setErrorText('');
    } else if (isNotNumber(numberToValidate)) {
      setErrorText('Only numbers are valid');
    } else if (
      isMinLengthValid(numberToValidate, phoneInputSelected.format.minLength)
    ) {
      setErrorText(
        `Phone number needs a minimum length of ${phoneInputSelected.format.minLength} `
      );
    } else {
      setErrorText('');
    }
  };

  useEffect(() => {
    validateInput(phoneNumber);
  }, [phoneNumber]);

  useEffect(() => {
    phoneNumber && setIsPhoneNumberValid(!errorText);
  }, [errorText]);

  const styles = phoneInputStyle();

  return (
    <TextInput
      isValid={isPhoneNumberValid}
      value={phoneNumber}
      textContentType="telephoneNumber"
      label={label}
      onChangeText={(phoneInput) => setPhoneNumber(phoneInput)}
      maxLength={phoneInputSelected.format.maxLength}
      keyboardType="phone-pad"
      errorText={errorText}
      testID={`${testID}-${phoneNumber}`}
      includeDropdown={
        <>
          <Dropdown
            placeholder={
              <Typography variant={TypographyVariant.heading2}>
                {phoneInputSelected.flag}
              </Typography>
            }
            selectedValue={
              <Typography variant={TypographyVariant.heading2}>
                {phoneInputSelected.flag}
              </Typography>
            }
            testID={`country-code-dropdown-${testID}`}
            style={styles.dropdownContainer}
            contentStyle={styles.dropdownContent}
            onPress={handleDropDownSelect}
            iconStyle={styles.iconStyle}
          />
          <View
            style={styles.phoneNumberContainer}
            testID={`phone-number-container-${testID}`}
          >
            <View style={styles.divider} />
            <Typography
              variant={TypographyVariant.paragraph2}
              style={styles.dialcode}
            >
              {phoneInputSelected.dial_code}
            </Typography>
          </View>
        </>
      }
      style={style}
    />
  );
};

export default PhoneInput;

PhoneInput.defaultProps = {
  phoneInputSelected: {
    name: {
      en: '',
    },
    dial_code: '',
    code: '',
    flag: '',
    format: { maxLength: 4, minLength: 15 },
  },
};
