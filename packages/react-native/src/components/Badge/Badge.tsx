import React, { ReactNode } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import badgeStyle from './Badge.style';
import {
  getTypographyVariant,
  BadgeSizes,
  BadgePositions,
} from './Badge.types';
import { calculateDisplayNumber } from './utils';
import Typography from '../Typography';

export type BadgeProps = {
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle | TextStyle;
  /**
   * Used to define size of the badge
   */
  size?: BadgeSizes;
  /**
   * Used to define the content of the badge
   */
  badgeContent?: any;
  /**
   * Used to define the max number to cap the value of the badge content
   */
  maxNumber?: number;
  /**
   * Support any kind of content
   */
  children?: ReactNode;
  /**
   * Used to define the position of the badge
   * Positions are predefined
   */
  position?: BadgePositions;
};

const Badge = ({
  style,
  size = BadgeSizes.large,
  badgeContent,
  maxNumber = 999,
  children,
  position,
}: BadgeProps) => {
  const styles = badgeStyle({ size, children, position });
  const isSmallBadge = size === BadgeSizes.small;
  const hasContent = !!badgeContent;
  const renderContent = hasContent && !isSmallBadge;

  return (
    <View style={styles.badgeContainer}>
      <View style={[styles.badge, style]}>
        <Typography
          variant={getTypographyVariant(size)}
          style={styles.badgeText}
        >
          {renderContent && calculateDisplayNumber(badgeContent, maxNumber)}
        </Typography>
      </View>
      {children}
    </View>
  );
};

export default Badge;
