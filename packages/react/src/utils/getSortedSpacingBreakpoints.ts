import { NewThemeSpacingTokens } from '../types';

/**
 * Sorts breakpoints in DESC order using reduce.
 * @param breakpoints - The breakpoints to sort.
 * @returns The sorted breakpoints.
 */

// To be deleted once Typography is merged.
export type SemanticBreakpoints = 'sm' | 'md' | 'lg' | 'xl';

export const getSortedSpacingBreakpoints = (
  breakpoints: Partial<Record<SemanticBreakpoints, NewThemeSpacingTokens>>
): Partial<Record<SemanticBreakpoints, NewThemeSpacingTokens>> => {
  const breakpointOrder: SemanticBreakpoints[] = ['sm', 'md', 'lg', 'xl'];

  return Object.entries(breakpoints)
    .sort(
      ([a], [b]) =>
        breakpointOrder.indexOf(b as SemanticBreakpoints) -
        breakpointOrder.indexOf(a as SemanticBreakpoints)
    )
    .reduce<Record<SemanticBreakpoints, NewThemeSpacingTokens>>(
      (acc, [key, value]) => {
        acc[key as SemanticBreakpoints] = value;
        return acc;
      },
      {} as Record<SemanticBreakpoints, NewThemeSpacingTokens>
    );
};
