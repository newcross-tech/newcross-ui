import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { HeaderColors, getBackgroundColorValues } from './Header.types';

const headerStyle = (color: HeaderColors) => {
  const theme = useTheme();
  const backgroundColorValues = getBackgroundColorValues(theme);

  return StyleSheet.create({
    headerContainer: {
      backgroundColor: backgroundColorValues[color as HeaderColors],
      paddingHorizontal: theme.HeaderPaddingHorizontal,
      paddingTop: theme.HeaderPaddingTop,
      paddingBottom: theme.HeaderPaddingBottom,
    },
  });
};

export default headerStyle;
