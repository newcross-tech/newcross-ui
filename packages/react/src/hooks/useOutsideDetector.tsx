import { RefObject, useEffect, useState } from 'react';

/**
 * Hook that abstracts the logic to detect whether a click or touch event occurred inside/outside of a container
 * @param ref container
 * @param handler callback function to be executed on outsideClick or outsideTouch
 * @returns
 */
export function useOutsideDetector<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: VoidFunction
) {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    function handleEvent(event: MouseEvent | TouchEvent) {
      const isOutsideClick =
        ref.current && !ref.current.contains(event.target as Node);

      if (isOutsideClick) {
        handler();
        if (!clickedOutside) setClickedOutside(true);
      } else if (clickedOutside) {
        setClickedOutside(false);
      }
    }

    // Add event listeners
    const eventNames = ['click', 'touchend'];
    eventNames.forEach((eventName) =>
      document.addEventListener(eventName, handleEvent as EventListener, true)
    );

    // Cleanup
    return () => {
      eventNames.forEach((eventName) =>
        document.removeEventListener(
          eventName,
          handleEvent as EventListener,
          true
        )
      );
    };
  }, [ref, handler, clickedOutside]);

  return { clickedOutside };
}
