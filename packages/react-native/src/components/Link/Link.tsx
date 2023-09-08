import React, { ReactNode } from 'react';
import {
  View,
  GestureResponderEvent,
  TextStyle,
  Pressable,
  PressableProps,
  ViewStyle,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { Mode } from '../../types';
import { getIconSizeValues, LinkSizes, getTypographySizes } from './Link.types';
import linkStyle, { pressedLinkStyle } from './Link.style';
import useTheme from '../../hooks/useTheme';
import Typography from '../Typography';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
   * Used to add custom styles.
   */
  containerStyle?: ViewStyle;
  /**
   * Show or hide icon
   */
  hasIcon?: boolean;
  /**
   * Used to add custom icon.
   */
  icon?: IconProp;
  /**
   * Used to set dark or light mode
   */
  mode?: Mode;
  /**
   * Used to locate end-to-end tests.
   */
  testID?: string;
  /**
   * Used when text is too long
   */
  numberOfLines?: number;
} & PressableProps;

const Link = ({
  size = LinkSizes.small,
  children,
  onPress,
  style,
  hasIcon = true,
  icon = faCircleChevronRight,
  mode = Mode.light,
  testID,
  numberOfLines = 0,
  containerStyle = {},
  ...rest
}: LinkProps) => {
  const theme = useTheme();
  const styles = linkStyle(theme, mode);

  return (
    <Pressable
      testID={testID}
      accessibilityRole="link"
      style={({ pressed }) =>
        pressedLinkStyle(
          pressed,
          { ...styles.container, ...containerStyle },
          theme
        )
      }
      onPress={onPress}
      {...rest}
    >
      <View style={styles.linkContent}>
        <Typography
          variant={getTypographySizes()[size]}
          style={[styles.linkText, style]}
          numberOfLines={numberOfLines}
        >
          {children}
        </Typography>
        {hasIcon && (
          <View testID="link-icon">
            <FontAwesomeIcon
              style={styles.linkIcon}
              size={getIconSizeValues(theme)[size]}
              icon={icon}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Link;
