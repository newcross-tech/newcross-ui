import { getSelectedList } from './getSelectedList';
import { OptionObjectType } from '../CheckboxGroup.types';

describe('getSelectedList', () => {
  describe('When list contains strings', () => {
    const mockOptions: string[] = ['value1', 'value2', 'value3'];

    it('returns selected values', () => {
      // Arrange
      const selectedList: string[] = ['value1', 'value3'];

      // Act
      const result = getSelectedList(mockOptions, selectedList);

      // Assert
      expect(result).toEqual(['value1', 'value3']);
    });

    it('returns an empty array if no options match', () => {
      // Arrange
      const selectedList: string[] = ['value4'];

      // Act
      const result = getSelectedList(mockOptions, selectedList);

      // Assert
      expect(result).toEqual([]);
    });

    it('returns an empty array if selectedList is empty', () => {
      // Arrange
      const selectedList: string[] = [];

      // Act
      const result = getSelectedList(mockOptions, selectedList);

      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('When list contains OptionObjectType', () => {
    const mockOptions: OptionObjectType[] = [
      { label: 'Option 1', value: 'value1' },
      { label: 'Option 2', value: 'value2' },
      { label: 'Option 3', value: 'value3' },
    ];

    it('returns selected values', () => {
      // Arrange
      const selectedList = ['value1', 'value3'];

      // Act
      const result = getSelectedList(mockOptions, selectedList);

      // Assert
      expect(result).toEqual(['value1', 'value3']);
    });

    it('returns an empty array if no options match', () => {
      // Arrange
      const selectedList = ['value4'];

      // Act
      const result = getSelectedList(mockOptions, selectedList);

      // Assert
      expect(result).toEqual([]);
    });

    it('returns an empty array if selectedList is empty', () => {
      // Arrange
      const selectedList: string[] = [];

      // Act
      const result = getSelectedList(mockOptions, selectedList);

      // Assert
      expect(result).toEqual([]);
    });
  });
});
