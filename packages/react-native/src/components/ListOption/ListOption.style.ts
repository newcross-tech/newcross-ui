import { StyleSheet } from 'react-native';
import { ListOptionAlignment } from './ListOption.types';
import useTheme from '../../hooks/useTheme';
import { FontWeight } from '../../types';

const listOptionStyle = (
  alignText?: ListOptionAlignment,
  isSelected?: boolean
) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: isSelected
        ? theme.ListOptionSelectedBackgroundColor
        : theme.ListOptionBackgroundColor,
      paddingHorizontal: theme.ListOptionPaddingHorizontal,
      paddingVertical: theme.ListOptionPaddingVertical,
      borderBottomColor: theme.ListOptionBorderBottomColor,
      borderBottomWidth: theme.ListOptionBorderBottomWidth,
    },
    innerContainer: {
      flexDirection: 'row',
    },
    optionText: {
      color: isSelected
        ? theme.ListOptionSelectedTextColor
        : theme.ListOptionTextColor,
      fontWeight: isSelected
        ? (theme.ListOptionSelectedTextFontWeight as FontWeight)
        : (theme.ListOptionTextFontWeight as FontWeight),
      marginHorizontal: theme.ListOptionPaddingHorizontal / 2,
    },
    leftIcon: {
      alignItems: 'flex-start',
    },
    rightIcon: {
      alignItems: 'flex-end',
    },
    textContainer: {
      flex: 1,
      alignItems:
        alignText === ListOptionAlignment.CENTER
          ? 'center'
          : alignText === ListOptionAlignment.RIGHT
          ? 'flex-end'
          : 'flex-start',
    },
  });
};

export default listOptionStyle;
