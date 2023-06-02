import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { TypographyVariant } from '../Typography';

export enum PillSizes {
  small = 'small',
  medium = 'medium',
}

export enum PillStatus {
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
): Record<PillStatus, string> => ({
  [PillStatus.default]: theme.PillStatusDefaultBackgroundColor,
  [PillStatus.info]: theme.PillStatusInfoBackgroundColor,
  [PillStatus.success]: theme.PillStatusSuccessBackgroundColor,
  [PillStatus.warning]: theme.PillStatusWarningBackgroundColor,
  [PillStatus.error]: theme.PillStatusErrorBackgroundColor,
});

export const getPillTextColor = (
  theme: ThemeDesignTokens
): Record<PillStatus, string> => ({
  [PillStatus.default]: theme.PillStatusDefaultTextColor,
  [PillStatus.info]: theme.PillStatusInfoTextColor,
  [PillStatus.success]: theme.PillStatusSuccessTextColor,
  [PillStatus.warning]: theme.PillStatusWarningTextColor,
  [PillStatus.error]: theme.PillStatusErrorTextColor,
});

export const getPillBorderColor = (
  theme: ThemeDesignTokens
): Record<PillStatus, string> => ({
  [PillStatus.default]: theme.PillStatusDefaultBorderColor,
  [PillStatus.info]: theme.PillStatusInfoBorderColor,
  [PillStatus.success]: theme.PillStatusSuccessBorderColor,
  [PillStatus.warning]: theme.PillStatusWarningBorderColor,
  [PillStatus.error]: theme.PillStatusErrorBorderColor,
});

export const getPillIconColor = (
  theme: ThemeDesignTokens
): Record<PillStatus, string> => ({
  [PillStatus.default]: theme.PillStatusDefaultIconColor,
  [PillStatus.info]: theme.PillStatusInfoIconColor,
  [PillStatus.success]: theme.PillStatusSuccessIconColor,
  [PillStatus.warning]: theme.PillStatusWarningIconColor,
  [PillStatus.error]: theme.PillStatusErrorIconColor,
});
