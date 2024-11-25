import { TextareaHTMLAttributes } from 'react';
import { TestProp, Theme } from '../../types';
import { TypographyProps } from '../Typography';
import { TextInputProps } from './TextInput';

export type ErrorType = {
  hasError?: boolean;
};
export type PropStylesTypes = {
  isFocused?: boolean;
  disabled?: boolean;
} & Theme &
  ErrorType;

export type ContainerProps = Pick<
  TextInputProps,
  'search' | 'disabled' | 'fullWidth'
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

export type StyledTextAreaProps = Omit<TextAreaProps, 'onChangeHandler'>;
