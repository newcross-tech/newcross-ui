import { CSSProperties, ReactNode, SyntheticEvent } from 'react';
import { TestProp, ValueFrom } from '../../types';

export const PillVariant = {
  default: 'default',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;
export type PillVariant = ValueFrom<typeof PillVariant>;

export type PillCustomStyle = {
  iconStyles?: CSSProperties;
  textStyles?: CSSProperties;
  coreStyles?: CSSProperties;
};

export type PillSize = 'small' | 'large';

export const PillTypographySize = {
  small: 'p2ActionRegular',
  large: 'p1ActionRegular',
} as const;

export const PillPaddingXSize = {
  small: 'sm',
  large: 'md',
} as const;

export const PillGapSize = {
  small: 'xs',
  large: 'sm',
} as const;

export const PillTypographyColor = {
  default: 'defaultDark',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'danger',
  disabled: 'disabled',
} as const;

/**
 * @private
 */
export type PillPropsStrict = {
  /**
   * Text element to describe the pill.
   */
  label: string;
  /**
   * Disables pill from being pressed
   */
  disabled: boolean;
  /**
   * Size of the pill
   */
  size: PillSize;
  /**
   * Each pill can opt to include an icon which will be displayed before the label.
   */
  icon?: ReactNode;
  /**
   * If true displays a delete icon next to the label
   */
  removable: boolean;
  /**
   * @description Called when the pill is clicked
   */
  onClick?(event: SyntheticEvent): void;
  /**
   * Used to apply padding
   */
  hasPadding: boolean;
  /**
   * Checks if the Component is selected
   */
  selected: boolean;
  /**
   * Whether the pill has border
   */
  hasBorder: boolean;
  /**
   * Used to define color palette of the Pills.
   */
  variant: PillVariant;
  /**
   * Used to add custom style to the pill container.
   */
  style: PillCustomStyle;
} & TestProp;
