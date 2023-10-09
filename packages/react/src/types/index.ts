import { ThemeDesignTokens } from '../theme/ThemeProvider';
export type AlertVariant = 'success' | 'warning' | 'error' | 'info';
export type FontWeight = '400' | '600' | '700' | '800';
export type TestProp = { testID?: string };
export type Theme = {
  theme: ThemeDesignTokens;
};
export type ExtendedTheme<T> = Theme & T;
export type Mode = 'dark' | 'light';
