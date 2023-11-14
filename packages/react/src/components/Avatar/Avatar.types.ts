import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { AvatarProps } from './Avatar';

export type StyledFontType = FontAwesomeIconProps & {
  $size: number;
};
export type InactiveType = Pick<AvatarProps, 'inactive'>;

export type AvatarContainerType = InactiveType & {
  size: number;
};

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type SizeRange = IntRange<32, 301>;
