import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const tabsStyle = (theme: ThemeDesignTokens) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.TabsBackgroundColor,
      borderRadius: theme.TabsBorderRadius,
      paddingVertical: theme.TabsPaddingVertical,
      paddingHorizontal: theme.TabsPaddingHorizontal,
    },
    innerContainer: {
      height: theme.TabsHeight,
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelWithBadgeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      color: theme.TabsLabelColor,
      textAlign: 'center',
      elevation: theme.TabsActiveTabShadowElevation,
    },
    iconStyles: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    labelDisabled: {
      color: theme.TabsLabelDisabledColor,
    },
    tab: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badge: {
      marginLeft: theme.SpacingBase8,
    },
    activeTab: {
      position: 'absolute',
      backgroundColor: theme.TabsActiveTabBackgroundColor,
      borderRadius: theme.TabsActiveTabBorderRadius,
      height: theme.TabsActiveTabHeight,
      alignContent: 'center',
      shadowColor: theme.TabsActiveTabShadowColor,
      shadowRadius: theme.TabsActiveTabShadowRadius,
      shadowOffset: {
        height: theme.TabsActiveTabShadowOffsetHeight,
        width: theme.TabsActiveTabShadowOffsetWidth,
      },
      shadowOpacity: theme.TabsActiveTabShadowOpacity,
    },
    divider: {
      width: theme.TabsDividerWidth / 4,
      height: theme.TabsDividerHeight / 2,
      alignSelf: 'center',
    },
    activeDivider: {
      backgroundColor: theme.TabsDividerBackgroundColor,
    },
    activeTabDisabled: {
      backgroundColor: theme.TabsActiveTabDisabledBackgroundColor,
    },
  });
};

export default tabsStyle;
