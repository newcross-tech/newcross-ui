import { ViewStyle, TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ButtonProps } from './Button';
import { TypographyVariant } from '../Typography';

export enum Mode {
  light = 'light',
  dark = 'dark',
}

export enum ButtonCorners {
  pill = 'pill',
  rounded = 'rounded',
}

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonSizes {
  small = 'small',
  large = 'large',
}

export interface ClonedIcon {
  testId?: string;
  style?: TextStyle;
}

export type PressedButtonProps = ButtonProps & { pressed: boolean };

export const getBorderValues = (
  theme: ThemeDesignTokens
): Record<ButtonCorners, number> => ({
  [ButtonCorners.pill]: theme.ButtonCornersPillBorderRadius,
  [ButtonCorners.rounded]: theme.ButtonCornersRoundedBorderRadius,
});

export const getBorderStyle = (
  theme: ThemeDesignTokens,
  { disabled }: ButtonProps
) => ({
  [ButtonVariant.secondary]: {
    borderWidth: theme.ButtonVariantSecondaryBorderWidth,
    borderColor: disabled
      ? theme.ButtonVariantSecondaryDisabledBorderColor
      : theme.ButtonVariantSecondaryBorderColor,
  },
});

export const getColorValues = (
  theme: ThemeDesignTokens,
  { mode }: ButtonProps
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryColor,
  [ButtonVariant.secondary]:
    mode == Mode.dark
      ? theme.ButtonModeDarkColor
      : theme.ButtonVariantSecondaryColor,
});

export const getPressedColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryColor,
});

export const getDisabledColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryDisabledColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryDisabledColor,
});

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryBackgroundColor,
  [ButtonVariant.secondary]: 'transparent',
});

export const getPressedBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryPressedBackgroundColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryPressedBackgroundColor,
});

export const getDisabledBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryDisabledBackgroundColor,
  [ButtonVariant.secondary]: 'transparent',
});

export const getPaddingValues = (
  theme: ThemeDesignTokens
): Record<ButtonSizes, ViewStyle> => ({
  [ButtonSizes.small]: {
    padding: theme.ButtonSizeSmallPadding,
  },
  [ButtonSizes.large]: {
    padding: theme.ButtonSizeLargePadding,
  },
});

export const getTypographyValues = (): Record<
  ButtonSizes,
  TypographyVariant
> => ({
  [ButtonSizes.small]: TypographyVariant.heading4,
  [ButtonSizes.large]: TypographyVariant.heading3,
});

export const getIconSize = (
  theme: ThemeDesignTokens
): Record<ButtonSizes, TextStyle> => ({
  [ButtonSizes.small]: {
    height: theme.ButtonSizeSmallIconSize,
    width: theme.ButtonSizeSmallIconSize,
  },
  [ButtonSizes.large]: {
    height: theme.ButtonSizeLargeIconSize,
    width: theme.ButtonSizeLargeIconSize,
  },
});
