import { TextStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontWeight } from '../../types';

export enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  p1 = 'p1',
  p2 = 'p2',
  p3 = 'p3',
  p4 = 'p4',
  p1Strong = 'p1Strong',
  p2Strong = 'p2Strong',
  p3Strong = 'p3Strong',
  p4Strong = 'p4Strong',
  p1Action = 'p1Action',
  p2Action = 'p2Action',
  p3Action = 'p3Action',
  p4Action = 'p4Action',
  p1ActionRegular = 'p1ActionRegular',
  p2ActionRegular = 'p2ActionRegular',
  p3ActionRegular = 'p3ActionRegular',
  p4ActionRegular = 'p4ActionRegular',
}

export const getTypographyValues = (
  theme: ThemeDesignTokens
): Record<TypographyVariant, TextStyle> => ({
  // Headings
  [TypographyVariant.h1]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize28,
    lineHeight: theme.BaselineFontFontSize40,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h2]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize24,
    lineHeight: theme.BaselineFontFontSize32,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h3]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize20,
    lineHeight: theme.BaselineFontFontSize32,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h4]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize18,
    lineHeight: theme.BaselineFontFontSize28,
    fontWeight: theme.BaselineFontFontWeightSemiBold as FontWeight,
  },
  [TypographyVariant.h5]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize16,
    lineHeight: theme.BaselineFontFontSize24,
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
  [TypographyVariant.p4]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize10,
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
  [TypographyVariant.p4Strong]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
    fontSize: theme.BaselineFontFontSize10,
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
  [TypographyVariant.p4Action]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize10,
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
  [TypographyVariant.p4ActionRegular]: {
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize10,
    lineHeight: theme.BaselineFontFontSize18,
    fontWeight: theme.BaselineFontFontWeightRegular as FontWeight,
    textTransform: 'capitalize',
  },
});
