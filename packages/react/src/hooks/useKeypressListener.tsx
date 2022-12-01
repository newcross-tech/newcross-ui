import { useEffect, useState } from 'react';

export function useKeypressListener(code: string, handler: VoidFunction) {
  const [keyPressed, setkeyPressed] = useState(false);

  function downHandler({ key }: KeyboardEvent) {
    if (key === code) {
      setkeyPressed(true);
      handler();
    }
  }

  function upHandler({ key }: KeyboardEvent) {
    if (key === code) {
      setkeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return { keyPressed };
}
