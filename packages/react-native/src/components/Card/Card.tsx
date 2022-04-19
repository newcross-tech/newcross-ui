import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import cardStyle from './Card.style';
import { CardColors } from './Card.types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons';
import useTheme from '../../hooks/useTheme';

export type CardProps = {
  /**
   * Supports any kind of content
   */
  children?: ReactNode;
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Whether the press behavior is disabled.
   */
  disabled?: boolean;
  /**
   * To show custom sectoin on the left side of card
   */
  thumbnailContent?: ReactNode;
  /**
   * Whether the card has round border
   */
  hasBorder?: boolean;
  /**
   * Whether the card has round corners
   */
  hasRoundedCorners?: boolean;
  /**
   * Cards color scheme (night/day) card
   */
  color?: CardColors;
  /**
   * Extend or Overwrite content style
   */
  contentStyle?: ViewStyle | TextStyle;
  /**
   * Whether the card is full width
   */
  fullWidth?: boolean;
  /**
   * Whether the card has an icon on the right hand side
   */
  hasRightIcon?: boolean;
  /**
   * Cards right hand side content if it has a rightIcon
   */
  rightIconContent?: ReactNode;
};

const Card = ({
  children,
  thumbnailContent,
  hasBorder,
  hasRoundedCorners,
  contentStyle,
  fullWidth,
  color = CardColors.primary,
  hasRightIcon = false,
  rightIconContent,
  ...rest
}: CardProps) => {
  const theme = useTheme();
  const styles = cardStyle({
    children,
    hasBorder,
    hasRoundedCorners,
    thumbnailContent,
    color,
    fullWidth,
    theme,
  });

  return (
    <Pressable style={styles.container} {...rest} testID="card">
      {thumbnailContent && (
        <View style={styles.thumbnail} testID="card-thumbnail">
          {thumbnailContent}
        </View>
      )}
      <View style={[styles.content, contentStyle]}>
        {children}
        {hasRightIcon && (
          <View style={styles.rightIcon} testID="card-right-icon">
            {rightIconContent ?? (
              <FontAwesomeIcon
                icon={faChevronRight}
                size={theme.SpacingBase24}
              />
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Card;
