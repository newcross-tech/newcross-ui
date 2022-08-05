import useTheme from '../../hooks/useTheme';
import { StyleSheet } from 'react-native';
import { PillProps } from './Pill';

const pillStyle = ({ disabled, icon, removable, label }: PillProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    pillContainer: {
      alignSelf: 'flex-start',
      margin: theme.PillMargin,
      borderRadius: theme.PillBorderRadius,
      borderWidth: theme.PillBorderWidth,
      borderColor: disabled
        ? theme.PillDisabledBorderColor
        : theme.PillBorderColor,
      backgroundColor: disabled
        ? theme.PillDisabledBackgroundColor
        : theme.PillBackgroundColor,
    },
    pillContent: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: theme.PillPaddingVertical,
      paddingHorizontal: theme.PillPaddingHorizontal,
    },
    pillText: {
      color: disabled ? theme.PillTextDisabledColor : theme.PillTextColor,
    },
    pillIcon: {
      marginRight: label || removable ? theme.PillIconMarginLeft : 0,
      color: disabled ? theme.PillIconDisabledColor : theme.PillIconColor,
    },
    pillRemoveIcon: {
      marginLeft: label || icon ? theme.PillIconMarginRight : 0,
      color: theme.PillIconDisabledColor,
    },
  });
};

export default pillStyle;
