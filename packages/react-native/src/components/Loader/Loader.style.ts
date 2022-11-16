import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

export const loadingStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
      backgroundColor: theme.ColorNeutralBlack,
      opacity: theme.OpacityBaseLg,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.SpacingBase8,
    },
    text: {
      color: theme.ColorNeutralWhite,
    },
  });
};
