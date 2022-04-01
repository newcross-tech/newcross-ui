import React, { ReactNode } from 'react';
import { Pressable, Text, GestureResponderEvent } from 'react-native';
import buttonStyle, { pressedButtonStyle } from './Button.style';
import { Colors, Sizes } from './Button.types';

export type ButtonProps = {
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Whether the press behavior is disabled.
   */
  disabled?: boolean;
  /**
   * Used to define background color
   */
  color?: Colors;
  /**
   * Either children or a render prop that receives a boolean
   * reflecting whether the component is currently pressed.
   */
  children?: ReactNode;
  /**
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
  /**
   * Used to define size of button
   */
  size?: Sizes;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

const Button = ({
  onPress,
  color = Colors.primary,
  disabled = false,
  children,
  fullWidth = false,
  size = Sizes.default,
  ...rest
}: ButtonProps) => {
  const styles = buttonStyle({ disabled, color, fullWidth, size });

  return (
    <Pressable
      style={({ pressed }) =>
        pressedButtonStyle({ disabled, color, pressed, fullWidth, size })
      }
      onPress={onPress}
      accessibilityRole="button"
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;
