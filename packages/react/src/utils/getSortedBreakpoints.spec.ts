import { getSortedBreakpoints } from './getSortedBreakpoints';
import { TypographyResponsiveStyles } from '../components/Typography/Typography.types';
import { SemanticBreakpoints, ThemeSpacing } from '../types';

const MOCK_BREAKPOINTS: Partial<
  Record<SemanticBreakpoints, TypographyResponsiveStyles>
> = {
  lg: {
    fontSize: 'BaselineFontFontSize20',
    lineHeight: 'BaselineFontFontSize28',
  },
  sm: {
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
  },
  xl: {
    fontSize: 'BaselineFontFontSize22',
    lineHeight: 'BaselineFontFontSize30',
  },
  md: {
    fontSize: 'BaselineFontFontSize18',
    lineHeight: 'BaselineFontFontSize28',
  },
};

const EXPECTED_SORTED_BREAKPOINTS: [
  SemanticBreakpoints,
  TypographyResponsiveStyles
][] = [
  [
    'xl',
    {
      fontSize: 'BaselineFontFontSize22',
      lineHeight: 'BaselineFontFontSize30',
    },
  ],
  [
    'lg',
    {
      fontSize: 'BaselineFontFontSize20',
      lineHeight: 'BaselineFontFontSize28',
    },
  ],
  [
    'md',
    {
      fontSize: 'BaselineFontFontSize18',
      lineHeight: 'BaselineFontFontSize28',
    },
  ],
  [
    'sm',
    {
      fontSize: 'BaselineFontFontSize16',
      lineHeight: 'BaselineFontFontSize24',
    },
  ],
];

const MOCK_BREAKPOINTS_WITH_MISSING_VALUES: Partial<
  Record<SemanticBreakpoints, TypographyResponsiveStyles>
> = {
  lg: {
    fontSize: 'BaselineFontFontSize20',
    lineHeight: 'BaselineFontFontSize28',
  },
  sm: {
    fontSize: 'BaselineFontFontSize16',
    lineHeight: 'BaselineFontFontSize24',
  },
  xl: {
    fontSize: 'BaselineFontFontSize22',
    lineHeight: 'BaselineFontFontSize30',
  },
};

const EXPECTED_SORTED_WITH_MISSING: [
  SemanticBreakpoints,
  TypographyResponsiveStyles
][] = [
  [
    'xl',
    {
      fontSize: 'BaselineFontFontSize22',
      lineHeight: 'BaselineFontFontSize30',
    },
  ],
  [
    'lg',
    {
      fontSize: 'BaselineFontFontSize20',
      lineHeight: 'BaselineFontFontSize28',
    },
  ],
  [
    'sm',
    {
      fontSize: 'BaselineFontFontSize16',
      lineHeight: 'BaselineFontFontSize24',
    },
  ],
];

const MOCK_SPACING_BREAKPOINTS: Record<SemanticBreakpoints, ThemeSpacing> = {
  sm: 'BaselineSpacesSpace4',
  md: 'BaselineSpacesSpace8',
  lg: 'BaselineSpacesSpace16',
  xl: 'BaselineSpacesSpace24',
};

const EXPECTED_SORTED_SPACING_BREAKPOINTS: [
  SemanticBreakpoints,
  ThemeSpacing
][] = [
  ['xl', 'BaselineSpacesSpace24'],
  ['lg', 'BaselineSpacesSpace16'],
  ['md', 'BaselineSpacesSpace8'],
  ['sm', 'BaselineSpacesSpace4'],
];

const MOCK_SPACING_WITH_MISSING_VALUES: Partial<
  Record<SemanticBreakpoints, ThemeSpacing>
> = {
  sm: 'BaselineSpacesSpace4',
  lg: 'BaselineSpacesSpace16',
  xl: 'BaselineSpacesSpace24',
};

const EXPECTED_SORTED_SPACING_WITH_MISSING: [
  SemanticBreakpoints,
  ThemeSpacing
][] = [
  ['xl', 'BaselineSpacesSpace24'],
  ['lg', 'BaselineSpacesSpace16'],
  ['sm', 'BaselineSpacesSpace4'],
];

describe('getSortedBreakpoints', () => {
  it('should return breakpoints in descending order', () => {
    const result = getSortedBreakpoints(MOCK_BREAKPOINTS);
    expect(result).toEqual(EXPECTED_SORTED_BREAKPOINTS);
  });

  it('should handle missing breakpoints gracefully', () => {
    const result = getSortedBreakpoints(MOCK_BREAKPOINTS_WITH_MISSING_VALUES);
    expect(result).toEqual(EXPECTED_SORTED_WITH_MISSING);
  });

  it('should return spacing breakpoints in descending order', () => {
    const result = getSortedBreakpoints(MOCK_SPACING_BREAKPOINTS);
    expect(result).toEqual(EXPECTED_SORTED_SPACING_BREAKPOINTS);
  });

  it('should handle missing spacing breakpoints gracefully', () => {
    const result = getSortedBreakpoints(MOCK_SPACING_WITH_MISSING_VALUES);
    expect(result).toEqual(EXPECTED_SORTED_SPACING_WITH_MISSING);
  });
});
