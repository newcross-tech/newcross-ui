import { StyleSheet } from 'react-native';
import { Mode } from '../../types';
import useTheme from '../../hooks/useTheme';

const textInputStyle = (
  disabled: boolean | undefined,
  selected: boolean | undefined,
  errorText?: string,
  search?: boolean,
  mode?: Mode
) => {
  const theme = useTheme();

  const shadowStyles = search && {
    shadowColor: theme.TextInputSearchBarShadowColor,
    shadowRadius: theme.TextInputSearchBarShadowRadius,
    shadowOpacity: theme.TextInputSearchBarShadowOpacity,
    elevation: theme.TextInputSearchBarShadowElevation,
  };

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: selected
        ? theme.TextInputSelectedBorderColor
        : errorText
        ? theme.TextInputErrorColor
        : theme.TextInputBorderColor,
      borderWidth:
        selected || errorText
          ? theme.TextInputSelectedBorderWidth
          : theme.TextInputBorderWidth,
      borderRadius: search
        ? theme.TextInputSearchBarBorderRadius
        : theme.TextInputBorderRadius,
      backgroundColor: disabled
        ? theme.TextInputDisabledBackgroundColor
        : theme.TextInputBackgroundColor,
      justifyContent: 'space-between',
      ...shadowStyles,
    },
    inputContainer: {
      flex: 1,
      fontFamily: theme.TextInputFontFamily,
      fontSize: theme.TextInputFontSize,
      paddingHorizontal: search
        ? theme.TextInputSearchBarPaddingHorizontal
        : theme.TextInputPaddingHorizontal,
      paddingVertical:
        selected || errorText
          ? theme.TextInputPaddingVertical - 1
          : theme.TextInputPaddingVertical,
      lineHeight: theme.TextInputLineHeight,
    },
    rightIcon: {
      paddingHorizontal: theme.TextInputRightIconPaddingHorizontal,
      justifyContent: 'center',
    },
    leftIcon: {
      paddingLeft: theme.TextInputRightIconPaddingHorizontal,
      justifyContent: 'center',
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
      color:
        mode === Mode.dark
          ? theme.ButtonModeDarkColor
          : theme.TextInputLabelColor,
      marginBottom: theme.TextInputMarginTop,
    },
    messageText: {
      color: errorText
        ? theme.TextInputErrorColor
        : theme.TextInputHelperTextColor,
      paddingHorizontal: theme.TextInputHelperTextPaddingHorizontal,
      marginTop: theme.TextInputMarginBottom,
    },
  });
};

export default textInputStyle;
