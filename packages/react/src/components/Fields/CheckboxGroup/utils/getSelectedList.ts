import { getIsOptionObject, getValue } from '.';
import { OptionObjectType, OptionProps } from '../CheckboxGroup.types';

export const getSelectedList = (
  list: OptionProps,
  selectedList: string[]
): string[] => {
  return (list as Array<string | OptionObjectType>)
    .filter((item) =>
      getIsOptionObject(item)
        ? selectedList.includes(getValue(item))
        : selectedList.includes(item)
    )
    .map((item) => (getIsOptionObject(item) ? getValue(item) : item));
};
