import React, { ReactNode, useState } from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  Pressable,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/pro-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { faSearch } from '@fortawesome/pro-light-svg-icons/faSearch';
import textInputStyle from './TextInput.style';
import useTheme from '../../hooks/useTheme';
import Typography, { TypographyVariant } from '../Typography';

export type TextInputProps = {
  /**
   * the value of the text input
   */
  value: string;
  /**
   * Determines the type of the text input
   */
  textContentType?: string;
  /**
   * Gives text input a label
   */
  label?: string;
  /**
   * Adds helper text
   */
  helperText?: string;
  /**
   * Adds error text
   */
  errorText?: string;
  /**
   * Includes a placeholder text in the input box
   */
  placeholder?: string;
  /**
   * Detremines whether text input is disabled
   */
  disabled?: boolean;
  /**
   * Updates text in input box
   */
  onChangeText: (newState: string) => void;
  /**
   * Shows check mark when validation is met
   */
  isValid?: boolean;
  /**
   * If true alters text input to search bar styles
   */
  search?: boolean;
  /**
   * triggers the on press of the close icon
   */
  onClosePress?: VoidFunction;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle | TextStyle;
  /**
   * Includes a dropdown component
   */
  includeDropdown?: ReactNode;
} & NativeTextInputProps;

const TextInput = ({
  value,
  textContentType,
  placeholder,
  label,
  disabled,
  onChangeText,
  helperText,
  errorText,
  isValid,
  search,
  includeDropdown,
  onClosePress,
  style,
  ...rest
}: TextInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [selected, setSelected] = useState(false);

  const theme = useTheme();
  const styles = textInputStyle(disabled, selected, errorText, search);

  const handleSelected = () => {
    setSelected(!selected);
  };

  const isNewPasswordType = textContentType === 'newPassword';
  const isPasswordType = textContentType === 'password';

  return (
    <>
      {label && (
        <Typography
          variant={TypographyVariant.heading5}
          testID="label"
          style={styles.label}
        >
          {label}
        </Typography>
      )}
      <View
        style={[styles.container, style]}
        pointerEvents={disabled ? 'none' : 'auto'}
      >
        {search && (
          <View testID="search-icon" style={styles.leftIcon}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
          </View>
        )}
        {!!includeDropdown && includeDropdown}
        <NativeTextInput
          style={styles.inputContainer}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={theme.TextInputPlaceholderColor}
          textContentType={textContentType}
          secureTextEntry={
            passwordVisibility && (isNewPasswordType || isPasswordType)
          }
          onChangeText={onChangeText}
          onFocus={handleSelected}
          onBlur={handleSelected}
          {...rest}
        />
        {(isPasswordType || isNewPasswordType) && (
          <Pressable
            onPress={() => setPasswordVisibility(!passwordVisibility)}
            style={styles.rightIcon}
            testID="eye-icon"
          >
            <FontAwesomeIcon
              icon={!passwordVisibility ? faEyeSlash : faEye}
              size={theme.TextInputRightIconSize}
              style={styles.eyeIcon}
            />
          </Pressable>
        )}
        {isValid && (
          <View testID="validation-check" style={styles.rightIcon}>
            <FontAwesomeIcon
              icon={faCheck}
              style={styles.checkIcon}
              size={theme.TextInputRightIconSize}
            />
          </View>
        )}
        {search && value.length !== 0 && onClosePress && (
          <Pressable
            onPress={onClosePress}
            style={styles.rightIcon}
            testID="search-close-icon"
          >
            <FontAwesomeIcon icon={faXmark} style={styles.closeIcon} />
          </Pressable>
        )}
      </View>
      {helperText || errorText ? (
        <Typography
          variant={TypographyVariant.paragraph3}
          testID="message-text"
          style={styles.messageText}
        >
          {errorText || helperText}
        </Typography>
      ) : null}
    </>
  );
};

export default TextInput;
