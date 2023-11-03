import { ThemeDesignTokens } from '../theme/ThemeProvider';
export type AlertVariant = 'success' | 'warning' | 'error' | 'info';
export type FontWeight = '400' | '600' | '700' | '800';
export type TestProp = { testID?: string };
export type Theme = {
  theme: ThemeDesignTokens;
};
export type ExtendedTheme<T> = Theme & T;
export type Mode = 'dark' | 'light';

export type ThemeSpacing = keyof Pick<
  ThemeDesignTokens,
  | 'SpacingBase0'
  | 'SpacingBase4'
  | 'SpacingBase8'
  | 'SpacingBase12'
  | 'SpacingBase16'
  | 'SpacingBase24'
  | 'SpacingBase32'
  | 'SpacingBase40'
  | 'SpacingBase48'
  | 'SpacingBase56'
  | 'SpacingBase64'
  | 'SpacingBase72'
  | 'SpacingBase80'
>;
