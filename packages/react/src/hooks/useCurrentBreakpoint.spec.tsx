import { useCurrentBreakpoint } from './useCurrentBreakpoint';
import { Breakpoint, getBreakpointDesignToken } from '../utils/css/breakpoint';
import { renderHook } from '@testing-library/react';
import ThemeProvider from '../theme/ThemeProvider';
import * as UseWindowSizeModule from './useWindowSize';
import * as theme from '@newcross-ui/design-tokens';
import Brand from '../theme/Brand';

describe(useCurrentBreakpoint.name, () => {
  const testingBrand = Brand.healthforce;
  const testingTheme = theme.web[testingBrand];

  beforeEach(() => {
    jest.spyOn(UseWindowSizeModule, 'useWindowSize');
  });

  // example reference breakpoints [sm:300, md:700, lg:1000, xl:2000]
  it.each([
    { windowWidth: undefined, expectedBreakpoint: undefined },
    // windowWidth: 0 => sm
    { windowWidth: 0, expectedBreakpoint: Breakpoint.sm },
    // windowWidth: sm - 1 = 299 => sm
    {
      windowWidth: testingTheme[getBreakpointDesignToken(Breakpoint.sm)] - 1,
      expectedBreakpoint: Breakpoint.sm,
    },
    // windowWidth: sm + 1 = 301 => md
    {
      windowWidth: testingTheme[getBreakpointDesignToken(Breakpoint.sm)] + 1,
      expectedBreakpoint: Breakpoint.md,
    },
    // windowWidth: md => md
    {
      windowWidth: testingTheme[getBreakpointDesignToken(Breakpoint.md)],
      expectedBreakpoint: Breakpoint.md,
    },
    // windowWidth: 2 * xl => xl
    {
      windowWidth: testingTheme[getBreakpointDesignToken(Breakpoint.xl)] * 2,
      expectedBreakpoint: Breakpoint.xl,
    },
  ])(
    'should displays semantic window size according to theme (%j)',
    (options) => {
      // region Arrange
      jest.mocked(UseWindowSizeModule.useWindowSize).mockReturnValue({
        width: options.windowWidth,
        height: 0,
      });
      // endregion

      // region Act
      const { result } = renderHook(useCurrentBreakpoint, {
        wrapper: (props) => <ThemeProvider {...props} brand={testingBrand} />,
      });
      // endregion

      // region Assert
      expect(result.current).toBe(options.expectedBreakpoint);
      // endregion
    }
  );
});
