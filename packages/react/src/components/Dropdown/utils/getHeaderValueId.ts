import { DropdownValueType } from '../Dropdown.types';

export function getHeaderValueId(value: DropdownValueType) {
  if (!value) return `dropdown-placeholder`;

  const valueSuffix = `value`;
  if (typeof value === 'string') return `dropdown-${valueSuffix}`;

  return `dropdown-multi-${value.length ? 'pill-' : ''}${valueSuffix}`;
}
