import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../../theme/ThemeProvider';

const dayComponentStyles = (
  theme: ThemeDesignTokens,
  isAvailable?: boolean,
  isSelected?: boolean
) => {
  const {
    DayIconPosition,
    DayContainerSize,
    DayContainerBorderRadius,
    DayIconBackgroundColor,
    ColorSemanticsSuccess200,
    DayContainerBackgroundColorDefault,
    DayContainerBackgroundColorSelected,
  } = theme;
  return StyleSheet.create({
    dayStyle: {
      position: 'relative',
      height: DayContainerSize,
      width: DayContainerSize,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: DayContainerBorderRadius,
      backgroundColor: isSelected
        ? DayContainerBackgroundColorSelected
        : DayContainerBackgroundColorDefault,
      ...(isAvailable && {
        borderColor: ColorSemanticsSuccess200,
        borderWidth: 1,
        borderStyle: 'dashed',
      }),
    },
    dayIcon: {
      backgroundColor: DayIconBackgroundColor,
      borderRadius: DayContainerBorderRadius,
      position: 'absolute',
      top: -DayIconPosition,
      right: -DayIconPosition,
    },
    currentDayIcon: {
      position: 'absolute',
      bottom: -DayIconPosition,
    },
  });
};

export default dayComponentStyles;
