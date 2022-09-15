import React, { ReactNode } from 'react';
import {
  View,
  GestureResponderEvent,
  TextStyle,
  Pressable,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { getIconSizeValues, LinkSizes, getTypographySizes } from './Link.types';
import linkStyle, { pressedLinkStyle } from './Link.style';
import useTheme from '../../hooks/useTheme';
import Typography from '../Typography';

export type LinkProps = {
  /**
   * Used to define size of the Link.
   */
  size?: LinkSizes;
  /**
   * Supports any kind of content.
   */
  children?: ReactNode;
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Used to add custom styles.
   */
  style?: TextStyle;
  /**
   * Show or hide icon
   */
  hasIcon?: boolean;
};

const Link = ({
  size = LinkSizes.small,
  children,
  onPress,
  style,
  hasIcon = true,
}: LinkProps) => {
  const theme = useTheme();
  const styles = linkStyle(theme);

  return (
    <Pressable
      accessibilityRole="link"
      style={({ pressed }) =>
        pressedLinkStyle(pressed, styles.container, theme)
      }
      onPress={onPress}
    >
      <View style={styles.linkContent}>
        <Typography
          variant={getTypographySizes()[size]}
          style={[styles.linkText, style]}
        >
          {children}
        </Typography>
        {hasIcon && (
          <View testID="link-icon">
            <FontAwesomeIcon
              style={styles.linkIcon}
              size={getIconSizeValues(theme)[size]}
              icon={faCircleChevronRight}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Link;
