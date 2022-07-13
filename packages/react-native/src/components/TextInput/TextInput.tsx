import React, { useState } from 'react';
import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  Pressable,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash, faCheck } from '@fortawesome/pro-solid-svg-icons';
import textInputStyle from './TextInput.style';
import useTheme from '../../hooks/useTheme';

export type TextInputProps = {
  /**
   * the value of the text input
   */
  value: string;
  /**
   * Determines the type of the text input
   */
  textContentType: string;
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
   * Updates border and helper text styles when true
   */
  hasError: boolean;
  /**
   * Shows check mark when validation is met
   */
  isValid?: boolean;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle | TextStyle;
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
  hasError,
  isValid,
  style,
  ...rest
}: TextInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [selected, setSelected] = useState(false);

  const theme = useTheme();
  const styles = textInputStyle(disabled, selected, hasError);

  const handleSelected = () => {
    setSelected(!selected);
  };

  const isNewPasswordType = textContentType === 'newPassword';
  const isPasswordType = textContentType === 'password';

  return (
    <>
      {label && (
        <Text testID="label" style={styles.label}>
          {label}
        </Text>
      )}
      <View
        style={[styles.container, style]}
        pointerEvents={disabled ? 'none' : 'auto'}
      >
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
            <FontAwesomeIcon icon={faCheck} style={styles.checkIcon} />
          </View>
        )}
      </View>
      {(helperText || (errorText && hasError)) && (
        <Text testID="message-text" style={styles.messageText}>
          {errorText || helperText}
        </Text>
      )}
    </>
  );
};

export default TextInput;
