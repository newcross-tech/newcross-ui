import { ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { CardProps } from './Card';

export enum CardColors {
  primary = 'primary',
  secondary = 'secondary',
}

export type ThemedCardProps = CardProps & { theme: ThemeDesignTokens };

export const getColorValues = (
  theme: ThemeDesignTokens
): Record<CardColors, string> => ({
  [CardColors.primary]: theme.CardBorderColorPrimary,
  [CardColors.secondary]: theme.CardBorderColorSecondary,
});

export const getContentBorderRadiusValues = (
  hasThumbnailContent: boolean,
  hasRoundedCorners: boolean | undefined,
  { CardBorderRadius }: ThemeDesignTokens
): ViewStyle => {
  if (hasThumbnailContent) {
    return {
      borderTopRightRadius: hasRoundedCorners ? CardBorderRadius : 0,
      borderBottomRightRadius: hasRoundedCorners ? CardBorderRadius : 0,
    };
  }

  return { borderRadius: hasRoundedCorners ? CardBorderRadius : 0 };
};
