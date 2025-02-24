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
   * Shows check mark when validation is met
   */
  isValid?: boolean;
  /**
   * Indicate whether the label is indicating that the input is required
   */
  required?: boolean;
  /**
   * Sets disabled state of the input
   */
  disabled: boolean;
  /**
   * Selected date (single date)
   */
  selected?: Date | null;
  /**
   * onChange handler for a single date
   */
  onChange: (
    date: Date | null,
    event?:
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
} & Omit<ReactDatePickerProps, 'selected' | 'onChange'> &
  TestProp;
