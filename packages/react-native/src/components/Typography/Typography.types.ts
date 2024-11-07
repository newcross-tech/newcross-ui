import { TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontWeight } from '../../types';

export enum TypographyVariant {
  // Legacy Variants
  heading1 = 'heading1',
  heading2 = 'heading2',
  heading3 = 'heading3',
  heading4 = 'heading4',
  heading5 = 'heading5',
  paragraph1 = 'paragraph1',
  paragraph2 = 'paragraph2',
  paragraph3 = 'paragraph3',
  paragraph4 = 'paragraph4',
  // New Variants
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  p1 = 'p1',
  p2 = 'p2',
  p3 = 'p3',
  p1Strong = 'p1Strong',
  p2Strong = 'p2Strong',
  p3Strong = 'p3Strong',
  p1Action = 'p1Action',
  p2Action = 'p2Action',
  p3Action = 'p3Action',
  p1ActionRegular = 'p1ActionRegular',
  p2ActionRegular = 'p2ActionRegular',
  p3ActionRegular = 'p3ActionRegular',
}

export const getTypographyValues = (
  theme: ThemeDesignTokens
): Record<TypographyVariant, TextStyle> => ({
  // Legacy Headings
  [TypographyVariant.heading1]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize28,
    lineHeight: theme.BaselineFontFontSize40,
    fontWeight: theme.BaselineFontFontWeightBold as FontWeight,
  },
  [TypographyVariant.heading2]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize20,
    lineHeight: theme.BaselineFontFontSize32,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.heading3]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.heading4]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize14,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.heading5]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize12,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  // Legacy Paragraphs
  [TypographyVariant.paragraph1]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
  },
  [TypographyVariant.paragraph2]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize14,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
  },
  [TypographyVariant.paragraph3]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize12,
    lineHeight: theme.BaselineFontFontSize18,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
  },
  [TypographyVariant.paragraph4]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize10,
    lineHeight: theme.BaselineFontFontSize16,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
  },
  // Headings
  [TypographyVariant.h1]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize28,
    lineHeight: theme.BaselineFontFontSize42,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h2]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize20,
    lineHeight: theme.BaselineFontFontSize30,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h3]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h4]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize14,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h5]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize12,
    lineHeight: theme.BaselineFontFontSize18,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },

  // Paragraphs
  [TypographyVariant.p1]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
  },
  [TypographyVariant.p2]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize14,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
  },
  [TypographyVariant.p3]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize12,
    lineHeight: theme.BaselineFontFontSize18,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
  },

  // Strong Paragraphs
  [TypographyVariant.p1Strong]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.p2Strong]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize14,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.p3Strong]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize12,
    lineHeight: theme.BaselineFontFontSize18,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },

  // Action Paragraphs
  [TypographyVariant.p1Action]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
    textTransform: 'capitalize',
  },
  [TypographyVariant.p2Action]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize14,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
    textTransform: 'capitalize',
  },
  [TypographyVariant.p3Action]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize12,
    lineHeight: theme.BaselineFontFontSize18,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
    textTransform: 'capitalize',
  },

  // Action Paragraphs (Regular)
  [TypographyVariant.p1ActionRegular]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
    textTransform: 'capitalize',
  },
  [TypographyVariant.p2ActionRegular]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize14,
    lineHeight: theme.BaselineFontFontSize20,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
    textTransform: 'capitalize',
  },
  [TypographyVariant.p3ActionRegular]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize12,
    lineHeight: theme.BaselineFontFontSize18,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
    textTransform: 'capitalize',
  },
});
