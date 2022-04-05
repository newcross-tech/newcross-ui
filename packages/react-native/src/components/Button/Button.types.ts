import { ViewStyle, TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ButtonProps } from './Button';

export enum Colors {
  primary = 'primary',
  secondary = 'secondary',
}

export enum Sizes {
  default = 'default',
  small = 'small',
}

export type PressedButtonProps = ButtonProps & { pressed: boolean };

export const getColorValues = (
  theme: ThemeDesignTokens
): Record<Colors, string> => ({
  [Colors.primary]: theme.ButtonPrimaryColor,
  [Colors.secondary]: theme.ButtonSecondaryColor,
});

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<Colors, string> => ({
  [Colors.primary]: theme.ButtonPrimaryBackgroundColor,
  [Colors.secondary]: theme.ButtonSecondaryBackgroundColor,
});

export const getPressedBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<Colors, string> => ({
  [Colors.primary]: theme.ButtonPrimaryPressedBackgroundColor,
  [Colors.secondary]: theme.ButtonSecondaryPressedBackgroundColor,
});

export const getDisabledBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<Colors, string> => ({
  [Colors.primary]: theme.ButtonPrimaryDisabledBackgroundColor,
  [Colors.secondary]: theme.ButtonSecondaryDisabledBackgroundColor,
});

export const getPaddingValues = (
  theme: ThemeDesignTokens
): Record<Sizes, ViewStyle> => ({
  [Sizes.default]: {
    paddingVertical: theme.ButtonPaddingVertical,
    paddingHorizontal: theme.ButtonPaddingHorizontal,
  },
  [Sizes.small]: {
    paddingVertical: theme.ButtonSmallPaddingVertical,
    paddingHorizontal: theme.ButtonSmallPaddingHorizontal,
  },
});

export const getTypographyValues = (
  theme: ThemeDesignTokens
): Record<Sizes, TextStyle> => ({
  [Sizes.default]: {
    fontSize: theme.ButtonFontSize,
    lineHeight: theme.ButtonLineHeight,
  },
  [Sizes.small]: {
    fontSize: theme.ButtonSmallFontSize,
    lineHeight: theme.ButtonSmallLineHeight,
  },
});
