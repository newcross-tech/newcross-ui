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
      margin: theme.PillMargin,
      borderRadius: theme.PillBorderRadius,
      borderWidth: hasBorder ? theme.PillBorderWidth : 0,
      borderColor: getPillBorderColor(theme, disabled)[variant],
      backgroundColor: getPillBackgroundColor(theme, disabled)[variant],
    },
    pillContent: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: theme.PillPaddingVertical,
      paddingHorizontal: theme.PillPaddingHorizontal,
    },
    pillText: {
      flex: 1,
      alignItems: 'center',
      textOverflow: 'ellipsis', // Add ellipsis for long label
      color: getPillTextColor(theme, disabled)[variant],
    },
    pillIconWrapper: {
      marginRight: label || removable ? theme.PillIconMarginRight : 0,
    },
    pillIcon: {
      color: getPillIconColor(theme, disabled)[variant],
    },
    pillRemoveIconWrapper: {
      marginLeft: label || icon ? theme.PillIconMarginLeft : 0, // Add fixed left margin to separate icons
    },
    pillRemoveIcon: {
      color: theme.PillDisabledColor,
    },
  });
};

export default pillStyle;
