import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export enum ToastStatus {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<ToastStatus, string> => ({
  [ToastStatus.info]: theme.ToastStatusInfoBackgroundColor,
  [ToastStatus.success]: theme.ToastStatusSuccessBackgroundColor,
  [ToastStatus.warning]: theme.ToastStatusWarningBackgroundColor,
  [ToastStatus.error]: theme.ToastStatusErrorBackgroundColor,
});

export const getStatusIconColorValues = (
  theme: ThemeDesignTokens
): Record<ToastStatus, string> => ({
  [ToastStatus.info]: theme.ToastStatusInfoIconColor,
  [ToastStatus.success]: theme.ToastStatusSuccessIconColor,
  [ToastStatus.warning]: theme.ToastStatusWarningIconColor,
  [ToastStatus.error]: theme.ToastStatusErrorIconColor,
});
