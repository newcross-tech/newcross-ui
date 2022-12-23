import { TextareaHTMLAttributes } from 'react';
import { TestProp } from '../../types/TestProp';
import { Theme } from '../../types/Theme';
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

export type ContainerProps = Pick<TextInputProps, 'search' | 'disabled'> &
  ErrorType & {
    isFocused: boolean;
  };

export type MessageTextProps = TypographyProps & ErrorType;

export type TextAreaProps = {
  maxLength?: number;
  length?: number;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  ErrorType &
  TestProp;

export type StyledTextAreaProps = Omit<TextAreaProps, 'onChangeHandler'>;
