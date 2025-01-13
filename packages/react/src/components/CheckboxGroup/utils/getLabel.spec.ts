import { getLabel } from './getLabel';
import { CheckboxItem } from '../CheckboxGroup.types';

describe('getLabel Utility Function', () => {
  it('should return the label of an OptionObjectType', () => {
    // Arrange
    const optionObject: CheckboxItem = {
      label: 'Option Label',
      value: 'option-value',
    };

    // Act
    const result = getLabel(optionObject);

    // Assert
    expect(result).toBe('Option Label');
  });

  it('should return the string when the item is not an object', () => {
    // Arrange
    const optionString: CheckboxItem = 'Simple Option';

    // Act
    const result = getLabel(optionString);

    // Assert
    expect(result).toBe('Simple Option');
  });

  it('should handle an OptionObjectType with additional properties', () => {
    // Arrange
    const optionObject: CheckboxItem = {
      label: 'Complex Option',
      value: 'complex-value',
      disabled: true,
      hasError: false,
    };

    // Act
    const result = getLabel(optionObject);

    // Assert
    expect(result).toBe('Complex Option');
  });

  it('should return undefined for an invalid object without a label property', () => {
    // Arrange
    const invalidObject: any = { value: 'invalid-value' }; // Invalid as per the types

    // Act
    const result = getLabel(invalidObject);

    // Assert
    expect(result).toBeUndefined();
  });
});
