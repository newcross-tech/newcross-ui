import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontWeight } from '../../types';

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
    label: {
      fontFamily: theme.TabsLabelFontFamily,
      fontSize: theme.TabsLabelFontSize,
      fontWeight: theme.TabsLabelFontWeight as FontWeight,
      color: theme.TabsLabelColor,
      lineHeight: theme.TabsLabelLineHeight,
      textAlign: 'center',
      width: '90%',
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
