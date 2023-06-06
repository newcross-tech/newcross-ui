import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { TypographyVariant } from '../Typography';

export enum PillSizes {
  small = 'small',
  medium = 'medium',
}

export enum PillVariant {
  default = 'default',
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export const getTypographySizes = (): Record<PillSizes, TypographyVariant> => ({
  [PillSizes.small]: TypographyVariant.paragraph3,
  [PillSizes.medium]: TypographyVariant.paragraph1,
});

export const getPillBackgroundColor = (
  theme: ThemeDesignTokens
): Record<PillVariant, string> => ({
  [PillVariant.default]: theme.PillVariantDefaultBackgroundColor,
  [PillVariant.info]: theme.PillVariantInfoBackgroundColor,
  [PillVariant.success]: theme.PillVariantSuccessBackgroundColor,
  [PillVariant.warning]: theme.PillVariantWarningBackgroundColor,
  [PillVariant.error]: theme.PillVariantErrorBackgroundColor,
});

export const getPillTextColor = (
  theme: ThemeDesignTokens
): Record<PillVariant, string> => ({
  [PillVariant.default]: theme.PillVariantDefaultTextColor,
  [PillVariant.info]: theme.PillVariantInfoTextColor,
  [PillVariant.success]: theme.PillVariantSuccessTextColor,
  [PillVariant.warning]: theme.PillVariantWarningTextColor,
  [PillVariant.error]: theme.PillVariantErrorTextColor,
});

export const getPillBorderColor = (
  theme: ThemeDesignTokens
): Record<PillVariant, string> => ({
  [PillVariant.default]: theme.PillVariantDefaultBorderColor,
  [PillVariant.info]: theme.PillVariantInfoBorderColor,
  [PillVariant.success]: theme.PillVariantSuccessBorderColor,
  [PillVariant.warning]: theme.PillVariantWarningBorderColor,
  [PillVariant.error]: theme.PillVariantErrorBorderColor,
});

export const getPillIconColor = (
  theme: ThemeDesignTokens
): Record<PillVariant, string> => ({
  [PillVariant.default]: theme.PillVariantDefaultIconColor,
  [PillVariant.info]: theme.PillVariantInfoIconColor,
  [PillVariant.success]: theme.PillVariantSuccessIconColor,
  [PillVariant.warning]: theme.PillVariantWarningIconColor,
  [PillVariant.error]: theme.PillVariantErrorIconColor,
});
