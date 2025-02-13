import { getIsOptionObject } from './getIsOptionObject';
import { CheckboxItem } from '../CheckboxGroup.types';

describe('getIsOptionObject Utility Function', () => {
  it('should return true for a valid OptionObjectType', () => {
    // Arrange
    const validObject: CheckboxItem = {
      label: 'Option Label',
      value: 'option-value',
      disabled: false,
      hasError: true,
    };

    // Act
    const result = getIsOptionObject(validObject);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false for a string item', () => {
    // Arrange
    const stringItem: CheckboxItem = 'Simple Option';

    // Act
    const result = getIsOptionObject(stringItem);

    // Assert
    expect(result).toBe(false);
  });

  it('should return false for an object missing the "value" property', () => {
    // Arrange
    const invalidObject: CheckboxItem = {
      label: 'Invalid Option',
      disabled: false,
      hasError: true,
    } as any; // Cast to mimic invalid input

    // Act
    const result = getIsOptionObject(invalidObject);

    // Assert
    expect(result).toBe(false);
  });

  it('should return false for an empty object', () => {
    // Arrange
    const emptyObject: CheckboxItem = {} as any;

    // Act
    const result = getIsOptionObject(emptyObject);

    // Assert
    expect(result).toBe(false);
  });
});
