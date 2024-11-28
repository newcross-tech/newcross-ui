import { TypographyVariant, TypographyStyles } from './Typography.types';

export const typographyMap: Record<TypographyVariant, TypographyStyles> = {
  //Legacy Headings
  heading1: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize32',
    lineHeight: 'BaselineFontFontSize40',
    fontWeight: 'BaselineFontFontWeightBold',
    semanticTag: 'h1',
  },
  heading2: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize28',
    lineHeight: 'BaselineFontFontSize32',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    semanticTag: 'h2',
  },
  heading3: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize24',
    lineHeight: 'BaselineFontFontSize32',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    semanticTag: 'h3',
  },
  heading4: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize20',
    lineHeight: 'BaselineFontFontSize32',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    semanticTag: 'h4',
  },
  heading5: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    semanticTag: 'h5',
  },
  heading6: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    semanticTag: 'h6',
  },
  // Legacy Subtitles
  subtitle1: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    semanticTag: 'p',
  },
  subtitle2: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize12',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    semanticTag: 'p',
  },
  // Legacy Paragraphs
  paragraph1: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightRegular',
    semanticTag: 'p',
  },
  paragraph2: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightRegular',
    semanticTag: 'p',
  },
  paragraph3: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize12',
    lineHeight: 'BaselineFontFontSize18',
    fontWeight: 'BaselineFontFontWeightRegular',
    semanticTag: 'p',
  },
  paragraph4: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize10',
    lineHeight: 'BaselineFontFontSize16',
    fontWeight: 'BaselineFontFontWeightRegular',
    semanticTag: 'p',
  },
  // Headings
  h1: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize32',
    lineHeight: 'BaselineFontFontSize46',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize28',
        lineHeight: 'BaselineFontFontSize42',
      },
    },
    semanticTag: 'h1',
  },
  h2: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize22',
    lineHeight: 'BaselineFontFontSize38',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize20',
        lineHeight: 'BaselineFontFontSize30',
      },
    },
    semanticTag: 'h2',
  },
  h3: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize28',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontFontSize24',
      },
    },
    semanticTag: 'h3',
  },
  h4: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontFontSize20',
      },
    },
    semanticTag: 'h4',
  },
  h5: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontFontSize18',
      },
    },
    semanticTag: 'h5',
  },

  // Paragraphs
  p1: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize28',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontFontSize24',
      },
    },
    semanticTag: 'p',
  },
  p2: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontFontSize20',
      },
    },
    semanticTag: 'p',
  },
  p3: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontFontSize18',
      },
    },
    semanticTag: 'p',
  },

  // Strong Paragraphs
  p1Strong: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize28',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontFontSize24',
      },
    },
    semanticTag: 'p',
  },
  p2Strong: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontFontSize20',
      },
    },
    semanticTag: 'p',
  },
  p3Strong: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontFontSize18',
      },
    },
    semanticTag: 'p',
  },

  // Action Paragraphs
  p1Action: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize28',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontFontSize24',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p2Action: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontFontSize20',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p3Action: {
    fontFamily: 'BaselineFontFontFamilyPoppinsSemiBold',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightSemiBold',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontFontSize18',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },

  // Action Paragraphs (Regular)
  p1ActionRegular: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize28',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize16',
        lineHeight: 'BaselineFontFontSize24',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p2ActionRegular: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize14',
        lineHeight: 'BaselineFontFontSize20',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
  p3ActionRegular: {
    fontFamily: 'BaselineFontFontFamilyPoppinsRegular',
    fontSize: 'BaselineFontFontSize14',
    lineHeight: 'BaselineFontFontSize20',
    fontWeight: 'BaselineFontFontWeightRegular',
    responsiveness: {
      md: {
        fontSize: 'BaselineFontFontSize12',
        lineHeight: 'BaselineFontFontSize18',
      },
    },
    capitaliseText: true,
    semanticTag: 'p',
  },
};
