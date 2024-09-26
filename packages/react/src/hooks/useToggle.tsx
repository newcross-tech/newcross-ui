import { useEffect } from 'react';

/**
 * use this hook for toggling effects depending on value change
 *
 * @param value
 * @param handler
 */
export function useToggle<T>(value: T, handler: (value: T) => void) {
  useEffect(() => {
    handler(value);
  }, [value]);
}
