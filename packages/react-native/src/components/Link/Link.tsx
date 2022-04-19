import React, { ReactNode } from 'react';
import { View, Text, GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { getIconSizeValues, LinkSizes } from './Link.types';
import linkStyle, { pressedLinkStyle } from './Link.style';
import useTheme from '../../hooks/useTheme';

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
   * Show or hide icon
   */
  hasIcon?: boolean;
};

const Link = ({
  size = LinkSizes.small,
  children,
  onPress,
  hasIcon = true,
}: LinkProps) => {
  const theme = useTheme();
  const styles = linkStyle(theme, { size });

  return (
    <Pressable
      accessibilityRole="link"
      style={({ pressed }) =>
        pressedLinkStyle(pressed, styles.container, theme)
      }
      onPress={onPress}
    >
      <View style={styles.linkContent}>
        <Text style={styles.linkText}>{children}</Text>
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
