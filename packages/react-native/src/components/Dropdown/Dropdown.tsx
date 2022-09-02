import React, { ReactNode } from 'react';
import { ViewStyle, Pressable } from 'react-native';
import Typography, { TypographyVariant } from '../Typography';
import textInputStyle from '../TextInput/TextInput.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import dropdownStyle from './Dropdown.style';

export type DropdownProps = {
  /**
   * Used to set the placeholder text in the dropdown.
   */
  placeholder?: string | ReactNode;
  /**
   * The value of the dropdown.
   */
  selectedValue?: string | ReactNode;
  /**
   * Used to add custom styles.
   */
  style?: ViewStyle;
  /**
   * Used to add custom styles.
   */
  contentStyle?: ViewStyle;
  /**
   * Used to add custom styles.
   */
  iconStyle?: ViewStyle;
  /**
   * Adds error text.
   */
  errorText?: string;
  /**
   * Gives dropdown a label.
   */
  label?: string;
  /**
   *  Determines whether the dropdown is focused or not.
   */
  focused?: boolean;
  /**
   * Detremines whether text input is disabled.
   */
  disabled?: boolean;
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: VoidFunction;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

const Dropdown = ({
  placeholder,
  selectedValue,
  disabled,
  errorText,
  label,
  focused = false,
  style,
  contentStyle,
  iconStyle,
  onPress,
  testID,
}: DropdownProps) => {
  const styles = dropdownStyle({ disabled, selectedValue });
  const errorTextInputContainerStyle = textInputStyle(
    disabled,
    false,
    errorText,
    undefined
  ).messageText;
  const labelTextInputContainerStyle = textInputStyle(
    false,
    false,
    undefined
  ).label;
  const pressableTextInputContainerStyle = textInputStyle(
    disabled,
    focused,
    errorText,
    undefined
  ).container;
  const textInputContainerStyle = textInputStyle(
    disabled,
    false,
    errorText,
    undefined
  ).inputContainer;

  return (
    <>
      {label && (
        <Typography
          variant={TypographyVariant.paragraph2}
          testID={`dropdown-label-${testID}`}
          style={labelTextInputContainerStyle}
        >
          {label}
        </Typography>
      )}
      <Pressable
        disabled={disabled}
        testID={`dropdown-pressable-${testID}`}
        onPress={onPress}
        style={[pressableTextInputContainerStyle, style]}
      >
        {selectedValue ? (
          <Typography
            testID={`dropdown-selected-value-${testID}`}
            variant={TypographyVariant.paragraph1}
            style={[
              textInputContainerStyle,
              styles.textContainer,
              contentStyle,
            ]}
          >
            {selectedValue}
          </Typography>
        ) : (
          <Typography
            testID={`dropdown-placeholder-${testID}`}
            variant={TypographyVariant.paragraph1}
            style={[
              textInputContainerStyle,
              styles.textContainer,
              contentStyle,
            ]}
          >
            {placeholder}
          </Typography>
        )}
        <FontAwesomeIcon
          style={[styles.icon, iconStyle]}
          icon={faChevronDown}
        />
      </Pressable>
      {errorText && (
        <Typography
          variant={TypographyVariant.paragraph2}
          testID={`dropdown-error-text-${testID}`}
          style={errorTextInputContainerStyle}
        >
          {errorText}
        </Typography>
      )}
    </>
  );
};

export default Dropdown;
