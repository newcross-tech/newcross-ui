import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export const calendarStyles = (theme: ThemeDesignTokens) =>
  StyleSheet.create({
    loaderContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.ColorNeutralWhite,
      opacity: theme.OpacityBaseLg,
    },
  });
