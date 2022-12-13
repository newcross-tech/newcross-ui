import { StyleSheet, ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import {
  CardColors,
  getColorValues,
  getContentBorderRadiusValues,
  ThemedCardProps,
} from './Card.types';

const getShadowValues = (theme: ThemeDesignTokens): ViewStyle => ({
  shadowColor: theme.CardShadowColor,
  shadowOffset: {
    width: theme.CardShadowOffsetWidth,
    height: theme.CardShadowOffsetHeight,
  },
  elevation: theme.CardShadowElevation,
  shadowOpacity: theme.CardShadowOpacity,
  shadowRadius: theme.CardShadowRadius,
});

const cardStyle = ({
  thumbnailContent,
  hasBorder,
  hasShadow,
  hasRoundedCorners,
  color,
  fullWidth,
  theme,
  hasRightIcon,
}: ThemedCardProps) => {
  const contentBorderRadiusValues = getContentBorderRadiusValues(
    !!thumbnailContent,
    hasRoundedCorners,
    theme
  );

  const colorValues = getColorValues(theme);
  const shadowValues = hasShadow ? getShadowValues(theme) : {};

  const {
    CardPadding,
    CardBorderWidth,
    CardBorderRadius,
    ColorNeutralWhite,
    SpacingBase12,
  } = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
      borderRadius: hasRoundedCorners ? CardBorderRadius : 0,
      ...shadowValues,
    },
    thumbnail: {
      overflow: 'hidden',
      borderTopLeftRadius: hasRoundedCorners ? CardBorderRadius : 0,
      borderBottomLeftRadius: hasRoundedCorners ? CardBorderRadius : 0,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: hasRightIcon ? 'space-between' : 'flex-start',
      flex: fullWidth ? 1 : undefined,
      padding: CardPadding,
      borderWidth: hasBorder ? CardBorderWidth : 0,
      borderColor: colorValues[color as CardColors],
      ...contentBorderRadiusValues,
      backgroundColor: ColorNeutralWhite,
    },
    rightIcon: {
      marginLeft: SpacingBase12,
    },
  });
};

export default cardStyle;
