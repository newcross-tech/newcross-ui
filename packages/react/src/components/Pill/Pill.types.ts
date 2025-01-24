import { CSSProperties, ReactNode, SyntheticEvent } from 'react';
import { TestProp } from '../../types';

type ExtendedPillProps = PillPropsStrict & {
  isRemovable: boolean;
  isSelected: boolean;
};

export type PillVariantProps = Pick<
  PillPropsStrict,
  'disabled' | 'statusVariant'
>;

export type BackGroundProps = PillVariantProps &
  Pick<SelectedProps, 'isSelected'>;

export type SelectedProps = PillVariantProps &
  Pick<
    ExtendedPillProps,
    'hasPadding' | 'isSelected' | 'isRemovable' | 'hasBorder'
  >;

export type PillVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export type CustomStyle = {
  iconStyles?: CSSProperties;
  textStyles?: CSSProperties;
  coreStyles?: CSSProperties;
};

export type PillSize = 'small' | 'large';

export enum PillTypographySize {
  small = 'p2ActionRegular',
  large = 'p1ActionRegular',
}

export enum PillPaddingXSize {
  small = 'sm',
  large = 'md',
}

export enum PillGapSize {
  small = 'xs',
  large = 'sm',
}

export enum PillTypographyColor {
  default = 'defaultDark',
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'danger',
  disabled = 'disabled',
}
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
   * Called when a single tap gesture is detected.
   */
  onClick?: (event: SyntheticEvent) => void;
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
  statusVariant: PillVariant;
  /**
   * Used to add custom style to the pill container.
   */
  style: CustomStyle;
} & TestProp;
