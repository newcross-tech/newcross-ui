import { InputHTMLAttributes } from 'react';
import { Mode, RequiredProps, TestProp } from '../../../types';
import { TypographyVariant } from '../../Typography';

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'textarea'
  | 'search';

export type TextInputPropsStrict = RequiredProps<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled' | 'type'>,
  'id'
> & {
  /**
   * Type of input
   */
  type: InputType;
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
   * Updates text in input box
   */
  onChange?: (
    newState: string,
    event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  /**
   * Shows check mark when validation is met
   */
  isValid?: boolean;
  /**
   * if true, the text input will take up the full width of its container
   */
  fullWidth: boolean;
  /**
   * If true alters text input to search bar styles
   */
  search: boolean;
  /**
   * triggers the on press of the close icon
   */
  onClose?: VoidFunction;
  /**
   * Applies the theme typography styles to the label
   */
  labelVariant?: TypographyVariant;
  /**
   * Applies the theme color styles to the label
   */
  mode?: Mode;
  /**
   * Adds subtitle text
   */

  subtitle?: string;
  /**
   * Applies the theme typography styles to the subtitle
   */
  subtitleVariant: TypographyVariant;
  /**
   * Indicate whether the label is indicating that the input is required
   */
  required?: boolean;
  /**
   * Sets disabled state of the input
   */
  disabled: boolean;
  /**
   * If true, the input has border
   * @default true
   */
  hasBorder: boolean;
  /**
   * @private
   * @internal
   */
  isFocused: boolean;
  /**
   * @private
   * @internal
   */
  hasError: boolean;
} & TestProp;
