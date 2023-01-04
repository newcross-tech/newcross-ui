import { useEffect, useRef } from 'react';

export const useTimeout = (duration: number, callback: () => void) => {
  const isCleared = useRef(false);

  const clearHandler = () => {
    isCleared.current = true;
  };

  useEffect(() => {
    const interval = setTimeout(callback, duration);
    return () => {
      isCleared.current = false;
      clearTimeout(interval);
    };
  }, [duration]);

  return { isCleared, clearHandler };
};
