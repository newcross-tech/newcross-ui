import { css } from 'styled-components';
import { Theme, ThemeBreakpoints } from '../../types';

type Args = Parameters<typeof css>;

const createMediaQuery =
  (breakpoint: ThemeBreakpoints) =>
  (...args: Args) =>
    css`
      @media (min-width: ${({ theme }: Theme) => theme[breakpoint]}px) {
        ${css(...args)};
      }
    `;

export const breakpoint = {
  sm: createMediaQuery('BreakpointsSm'),
  md: createMediaQuery('BreakpointsMd'),
  lg: createMediaQuery('BreakpointsLg'),
  xl: createMediaQuery('BreakpointsXl'),
};
