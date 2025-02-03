import { TestProp } from '../../../types';

export type HelperTextPropsStrict = {
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
   * Display length of characters
   */
  displayLength: boolean;
} & TestProp;
