import { css } from 'styled-components';
import { Theme } from '../../types';

type Args = Parameters<typeof css>;

export const media = {
  sm: (...args: Args) => css`
    @media (max-width: ${({ theme }: { theme: Theme }) =>
        theme.BreakpointsSm}px) {
      ${css(...args)};
    }
  `,
  md: (...args: Args) => css`
    @media (max-width: ${({ theme }: { theme: Theme }) =>
        theme.BreakpointsMd}px) {
      ${css(...args)};
    }
  `,
  lg: (...args: Args) => css`
    @media (max-width: ${({ theme }: { theme: Theme }) =>
        theme.BreakpointsLg}px) {
      ${css(...args)};
    }
  `,
  xl: (...args: Args) => css`
    @media (max-width: ${({ theme }: { theme: Theme }) =>
        theme.BreakpointsXl}px) {
      ${css(...args)};
    }
  `,
};
