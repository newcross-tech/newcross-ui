import { useLayoutEffect, useRef } from 'react';

/**
 * Custom hook to retrieve if first rendering of component
 * @returns isFirstRender boolean
 */
export const useFirstRender = () => {
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, []);

  return { isFirstRender: isFirstRender.current };
};
