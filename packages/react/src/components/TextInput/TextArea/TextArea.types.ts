import { TextareaHTMLAttributes } from 'react';
import { TestProp } from '../../../types';

export type TextAreaPropsStrict = {
  /**
   * Adds helper text
   */
  helperText?: string;
  /**
   * Adds error text
   */
  errorText?: string;
  /**
   * Defines if the component is disabled
   */
  disabled: boolean;
  /**
   * Max length of characters
   */
  maxLength: number;
  /**
   * Current length of characters
   */
  length: number;
  /**
   * Applies full width to the component
   */
  fullWidth: boolean;
  /**
   * Indicates if field is valid
   */
  isValid: boolean;
  /**
   * onChange event handler
   */
  onChangeHandler: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  TestProp;
