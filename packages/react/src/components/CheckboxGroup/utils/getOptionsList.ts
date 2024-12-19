import { OptionProps, OptionObjectType } from '../CheckboxGroup.types';
import { getIsOptionObject } from './getIsOptionObject';

export const getOptionsList = {
  disabled: (options: OptionProps): string[] =>
    (options as Array<string | OptionObjectType>)
      .filter(
        (item): item is OptionObjectType =>
          getIsOptionObject(item) && item.disabled === true
      )
      .map((item) => item.value),

  enabled: (options: OptionProps): string[] =>
    (options as Array<string | OptionObjectType>)
      .filter((item) => !getIsOptionObject(item) || !item.disabled)
      .map((item) => (getIsOptionObject(item) ? item.value : item)),
};
