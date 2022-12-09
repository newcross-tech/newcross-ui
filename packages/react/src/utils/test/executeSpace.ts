import { executeKey, KeyEventAction } from './executeKey';
import { LocatorType } from './executeKeyPress';

export function executeSpace(action: KeyEventAction, locator: LocatorType) {
  executeKey(
    locator,
    {
      key: 'Space',
      code: 'Space',
      charCode: 32,
    },
    action
  );
}
