import { StyleSheet } from 'react-native';
import { Mode } from '../../types';
import useTheme from '../../hooks/useTheme';
import { TextInputProps } from './TextInput';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const selectedStyles = (theme: ThemeDesignTokens) => {
  return StyleSheet.create({
    inputContainer: {
      borderColor: theme.TextInputSelectedBorderColor,
      borderWidth: theme.TextInputSelectedBorderWidth,
    },
    nativeInput: {
      paddingVertical: theme.TextInputPaddingVertical - 1,
    },
  });
};

const errorMessageStyles = (theme: ThemeDesignTokens) => {
  return StyleSheet.create({
    container: { paddingBottom: 0 },
    inputContainer: {
      borderColor: theme.TextInputErrorColor,
      borderWidth: theme.TextInputSelectedBorderWidth,
    },
    nativeInput: {
      paddingVertical: theme.TextInputPaddingVertical - 1,
    },
    message: {
      color: theme.TextInputErrorColor,
    },
  });
};

const helperMessageStyles = (theme: ThemeDesignTokens) => {
  return StyleSheet.create({
    container: { paddingBottom: 0 },
    nativeInput: {
      paddingVertical: theme.TextInputPaddingVertical - 1,
    },
    message: {
      color: theme.TextInputHelperTextColor,
    },
  });
};

const searchStyles = (theme: ThemeDesignTokens) => {
  return StyleSheet.create({
    inputContainer: {
      borderRadius: theme.TextInputSearchBarBorderRadius,
      shadowColor: theme.TextInputSearchBarShadowColor,
      shadowRadius: theme.TextInputSearchBarShadowRadius,
      shadowOpacity: theme.TextInputSearchBarShadowOpacity,
      elevation: theme.TextInputSearchBarShadowElevation,
    },
    nativeInput: {
      paddingHorizontal: theme.TextInputSearchBarPaddingHorizontal,
    },
  });
};

const disabledStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    inputContainer: {
      backgroundColor: theme.TextInputDisabledBackgroundColor,
    },
  });
};

const textInputStyle = (
  { errorText, search, disabled, mode, helperText, hasError }: TextInputProps,
  selected = false
) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      paddingBottom: theme.TextInputMarginBottom,

      ...((hasError || errorText) && errorMessageStyles(theme).container),
      ...(helperText && helperMessageStyles(theme).container),
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      borderColor: theme.TextInputBorderColor,
      borderWidth: theme.TextInputBorderWidth,
      borderRadius: theme.TextInputBorderRadius,
      backgroundColor: theme.TextInputBackgroundColor,

      ...(selected && selectedStyles(theme).inputContainer),
      ...((hasError || errorText) && errorMessageStyles(theme).inputContainer),
      ...(search && searchStyles(theme).inputContainer),
      ...(disabled && disabledStyles().inputContainer),
    },
    nativeInput: {
      flex: 1,
      fontFamily: theme.TextInputFontFamily,
      fontSize: theme.TextInputFontSize,
      lineHeight: theme.TextInputLineHeight,
      paddingHorizontal: theme.TextInputPaddingHorizontal,
      paddingVertical: theme.TextInputPaddingVertical,

      ...(selected && selectedStyles(theme).nativeInput),
      ...(helperText && helperMessageStyles(theme).nativeInput),
      ...((hasError || errorText) && errorMessageStyles(theme).nativeInput),
      ...(search && searchStyles(theme).nativeInput),
    },
    rightIcon: {
      justifyContent: 'center',
      paddingHorizontal: theme.TextInputRightIconPaddingHorizontal,
    },
    leftIcon: {
      justifyContent: 'center',
      paddingLeft: theme.TextInputRightIconPaddingHorizontal,
    },
    eyeIcon: {
      color: theme.TextInputRightIconColor,
    },
    checkIcon: {
      color: theme.TextInputValidationCheckColor,
    },
    searchIcon: {
      color: theme.TextInputSearchBarSearchIconColor,
    },
    closeIcon: {
      color: theme.TextInputSearchBarCloseIconColor,
    },
    label: {
      color: theme.TextInputLabelColor,
      marginBottom: theme.TextInputMarginTop,

      ...(mode === Mode.dark && { color: theme.ButtonModeDarkColor }),
    },
    message: {
      paddingHorizontal: theme.TextInputHelperTextPaddingHorizontal,
      marginTop: theme.TextInputMarginTop,
      color: theme.TextInputHelperTextColor,

      ...((hasError || errorText) && errorMessageStyles(theme).message),
      ...(helperText && helperMessageStyles(theme).message),
    },
  });
};

export default textInputStyle;
