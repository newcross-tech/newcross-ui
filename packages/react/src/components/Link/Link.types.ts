import { TypographyProps, TypographyPropsStrict } from '../Typography';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { RequiredProps, TestProp } from '../../types';
import { AnchorHTMLAttributes } from 'react';

export type LinkTypographyVariant = Exclude<
  TypographyPropsStrict['variant'],
  'h1' | 'h2' | 'h3' | 'h4' | 'h5'
>;

/**
 * @private The props after normalization
 */
export type LinkPropsStrict = {
  /**
   * Provide icon name for left icon
   */
  leftIcon?: IconDefinition;
  /**
   * Provide icon name for right icon
   */
  rightIcon?: IconDefinition;
  /**
   * Disables the link, preventing any interaction such as clicks.
   */
  disabled: boolean;
  /**
   * Applies the theme typography styles.
   */
  variant: LinkTypographyVariant;
} & RequiredProps<
  Omit<TypographyProps, 'variant' | 'textDecoration'>,
  'color'
> &
  TestProp &
  AnchorHTMLAttributes<HTMLAnchorElement>;
