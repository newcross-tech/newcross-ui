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
import {
  faEye,
  faEyeSlash,
  faCheck,
  faXmark,
} from '@fortawesome/pro-solid-svg-icons';
import { faSearch } from '@fortawesome/pro-light-svg-icons';
import textInputStyle from './TextInput.style';
import useTheme from '../../hooks/useTheme';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';

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
   * If true alters text input to have dropdown options
   */
  options?: boolean;
  onOptionsPress?: VoidFunction;
  selectedOption?: any;
  /**
   * triggers the on press of the close icon
   */
  onClosePress?: VoidFunction;
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
  isValid,
  search,
  options,
  onOptionsPress,
  selectedOption,
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
        <Text testID="label" style={styles.label}>
          {label}
        </Text>
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
        {options && (
          <Pressable
            testID="options"
            style={styles.leftIcon}
            onPress={onOptionsPress}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>{selectedOption.flag}  </Text>
              <FontAwesomeIcon icon={faChevronDown} style={styles.searchIcon} />
              <Text style={{ fontSize: 20 }}>  |  </Text>
              <Text>{selectedOption.dial_code}</Text>
            </View>
          </Pressable>
        )}
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
      {(helperText || errorText) && (
        <Text testID="message-text" style={styles.messageText}>
          {errorText || helperText}
        </Text>
      )}
    </>
  );
};

export default TextInput;
