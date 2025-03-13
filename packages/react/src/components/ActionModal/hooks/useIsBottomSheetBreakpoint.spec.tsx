import { renderHook } from '@testing-library/react';
import { useIsBottomSheetBreakpoint } from './useIsBottomSheetBreakpoint';
import { BOTTOM_SHEET_BREAKPOINT } from '../ActionModal.types';
import * as UseWindowSizeModule from '../../../hooks/useWindowSize';
import ThemeProvider from '../../../theme/ThemeProvider';
import Brand from '../../../theme/Brand';

describe(useIsBottomSheetBreakpoint.name, () => {
  const testingBrand = Brand.healthforce;

  const wrapper = (props: Required<React.PropsWithChildren>) => (
    <ThemeProvider {...props} brand={testingBrand} />
  );

  beforeEach(() => {
    jest.spyOn(UseWindowSizeModule, 'useWindowSize');
  });

  it.each([
    { windowWidth: undefined, expected: false },
    { windowWidth: 0, expected: true },
    { windowWidth: BOTTOM_SHEET_BREAKPOINT - 1, expected: true },
    { windowWidth: BOTTOM_SHEET_BREAKPOINT, expected: true },
    { windowWidth: BOTTOM_SHEET_BREAKPOINT + 1, expected: false },
    { windowWidth: BOTTOM_SHEET_BREAKPOINT * 2, expected: false },
  ])(
    'should return $expected when windowWidth is $windowWidth',
    ({ windowWidth, expected }) => {
      // Mock window size
      jest.mocked(UseWindowSizeModule.useWindowSize).mockReturnValue({
        width: windowWidth,
        height: 0,
      });

      // Render hook
      const { result } = renderHook(useIsBottomSheetBreakpoint, { wrapper });

      // Assert
      expect(result.current).toBe(expected);
    }
  );

  it('should update when resizing the window', () => {
    // Mock starting at a large screen
    jest.mocked(UseWindowSizeModule.useWindowSize).mockReturnValue({
      width: BOTTOM_SHEET_BREAKPOINT + 100,
      height: undefined,
    });

    const { result, rerender } = renderHook(useIsBottomSheetBreakpoint, {
      wrapper,
    });

    // Mock resizing down to a bottom-sheet width
    jest.mocked(UseWindowSizeModule.useWindowSize).mockReturnValue({
      width: BOTTOM_SHEET_BREAKPOINT - 100,
      height: undefined,
    });

    rerender();

    // Assert
    expect(result.current).toBe(true);
  });
});
