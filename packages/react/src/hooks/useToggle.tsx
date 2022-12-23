import { useEffect } from 'react';

/**
 * use this hook for toggling effects depending on value change
 *
 * @param value
 * @param handler
 */
export function useToggle(value: boolean, handler: (value: boolean) => void) {
  useEffect(() => {
    handler(value);
  }, [value]);
}
