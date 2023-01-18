import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type AvatarSizes = 'small' | 'medium' | 'large';

export type StyledFontType = FontAwesomeIconProps & {
  $size?: AvatarSizes;
};
