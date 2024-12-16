import { CSSProperties } from 'react';
import { PillProps } from './Pill';

type ExtendedPillProps = PillProps & {
  isRemovable: boolean;
  isSelected: boolean;
};

export type PillVariantProps = Pick<PillProps, 'disabled' | 'statusVariant'>;

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

export enum PillTypographyColor {
  default = 'defaultDark',
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'danger',
  disabled = 'disabled',
}
