import { RefObject, useEffect, useState } from 'react';

/**
 * Hook that abstracts the logic to detect whether click event occured inside/outside of container
 * @param ref container
 * @param handler callback function to be executed on outsideClick
 * @returns
 */
export function useOutsideDetector<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: VoidFunction
) {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOutsideClick = Boolean(
        !!ref && ref.current && !ref.current.contains(event.target as Node)
      );
      if (isOutsideClick) {
        handler();
      }
      setClickedOutside(isOutsideClick);
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      setClickedOutside(false);
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [ref]);

  return { clickedOutside };
}
