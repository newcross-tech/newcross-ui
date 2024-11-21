import { SemanticBreakpoints } from '../types';

/**
 * Sorts breakpoints in DESC order.
 * @param breakpoints - The breakpoints to sort.
 * @returns The sorted breakpoints.
 */

export const getSortedBreakpoints = <T>(
  breakpoints: Partial<Record<SemanticBreakpoints, T>>
): [SemanticBreakpoints, T][] => {
  const breakpointOrder: SemanticBreakpoints[] = ['sm', 'md', 'lg', 'xl'];

  return Object.entries(breakpoints)
    .sort(
      ([a], [b]) =>
        breakpointOrder.indexOf(b as SemanticBreakpoints) -
        breakpointOrder.indexOf(a as SemanticBreakpoints)
    )
    .map(([key, value]) => [key as SemanticBreakpoints, value]);
};
