import { TestProp } from '../../../../types';

export type YearRange = {
  yearsAgo: number;
  yearsAhead: number;
};

export type MonthRange = {
  /**
   * 0 for January, 11 for December
   */
  startMonth: number;
  endMonth: number;
};

export type DatePickerHeaderPropsStrict = {
  /**
   * The currently displayed date in the header.
   */
  date: Date;

  /**
   * Function to call when the left (previous) arrow is clicked.
   */
  decreaseMonth?: VoidFunction;

  /**
   * Function to call when the right (next) arrow is clicked.
   */
  increaseMonth?: VoidFunction;

  /**
   * Function to change the month.
   */
  changeMonth: (month: number) => void;

  /**
   * Function to change the year.
   */
  changeYear: (year: number) => void;

  /**
   * Flag indicating whether the previous month arrow should be disabled.
   */
  prevMonthButtonDisabled: boolean;

  /**
   * Flag indicating whether the next month arrow should be disabled.
   */
  nextMonthButtonDisabled: boolean;

  /**
   * Flag indicating whether the header should display dropdowns for month and year selection.
   */
  showMonthYearDropdown: boolean;

  /**
   * Defines the range of months to display in the month dropdown.
   * For example, you can limit the dropdown to only display from March (2) to November (10).
   */
  monthDropdownRange: MonthRange;

  /**
   * Defines the range of years to display in the year dropdown.
   * This range is typically defined as an object with properties such as 'yearsAgo' and 'yearsAhead'.
   */
  yearDropdownRange: YearRange;
} & TestProp;
