import { CheckboxItem } from '../CheckboxGroup.types';
import { getIsOptionObject } from './getIsOptionObject';

export const getValue = (item: CheckboxItem) =>
  !getIsOptionObject(item) ? item : item.value;
