import { PillProps } from './Pill';

type ExtendedPillProps = PillProps & {
  hasIcon: boolean;
  hasLabel: boolean;
  isRemovable: boolean;
  isSelected: boolean;
};
export type IconProps = Pick<ExtendedPillProps, 'hasIcon' | 'disabled'>;
export type BackGroundProps = Pick<SelectedProps, 'isSelected' | 'disabled'>;
export type RemoveIconProps = IconProps & Pick<ExtendedPillProps, 'hasLabel'>;
export type SelectedProps = Pick<
  ExtendedPillProps,
  'hasPadding' | 'isSelected' | 'isRemovable' | 'disabled'
>;
