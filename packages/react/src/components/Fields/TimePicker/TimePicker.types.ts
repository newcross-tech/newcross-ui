import { ReactElement } from 'react';
import { TypographyVariant } from '../../Typography';
import { Props } from 'react-select';

export type TimeOption = { value: string; label: string };

export type TimePickerPropsStrict = Omit<
  Props<TimeOption>,
  'value' | 'onChange'
> & {
  /**
   * Gives select a label
   */
  label?: string;
  /**
   * The placeholder for the select input
   */
  placeholder?: string;
  /**
   * Adds helper text
   */
  helperText?: string | ReactElement;
  /**
   * Adds error text
   */
  errorText?: string;
  /**
   * Controls error styles
   */
  hasError: boolean;
  /**
   * Adds id to select menu-list which is the parent div of the options
   */
  id?: string;
  /**
   * Show disabled state
   */
  disabled: boolean;
  /**
   * Applies the theme typography styles to the label
   */
  labelVariant: TypographyVariant;
  /**
   * Adds subtitle text
   */
  subtitle?: string;
  /**
   * Applies the theme typography styles to the subtitle
   */
  subtitleVariant: TypographyVariant;
  /**
   * Set custom z-index for the menu
   */
  $zIndex: number;
  /**
   * Indicate whether the label is indicating that the input is required
   */
  required?: boolean;
  /**
   * The date the we use as starting point to generate the options.
   */
  baseDate?: string | null;
  /**
   * The first time to show in the options (as "HH:mm").
   */
  startTime: string;
  /**
   * The number of minutes to skip before/after the starting time before generating options.
   */
  offset: number;
  /**
   * The number of minutes between each option.
   */
  step: number;
  /**
   * The total number of minutes of options to generate (e.g. 1440 for a full 24-hour range).
   */
  duration: number;
  /**
   * The current selected time (as "HH:mm").
   */
  value?: string | null;
  /**
   * The function to call when the value changes.
   */
  onChange?: (value: string) => void;
};
