import { HTMLAttributes } from 'react';
import { TypographyProps } from '../../..';

export type LabelPropsStrict = TypographyProps & {
  /**
   * Reflects the value of the `for` content property
   */
  htmlFor?: string;
  /**
   * Used to assign disabled styles
   */
  disabled: boolean;
  /**
   * Used to assign required styles
   */
  required: boolean;
  /**
   * Used to assign error styles
   */
  hasError: boolean;
} & HTMLAttributes<HTMLLabelElement>;
