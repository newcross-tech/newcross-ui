import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { AlertVariant } from '../../types/AlertVariant';

export const getBackgroundColorValues = (theme: ThemeDesignTokens) => ({
  [AlertVariant.info]: theme.ToastStatusInfoBackgroundColor,
  [AlertVariant.success]: theme.ToastStatusSuccessBackgroundColor,
  [AlertVariant.warning]: theme.ToastStatusWarningBackgroundColor,
  [AlertVariant.error]: theme.ToastStatusErrorBackgroundColor,
});

export const getStatusIconColorValues = (theme: ThemeDesignTokens) => ({
  [AlertVariant.info]: theme.ToastStatusInfoIconColor,
  [AlertVariant.success]: theme.ToastStatusSuccessIconColor,
  [AlertVariant.warning]: theme.ToastStatusWarningIconColor,
  [AlertVariant.error]: theme.ToastStatusErrorIconColor,
});
