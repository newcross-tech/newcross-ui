import { OptionProps } from '../CheckboxGroup.types';
import { getIsOptionObject } from './getIsOptionObject';

export const getOptionsList = (options: OptionProps) =>
  options.map((item) => (!getIsOptionObject(item) ? item : item.value));
