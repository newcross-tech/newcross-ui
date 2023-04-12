import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const fabGroupStyle = (theme: ThemeDesignTokens) => {
  const {
    FabGroupShadowColor,
    FabGroupShadowOffsetWidth,
    FabGroupShadowOffsetHeight,
    FabGroupShadowRadius,
    FabGroupShadowElevation,
    FabGroupShadowOpacity,
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
      paddingHorizontal: FabGroupPaddingHorizontal,
      backgroundColor: FabGroupBackgroundColor,

      shadowColor: FabGroupShadowColor,
      shadowOffset: {
        width: FabGroupShadowOffsetWidth,
        height: FabGroupShadowOffsetHeight,
      },
      shadowRadius: FabGroupShadowRadius,
      shadowOpacity: FabGroupShadowOpacity,
      elevation: FabGroupShadowElevation,
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
