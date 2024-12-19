import { getSelectedList } from './getSelectedList';
import { OptionObjectType } from '../CheckboxGroup.types';

describe('getSelectedList', () => {
  describe('When list contains strings', () => {
    const mockOptions: string[] = ['value1', 'value2', 'value3'];

    it('returns selected values', () => {
      const selectedList: string[] = ['value1', 'value3'];
      const result = getSelectedList(mockOptions, selectedList);
      expect(result).toEqual(['value1', 'value3']);
    });

    it('returns an empty array if no options match', () => {
      const selectedList: string[] = ['value4'];
      const result = getSelectedList(mockOptions, selectedList);
      expect(result).toEqual([]);
    });

    it('returns an empty array if selectedList is empty', () => {
      const selectedList: string[] = [];
      const result = getSelectedList(mockOptions, selectedList);
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
      const selectedList = ['value1', 'value3'];
      const result = getSelectedList(mockOptions, selectedList);
      expect(result).toEqual(['value1', 'value3']);
    });

    it('returns an empty array if no options match', () => {
      const selectedList = ['value4'];
      const result = getSelectedList(mockOptions, selectedList);
      expect(result).toEqual([]);
    });

    it('returns an empty array if selectedList is empty', () => {
      const selectedList: string[] = [];
      const result = getSelectedList(mockOptions, selectedList);
      expect(result).toEqual([]);
    });
  });
});
