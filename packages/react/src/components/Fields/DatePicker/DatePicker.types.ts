import { TestProp } from '../../../types';
import { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';

export type DatePickerPropsStrict = {
  /**
   * Gives text input a label
   */
  label?: string;
  /**
   * Adds helper text
   */
  helperText?: string;
  /**
   * Adds error text
   */
  errorText?: string;
  /**
   * Indicate whether the label is indicating that the input is required
   */
  required?: boolean;
  /**
   * Sets disabled state of the input
   */
  disabled: boolean;
  selected?: Date;
} & Omit<ReactDatePickerProps, 'selected'> &
  TestProp;
