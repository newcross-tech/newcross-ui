import { getSortedBreakpoints } from './getSortedBreakpoints';
import { TypographyResponsiveStyles } from '../components/Typography/Typography.types';
import { SemanticBreakpoints } from '../types';

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

describe('getSortedBreakpoints', () => {
  it('should return breakpoints in descending order', () => {
    const result = getSortedBreakpoints(MOCK_BREAKPOINTS);
    expect(result).toEqual(EXPECTED_SORTED_BREAKPOINTS);
  });
});
