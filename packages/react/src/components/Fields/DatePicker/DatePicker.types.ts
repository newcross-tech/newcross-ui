import { TestProp } from '../../../types';
import { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import React from 'react';
import { DatePickerHeaderProps } from './DatePickerHeader';

export type onChangeEvent =
  | React.KeyboardEvent<HTMLElement>
  | React.MouseEvent<HTMLElement, MouseEvent>;

export type SingleDateProps = {
  selectsRange?: never;
  selectsMultiple?: never;
};

export type RangeDateProps = {
  selectsRange: true;
  selectsMultiple?: never;
};

export type MultipleDateProps = {
  selectsRange?: never;
  selectsMultiple: true;
};

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
  onChange?: (
    date: Date | Date[] | [Date | null, Date | null] | null,
    event?: onChangeEvent
  ) => void;
} & (SingleDateProps | RangeDateProps | MultipleDateProps) &
  Pick<
    DatePickerHeaderProps,
    | 'showMonthYearDropdown'
    | 'monthDropdownRange'
    | 'yearDropdownRange'
    | 'nextMonthButtonDisabled'
    | 'prevMonthButtonDisabled'
  > &
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
