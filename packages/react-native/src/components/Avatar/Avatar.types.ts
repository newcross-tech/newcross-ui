import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ViewStyle } from 'react-native';

export enum AvatarSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const getActiveEllipseSize = (
  theme: ThemeDesignTokens
): Record<AvatarSizes, ViewStyle> => ({
  [AvatarSizes.small]: {
    height: theme.AvatarActiveEllipseSmallHeight,
    width: theme.AvatarActiveEllipseSmallWidth,
  },
  [AvatarSizes.medium]: {
    height: theme.AvatarActiveEllipseMediumHeight,
    width: theme.AvatarActiveEllipseMediumWidth,
  },
  [AvatarSizes.large]: {
    height: theme.AvatarActiveEllipseLargeHeight,
    width: theme.AvatarActiveEllipseLargeWidth,
  },
});

export const getActiveEllipseBorderWidth = (
  theme: ThemeDesignTokens
): Record<AvatarSizes, ViewStyle> => ({
  [AvatarSizes.small]: {
    borderWidth: theme.AvatarActiveEllipseSmallBorderWidth,
  },
  [AvatarSizes.medium]: {
    borderWidth: theme.AvatarActiveEllipseMediumBorderWidth,
  },
  [AvatarSizes.large]: {
    borderWidth: theme.AvatarActiveEllipseLargeBorderWidth,
  },
});

export const getInnerEllipseSize = (
  theme: ThemeDesignTokens
): Record<AvatarSizes, ViewStyle> => ({
  [AvatarSizes.small]: {
    height: theme.AvatarInnerEllipseSmallHeight,
    width: theme.AvatarInnerEllipseSmallWidth,
  },
  [AvatarSizes.medium]: {
    height: theme.AvatarInnerEllipseMediumHeight,
    width: theme.AvatarInnerEllipseMediumWidth,
  },
  [AvatarSizes.large]: {
    height: theme.AvatarInnerEllipseLargeHeight,
    width: theme.AvatarInnerEllipseLargeWidth,
  },
});

export const getIconSize = (
  theme: ThemeDesignTokens
): Record<AvatarSizes, number> => ({
  [AvatarSizes.small]: theme.AvatarInnerEllipseIconHeightSmall,
  [AvatarSizes.medium]: theme.AvatarInnerEllipseIconHeightMedium,
  [AvatarSizes.large]: theme.AvatarInnerEllipseIconHeightLarge,
});
