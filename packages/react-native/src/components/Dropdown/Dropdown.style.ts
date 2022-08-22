import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { DropdownProps } from './Dropdown';

const dropdownStyle = ({ disabled, selectedValue }: DropdownProps) => {
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
  });
};

export default dropdownStyle;
