import { InputHTMLAttributes } from 'react';
import { TestProp, Theme } from '../../../types';
import { TypographyVariant } from '../../Typography';
import { TextInputProps } from '.';

export type PropStylesTypes = {
  isFocused?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  hasError?: boolean;
} & Theme;

export type ContainerProps = Pick<
  TextInputProps,
  'search' | 'disabled' | 'fullWidth' | 'isValid'
> & {
  hasError?: boolean;
  isFocused: boolean;
};

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'textarea'
  | 'search';

export type TextInputPropsStrict = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'disabled' | 'type'
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
   * Indicate whether the label is indicating that the input is required
   */
  required?: boolean;
  /**
   * Sets disabled state of the input
   */
  disabled: boolean;
} & TestProp;
