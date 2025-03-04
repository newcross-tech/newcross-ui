import { TestProp } from '../../../types';
import { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import React from 'react';

export type onChangeEvent =
  | React.KeyboardEvent<HTMLElement>
  | React.MouseEvent<HTMLElement, MouseEvent>;

// Single date mode: neither range nor multiple.
export type SingleDateProps = {
  selectsRange?: never;
  selectsMultiple?: never;
};

// Range mode: selectsRange must be true.
export type RangeDateProps = {
  selectsRange: true;
  selectsMultiple?: never;
};

// Multiple date mode: selectsMultiple must be true.
export type MultipleDateProps = {
  selectsRange?: never;
  selectsMultiple: true;
};

export type DatePickerHeaderProps = {
  date: ReactDatePickerProps['date'];
  decreaseMonth: VoidFunction;
  increaseMonth: VoidFunction;
  changeMonth: (month: number) => void;
  changeYear: (year: number) => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  showMonthYearDropdown: boolean;
} & TestProp;

export type DatePickerPropsStrict = {
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
  /** The currently selected date (for single-date mode) */
  selected: Date;
  /** Whether to show month/year dropdowns */
  showMonthYearDropdown: boolean;
  onChange?: (
    date: Date | Date[] | [Date | null, Date | null] | null,
    event?: onChangeEvent
  ) => void;
} & (SingleDateProps | RangeDateProps | MultipleDateProps) &
  Omit<
    ReactDatePickerProps,
    | 'selected'
    | 'showMonthYearDropdown'
    | 'disabled'
    | 'required'
    | 'selectsRange'
    | 'onChange'
    | 'selectsMultiple'
  > &
  TestProp;
