import { CSSProperties } from 'react';
import { PillProps } from './Pill';

type ExtendedPillProps = PillProps & {
  hasIcon: boolean;
  hasLabel: boolean;
  isRemovable: boolean;
  isSelected: boolean;
};

export type IconProps = TextProp & Pick<ExtendedPillProps, 'hasIcon'>;

export type BackGroundProps = TextProp & Pick<SelectedProps, 'isSelected'>;

export type RemoveIconProps = IconProps & Pick<ExtendedPillProps, 'hasLabel'>;

export type SelectedProps = TextProp &
  Pick<
    ExtendedPillProps,
    'hasPadding' | 'isSelected' | 'isRemovable' | 'hasBorder'
  >;

export type TextProp = Pick<PillProps, 'disabled' | 'statusVariant'>;

export type PillVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export type CustomStyle = {
  iconStyles?: CSSProperties;
  textStyles?: CSSProperties;
  coreStyles?: CSSProperties;
};
