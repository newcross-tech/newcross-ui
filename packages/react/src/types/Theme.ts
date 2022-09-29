import { ThemeDesignTokens } from '../theme/ThemeProvider';

export type Theme = {
  theme: ThemeDesignTokens;
};

export type ExtendedTheme<T> = Theme & T;
