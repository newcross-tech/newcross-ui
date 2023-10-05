import { PillProps } from './Pill';

type ExtendedPillProps = PillProps & {
  hasIcon: boolean;
  hasLabel: boolean;
  isRemovable: boolean;
  isSelected: boolean;
};
export type IconProps = Pick<
  ExtendedPillProps,
  'hasIcon' | 'disabled' | 'statusVariant'
>;
export type BackGroundProps = Pick<
  SelectedProps,
  'isSelected' | 'disabled' | 'statusVariant'
>;
export type RemoveIconProps = IconProps & Pick<ExtendedPillProps, 'hasLabel'>;
export type SelectedProps = Pick<
  ExtendedPillProps,
  'hasPadding' | 'isSelected' | 'isRemovable' | 'disabled' | 'statusVariant'
>;

export type PillVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export type TextProp = Pick<PillProps, 'disabled' | 'statusVariant'>;
