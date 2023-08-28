import React, { ReactNode } from 'react';
import { ViewStyle, Pressable } from 'react-native';
import Typography, { TypographyVariant } from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import dropdownStyle from './Dropdown.style';
import { Mode } from '../../types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
   * Used to add custom icon.
   */
  icon?: IconProp;
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
  /**
   * Used to set dark or light mode
   */
  mode?: Mode;
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
  icon = faChevronDown,
  onPress,
  testID,
  mode,
}: DropdownProps) => {
  const styles = dropdownStyle({
    disabled,
    selectedValue,
    errorText,
    mode,
    focused,
  });

  return (
    <>
      {label && (
        <Typography
          variant={TypographyVariant.paragraph2}
          testID={`dropdown-label-${testID}`}
          style={styles.label}
        >
          {label}
        </Typography>
      )}
      <Pressable
        disabled={disabled}
        testID={`dropdown-pressable-${testID}`}
        onPress={onPress}
        style={[styles.pressableText, style]}
      >
        {selectedValue ? (
          <Typography
            testID={`dropdown-selected-value-${testID}`}
            variant={TypographyVariant.paragraph1}
            style={[styles.nativeInput, styles.textContainer, contentStyle]}
          >
            {selectedValue}
          </Typography>
        ) : (
          <Typography
            testID={`dropdown-placeholder-${testID}`}
            variant={TypographyVariant.paragraph1}
            style={[styles.nativeInput, styles.textContainer, contentStyle]}
          >
            {placeholder}
          </Typography>
        )}
        <FontAwesomeIcon style={[styles.icon, iconStyle]} icon={icon} />
      </Pressable>
      {errorText && (
        <Typography
          variant={TypographyVariant.paragraph2}
          testID={`dropdown-error-text-${testID}`}
          style={styles.error}
        >
          {errorText}
        </Typography>
      )}
    </>
  );
};

export default Dropdown;
