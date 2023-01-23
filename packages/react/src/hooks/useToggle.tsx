import { useEffect } from 'react';

/**
 * use this hook for toggling effects depending on value change
 *
 * @param value
 * @param handler
 */
export function useToggle(
  value: boolean | string,
  handler: (value: boolean | string) => void
) {
  useEffect(() => {
    handler(value);
  }, [value]);
}
