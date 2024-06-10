import React from 'react';
import { TextStyle, View } from 'react-native';
import Dropdown from '../Dropdown';
import TextInput from '../TextInput';
import Typography, { TypographyVariant } from '../Typography';
import phoneInputStyle from './PhoneInput.styles';

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
  phoneInputSelected?: phoneInputSelectedType;
  /**
   * Phone number input
   */
  phoneNumber?: string;
  /**
   * Phone number input
   */
  onChangePhoneNumber?: (newState: string) => void;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * is Phone number valid
   */
  isPhoneNumberValid?: boolean;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Style for the input
   */
  style?: TextStyle;
  /**
   * Allow user to edit country code
   */
  isCountryCodeEditable?: boolean;
  /**
   * Error text to display
   */
  errorText?: string;
};

const PhoneInput = ({
  onChangePhoneNumber,
  phoneNumber,
  isPhoneNumberValid,
  handleDropDownSelect,
  phoneInputSelected,
  testID = 'phone-input',
  label,
  style,
  isCountryCodeEditable = true,
  errorText,
}: PhoneInputProps) => {
  const styles = phoneInputStyle();

  return (
    <TextInput
      isValid={isPhoneNumberValid}
      value={phoneNumber}
      textContentType="telephoneNumber"
      label={label}
      onChangeText={(phoneInput) =>
        onChangePhoneNumber && onChangePhoneNumber(phoneInput)
      }
      keyboardType="phone-pad"
      errorText={errorText}
      hasError={!!errorText}
      testID={`${testID}-${phoneNumber}`}
      includeDropdown={
        <>
          {isCountryCodeEditable ? (
            <Dropdown
              placeholder={
                <Typography variant={TypographyVariant.heading2}>
                  {phoneInputSelected?.flag}
                </Typography>
              }
              selectedValue={
                <Typography variant={TypographyVariant.heading2}>
                  {phoneInputSelected?.flag}
                </Typography>
              }
              testID={`country-code-dropdown-${testID}`}
              style={styles.dropdownContainer}
              contentStyle={styles.dropdownContent}
              onPress={handleDropDownSelect}
              iconStyle={styles.iconStyle}
            />
          ) : (
            <Typography
              style={styles.flag}
              variant={TypographyVariant.heading2}
            >
              {phoneInputSelected?.flag}
            </Typography>
          )}
          <View
            style={styles.phoneNumberContainer}
            testID={`phone-number-container-${testID}`}
          >
            <View style={styles.divider} />
            <Typography
              variant={TypographyVariant.paragraph2}
              style={styles.dialcode}
            >
              {phoneInputSelected?.dial_code}
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
