import useTheme from '../../hooks/useTheme';
import { StyleSheet } from 'react-native';
import { PillProps } from './Pill';
import {
  getPillBorderColor,
  getPillBackgroundColor,
  getPillTextColor,
  getPillIconColor,
  PillStatus,
} from './Pill.types';

const pillStyle = ({
  disabled,
  icon,
  removable,
  label,
  hasBorder,
  status,
}: PillProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    pillContainer: {
      alignSelf: 'flex-start',
      margin: theme.PillMargin,
      borderRadius: theme.PillBorderRadius,
      borderWidth: hasBorder ? theme.PillBorderWidth : 0,
      borderColor: disabled
        ? theme.PillDisabledBorderColor
        : getPillBorderColor(theme)[status as PillStatus],
      backgroundColor: disabled
        ? theme.PillDisabledBackgroundColor
        : getPillBackgroundColor(theme)[status as PillStatus],
    },
    pillContent: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: theme.PillPaddingVertical,
      paddingHorizontal: theme.PillPaddingHorizontal,
    },
    pillText: {
      color: disabled
        ? theme.PillDisabledColor
        : getPillTextColor(theme)[status as PillStatus],
    },
    pillIcon: {
      marginRight: label || removable ? theme.PillIconMarginLeft : 0,
      color: disabled
        ? theme.PillDisabledColor
        : getPillIconColor(theme)[status as PillStatus],
    },
    pillRemoveIcon: {
      marginLeft: label || icon ? theme.PillIconMarginRight : 0,
      color: theme.PillDisabledColor,
    },
  });
};

export default pillStyle;
