import { StyleSheet } from 'react-native';
import {
  BadgeStyle,
  BadgeSizes,
  getHeightWidthValues,
  getPositionValues,
  BadgePositions,
} from './Badge.types';
import useTheme from '../../hooks/useTheme';
import { BadgeProps } from './Badge';

const badgeStyle = ({
  size,
  children,
  position,
}: BadgeProps): StyleSheet.NamedStyles<BadgeStyle> => {
  const theme = useTheme();

  const heightWidthValues = getHeightWidthValues(theme);
  const positionValues = children
    ? getPositionValues(theme)[size as BadgeSizes][position as BadgePositions]
    : {};

  return StyleSheet.create({
    badgeContainer: {
      alignSelf: 'flex-start',
    },

    badge: {
      position: children ? 'absolute' : 'relative',
      ...positionValues,
      zIndex: 1,
      paddingHorizontal: theme.BadgePadding,
      backgroundColor: theme.BadgeBackgroundColor,
      borderRadius: theme.BadgeBorderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      ...heightWidthValues[size as BadgeSizes],
    },

    badgeText: {
      color: theme.BadgeColor,
      textAlign: 'center',
    },
  });
};

export default badgeStyle;
