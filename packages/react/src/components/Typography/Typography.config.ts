import { TypographyVariant, TypographySettings } from './Typography.types';

/* *************************************************
 * Note: Ensure that the `responsiveness` object
 * is populated with semantic values in
 * ASCENDING order of screen sizes for proper CSS
 * application and cascading.
 ************************************************* */

export const typographyConfig: Record<TypographyVariant, TypographySettings> = {
  // Headings
  h1: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize32',
    lineHeight: 'BaselineFontLineHeight46',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize28',
        lineHeight: 'BaselineFontLineHeight42',
      },
    },
    semanticTag: 'h1',
  },
  h2: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize22',
    lineHeight: 'BaselineFontLineHeight38',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize20',
        lineHeight: 'BaselineFontLineHeight30',
      },
    },
    semanticTag: 'h2',
  },
  h3: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontLineHeight28',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontLineHeight24',
      },
    },
    semanticTag: 'h3',
  },
  h4: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontLineHeight24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontLineHeight20',
      },
    },
    semanticTag: 'h4',
  },
  h5: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontLineHeight20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontLineHeight18',
      },
    },
    semanticTag: 'h5',
  },

  // Paragraphs
  p1: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontLineHeight28',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontLineHeight24',
      },
    },
    semanticTag: 'p',
  },
  p2: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontLineHeight24',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontLineHeight20',
      },
    },
    semanticTag: 'p',
  },
  p3: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontLineHeight20',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontLineHeight18',
      },
    },
    semanticTag: 'p',
  },

  // Strong Paragraphs
  p1Strong: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontLineHeight28',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontLineHeight24',
      },
    },
    semanticTag: 'p',
  },
  p2Strong: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontLineHeight24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontLineHeight20',
      },
    },
    semanticTag: 'p',
  },
  p3Strong: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontLineHeight20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontLineHeight18',
      },
    },
    semanticTag: 'p',
  },

  // Action Paragraphs
  p1Action: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontLineHeight28',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontLineHeight24',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p2Action: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontLineHeight24',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontLineHeight20',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p3Action: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontLineHeight20',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontLineHeight18',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },

  // Action Paragraphs (Regular)
  p1ActionRegular: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontLineHeight28',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontLineHeight24',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p2ActionRegular: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontLineHeight24',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontLineHeight20',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p3ActionRegular: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontLineHeight20',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontLineHeight18',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
};
