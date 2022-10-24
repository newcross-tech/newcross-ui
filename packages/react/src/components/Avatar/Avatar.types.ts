import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { AvatarProps } from './Avatar';

export enum AvatarSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
export type AvatarContentProps = AvatarProps & {
  onError?: () => void;
};
export type StyledFontType = FontAwesomeIconProps & {
  $size?: AvatarSizes;
};

export const getIconSize = (theme: ThemeDesignTokens) => ({
  [AvatarSizes.small]: theme.AvatarInnerEllipseIconHeightSmall,
  [AvatarSizes.medium]: theme.AvatarInnerEllipseIconHeightMedium,
  [AvatarSizes.large]: theme.AvatarInnerEllipseIconHeightLarge,
});
