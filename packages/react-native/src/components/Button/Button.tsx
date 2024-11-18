import React, {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import {
  Pressable,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  PressableProps,
} from 'react-native';
import { Mode } from '../../types';
import {
  pressedButtonStyle,
  pressedButtonTextStyle,
  iconStyles,
} from './Button.style';
import {
  ButtonVariant,
  ButtonSizes,
  ButtonCorners,
  ClonedIcon,
  PressedButtonProps,
  getTypographyValues,
} from './Button.types';
import Typography from '../Typography';

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
  /**
   * Used to set dark or light mode
   */
  mode?: Mode;
} & PressableProps;

const Button = ({
  onPress,
  variant = ButtonVariant.primary,
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  size = ButtonSizes.large,
  style,
  pressedStyle,
  textStyle,
  pressedTextStyle,
  disabledTextStyle,
  corners,
  testID,
  mode = Mode.light,
  ...rest
}: ButtonProps) => {
  const typographyVariantValue = getTypographyValues();

  const renderIcon = ({
    testID,
    leftIcon,
    rightIcon,
    pressed,
    children,
    mode,
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
          pressedTextStyle,
          size,
          children,
          mode,
        }),
      } as ClonedIcon)
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
          mode,
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
              children,
              mode,
            })}
          <Typography
            variant={typographyVariantValue[size as ButtonSizes]}
            style={pressedButtonTextStyle({
              size,
              disabled,
              pressed,
              variant,
              textStyle,
              pressedTextStyle,
              disabledTextStyle,
              mode,
            })}
          >
            {children}
          </Typography>
          {rightIcon &&
            renderIcon({
              rightIcon,
              testID: 'rightIcon',
              pressed,
              children,
              mode,
            })}
        </>
      )}
    </Pressable>
  );
};

export default Button;
