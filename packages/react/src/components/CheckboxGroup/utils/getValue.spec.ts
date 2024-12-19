import { getValue } from './getValue';
import { CheckboxItem } from '../CheckboxGroup.types';

describe('getValue', () => {
  it('returns the value of a string item', () => {
    const item: CheckboxItem = 'stringValue';
    const result = getValue(item);
    expect(result).toBe('stringValue');
  });

  it('returns the value property of an OptionObjectType item', () => {
    const item: CheckboxItem = { label: 'Option 1', value: 'value1' };
    const result = getValue(item);
    expect(result).toBe('value1');
  });

  it('handles an empty string item correctly', () => {
    const item: CheckboxItem = '';
    const result = getValue(item);
    expect(result).toBe('');
  });

  it('handles an OptionObjectType with an empty value correctly', () => {
    const item: CheckboxItem = { label: 'Option 2', value: '' };
    const result = getValue(item);
    expect(result).toBe('');
  });
});
