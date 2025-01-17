import useTheme from './useTheme';
import { useWindowSize } from './useWindowSize';
import { useMemo } from 'react';
import { Breakpoint, getBreakpointDesignToken } from '../utils/css/breakpoint';

export function useCurrentBreakpoint(): Breakpoint | undefined {
  const theme = useTheme();
  const { width: windowWidth } = useWindowSize();

  return useMemo(() => {
    if (windowWidth === undefined) {
      return undefined;
    }

    const breakpointNameToValue = (breakpoint: Breakpoint) => ({
      name: breakpoint,
      value: theme[getBreakpointDesignToken(breakpoint)],
    });

    const breakpoints = Object.values(Breakpoint)
      .map(breakpointNameToValue)
      .sort((a, b) => a.value - b.value);

    const lastBreakpoint = breakpoints.pop();
    if (!lastBreakpoint) {
      throw new Error('There should be at least one breakpoint.');
    }

    return (
      breakpoints.find((breakpoint) => windowWidth <= breakpoint.value)?.name ??
      lastBreakpoint.name
    );
  }, [windowWidth]);
}
