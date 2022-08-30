import { ViewStyle, TextStyle } from 'react-native';
import { TypographyVariant } from '../Typography';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export type BadgeStyle = {
  badge: ViewStyle;
  badgeText: TextStyle;
  badgeContainer: ViewStyle;
};

export enum BadgeSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum BadgePositions {
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
}

export const getHeightWidthValues = (
  theme: ThemeDesignTokens
): Record<BadgeSizes, TextStyle> => ({
  [BadgeSizes.large]: {
    height: theme.BadgeLargeHeight,
    minWidth: theme.BadgeLargeWidth,
  },
  [BadgeSizes.medium]: {
    height: theme.BadgeMediumHeight,
    minWidth: theme.BadgeMediumWidth,
  },
  [BadgeSizes.small]: {
    height: theme.BadgeSmallHeight,
    minWidth: theme.BadgeSmallWidth,
  },
});

export const getTypographyVariant = (size: BadgeSizes) =>
  ({
    [BadgeSizes.large]: TypographyVariant.heading3,
    [BadgeSizes.medium]: TypographyVariant.heading5,
    [BadgeSizes.small]: TypographyVariant.heading5,
  }[size]);

type PositionValues = Record<BadgeSizes, Record<BadgePositions, ViewStyle>>;

export const getPositionValues = ({
  BadgeLargePosition: largePosition,
  BadgeMediumPosition: mediumPosition,
  BadgeSmallPosition: smallPosition,
}: ThemeDesignTokens): PositionValues => ({
  [BadgeSizes.large]: {
    [BadgePositions.TopRight]: { top: -largePosition, right: -largePosition },
    [BadgePositions.TopLeft]: { top: -largePosition, left: -largePosition },
    [BadgePositions.BottomRight]: {
      bottom: -largePosition,
      right: -largePosition,
    },
    [BadgePositions.BottomLeft]: {
      bottom: -largePosition,
      left: -largePosition,
    },
  },
  [BadgeSizes.medium]: {
    [BadgePositions.TopRight]: { top: -mediumPosition, right: -mediumPosition },
    [BadgePositions.TopLeft]: { top: -mediumPosition, left: -mediumPosition },
    [BadgePositions.BottomRight]: {
      bottom: -mediumPosition,
      right: -mediumPosition,
    },
    [BadgePositions.BottomLeft]: {
      bottom: -mediumPosition,
      left: -mediumPosition,
    },
  },
  [BadgeSizes.small]: {
    [BadgePositions.TopRight]: { top: smallPosition, right: smallPosition },
    [BadgePositions.TopLeft]: { top: smallPosition, left: smallPosition },
    [BadgePositions.BottomRight]: {
      bottom: smallPosition,
      right: smallPosition,
    },
    [BadgePositions.BottomLeft]: { bottom: smallPosition, left: smallPosition },
  },
});
