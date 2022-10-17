import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { TextInputProps } from '../TextInput';
import textInputStyle from '../TextInput/TextInput.style';
import { DropdownProps } from './Dropdown';

const dropdownStyle = ({
  disabled,
  selectedValue,
  errorText,
  focused,
  mode,
}: DropdownProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    icon: {
      paddingHorizontal: theme.DropdownIconPaddingHorizontal,
      justifyContent: 'center',
      color: disabled
        ? theme.DropdownIconColorDisabled
        : theme.DropdownIconColorDefault,
    },
    textContainer: {
      color: selectedValue
        ? theme.DropdownSelectedValueColor
        : theme.TextInputPlaceholderColor,
    },
    error: textInputStyle({ errorText, disabled } as TextInputProps).message,
    label: textInputStyle({ mode } as TextInputProps).label,
    pressableText: textInputStyle(
      { disabled, errorText } as TextInputProps,
      focused
    ).inputContainer,
    nativeInput: textInputStyle({ disabled, errorText } as TextInputProps)
      .nativeInput,
  });
};

export default dropdownStyle;
