import { DistributedOmit, TestProp } from '../../../types';
import { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import { DatePickerHeaderProps } from './DatePickerHeader';

export type DatePickerPropsStrict = Pick<
  DatePickerHeaderProps,
  | 'showMonthYearDropdown'
  | 'monthDropdownRange'
  | 'yearDropdownRange'
  | 'nextMonthButtonDisabled'
  | 'prevMonthButtonDisabled'
> &
  DistributedOmit<
    ReactDatePickerProps,
    'showMonthYearDropdown' | 'disabled' | 'required'
  > &
  TestProp & {
    /** Label text */
    label?: string;
    /** Helper text */
    helperText?: string;
    /** Error text */
    errorText?: string;
    /** Indicates whether the field is required */
    required: boolean;
    /** Sets disabled state of the input */
    disabled: boolean;
    /** If true, the input can clear its value */
    isClearable: boolean;
  };
