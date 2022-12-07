import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export enum AvatarSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type StyledFontType = FontAwesomeIconProps & {
  $size?: AvatarSizes;
};
