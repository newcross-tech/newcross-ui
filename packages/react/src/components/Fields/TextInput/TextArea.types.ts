import { TextareaHTMLAttributes } from 'react';
import { RequiredProps, TestProp } from '../../../types';
import { TextInputPropsStrict } from './TextInput.types';

export type TextAreaPropsStrict = RequiredProps<
  Pick<
    TextInputPropsStrict,
    | 'helperText'
    | 'errorText'
    | 'disabled'
    | 'maxLength'
    | 'isValid'
    | 'onChange'
    | 'hasError'
    | 'id'
  >,
  'hasError' | 'isValid' | 'disabled' | 'maxLength'
> & {
  /**
   * @internal
   * Current length of characters
   */
  length: number;
  displayLength: boolean;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> &
  TestProp;
