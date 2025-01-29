import { InputHTMLAttributes } from 'react';
import { TestProp } from '../../types';
import { PhoneInputProps } from 'react-international-phone';

export type PhoneNumberInputPropsStrict = {
  /**
   * Gives phone number input a label
   */
  label?: string;
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
