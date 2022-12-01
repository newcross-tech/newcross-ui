import { baseTestId } from '../Dropdown';
import { DropdownValueType } from '../Dropdown.types';

export function getHeaderValueId(value: DropdownValueType) {
  if (!value) return `${baseTestId}-placeholder`;

  const valueSuffix = `value`;
  if (typeof value === 'string') return `${baseTestId}-${valueSuffix}`;

  return `${baseTestId}-multi-${value.length ? 'pill-' : ''}${valueSuffix}`;
}
