import { TypographyResponsiveStyles } from '../components/Typography/Typography.types';
import { SemanticBreakpoints, ThemeSpacing } from '../types';

/**
 * Sorts breakpoints in DESC order.
 * @param breakpoints - The breakpoints to sort.
 * @returns The sorted breakpoints.
 */

export const getSortedBreakpoints = (
  breakpoints: Partial<
    Record<SemanticBreakpoints, TypographyResponsiveStyles | ThemeSpacing>
  >
): [SemanticBreakpoints, TypographyResponsiveStyles | ThemeSpacing][] => {
  const breakpointOrder: SemanticBreakpoints[] = ['sm', 'md', 'lg', 'xl'];

  return Object.entries(breakpoints)
    .sort(
      ([a], [b]) =>
        breakpointOrder.indexOf(b as SemanticBreakpoints) -
        breakpointOrder.indexOf(a as SemanticBreakpoints)
    )
    .map(([key, value]) => [key as SemanticBreakpoints, value]);
};
