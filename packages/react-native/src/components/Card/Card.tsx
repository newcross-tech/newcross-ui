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
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
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
  /**
   * A test identifier for the component.
   */
  testID?: string;
  /**
   * Overwrites or extends the styles applied to the component's container.
   */
  containerStyle?: ViewStyle;
  /**
   * Whether the cards have a shadow.
   */
  hasShadow?: boolean;
  /**
   * Whether card is pressable.
   */
  isPressable?: boolean;
  /**
   * Extra content on the bottom side of the Card.
   */
  extraFooterContent?: ReactNode;
  /**
   *  Overwrites or extends the styles applied to the extra footer content.
   * */
  extraFooterStyle?: ViewStyle;
  /**
   * opacity disabled
   * */
  isOpacityDisabled?: boolean;
};

const Card = ({
  children,
  thumbnailContent,
  hasBorder,
  testID = 'card',
  hasRoundedCorners,
  contentStyle,
  fullWidth,
  color = CardColors.primary,
  hasRightIcon = false,
  rightIconContent,
  containerStyle,
  hasShadow = true,
  isPressable = true,
  extraFooterContent = null,
  isOpacityDisabled = false,
  extraFooterStyle,
  ...rest
}: CardProps) => {
  const theme = useTheme();
  const styles = cardStyle({
    children,
    hasBorder,
    hasShadow,
    hasRoundedCorners,
    thumbnailContent,
    color,
    fullWidth,
    theme,
    hasRightIcon,
    extraFooterContent,
  });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        {
          opacity:
            pressed && isPressable && !isOpacityDisabled
              ? theme.CardPressedOpacity
              : 1,
        },
      ]}
      {...rest}
      testID={`${testID}`}
    >
      <View style={styles.mainContentDirection}>
        {thumbnailContent && (
          <View style={[styles.thumbnail]} testID={`${testID}-thumbnail`}>
            {thumbnailContent}
          </View>
        )}
        <View style={[styles.content, contentStyle]}>
          {children}
          {hasRightIcon && (
            <View style={styles.rightIcon} testID={`${testID}-right-icon`}>
              {rightIconContent ?? (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={theme.SpacingBase24}
                />
              )}
            </View>
          )}
        </View>
      </View>

      {!!extraFooterContent && (
        <View
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e) => {
            e.stopPropagation();
          }}
          style={[styles.footerContent, extraFooterStyle]}
        >
          {extraFooterContent}
        </View>
      )}
    </Pressable>
  );
};

export default Card;
