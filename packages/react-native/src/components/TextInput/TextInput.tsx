import { faSearch } from '@fortawesome/pro-light-svg-icons/faSearch';
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faEye } from '@fortawesome/pro-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { ReactNode, useState } from 'react';
import {
  Pressable,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  TextStyle,
  View,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import useTheme from '../../hooks/useTheme';
import { Mode } from '../../types';
import Typography, { TypographyVariant } from '../Typography';
import textInputStyle from './TextInput.style';

export type TextInputProps = {
  /**
   * the value of the text input
   */
  value?: string;
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
   * show error state without message
   */
  hasError?: boolean;
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
  /**
   * Used to set dark or light mode
   */
  mode?: Mode;
  /**
   * Multiline text input
   */
  multiline?: boolean;
  /**
   * Number of lines
   */
  numberOfLines?: number;
  /**
   * Maximum length of text input
   */
  maxLength?: number;
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
  mode = Mode.light,
  onBlur,
  onFocus,
  hasError,
  multiline = false,
  numberOfLines = 4,
  maxLength = 400,
  ...rest
}: TextInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [selected, setSelected] = useState(false);
  const [textSize, setTextSize] = useState(value?.length || 0);
  const theme = useTheme();
  const styles = textInputStyle(
    {
      disabled,
      errorText,
      helperText,
      search,
      mode,
      hasError,
    } as TextInputProps,
    selected
  );

  const handleSelected = () => {
    setSelected(!selected);
  };

  const onChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTextSize(event?.nativeEvent?.text?.length);
  };

  const isNewPasswordType = textContentType === 'newPassword';
  const isPasswordType = textContentType === 'password';

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Typography
          variant={TypographyVariant.heading5}
          testID="text-input-label"
          style={styles.label}
        >
          {label}
        </Typography>
      )}
      <View
        style={styles.inputContainer}
        pointerEvents={disabled ? 'none' : 'auto'}
      >
        {search && (
          <View testID="text-input-search-icon" style={styles.leftIcon}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
          </View>
        )}
        {!!includeDropdown && includeDropdown}
        <NativeTextInput
          style={styles.nativeInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={theme.TextInputPlaceholderColor}
          textContentType={textContentType}
          secureTextEntry={
            passwordVisibility && (isNewPasswordType || isPasswordType)
          }
          onChange={onChange}
          onChangeText={onChangeText}
          onFocus={(event) => {
            if (onFocus) {
              onFocus(event);
            }
            handleSelected();
          }}
          onBlur={(event) => {
            if (onBlur) {
              onBlur(event);
            }

            handleSelected();
          }}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          {...rest}
        />
        {(isPasswordType || isNewPasswordType) && (
          <Pressable
            onPress={() => setPasswordVisibility(!passwordVisibility)}
            style={styles.rightIcon}
            testID="text-input-eye-icon"
          >
            <FontAwesomeIcon
              icon={!passwordVisibility ? faEyeSlash : faEye}
              size={theme.TextInputRightIconSize}
              style={styles.eyeIcon}
            />
          </Pressable>
        )}
        {isValid && (
          <View testID="text-input-validation-check" style={styles.rightIcon}>
            <FontAwesomeIcon
              icon={faCheck}
              style={styles.checkIcon}
              size={theme.TextInputRightIconSize}
            />
          </View>
        )}
        {search && value?.length !== 0 && onClosePress && (
          <Pressable
            onPress={onClosePress}
            style={styles.rightIcon}
            testID="text-input-search-close-icon"
          >
            <FontAwesomeIcon icon={faXmark} style={styles.closeIcon} />
          </Pressable>
        )}
      </View>
      <View style={styles.extrasContainer}>
        {(errorText || helperText) && (
          <Typography
            variant={TypographyVariant.paragraph3}
            testID="text-input-message-text"
            style={styles.message}
            numberOfLines={2}
          >
            {errorText || helperText}
          </Typography>
        )}
        {multiline && (
          <Typography
            variant={TypographyVariant.paragraph3}
            testID="text-input-message-size"
            style={styles.count}
          >
            {`${textSize}/400`}
          </Typography>
        )}
      </View>
    </View>
  );
};

export default TextInput;
