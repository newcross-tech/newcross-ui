import { TypographyVariant, TypographySettings } from './Typography.types';

export const typographyConfig: Record<TypographyVariant, TypographySettings> = {
  // Headings
  [TypographyVariant.h1]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize32',
    lineHeight: 'BaselineFontFontSize40',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveFontSize: 'BaselineFontFontSize28',
  },
  [TypographyVariant.h2]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize28',
    lineHeight: 'BaselineFontFontSize32',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveFontSize: 'BaselineFontFontSize24',
  },
  [TypographyVariant.h3]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize24',
    lineHeight: 'BaselineFontFontSize32',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveFontSize: 'BaselineFontFontSize20',
  },
  [TypographyVariant.h4]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize20',
    lineHeight: 'BaselineFontFontSize28',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveFontSize: 'BaselineFontFontSize18',
  },
  [TypographyVariant.h5]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveFontSize: 'BaselineFontFontSize16',
  },

  // Paragraphs
  [TypographyVariant.p1]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightRegular',
  },
  [TypographyVariant.p2]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightRegular',
  },
  [TypographyVariant.p3]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize12',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightRegular',
  },
  [TypographyVariant.p4]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize10',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightRegular',
  },

  // Strong Paragraphs
  [TypographyVariant.p1Strong]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
  },
  [TypographyVariant.p2Strong]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
  },
  [TypographyVariant.p3Strong]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize12',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightSemiBold',
  },
  [TypographyVariant.p4Strong]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize10',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightSemiBold',
  },

  // Action Paragraphs
  [TypographyVariant.p1Action]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },
  [TypographyVariant.p2Action]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },
  [TypographyVariant.p3Action]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize12',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },
  [TypographyVariant.p4Action]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize10',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },

  // Action Paragraphs (Regular)
  [TypographyVariant.p1ActionRegular]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },
  [TypographyVariant.p2ActionRegular]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },
  [TypographyVariant.p3ActionRegular]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize12',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },
  [TypographyVariant.p4ActionRegular]: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize10',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightRegular',
    capitaliseText: true,
  },
};
