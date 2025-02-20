import { useMemo } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { BOTTOM_SHEET_BREAKPOINT } from '../ActionModal.types';

export function useIsBottomSheetBreakpoint(): boolean {
  const { width: windowWidth } = useWindowSize();

  return useMemo(() => {
    return windowWidth !== undefined && windowWidth <= BOTTOM_SHEET_BREAKPOINT;
  }, [windowWidth]);
}
