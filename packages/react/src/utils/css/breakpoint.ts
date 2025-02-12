import { css } from 'styled-components';
import { Theme, ValueFrom } from '../../types';
import { themeDesignTokenName } from '../../theme/ThemeProvider';

export const Breakpoint = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;
export type Breakpoint = ValueFrom<typeof Breakpoint>;

const BreakpointDesignToken = {
  [Breakpoint.sm]: themeDesignTokenName('BreakpointsSm'),
  [Breakpoint.md]: themeDesignTokenName('BreakpointsMd'),
  [Breakpoint.lg]: themeDesignTokenName('BreakpointsLg'),
  [Breakpoint.xl]: themeDesignTokenName('BreakpointsXl'),
} as const;
type BreakpointDesignToken = ValueFrom<typeof BreakpointDesignToken>;

export const getBreakpointDesignToken = (
  breakpoint: Breakpoint
): BreakpointDesignToken => BreakpointDesignToken[breakpoint];

/**
 * @private Used to get the specific value of a semantic breakpoint based on the theme
 */
export const getBreakpointValue = ({
  theme,
  breakpoint,
}: Theme & { breakpoint: Breakpoint }) =>
  theme[getBreakpointDesignToken(breakpoint)];

const createMediaQuery =
  (breakpoint: Breakpoint) =>
  (...args: Parameters<typeof css>) =>
    css`
      @media (max-width: ${({ theme }: Theme) =>
          getBreakpointValue({ theme, breakpoint })}) {
        ${css(...args)};
      }
    `;

export const breakpoint = Object.fromEntries(
  Object.values(Breakpoint).map((breakpoint) => [
    breakpoint,
    createMediaQuery(breakpoint),
  ])
) as Record<Breakpoint, ReturnType<typeof createMediaQuery>>;
