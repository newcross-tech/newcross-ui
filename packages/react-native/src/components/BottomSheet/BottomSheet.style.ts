import { StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const bottomSheetStyle = (theme: ThemeDesignTokens) => {
  const dimensions = useWindowDimensions();

  const {
    BottomSheetPosition,
    BottomSheetBackgroundColor,
    BottomSheetBorderRadius,
    BottomSheetIndicatorContainerPaddingTop,
    BottomSheetIndicatorContainerPaddingBottom,
    BottomSheetIndicatorContainerScrollShadowOpacity,
    BottomSheetIndicatorContainerScrollShadowColor,
    BottomSheetIndicatorContainerScrollShadowOffsetHeight,
    BottomSheetIndicatorContainerScrollShadowOffsetWidth,
    BottomSheetIndicatorContainerScrollShadowRadius,
    BottomSheetIndicatorContainerScrollShadowElevation,
    BottomSheetIndicatorBackgroundColor,
    BottomSheetIndicatorHeight,
    BottomSheetIndicatorBorderRadius,
    BottomSheetBackdropBackgroundColor,
  } = theme;

  const { height } = dimensions;

  return StyleSheet.create({
    container: {
      position: 'absolute',
      left: BottomSheetPosition,
      right: BottomSheetPosition,
      bottom: BottomSheetPosition,
      backgroundColor: BottomSheetBackgroundColor,
      borderTopStartRadius: BottomSheetBorderRadius,
      borderTopEndRadius: BottomSheetBorderRadius,
      zIndex: 2,
    },

    indicatorContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderTopStartRadius: BottomSheetBorderRadius,
      borderTopEndRadius: BottomSheetBorderRadius,
      paddingTop: BottomSheetIndicatorContainerPaddingTop,
      paddingBottom: BottomSheetIndicatorContainerPaddingBottom,
    },
    indicatorContainerScroll: {
      backgroundColor: BottomSheetBackgroundColor,
      shadowOpacity: BottomSheetIndicatorContainerScrollShadowOpacity,
      shadowColor: BottomSheetIndicatorContainerScrollShadowColor,
      shadowOffset: {
        height: BottomSheetIndicatorContainerScrollShadowOffsetHeight,
        width: BottomSheetIndicatorContainerScrollShadowOffsetWidth,
      },
      shadowRadius: BottomSheetIndicatorContainerScrollShadowRadius,
      ...Platform.select({
        android: {
          elevation: BottomSheetIndicatorContainerScrollShadowElevation,
        },
      }),
    },
    indicator: {
      backgroundColor: BottomSheetIndicatorBackgroundColor,
      width: '30%',
      height: BottomSheetIndicatorHeight / 2,
      borderRadius: BottomSheetIndicatorBorderRadius,
    },
    backdrop: {
      position: 'absolute',
      backgroundColor: BottomSheetBackdropBackgroundColor,
      height: height,
      left: BottomSheetPosition,
      right: BottomSheetPosition,
      zIndex: 1,
    },
  });
};

export default bottomSheetStyle;
