import { getDefaultList } from './getDefaultList';
import { OptionProps, OptionObjectType } from '../CheckboxGroup.types';

describe('getDefaultList Utility Function', () => {
  it('should return values of items in defaultChecked when options contain OptionObjectType', () => {
    // Arrange
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1' },
      { label: 'Option 2', value: 'value2', disabled: true },
      { label: 'Option 3', value: 'value3' },
    ];
    const defaultChecked = ['Option 1', 'Option 3'];

    // Act
    const result = getDefaultList(options, defaultChecked);

    // Assert
    expect(result).toEqual(['value1', 'value3']);
  });

  it('should return defaultChecked directly when options contain strings', () => {
    // Arrange
    const options: OptionProps = ['Option A', 'Option B', 'Option C'];
    const defaultChecked = ['Option A', 'Option C'];

    // Act
    const result = getDefaultList(options, defaultChecked);

    // Assert
    expect(result).toEqual(defaultChecked);
  });

  it('should return an empty array when none of the defaultChecked items match', () => {
    // Arrange
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1' },
      { label: 'Option 2', value: 'value2' },
    ];
    const defaultChecked = ['Option 3'];

    // Act
    const result = getDefaultList(options, defaultChecked);

    // Assert
    expect(result).toEqual([]);
  });

  it('should handle an empty defaultChecked array', () => {
    // Arrange
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1' },
      { label: 'Option 2', value: 'value2' },
    ];
    const defaultChecked: string[] = [];

    // Act
    const result = getDefaultList(options, defaultChecked);

    // Assert
    expect(result).toEqual([]);
  });

  it('should handle an empty options array', () => {
    // Arrange
    const options: OptionProps = [];
    const defaultChecked = ['Option 1'];

    // Act
    const result = getDefaultList(options, defaultChecked);

    // Assert
    expect(result).toEqual([]);
  });
});
