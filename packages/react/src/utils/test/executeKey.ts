import { fireEvent } from '@testing-library/react';
import { KeyOptions, LocatorType } from './executeKeyPress';

export type KeyEventAction = 'keyDown' | 'keyUp';

/**
 * Core function for key execution with 'keydown' and 'keyUp' for underlying API
 * @param locator
 * @param customOptions
 * @param action
 */
export function executeKey(
  locator: LocatorType,
  customOptions: KeyOptions,
  action: KeyEventAction
) {
  if (action === 'keyDown') {
    fireEvent.keyDown(locator, customOptions);
  } else {
    fireEvent.keyUp(locator, customOptions);
  }
}
