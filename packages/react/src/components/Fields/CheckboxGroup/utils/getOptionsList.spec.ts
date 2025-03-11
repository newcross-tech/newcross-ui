import { getOptionsList } from './getOptionsList';
import { OptionProps, OptionObjectType } from '../CheckboxGroup.types';

describe('getOptionsList Utility Function', () => {
  it('should return only disabled options (values) from OptionObjectType list', () => {
    // Arrange
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1', disabled: true },
      { label: 'Option 2', value: 'value2', disabled: false },
      { label: 'Option 3', value: 'value3', disabled: true },
    ];

    // Act
    const result = getOptionsList.disabled(options);

    // Assert
    expect(result).toEqual(['value1', 'value3']);
  });

  it('should return only enabled options (values) from OptionObjectType list', () => {
    // Arrange
    const options: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1', disabled: true },
      { label: 'Option 2', value: 'value2', disabled: false },
      { label: 'Option 3', value: 'value3', disabled: true },
    ];

    // Act
    const result = getOptionsList.enabled(options);

    // Assert
    expect(result).toEqual(['value2']);
  });

  it('should return only disabled options (strings) from string list', () => {
    // Arrange
    const options: OptionProps = ['Option 1', 'Option 2', 'Option 3'];

    // Act
    const result = getOptionsList.disabled(options);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return all strings in the enabled list', () => {
    // Arrange
    const options: OptionProps = ['Option 1', 'Option 2', 'Option 3'];

    // Act
    const result = getOptionsList.enabled(options);

    // Assert
    expect(result).toEqual(['Option 1', 'Option 2', 'Option 3']);
  });

  it('should return empty arrays for empty input', () => {
    // Arrange
    const options: OptionProps = [];

    // Act
    const disabledResult = getOptionsList.disabled(options);
    const enabledResult = getOptionsList.enabled(options);

    // Assert
    expect(disabledResult).toEqual([]);
    expect(enabledResult).toEqual([]);
  });
});
