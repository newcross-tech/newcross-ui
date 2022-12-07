import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const fabGroupStyle = (theme: ThemeDesignTokens) => {
  const {
    FabShadowColor,
    FabShadowOffsetWidth,
    FabShadowOffsetHeight,
    FabShadowRadius,
    FabShadowElevation,
    FabShadowOpacity,
    FabGroupBorderRounded,
    FabGroupDividerColor,
    FabGroupDividerWidth,
    FabGroupDividerHeight,
    FabGroupDividerMargin,
    FabGroupPaddingHorizontal,
    FabGroupBackgroundColor,
  } = theme;

  return StyleSheet.create({
    containerStyle: {
      zIndex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: FabGroupBorderRounded,
      overflow: 'hidden',
      paddingHorizontal: FabGroupPaddingHorizontal,
      backgroundColor: FabGroupBackgroundColor,

      shadowColor: FabShadowColor,
      shadowOffset: {
        width: FabShadowOffsetWidth,
        height: FabShadowOffsetHeight,
      },
      shadowRadius: FabShadowRadius,
      shadowOpacity: FabShadowOpacity,
      elevation: FabShadowElevation,
    },
    childrenStyles: {
      borderRadius: 0,
      paddingHorizontal: 0,
      minWidth: undefined,
    },
    dividerStyle: {
      backgroundColor: FabGroupDividerColor,
      width: FabGroupDividerWidth,
      height: FabGroupDividerHeight,
      marginHorizontal: FabGroupDividerMargin,
    },
  });
};

export default fabGroupStyle;
