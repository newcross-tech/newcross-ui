import { ThemeDesignTokens } from '../../../theme/ThemeProvider';
import { HeaderColors } from '../Header.types';

type FillColorValues = {
  topPathFillColor: string;
  bottomPathFillColor: string;
};

export const getFillColorValues = (
  theme: ThemeDesignTokens
): Record<HeaderColors, FillColorValues> => ({
  [HeaderColors.primary]: {
    topPathFillColor: theme.HeaderBackgroundColorSecondary,
    bottomPathFillColor: theme.HeaderBackgroundColorPrimary,
  },
  [HeaderColors.secondary]: {
    topPathFillColor: theme.HeaderBackgroundColorPrimary,
    bottomPathFillColor: theme.HeaderBackgroundColorSecondary,
  },
});
