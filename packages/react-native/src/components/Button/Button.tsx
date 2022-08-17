import React, {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import {
  Pressable,
  Text,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { pressedButtonStyle, pressedButtonTextStyle } from './Button.style';

import { ButtonVariant, ButtonSizes, ButtonCorners } from './Button.types';

import { PressedButtonProps } from './Button.types';
import { iconStyles } from './Button.style';

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
   * Used to define background variant
   */
  variant?: ButtonVariant;
  /**
   * Either children or a render prop that receives a boolean
   * reflecting whether the component is currently pressed.
   */
  children?: ReactNode;
  /**
   * Set the left icon element.
   */
  leftIcon?: ReactElement;
  /**
   * Set the right icon element.
   */
  rightIcon?: ReactElement;
  /**
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
  /**
   * Used to define size of button
   */
  size?: ButtonSizes;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Used to add custom styles.
   */
  style?: ViewStyle;
  /**
   * Used to add custom pressed styles.
   */
  pressedStyle?: ViewStyle;
  /**
   * Used to add custom text styles.
   */
  textStyle?: TextStyle;
  /**
   * Used to add custom pressed text styles.
   */
  pressedTextStyle?: TextStyle;
  /**
   * Used to add custom disabled text styles.
   */
  disabledTextStyle?: TextStyle;
  /**
   * Used to set the border radius style e.g. pill, squared
   */
  corners?: ButtonCorners;
};

const Button = ({
  onPress,
  variant = ButtonVariant.primary,
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  size = ButtonSizes.medium,
  style,
  pressedStyle,
  textStyle,
  pressedTextStyle,
  disabledTextStyle,
  corners,
  testID,
  ...rest
}: ButtonProps) => {
  const renderIcon = ({
    testID,
    leftIcon,
    rightIcon,
    pressed,
  }: PressedButtonProps) => {
    const icon = leftIcon || rightIcon;

    return (
      isValidElement(icon) &&
      cloneElement(icon, {
        testID: testID,
        style: iconStyles({
          rightIcon,
          leftIcon,
          disabled,
          pressed,
          variant,
          style,
          pressedStyle,
          size,
        }),
      })
    );
  };

  return (
    <Pressable
      style={({ pressed }) =>
        pressedButtonStyle({
          disabled,
          variant,
          pressed,
          fullWidth,
          size,
          style,
          pressedStyle,
          corners,
        })
      }
      onPress={onPress}
      accessibilityRole="button"
      testID={testID}
      disabled={disabled}
      {...rest}
    >
      {({ pressed }) => (
        <>
          {leftIcon &&
            renderIcon({
              leftIcon,
              testID: 'leftIcon',
              pressed,
            })}
          <Text
            style={pressedButtonTextStyle({
              size,
              disabled,
              pressed,
              variant,
              textStyle,
              pressedTextStyle,
              disabledTextStyle,
            })}
          >
            {children}
          </Text>
          {rightIcon &&
            renderIcon({
              rightIcon,
              testID: 'rightIcon',
              pressed,
            })}
        </>
      )}
    </Pressable>
  );
};

export default Button;
