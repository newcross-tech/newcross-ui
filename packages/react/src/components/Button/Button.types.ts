import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { TypographyVariant } from '../Typography';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonSizes {
  small = 'small',
  large = 'large',
}

export const getTypographyValues = (): Record<
  ButtonSizes,
  TypographyVariant
> => ({
  [ButtonSizes.small]: TypographyVariant.heading4,
  [ButtonSizes.large]: TypographyVariant.heading3,
});

export const getIconSize = (theme: ThemeDesignTokens) => ({
  [ButtonSizes.small]: {
    fontSize: theme.ButtonSizeSmallIconSize,
  },
  [ButtonSizes.large]: {
    fontSize: theme.ButtonSizeLargeIconSize,
  },
});
