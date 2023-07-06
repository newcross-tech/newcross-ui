// import useTheme from '../../hooks/useTheme';
// import { StyleSheet } from 'react-native';
// import { PillProps } from './Pill';
// import {
//   getPillBorderColor,
//   getPillBackgroundColor,
//   getPillTextColor,
//   getPillIconColor,
//   PillVariant,
// } from './Pill.types';
//
// const pillStyle = ({
//   label,
//   icon,
//   removable,
//   hasBorder,
//   variant = PillVariant.default,
//   disabled = true,
// }: PillProps) => {
//   const theme = useTheme();
//
//   return StyleSheet.create({
//     pillContainer: {
//       alignSelf: 'flex-start',
//       alignItems: 'baseline',
//       borderRadius: theme.PillBorderRadius,
//       borderWidth: hasBorder ? theme.PillBorderWidth : 0,
//       borderColor: getPillBorderColor(theme, disabled)[variant],
//       backgroundColor: getPillBackgroundColor(theme, disabled)[variant],
//     },
//     pillContent: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       justifyContent: 'flex-start',
//       paddingVertical: theme.PillPaddingVertical,
//       paddingHorizontal: theme.PillPaddingHorizontal,
//     },
//     pillText: {
//       flexShrink: 1,
//       flexGrow: 0,
//       color: getPillTextColor(theme, disabled)[variant],
//       maxWidth: '100%',
//       overflow: 'hidden',
//       textOverflow: 'ellipsis', // Add ellipsis for long label
//       whiteSpace: 'nowrap', // Prevent label from wrapping onto next line
//       marginLeft: 8, // Add left margin
//       marginRight: removable ? 8 : 16, // Add right margin based on removable flag
//     },
//     pillIconWrapper: {
//       marginRight: label || removable ? theme.PillIconMarginLeft : 0,
//     },
//     pillIcon: {
//       color: getPillIconColor(theme, disabled)[variant],
//     },
//     pillRemoveIconWrapper: {
//       marginLeft:label || icon ? theme.PillIconMarginRight : 0,// Add fixed left margin to separate icons
//     },
//     pillRemoveIcon: {
//       color: theme.PillDisabledColor,
//     },
//   });
// };
//
// export default pillStyle;

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
      paddingVertical: theme.PillPaddingVertical,
      paddingHorizontal: theme.PillPaddingHorizontal,
      maxWidth: '100%',
    },
    pillText: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      // flexShrink: 1,
      // flexGrow: 0,
      // overflow: 'hidden',
      textOverflow: 'ellipsis', // Add ellipsis for long label
      // whiteSpace: 'nowrap', // Prevent label from wrapping onto next line
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
