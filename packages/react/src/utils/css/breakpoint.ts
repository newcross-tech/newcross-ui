import { css } from 'styled-components';
import { Theme, ThemeBreakpoints } from '../../types';

type Args = Parameters<typeof css>;

const createMediaQuery =
  (type: 'min-width' | 'max-width', breakpoint: ThemeBreakpoints) =>
  (...args: Args) =>
    css`
      @media (${type}: ${({ theme }: Theme) => theme[breakpoint]}px) {
        ${css(...args)};
      }
    `;

export const breakpoint = {
  above: {
    sm: createMediaQuery('min-width', 'BreakpointsSm'),
    md: createMediaQuery('min-width', 'BreakpointsMd'),
    lg: createMediaQuery('min-width', 'BreakpointsLg'),
    xl: createMediaQuery('min-width', 'BreakpointsXl'),
  },
  below: {
    sm: createMediaQuery('max-width', 'BreakpointsSm'),
    md: createMediaQuery('max-width', 'BreakpointsMd'),
    lg: createMediaQuery('max-width', 'BreakpointsLg'),
    xl: createMediaQuery('max-width', 'BreakpointsXl'),
  },
};
