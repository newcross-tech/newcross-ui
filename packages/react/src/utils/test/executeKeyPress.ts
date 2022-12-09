import { fireEvent } from '@testing-library/react';

export type LocatorType = Document | Node | Element | Window;
export type KeyOptions = {
  key: string;
  code: string;
  charCode: number;
};

export function executeKeyPress(
  locator: LocatorType,
  customOptions?: KeyOptions
) {
  fireEvent.keyPress(
    locator,
    customOptions || {
      key: 'Space',
      code: 'Space',
      charCode: 32,
    }
  );
}
