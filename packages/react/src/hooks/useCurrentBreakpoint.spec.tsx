import { useCurrentBreakpoint } from './useCurrentBreakpoint';
import { Breakpoint, getBreakpointValue } from '../utils/css/breakpoint';
import { renderHook } from '@testing-library/react';
import ThemeProvider from '../theme/ThemeProvider';
import * as UseWindowSizeModule from './useWindowSize';
import * as theme from '@newcross-tech/ui-design-tokens';
import Brand from '../theme/Brand';

describe(useCurrentBreakpoint.name, () => {
  const testingBrand = Brand.healthforce;
  const testingTheme = theme.web[testingBrand];

  const wrapper = (props: Required<React.PropsWithChildren>) => (
    <ThemeProvider {...props} brand={testingBrand} />
  );

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
      windowWidth:
        getBreakpointValue({ theme: testingTheme, breakpoint: Breakpoint.sm }) -
        1,
      expectedBreakpoint: Breakpoint.sm,
    },
    // windowWidth: sm + 1 = 301 => md
    {
      windowWidth:
        getBreakpointValue({ theme: testingTheme, breakpoint: Breakpoint.sm }) +
        1,
      expectedBreakpoint: Breakpoint.md,
    },
    // windowWidth: md => md
    {
      windowWidth: getBreakpointValue({
        theme: testingTheme,
        breakpoint: Breakpoint.md,
      }),
      expectedBreakpoint: Breakpoint.md,
    },
    // windowWidth: 2 * xl => xl
    {
      windowWidth:
        getBreakpointValue({ theme: testingTheme, breakpoint: Breakpoint.xl }) *
        2,
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
      const { result } = renderHook(useCurrentBreakpoint, { wrapper });
      // endregion

      // region Assert
      expect(result.current).toBe(options.expectedBreakpoint);
      // endregion
    }
  );

  it('should react to downsizing properly', () => {
    // region Arrange
    jest.mocked(UseWindowSizeModule.useWindowSize).mockReturnValue({
      width: getBreakpointValue({
        theme: testingTheme,
        breakpoint: Breakpoint.xl,
      }),
      height: undefined,
    });
    const { result, rerender } = renderHook(useCurrentBreakpoint, { wrapper });
    // endregion

    // region Act (execute a mock resize event)
    jest.mocked(UseWindowSizeModule.useWindowSize).mockReturnValue({
      width: getBreakpointValue({
        theme: testingTheme,
        breakpoint: Breakpoint.sm,
      }),
      height: undefined,
    });
    rerender();
    // endregion

    // region Assert
    expect(result.current).toBe(Breakpoint.sm);
    // endregion
  });
});
