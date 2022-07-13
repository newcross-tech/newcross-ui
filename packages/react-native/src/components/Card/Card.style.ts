import { StyleSheet } from 'react-native';
import {
  CardColors,
  getColorValues,
  getContentBorderRadiusValues,
  ThemedCardProps,
} from './Card.types';

const cardStyle = ({
  thumbnailContent,
  hasBorder,
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

  const {
    CardPadding,
    CardBorderWidth,
    CardBorderRadius,
    CardShadowColor,
    CardShadowElevation,
    CardShadowOpacity,
    CardShadowRadius,
    ColorBaseWhite,
    SpacingBase12,
  } = theme;

  return StyleSheet.create({
    container: {
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
      shadowColor: CardShadowColor,
      elevation: CardShadowElevation,
      shadowOpacity: CardShadowOpacity,
      shadowRadius: CardShadowRadius,
      borderRadius: hasRoundedCorners ? CardBorderRadius : 0,
      flexDirection: 'row',
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
      backgroundColor: ColorBaseWhite,
    },
    rightIcon: {
      marginLeft: SpacingBase12,
    },
  });
};

export default cardStyle;
