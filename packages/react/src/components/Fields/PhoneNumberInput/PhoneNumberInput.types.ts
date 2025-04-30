import { PhoneInputProps } from 'react-international-phone';
import { InputHTMLAttributes } from 'react';
import { Mode, TestProp } from '../../../types';
import { TypographyVariant } from '../../Typography';

export type PhoneNumberInputPropsStrict = {
  /**
   * Gives phone number input a label
   */
  label?: string;
  /**
   * Applies the theme typography styles to the label
   */
  labelVariant?: TypographyVariant;
  /**
   * Applies the theme color styles to the label
   */
  mode?: Mode;
  /**
   * Gives phone number input an error state
   */

  isError: boolean;
  /**
   * Shows check mark when validation is met
   */
  isValid: boolean;
  /**
   * Gives phone number input an helper text
   */
  helperText?: string;
  /**
   * Indicate whether the label is indicating that the input is required
   */
  required: boolean;
  /**
   * Sets disabled state of the input
   */
  disabled: boolean;
} & Omit<PhoneInputProps, 'disabled'> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'onClick'> &
  TestProp;
