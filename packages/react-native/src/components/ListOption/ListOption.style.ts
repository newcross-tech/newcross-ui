import { StyleSheet } from 'react-native';
import { ListOptionAlignment } from './ListOption.types';
import useTheme from '../../hooks/useTheme';
import { FontWeight } from '../../types';

const listOptionStyle = (
  alignText?: ListOptionAlignment,
  selected?: boolean,
  isMultipleSelect?: boolean
) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: selected
        ? theme.ListOptionSelectedBackgroundColor
        : theme.ListOptionBackgroundColor,
      paddingHorizontal: theme.ListOptionPaddingHorizontal,
      paddingVertical: theme.ListOptionPaddingVertical,
      borderBottomColor: theme.ListOptionBorderBottomColor,
      borderBottomWidth: theme.ListOptionBorderBottomWidth,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionText: {
      color: selected
        ? theme.ListOptionSelectedTextColor
        : theme.ListOptionTextColor,
      fontWeight: selected
        ? (theme.ListOptionSelectedTextFontWeight as FontWeight)
        : (theme.ListOptionTextFontWeight as FontWeight),
      marginLeft:
        isMultipleSelect && selected && alignText === ListOptionAlignment.CENTER
          ? theme.ListOptionTextMarginLeft
          : 0,
    },
    leftIcon: {
      alignItems: 'flex-start',
      marginRight: theme.ListOptionPaddingHorizontal / 2,
    },
    rightIcon: {
      alignItems: 'flex-end',
      marginLeft: theme.ListOptionPaddingHorizontal / 2,
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
