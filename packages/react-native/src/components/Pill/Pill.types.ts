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
  theme: ThemeDesignTokens,
  disabled: boolean,
  selected: boolean
): Record<PillVariant, string> => ({
  [PillVariant.default]: disabled
    ? theme.PillDisabledBackgroundColor
    : selected
    ? theme.PillSelectedBackgroundColor
    : theme.PillVariantDefaultBackgroundColor,
  [PillVariant.info]: disabled
    ? theme.PillDisabledBackgroundColor
    : theme.PillVariantInfoBackgroundColor,
  [PillVariant.success]: disabled
    ? theme.PillDisabledBackgroundColor
    : theme.PillVariantSuccessBackgroundColor,
  [PillVariant.warning]: disabled
    ? theme.PillDisabledBackgroundColor
    : theme.PillVariantWarningBackgroundColor,
  [PillVariant.error]: disabled
    ? theme.PillDisabledBackgroundColor
    : theme.PillVariantErrorBackgroundColor,
});

export const getPillTextColor = (
  theme: ThemeDesignTokens,
  disabled: boolean
): Record<PillVariant, string> => ({
  [PillVariant.default]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantDefaultTextColor,
  [PillVariant.info]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantInfoTextColor,
  [PillVariant.success]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantSuccessTextColor,
  [PillVariant.warning]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantWarningTextColor,
  [PillVariant.error]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantErrorTextColor,
});

export const getPillBorderColor = (
  theme: ThemeDesignTokens,
  disabled: boolean
): Record<PillVariant, string> => ({
  [PillVariant.default]: disabled
    ? theme.PillDisabledBorderColor
    : theme.PillVariantDefaultBorderColor,
  [PillVariant.info]: disabled
    ? theme.PillDisabledBorderColor
    : theme.PillVariantInfoBorderColor,
  [PillVariant.success]: disabled
    ? theme.PillDisabledBorderColor
    : theme.PillVariantSuccessBorderColor,
  [PillVariant.warning]: disabled
    ? theme.PillDisabledBorderColor
    : theme.PillVariantWarningBorderColor,
  [PillVariant.error]: disabled
    ? theme.PillDisabledBorderColor
    : theme.PillVariantErrorBorderColor,
});

export const getPillIconColor = (
  theme: ThemeDesignTokens,
  disabled: boolean
): Record<PillVariant, string> => ({
  [PillVariant.default]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantDefaultIconColor,
  [PillVariant.info]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantInfoIconColor,
  [PillVariant.success]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantSuccessIconColor,
  [PillVariant.warning]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantWarningIconColor,
  [PillVariant.error]: disabled
    ? theme.PillDisabledColor
    : theme.PillVariantErrorIconColor,
});
