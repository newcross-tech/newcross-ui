import { StyleSheet, useWindowDimensions } from 'react-native';
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
    },
    line: {
      alignSelf: 'center',
      marginTop: theme.BottomSheetLineMarginTop,
      height: theme.BottomSheetLineHeight,
      backgroundColor: theme.BottomSheetLineBackgroundColor,
      width: theme.BottomSheetLineWidth,
      borderRadius: theme.BottomSheetLineBorderRadius,
    },
    backdrop: {
      position: 'absolute',
      backgroundColor: theme.BottomSheetBackdropBackgroundColor,
      height: dimensions.height,
      left: theme.BottomSheetPosition,
      right: theme.BottomSheetPosition,
    },
  });
};

export default bottomSheetStyle;
