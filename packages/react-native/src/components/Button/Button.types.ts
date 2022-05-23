import { ViewStyle, TextStyle } from 'react-native';
import { FontWeight } from '../../types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ButtonProps } from './Button';

export enum ButtonCorners {
  pill = 'pill',
  rounded = 'rounded',
}

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  outlinePrimary = 'outline-primary',
}

export enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
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
  disabled: ButtonProps
) => ({
  [ButtonVariant.outlinePrimary]: {
    borderWidth: theme.ButtonVariantOutlinePrimaryBorderWidth,
    borderColor: disabled
      ? theme.ButtonVariantOutlinePrimaryDisabledBorderColor
      : theme.ButtonVariantOutlinePrimaryBorderColor,
  },
});

export const getColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryColor,
  [ButtonVariant.outlinePrimary]: theme.ButtonVariantOutlinePrimaryColor,
});

export const getPressedColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryColor,
  [ButtonVariant.outlinePrimary]: theme.ButtonVariantOutlinePrimaryPressedColor,
});

export const getDisabledColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryColor,
  [ButtonVariant.outlinePrimary]:
    theme.ButtonVariantOutlinePrimaryDisabledColor,
});

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryBackgroundColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryBackgroundColor,
  [ButtonVariant.outlinePrimary]:
    theme.ButtonVariantOutlinePrimaryBackgroundColor,
});

export const getPressedBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryPressedBackgroundColor,
  [ButtonVariant.secondary]: theme.ButtonVariantSecondaryPressedBackgroundColor,
  [ButtonVariant.outlinePrimary]:
    theme.ButtonVariantOutlinePrimaryPressedBackgroundColor,
});

export const getDisabledBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonVariant, string> => ({
  [ButtonVariant.primary]: theme.ButtonVariantPrimaryDisabledBackgroundColor,
  [ButtonVariant.secondary]:
    theme.ButtonVariantSecondaryDisabledBackgroundColor,
  [ButtonVariant.outlinePrimary]:
    theme.ButtonVariantOutlinePrimaryDisabledBackgroundColor,
});

export const getPaddingValues = (
  theme: ThemeDesignTokens
): Record<ButtonSizes, ViewStyle> => ({
  [ButtonSizes.small]: {
    paddingVertical: theme.ButtonSmallPaddingVertical,
    paddingHorizontal: theme.ButtonSmallPaddingHorizontal,
  },
  [ButtonSizes.medium]: {
    paddingVertical: theme.ButtonMediumPaddingVertical,
    paddingHorizontal: theme.ButtonMediumPaddingHorizontal,
  },
  [ButtonSizes.large]: {
    paddingVertical: theme.ButtonLargePaddingVertical,
    paddingHorizontal: theme.ButtonLargePaddingHorizontal,
  },
});

export const getTypographyValues = (
  theme: ThemeDesignTokens
): Record<ButtonSizes, TextStyle> => ({
  [ButtonSizes.small]: {
    fontSize: theme.ButtonSmallFontSize,
    lineHeight: theme.ButtonSmallLineHeight,
    fontWeight: theme.ButtonSmallFontWeight as FontWeight,
  },
  [ButtonSizes.medium]: {
    fontSize: theme.ButtonMediumFontSize,
    lineHeight: theme.ButtonMediumLineHeight,
    fontWeight: theme.ButtonMediumFontWeight as FontWeight,
  },
  [ButtonSizes.large]: {
    fontSize: theme.ButtonLargeFontSize,
    lineHeight: theme.ButtonLargeLineHeight,
    fontWeight: theme.ButtonLargeFontWeight as FontWeight,
  },
});

export const getIconSize = (
  theme: ThemeDesignTokens
): Record<ButtonSizes, TextStyle> => ({
  [ButtonSizes.small]: {
    height: theme.ButtonSmallIconSize,
    width: theme.ButtonSmallIconSize,
  },
  [ButtonSizes.medium]: {
    height: theme.ButtonMediumIconSize,
    width: theme.ButtonMediumIconSize,
  },
  [ButtonSizes.large]: {
    height: theme.ButtonLargeIconSize,
    width: theme.ButtonLargeIconSize,
  },
});
