import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { TypographyVariant } from '../Typography';

export enum LinkSizes {
  small = 'small',
  medium = 'medium',
}

export const getTypographySizes = (): Record<LinkSizes, TypographyVariant> => ({
  [LinkSizes.small]: TypographyVariant.paragraph2,
  [LinkSizes.medium]: TypographyVariant.paragraph1,
});

export const getIconSizeValues = (
  theme: ThemeDesignTokens
): Record<LinkSizes, number> => ({
  [LinkSizes.small]: theme.LinkIconSmallSize,
  [LinkSizes.medium]: theme.LinkIconMediumSize,
});
