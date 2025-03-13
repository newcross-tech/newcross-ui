import { ButtonHTMLAttributes, ReactElement } from 'react';
import { TestProp } from '../../types';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonScheme = 'dark' | 'light';

export type ButtonSizes = 'small' | 'large';

export enum TypographyValues {
  small = 'p2Action',
  large = 'p1Action',
}

export type ButtonPropsStrict = {
  /**
   * Used to define background variant
   */
  variant: ButtonVariant;
  /**
   * Use to define the background the button is applied to
   */
  scheme: ButtonScheme;
  /**
   * Used to define size of button
   */
  size: ButtonSizes;
  /**
   * To toggle between auto and full width button
   */
  fullWidth: boolean;
  /**
   * Set the left icon element.
   */
  leftIcon?: ReactElement;
  /**
   * Set the right icon element.
   */
  rightIcon?: ReactElement;
  /**
   * Set disabled state of button
   */
  disabled: boolean;
} & TestProp &
  ButtonHTMLAttributes<HTMLButtonElement>;
