import { StyleSheet } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FABVariant, getContainerStyle } from './FloatingActionButton.types';

const fabStyle = (variant: FABVariant, theme: ThemeDesignTokens) => {
  const {
    FabContainerColor,
    FabContainerBorderRadius,
    FabContentColor,
    FabContentWithTextMarginRight,
    FabContainerShadowColor,
    FabContainerShadowOffsetWidth,
    FabContainerShadowOffsetHeight,
    FabContainerShadowRadius,
    FabContainerShadowElevation,
    FabContainerShadowOpacity,
  } = theme;
  const containerStyle = getContainerStyle(theme);
  const isWithText = variant === 'iconWithText';

  return StyleSheet.create({
    container: {
      backgroundColor: FabContainerColor,
      borderRadius: FabContainerBorderRadius,
      shadowColor: FabContainerShadowColor,
      shadowOffset: {
        width: FabContainerShadowOffsetWidth,
        height: FabContainerShadowOffsetHeight,
      },
      shadowRadius: FabContainerShadowRadius,
      shadowOpacity: FabContainerShadowOpacity,
      elevation: FabContainerShadowElevation,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      ...containerStyle[variant],
    },
    textContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
    },
    content: {
      color: FabContentColor,
    },
    iconWithText: {
      marginRight: isWithText ? FabContentWithTextMarginRight : 0,
    },
  });
};

export default fabStyle;
