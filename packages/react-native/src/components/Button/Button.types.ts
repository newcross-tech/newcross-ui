import { ViewStyle, TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ButtonProps } from './Button';

export enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonSizes {
  default = 'default',
  small = 'small',
}

export type PressedButtonProps = ButtonProps & { pressed: boolean };

export const getColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonColors, string> => ({
  [ButtonColors.primary]: theme.ButtonPrimaryColor,
  [ButtonColors.secondary]: theme.ButtonSecondaryColor,
});

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonColors, string> => ({
  [ButtonColors.primary]: theme.ButtonPrimaryBackgroundColor,
  [ButtonColors.secondary]: theme.ButtonSecondaryBackgroundColor,
});

export const getPressedBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonColors, string> => ({
  [ButtonColors.primary]: theme.ButtonPrimaryPressedBackgroundColor,
  [ButtonColors.secondary]: theme.ButtonSecondaryPressedBackgroundColor,
});

export const getDisabledBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ButtonColors, string> => ({
  [ButtonColors.primary]: theme.ButtonPrimaryDisabledBackgroundColor,
  [ButtonColors.secondary]: theme.ButtonSecondaryDisabledBackgroundColor,
});

export const getPaddingValues = (
  theme: ThemeDesignTokens
): Record<ButtonSizes, ViewStyle> => ({
  [ButtonSizes.default]: {
    paddingVertical: theme.ButtonPaddingVertical,
    paddingHorizontal: theme.ButtonPaddingHorizontal,
  },
  [ButtonSizes.small]: {
    paddingVertical: theme.ButtonSmallPaddingVertical,
    paddingHorizontal: theme.ButtonSmallPaddingHorizontal,
  },
});

export const getTypographyValues = (
  theme: ThemeDesignTokens
): Record<ButtonSizes, TextStyle> => ({
  [ButtonSizes.default]: {
    fontSize: theme.ButtonFontSize,
    lineHeight: theme.ButtonLineHeight,
  },
  [ButtonSizes.small]: {
    fontSize: theme.ButtonSmallFontSize,
    lineHeight: theme.ButtonSmallLineHeight,
  },
});
