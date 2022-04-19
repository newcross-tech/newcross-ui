import { TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export enum LinkSizes {
  small = 'small',
  medium = 'medium',
}

export const getTextSizeValues = (
  theme: ThemeDesignTokens
): Record<LinkSizes, TextStyle> => ({
  [LinkSizes.small]: {
    fontSize: theme.LinkTextSmallFontSize,
    lineHeight: theme.LinkTextSmallLineHeight,
  },
  [LinkSizes.medium]: {
    fontSize: theme.LinkTextMediumFontSize,
    lineHeight: theme.LinkTextMediumLineHeight,
  },
});

export const getIconSizeValues = (
  theme: ThemeDesignTokens
): Record<LinkSizes, number> => ({
  [LinkSizes.small]: theme.LinkIconSmallSize,
  [LinkSizes.medium]: theme.LinkIconMediumSize,
});
