import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { SemanticVariant } from '../../types';

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<SemanticVariant, string> => ({
  [SemanticVariant.info]: theme.ToastStatusInfoBackgroundColor,
  [SemanticVariant.success]: theme.ToastStatusSuccessBackgroundColor,
  [SemanticVariant.warning]: theme.ToastStatusWarningBackgroundColor,
  [SemanticVariant.error]: theme.ToastStatusErrorBackgroundColor,
});

export const getStatusIconColorValues = (
  theme: ThemeDesignTokens
): Record<SemanticVariant, string> => ({
  [SemanticVariant.info]: theme.ToastStatusInfoIconColor,
  [SemanticVariant.success]: theme.ToastStatusSuccessIconColor,
  [SemanticVariant.warning]: theme.ToastStatusWarningIconColor,
  [SemanticVariant.error]: theme.ToastStatusErrorIconColor,
});
