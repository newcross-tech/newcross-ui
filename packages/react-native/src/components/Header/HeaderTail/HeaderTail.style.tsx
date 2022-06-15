import useTheme from '../../../hooks/useTheme';
import { HeaderColors } from '../Header.types';
import { getFillColorValues } from './HeaderTail.types';
import { StyleSheet } from 'react-native';

const headerTailStyle = (color: HeaderColors) => {
  const theme = useTheme();
  const fillColorValues = getFillColorValues(theme);
  return {
    headerTailContainer: {
      height: theme.HeaderTailHeight,
    },

    headerTailBottomPath:
      fillColorValues[color as HeaderColors]?.topPathFillColor,
    headerTailTopPath:
      fillColorValues[color as HeaderColors]?.bottomPathFillColor,
  };
};

export default headerTailStyle;
