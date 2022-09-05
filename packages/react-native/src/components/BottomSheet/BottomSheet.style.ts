import { StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const bottomSheetStyle = (theme: ThemeDesignTokens) => {
  const dimensions = useWindowDimensions();

  return StyleSheet.create({
    container: {
      position: 'absolute',
      left: theme.BottomSheetPosition,
      right: theme.BottomSheetPosition,
      bottom: theme.BottomSheetPosition,
      backgroundColor: theme.BottomSheetBackgroundColor,
      borderTopStartRadius: theme.BottomSheetBorderRadius,
      borderTopEndRadius: theme.BottomSheetBorderRadius,
      zIndex: 2,
    },

    indicatorContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderTopStartRadius: theme.BottomSheetBorderRadius,
      borderTopEndRadius: theme.BottomSheetBorderRadius,
      marginBottom: theme.BottomSheetIndicatorContainerMarginBottom,
      minHeight: theme.BottomSheetIndicatorContainerMinHeight,
    },
    indicatorContainerScroll: {
      backgroundColor: theme.BottomSheetBackgroundColor,
      shadowOpacity: theme.BottomSheetIndicatorContainerScrollShadowOpacity,
      shadowColor: theme.BottomSheetIndicatorContainerScrollShadowColor,
      shadowOffset: {
        height: theme.BottomSheetIndicatorContainerScrollShadowOffsetHeight,
        width: theme.BottomSheetIndicatorContainerScrollShadowOffsetWidth,
      },
      shadowRadius: theme.BottomSheetIndicatorContainerScrollShadowRadius,
      ...Platform.select({
        android: {
          elevation: theme.BottomSheetIndicatorContainerScrollShadowElevation,
        },
      }),
    },
    indicator: {
      backgroundColor: theme.BottomSheetIndicatorBackgroundColor,
      width: '30%',
      height: theme.BottomSheetIndicatorHeight / 2,
      borderRadius: theme.BottomSheetIndicatorBorderRadius,
    },
    backdrop: {
      position: 'absolute',
      backgroundColor: theme.BottomSheetBackdropBackgroundColor,
      height: dimensions.height,
      left: theme.BottomSheetPosition,
      right: theme.BottomSheetPosition,
      zIndex: 1,
    },
  });
};

export default bottomSheetStyle;
