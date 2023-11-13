import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { AvatarProps } from './Avatar';

export type StyledFontType = FontAwesomeIconProps & {
  $size: number;
};
export type InactiveType = Pick<AvatarProps, 'inactive'>;

export type AvatarContainerType = InactiveType & {
  size: number;
};
