import { NewThemeSpacingTokens } from '../types';
import {
  getSortedSpacingBreakpoints,
  SemanticBreakpoints,
} from './getSortedSpacingBreakpoints';

const MOCK_SPACING_BREAKPOINTS: Record<
  SemanticBreakpoints,
  NewThemeSpacingTokens
> = {
  sm: 'BaselineSpacesSpace4',
  md: 'BaselineSpacesSpace8',
  lg: 'BaselineSpacesSpace16',
  xl: 'BaselineSpacesSpace24',
};

const EXPECTED_SORTED_SPACING_BREAKPOINTS: Record<
  SemanticBreakpoints,
  NewThemeSpacingTokens
> = {
  xl: 'BaselineSpacesSpace24',
  lg: 'BaselineSpacesSpace16',
  md: 'BaselineSpacesSpace8',
  sm: 'BaselineSpacesSpace4',
};

const MOCK_SPACING_WITH_MISSING_VALUES: Partial<
  Record<SemanticBreakpoints, NewThemeSpacingTokens>
> = {
  sm: 'BaselineSpacesSpace4',
  lg: 'BaselineSpacesSpace16',
  xl: 'BaselineSpacesSpace24',
};

const EXPECTED_SORTED_WITH_MISSING: Partial<
  Record<SemanticBreakpoints, NewThemeSpacingTokens>
> = {
  xl: 'BaselineSpacesSpace24',
  lg: 'BaselineSpacesSpace16',
  sm: 'BaselineSpacesSpace4',
};

describe('getSortedSpacingBreakpoints', () => {
  it('should return spacing breakpoints in descending order', () => {
    const result = getSortedSpacingBreakpoints(MOCK_SPACING_BREAKPOINTS);
    expect(result).toEqual(EXPECTED_SORTED_SPACING_BREAKPOINTS);
  });

  it('should handle missing spacing breakpoints gracefully', () => {
    const result = getSortedSpacingBreakpoints(
      MOCK_SPACING_WITH_MISSING_VALUES
    );
    expect(result).toEqual(EXPECTED_SORTED_WITH_MISSING);
  });
});
