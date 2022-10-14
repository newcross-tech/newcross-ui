import { StyleSheet, ViewStyle } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { Dimensions } from 'react-native';

export const getPaginationDotStyles = (selectedDot: boolean): ViewStyle => {
  const theme = useTheme();

  return {
    backgroundColor: selectedDot
      ? theme.CarouselPaginationActiveIndexColor
      : theme.CarouselPaginationInactiveIndexColor,
    marginHorizontal: theme.CarouselPaginationMarginHorizontal,
  };
};

export const getContentWidth = (
  contentWidth: number = Dimensions.get('window').width
): ViewStyle => ({
  width: contentWidth,
});

const carouselStyle = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    carousel: {
      marginBottom: theme.CarouselMarginBottom,
      flexGrow: 0,
    },
    paginationContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });
};

export default carouselStyle;
