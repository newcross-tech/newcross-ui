import React, { ReactElement, ReactNode } from 'react';
import {
  TextStyle,
  View,
  ViewStyle,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
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
   * Overwrites the styles of the Badge Component to center the Badge.
   */
  isBadgeCentered?: boolean;

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
  badgeContent?: number | string | ReactElement;
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
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Used to locate end-to-end tests.
   */
  testID?: string;
};

const Badge = ({
  style,
  size = BadgeSizes.large,
  badgeContent,
  maxNumber = 999,
  children,
  position,
  onPress,
  testID,
  isBadgeCentered = false,
}: BadgeProps) => {
  const styles = badgeStyle({ size, children, position });
  const isSmallBadge = size === BadgeSizes.small;
  const isNumber = typeof badgeContent === 'number';
  const hasContent = !!badgeContent;
  const renderContent = hasContent && !isSmallBadge;

  const badge = (
    <View
      testID={testID}
      style={[
        styles.badgeContainer,
        isBadgeCentered && { alignSelf: 'center' },
      ]}
    >
      <View style={[styles.badge, style]}>
        <Typography
          variant={getTypographyVariant(size)}
          style={styles.badgeText}
        >
          {renderContent &&
            (isNumber
              ? calculateDisplayNumber(badgeContent, maxNumber)
              : badgeContent)}
        </Typography>
      </View>
      {children}
    </View>
  );

  return onPress ? (
    <Pressable onPress={onPress}>{badge}</Pressable>
  ) : (
    <>{badge}</>
  );
};

export default Badge;
