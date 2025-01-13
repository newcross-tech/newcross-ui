import { TestProp } from '../../types';

export type OptionObjectType = {
  label: string;
  hasError?: boolean;
  disabled?: boolean;
  value: string;
};

export type OptionProps = string[] | Array<OptionObjectType>;

export type CheckboxItem = string | OptionObjectType;

/**
 * @private The props after normalization
 */
export type CheckboxGroupPropsStrict = {
  /**
   * Label for the checkbox
   */
  label: string;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (array: string[]) => void;
  /**
   * Accepts a List of checkboxes to display
   */
  options: OptionProps;
  /**
   * Accepts a List of checkboxes to be checked by default
   */
  defaultChecked: string[];
} & TestProp;
