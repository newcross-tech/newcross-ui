import { ThemeDesignTokens } from '../theme/ThemeProvider';
export type AlertVariant =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'notification';
export type FontWeight = '400' | '600' | '700' | '800';
export type TestProp = { testID?: string };
export type Theme = {
  theme: ThemeDesignTokens;
};
export type ExtendedTheme<T> = Theme & T;
export type Mode = 'dark' | 'light';

export type LegacyThemeSpacing = keyof Pick<
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

export type NewThemeSpacing = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineSpacesSpace0'
  | 'BaselineSpacesSpace4'
  | 'BaselineSpacesSpace8'
  | 'BaselineSpacesSpace12'
  | 'BaselineSpacesSpace16'
  | 'BaselineSpacesSpace20'
  | 'BaselineSpacesSpace24'
  | 'BaselineSpacesSpace28'
  | 'BaselineSpacesSpace32'
  | 'BaselineSpacesSpace36'
  | 'BaselineSpacesSpace40'
  | 'BaselineSpacesSpace44'
  | 'BaselineSpacesSpace48'
  | 'BaselineSpacesSpace52'
  | 'BaselineSpacesSpace56'
  | 'BaselineSpacesSpace60'
  | 'BaselineSpacesSpace64'
  | 'BaselineSpacesSpaceInfinite'
>;

export type ThemeSpacing = LegacyThemeSpacing | NewThemeSpacing;

export type ThemeBreakpoints = keyof Pick<
  ThemeDesignTokens,
  'BreakpointsSm' | 'BreakpointsMd' | 'BreakpointsLg' | 'BreakpointsXl'
>;

export type SemanticSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type SemanticBreakpoints = 'sm' | 'md' | 'lg' | 'xl';

export const responsiveSpacingMap: Record<
  SemanticSpacing,
  Record<SemanticBreakpoints, NewThemeSpacing>
> = {
  xs: {
    sm: 'BaselineSpacesSpace4',
    md: 'BaselineSpacesSpace4',
    lg: 'BaselineSpacesSpace4',
    xl: 'BaselineSpacesSpace4',
  },
  sm: {
    sm: 'BaselineSpacesSpace8',
    md: 'BaselineSpacesSpace8',
    lg: 'BaselineSpacesSpace8',
    xl: 'BaselineSpacesSpace8',
  },
  md: {
    sm: 'BaselineSpacesSpace16',
    md: 'BaselineSpacesSpace16',
    lg: 'BaselineSpacesSpace16',
    xl: 'BaselineSpacesSpace16',
  },
  lg: {
    sm: 'BaselineSpacesSpace20',
    md: 'BaselineSpacesSpace24',
    lg: 'BaselineSpacesSpace28',
    xl: 'BaselineSpacesSpace28',
  },
  xl: {
    sm: 'BaselineSpacesSpace32',
    md: 'BaselineSpacesSpace36',
    lg: 'BaselineSpacesSpace44',
    xl: 'BaselineSpacesSpace44',
  },
  xxl: {
    sm: 'BaselineSpacesSpace44',
    md: 'BaselineSpacesSpace48',
    lg: 'BaselineSpacesSpace52',
    xl: 'BaselineSpacesSpace52',
  },
};
