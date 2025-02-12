import { CheckboxItem } from '../CheckboxGroup.types';
import { getIsOptionObject } from './getIsOptionObject';

export const getLabel = (item: CheckboxItem) =>
  !getIsOptionObject(item) ? item : item.label;
