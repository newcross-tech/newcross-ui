import { ThemeDesignTokens } from '../../theme/ThemeProvider';

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
  | 'BaselineFontFontSize24'
  | 'BaselineFontFontSize26'
  | 'BaselineFontFontSize28'
  | 'BaselineFontFontSize30'
  | 'BaselineFontFontSize32'
  | 'BaselineFontFontSize34'
  | 'BaselineFontFontSize36'
  | 'BaselineFontFontSize38'
  | 'BaselineFontFontSize40'
  | 'BaselineFontFontSize42'
  | 'BaselineFontFontSize44'
  | 'BaselineFontFontSize46'
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

export type TypographySettings = {
  fontFamily: TypographyFontFamily;
  fontSize: TypographyFontSizes;
  lineHeight: TypographyFontSizes;
  fontWeight: TypographyFontWeights;
  responsiveFontSize?: TypographyFontSizes;
  responsiveLineHeight?: TypographyFontSizes;
  capitaliseText?: boolean;
  semanticTag: TypographyTags;
};
