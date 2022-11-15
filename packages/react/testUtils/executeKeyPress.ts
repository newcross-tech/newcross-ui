import { fireEvent } from '@testing-library/react';

export function executeKeyPress(
  locator: Document | Node | Element | Window,
  customOptions?: {
    key: string;
    code: string;
    charCode: number;
  }
) {
  const options = customOptions || {
    key: 'Space',
    code: 'Space',
    charCode: 32,
  };

  fireEvent.keyPress(locator, options);
}
