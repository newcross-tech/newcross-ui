import { useEffect, useState } from 'react';

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState(() =>
    typeof window !== 'undefined' ? getWindowSize() : DEFAULT_WINDOW_SIZE
  );

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

const getWindowSize = (target: Window = window) => ({
  width: target.innerWidth,
  height: target.innerHeight,
});

const DEFAULT_WINDOW_SIZE = {
  width: undefined,
  height: undefined,
} as const;
