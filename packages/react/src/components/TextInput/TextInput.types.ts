import { TypographyProps } from '../Typography';
import { TextInputProps } from './TextInput';

export type ErrorType = {
  hasError?: boolean;
};

export type ContainerProps = Pick<TextInputProps, 'search' | 'disabled'> &
  ErrorType & {
    isFocused: boolean;
  };

export type MessageTextProps = TypographyProps & ErrorType;
