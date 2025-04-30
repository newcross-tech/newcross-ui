import { ReactElement } from 'react';
import { TypographyVariant } from '../../Typography';
import { Mode, TestProp } from '../../../types';
import { GroupBase, Props } from 'react-select';

export type AnySelectPropsStrict = SelectPropsStrict<
  unknown,
  boolean,
  GroupBase<unknown>
>;

export type SelectPropsStrict<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  /**
   * Gives select a label
   */
  label?: string;
  /**
   * Adds helper text
   */
  helperText?: string | ReactElement;
  /**
   * Adds error text
   */
  errorText?: string;
  /**
   * Controls error styles
   */
  hasError: boolean;
  /**
   * Adds id to select menu-list which is the parent div of the options
   */
  id?: string;
  /**
   * Show disabled state
   */
  disabled: boolean;
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
   * Set custom z-index for the menu
   */
  $zIndex: number;
  /**
   * Indicate whether the label is indicating that the input is required
   */
  required?: boolean;
  /**
   * Set the select to be full width
   */
  fullWidth: boolean;
} & TestProp;
