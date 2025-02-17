import { OptionProps } from '../CheckboxGroup.types';
import { getIsOptionObject } from './getIsOptionObject';

export const getDefaultList = (
  options: OptionProps,
  defaultChecked: string[]
) => {
  const updatedList = options
    .map((item) =>
      getIsOptionObject(item) &&
      defaultChecked.some((label) => label === item.label)
        ? item.value
        : ''
    )
    .filter(Boolean);
  return options.some((item) => !getIsOptionObject(item))
    ? defaultChecked
    : updatedList;
};
