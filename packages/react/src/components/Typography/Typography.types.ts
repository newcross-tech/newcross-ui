import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { SemanticBreakpoints } from '../../types';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p1Strong'
  | 'p2Strong'
  | 'p3Strong'
  | 'p1Action'
  | 'p2Action'
  | 'p3Action'
  | 'p1ActionRegular'
  | 'p2ActionRegular'
  | 'p3ActionRegular';

type TypographyTags = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
>;

export type TypographyColors =
  | 'defaultDark'
  | 'defaultLight'
  | 'defaultDarkSecondary'
  | 'actionPrimaryDark'
  | 'actionSecondaryLight'
  | 'actionDanger'
  | 'disabled'
  | 'success'
  | 'successStandalone'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dangerError';

export type TypographyAlignment = 'center' | 'left' | 'right' | 'justify';

export type TypographyFontSizes = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontSize12'
  | 'BaselineFontFontSize14'
  | 'BaselineFontFontSize16'
  | 'BaselineFontFontSize18'
  | 'BaselineFontFontSize20'
  | 'BaselineFontFontSize22'
  | 'BaselineFontFontSize28'
  | 'BaselineFontFontSize32'
>;

export type TypographyLineHeights = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontLineHeight18'
  | 'BaselineFontLineHeight20'
  | 'BaselineFontLineHeight24'
  | 'BaselineFontLineHeight28'
  | 'BaselineFontLineHeight30'
  | 'BaselineFontLineHeight38'
  | 'BaselineFontLineHeight42'
  | 'BaselineFontLineHeight46'
>;

export type TypographyFontWeights = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontWeightRegular'
  | 'BaselineFontFontWeightMedium'
  | 'BaselineFontFontWeightSemiBold'
  | 'BaselineFontFontWeightBold'
>;

export type TypographyFontFamily = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontFamilyPoppinsRegular'
  | 'BaselineFontFontFamilyPoppinsSemiBold'
  | 'BaselineFontFontFamilyPoppinsBold'
  | 'BaselineFontFontFamilyPoppinsExtraBold'
>;

type TypographyResponsiveSettings = {
  fontSize: TypographyFontSizes;
  lineHeight: TypographyLineHeights;
};

export type TypographySettings = {
  fontFamily: TypographyFontFamily;
  fontSize: TypographyFontSizes;
  lineHeight: TypographyLineHeights;
  fontWeight: TypographyFontWeights;
  responsiveness?: Partial<
    Record<SemanticBreakpoints, TypographyResponsiveSettings>
  >;
  capitaliseText?: boolean;
  semanticTag: TypographyTags;
};
