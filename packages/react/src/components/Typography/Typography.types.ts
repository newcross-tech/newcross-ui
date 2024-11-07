import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { SemanticBreakpoints } from '../../types';

// --------------------------------------------------------------------------------
// Legacy Types for Backward Compatibility
// --------------------------------------------------------------------------------

type LegacyTypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'subtitle1'
  | 'subtitle2'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3'
  | 'paragraph4';

type LegacyTypographyFontSizes = keyof Pick<
  ThemeDesignTokens,
  'BaselineFontFontSize10' | 'BaselineFontFontSize24'
>;

type LegacyTypographyLineHeights = keyof Pick<
  ThemeDesignTokens,
  'BaselineFontFontSize16' | 'BaselineFontFontSize32' | 'BaselineFontFontSize40'
>;

type LegacyTypographyTags = keyof Pick<JSX.IntrinsicElements, 'h6'>;

// --------------------------------------------------------------------------------
// Combined and Extended Types (Supporting Both Legacy and New Variants)
// --------------------------------------------------------------------------------

export type TypographyVariant =
  | LegacyTypographyVariant
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

export type TypographyFontSizes =
  | LegacyTypographyFontSizes
  | keyof Pick<
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

export type TypographyLineHeights =
  | LegacyTypographyLineHeights
  | keyof Pick<
      ThemeDesignTokens,
      | 'BaselineFontFontSize18'
      | 'BaselineFontFontSize20'
      | 'BaselineFontFontSize24'
      | 'BaselineFontFontSize28'
      | 'BaselineFontFontSize30'
      | 'BaselineFontFontSize38'
      | 'BaselineFontFontSize42'
      | 'BaselineFontFontSize46'
    >;

type TypographyTags =
  | LegacyTypographyTags
  | keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'>;

// --------------------------------------------------------------------------------
// Typography Configuration and Style Properties
// --------------------------------------------------------------------------------

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

export type TypographyFontWeights = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontWeightRegular'
  | 'BaselineFontFontWeightSemiBold'
  | 'BaselineFontFontWeightBold'
  | 'BaselineFontFontWeightExtraBold'
>;

export type TypographyFontFamily = keyof Pick<
  ThemeDesignTokens,
  | 'BaselineFontFontFamilyPoppinsRegular'
  | 'BaselineFontFontFamilyPoppinsSemiBold'
  | 'BaselineFontFontFamilyPoppinsBold'
  | 'BaselineFontFontFamilyPoppinsExtraBold'
>;

// --------------------------------------------------------------------------------
// Responsive and Complete Typography Styles
// --------------------------------------------------------------------------------

export type TypographyResponsiveStyles = {
  fontSize: TypographyFontSizes;
  lineHeight: TypographyLineHeights;
};

export type TypographyStyles = {
  fontFamily: TypographyFontFamily;
  fontSize: TypographyFontSizes;
  lineHeight: TypographyLineHeights;
  fontWeight: TypographyFontWeights;
  responsiveness?: Partial<
    Record<SemanticBreakpoints, TypographyResponsiveStyles>
  >;
  capitaliseText?: boolean;
  semanticTag: TypographyTags;
};
