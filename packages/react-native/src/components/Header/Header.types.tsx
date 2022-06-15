import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export enum HeaderColors {
  primary = 'primary',
  secondary = 'secondary',
}

export const getBackgroundColorValues = (
  theme: ThemeDesignTokens
): Record<HeaderColors, string> => ({
  [HeaderColors.primary]: theme.HeaderBackgroundColorPrimary,
  [HeaderColors.secondary]: theme.HeaderBackgroundColorSecondary,
});
