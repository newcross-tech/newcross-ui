import { fireEvent } from '@testing-library/react';

export function executeKeyPress(
  locator: Document | Node | Element | Window,
  customOptions?: {
    key: string;
    code: string;
    charCode: number;
  },
  useKeypress?: boolean
) {
  const allowKeypress = useKeypress ?? true;
  const options = customOptions || {
    key: 'Space',
    code: 'Space',
    charCode: 32,
  };

  if (!allowKeypress) {
    fireEvent.keyDown(locator, options);
    fireEvent.keyUp(locator, options);
    return;
  }

  fireEvent.keyPress(locator, options);
}
