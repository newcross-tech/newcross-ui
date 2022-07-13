import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { FontWeight } from '../../types';

const textInputStyle = (
  disabled: boolean | undefined,
  selected: boolean | undefined,
  hasError: boolean
) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: selected
        ? theme.TextInputSelectedBorderColor
        : hasError
        ? theme.TextInputErrorColor
        : theme.TextInputBorderColor,
      borderWidth:
        selected || hasError
          ? theme.TextInputSelectedBorderWidth
          : theme.TextInputBorderWidth,
      borderRadius: theme.TextInputBorderRadius,
      backgroundColor: disabled
        ? theme.TextInputDisabledBackgroundColor
        : theme.TextInputBackgroundColor,
      justifyContent: 'space-between',
    },
    inputContainer: {
      flex: 1,
      fontFamily: theme.TextInputFontFamily,
      fontSize: theme.TextInputFontSize,
      paddingHorizontal: theme.TextInputPaddingHorizontal,
      paddingVertical:
        selected || hasError
          ? theme.TextInputPaddingVertical - 1
          : theme.TextInputPaddingVertical,
      lineHeight: theme.TextInputLineHeight,
      outlineStyle: 'none',
    },
    rightIcon: {
      paddingHorizontal: theme.TextInputRightIconPaddingHorizontal,
      justifyContent: 'center',
    },
    eyeIcon: {
      color: theme.TextInputRightIconColor,
    },
    checkIcon: {
      color: theme.TextInputValidationCheckColor,
    },
    label: {
      color: theme.TextInputLabelColor,
      fontWeight: theme.TextInputLabelFontWeight as FontWeight,
      fontSize: theme.TextInputLabelFontSize,
      lineHeight: theme.TextInputLineHeight,
      marginBottom: theme.TextInputMarginTop,
    },
    messageText: {
      color: hasError
        ? theme.TextInputErrorColor
        : theme.TextInputHelperTextColor,
      fontSize: theme.TextInputHelperTextFontSize,
      fontWeight: theme.TextInputHelperTextFontWeight as FontWeight,
      lineHeight: theme.TextInputHelperTextLineHeight,
      paddingHorizontal: theme.TextInputHelperTextPaddingHorizontal,
      marginTop: theme.TextInputMarginBottom,
    },
  });
};

export default textInputStyle;
