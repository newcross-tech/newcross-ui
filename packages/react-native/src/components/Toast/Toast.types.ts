import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { Variant } from '../../types';

export enum ToastVariant {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<Variant, string> => ({
  [ToastVariant.info]: theme.ToastStatusInfoBackgroundColor,
  [ToastVariant.success]: theme.ToastStatusSuccessBackgroundColor,
  [ToastVariant.warning]: theme.ToastStatusWarningBackgroundColor,
  [ToastVariant.error]: theme.ToastStatusErrorBackgroundColor,
});

export const getStatusIconColorValues = (
  theme: ThemeDesignTokens
): Record<Variant, string> => ({
  [ToastVariant.info]: theme.ToastStatusInfoIconColor,
  [ToastVariant.success]: theme.ToastStatusSuccessIconColor,
  [ToastVariant.warning]: theme.ToastStatusWarningIconColor,
  [ToastVariant.error]: theme.ToastStatusErrorIconColor,
});
