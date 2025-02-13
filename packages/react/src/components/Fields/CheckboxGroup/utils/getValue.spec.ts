import { getValue } from './getValue';
import { CheckboxItem } from '../CheckboxGroup.types';

describe('getValue', () => {
  it('returns the value of a string item', () => {
    // Arrange
    const item: CheckboxItem = 'stringValue';

    // Act
    const result = getValue(item);

    // Assert
    expect(result).toBe('stringValue');
  });

  it('returns the value property of an OptionObjectType item', () => {
    // Arrange
    const item: CheckboxItem = { label: 'Option 1', value: 'value1' };

    // Act
    const result = getValue(item);

    // Assert
    expect(result).toBe('value1');
  });

  it('handles an empty string item correctly', () => {
    // Arrange
    const item: CheckboxItem = '';

    // Act
    const result = getValue(item);

    // Assert
    expect(result).toBe('');
  });

  it('handles an OptionObjectType with an empty value correctly', () => {
    // Arrange
    const item: CheckboxItem = { label: 'Option 2', value: '' };

    // Act
    const result = getValue(item);

    // Assert
    expect(result).toBe('');
  });
});
