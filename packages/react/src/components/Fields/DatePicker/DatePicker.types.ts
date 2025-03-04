import { TestProp } from '../../../types';
import { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';

export type DatePickerHeaderProps = {
  date: ReactDatePickerProps['date'];
  decreaseMonth: VoidFunction;
  increaseMonth: VoidFunction;
  changeMonth: (month: number) => void;
  changeYear: (year: number) => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  showMonthYearPicker: boolean;
} & TestProp;

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
  required: boolean;
  /**
   * Sets disabled state of the input
   */
  disabled: boolean;
  showMonthYearPicker: boolean;
} & Omit<ReactDatePickerProps, 'disabled' | 'showMonthYearPicker'> &
  TestProp;
