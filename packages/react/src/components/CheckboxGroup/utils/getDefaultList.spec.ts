import { getDefaultList } from './getDefaultList';
import { OptionProps, OptionObjectType } from '../CheckboxGroup.types';

describe('getDefaultList Utility Function', () => {
  it('should return values of items in defaultChecked when options contain OptionObjectType', () => {
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1' },
      { label: 'Option 2', value: 'value2', disabled: true },
      { label: 'Option 3', value: 'value3' },
    ];
    const defaultChecked = ['Option 1', 'Option 3'];

    const result = getDefaultList(options, defaultChecked);
    expect(result).toEqual(['value1', 'value3']);
  });

  it('should return defaultChecked directly when options contain strings', () => {
    const options: OptionProps = ['Option A', 'Option B', 'Option C'];
    const defaultChecked = ['Option A', 'Option C'];

    const result = getDefaultList(options, defaultChecked);
    expect(result).toEqual(defaultChecked);
  });

  it('should return an empty array when none of the defaultChecked items match', () => {
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1' },
      { label: 'Option 2', value: 'value2' },
    ];
    const defaultChecked = ['Option 3'];

    const result = getDefaultList(options, defaultChecked);
    expect(result).toEqual([]);
  });

  it('should handle an empty defaultChecked array', () => {
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1' },
      { label: 'Option 2', value: 'value2' },
    ];
    const defaultChecked: string[] = [];

    const result = getDefaultList(options, defaultChecked);
    expect(result).toEqual([]);
  });

  it('should handle an empty options array', () => {
    const options: OptionProps = [];
    const defaultChecked = ['Option 1'];

    const result = getDefaultList(options, defaultChecked);
    expect(result).toEqual([]);
  });
});
