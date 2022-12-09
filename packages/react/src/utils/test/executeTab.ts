import { executeKey, KeyEventAction } from './executeKey';
import { LocatorType } from './executeKeyPress';

export function executeTab(action: KeyEventAction, locator: LocatorType) {
  executeKey(
    locator,
    {
      key: 'Tab',
      code: 'Tab',
      charCode: 9,
    },
    action
  );
}
