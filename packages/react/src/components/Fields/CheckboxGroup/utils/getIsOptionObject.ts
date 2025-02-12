import { CheckboxItem, OptionObjectType } from '../CheckboxGroup.types';

/* Custom Type Guard */
export const getIsOptionObject = (
  item: CheckboxItem
): item is OptionObjectType => (item as OptionObjectType).value !== undefined;
