import useTheme from '../../hooks/useTheme';
import { StyleSheet } from 'react-native';
import { PillProps } from './Pill';
import {
  getPillBorderColor,
  getPillBackgroundColor,
  getPillTextColor,
  getPillIconColor,
  PillVariant,
} from './Pill.types';

const pillStyle = ({
  label,
  icon,
  removable,
  hasBorder,
  variant = PillVariant.default,
  disabled = true,
}: PillProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    pillContainer: {
      alignSelf: 'flex-start',
      margin: theme.PillMargin,
      borderRadius: theme.PillBorderRadius,
      borderWidth: hasBorder ? theme.PillBorderWidth : 0,
      borderColor: getPillBorderColor(theme, disabled)[variant],
      backgroundColor: getPillBackgroundColor(theme, disabled)[variant],
    },
    pillContent: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: theme.PillPaddingVertical,
      paddingHorizontal: theme.PillPaddingHorizontal,
    },
    pillText: {
      maxWidth: icon ? '85%' : '100%',
      color: getPillTextColor(theme, disabled)[variant],
    },
    pillIcon: {
      marginRight: label || removable ? theme.PillIconMarginLeft : 0,
      color: getPillIconColor(theme, disabled)[variant],
    },
    pillRemoveIcon: {
      marginLeft: label || icon ? theme.PillIconMarginRight : 0,
      color: theme.PillDisabledColor,
    },
  });
};

export default pillStyle;
