import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FABVariant, getContainerStyle } from './FloatingActionButton.types';

const fabStyle = (
  variant: FABVariant,
  theme: ThemeDesignTokens,
  hasShadow: boolean,
  hasContentGreaterOne: boolean,
  hasIcon: boolean
) => {
  const {
    FabColor,
    FabBorderRadius,
    FabContentColor,
    FabShadowColor,
    FabShadowOffsetWidth,
    FabShadowOffsetHeight,
    FabShadowRadius,
    FabShadowElevation,
    FabShadowOpacity,
    FabIconMarginLeft,
    FabTextMarginLeft,
    FabPadding,
  } = theme;
  const containerStyle = getContainerStyle(theme);

  const shadowStyles = hasShadow && {
    shadowColor: FabShadowColor,
    shadowOffset: {
      width: FabShadowOffsetWidth,
      height: FabShadowOffsetHeight,
    },
    shadowRadius: FabShadowRadius,
    shadowOpacity: FabShadowOpacity,
    elevation: FabShadowElevation,
  };

  return StyleSheet.create({
    container: {
      zIndex: 2,
      backgroundColor: FabColor,
      borderRadius: FabBorderRadius,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      ...containerStyle[variant],
      ...shadowStyles,
      paddingHorizontal: hasContentGreaterOne ? FabPadding : undefined,
    },
    text: {
      marginLeft: hasIcon ? FabTextMarginLeft : undefined,
      color: FabContentColor,
    },
    selectedIcon: {
      marginLeft: hasContentGreaterOne ? FabIconMarginLeft : undefined,
    },
  });
};

export default fabStyle;
