import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { TestProp, Theme } from '../../types';
import { TypographyProps, TypographyVariant } from '../Typography';
import { TextInputProps } from './TextInput';

export type ErrorType = {
  hasError?: boolean;
};
export type PropStylesTypes = {
  isFocused?: boolean;
  disabled?: boolean;
  isValid?: boolean;
} & Theme &
  ErrorType;

export type ContainerProps = Pick<
  TextInputProps,
  'search' | 'disabled' | 'fullWidth' | 'isValid'
> &
  ErrorType & {
    isFocused: boolean;
  };

export type MessageTextProps = TypographyProps & ErrorType;

export type TextAreaContainerProps = Pick<TextInputProps, 'fullWidth'>;

export type TextAreaProps = {
  maxLength?: number;
  length?: number;
  helperText?: string;
  errorText?: string;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
} & TextAreaContainerProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  ErrorType &
  TestProp;

export type StyledTextAreaProps = Omit<TextAreaProps, 'onChangeHandler'> &
  ErrorType;

export type HelperTextProps = Pick<TextAreaProps, 'errorText' | 'helperText'> &
  TestProp;

export type TextInputPropsStrict = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'disabled'
> & {
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
