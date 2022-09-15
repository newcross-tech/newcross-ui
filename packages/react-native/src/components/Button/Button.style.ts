import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import {
  Mode,
  ButtonVariant,
  PressedButtonProps,
  ButtonSizes,
  getPaddingValues,
  getColorValues,
  getPressedColorValues,
  getDisabledColorValues,
  getBackgroundColorValues,
  getPressedBackgroundColorValues,
  getDisabledBackgroundColorValues,
  getBorderValues,
  ButtonCorners,
  getBorderStyle,
  getIconSize,
} from './Button.types';
import { ButtonProps } from './Button';
import useTheme from '../../hooks/useTheme';

const getBackgroundColor = ({
  disabled,
  variant,
  pressed,
  style,
  pressedStyle,
}: PressedButtonProps): ViewStyle => {
  const theme = useTheme();

  const backgroundColorValues = getBackgroundColorValues(theme);
  const pressedBackgroundColorValues = getPressedBackgroundColorValues(theme);
  const disabledBackgroundColorValues = getDisabledBackgroundColorValues(theme);

  if (disabled) {
    return {
      backgroundColor: disabledBackgroundColorValues[variant as ButtonVariant],
    };
  }

  if (pressed) {
    return {
      backgroundColor:
        pressedStyle?.backgroundColor ||
        pressedBackgroundColorValues[variant as ButtonVariant],
    };
  }

  return {
    backgroundColor:
      style?.backgroundColor || backgroundColorValues[variant as ButtonVariant],
  };
};

export const getColor = ({
  disabled,
  pressed,
  variant,
  textStyle,
  pressedTextStyle,
  disabledTextStyle,
  mode,
}: PressedButtonProps): TextStyle => {
  const theme = useTheme();
  const colorValues = getColorValues(theme, { mode })[variant as ButtonVariant];
  const pressedColorValues = getPressedColorValues(theme);
  const disabledColorValues = getDisabledColorValues(theme);

  if (disabled) {
    return {
      color:
        disabledTextStyle?.color ||
        disabledColorValues[variant as ButtonVariant],
    };
  }

  if (pressed) {
    return {
      color:
        pressedTextStyle?.color || pressedColorValues[variant as ButtonVariant],
    };
  }

  return {
    color: textStyle?.color || colorValues,
  };
};

export const pressedButtonStyle = ({
  disabled,
  variant,
  pressed,
  fullWidth,
  size,
  style,
  pressedStyle,
  corners,
}: PressedButtonProps) => {
  return [
    buttonStyle({
      fullWidth,
      disabled,
      variant,
      size,
      style,
      corners,
    }).container,
    getBackgroundColor({ disabled, variant, pressed, style, pressedStyle }),
  ];
};

export const pressedButtonTextStyle = ({
  size,
  disabled,
  pressed,
  variant,
  style,
  textStyle,
  pressedStyle,
  pressedTextStyle,
  mode,
}: PressedButtonProps) => {
  return [
    buttonStyle({ disabled, style, size, mode }).buttonText,

    getColor({
      disabled,
      pressed,
      variant,
      textStyle,
      pressedStyle,
      pressedTextStyle,
      mode,
    }),
  ];
};

const iconSpacing = ({ leftIcon, rightIcon, children }: ButtonProps) => {
  const theme = useTheme();
  const { ButtonIconSpacing } = theme;

  if (leftIcon && children) return { marginRight: ButtonIconSpacing };
  if (rightIcon && children) return { marginLeft: ButtonIconSpacing };
};

export const iconStyles = ({
  leftIcon,
  rightIcon,
  disabled,
  pressed,
  variant,
  style,
  pressedStyle,
  pressedTextStyle,
  size,
  children,
  mode,
}: PressedButtonProps) => {
  const theme = useTheme();
  return [
    getColor({
      disabled,
      pressed,
      variant,
      style,
      pressedStyle,
      pressedTextStyle,
      mode,
    }),
    getIconSize(theme)[size as ButtonSizes],
    iconSpacing({ leftIcon, rightIcon, children }),
  ];
};

const buttonStyle = ({
  fullWidth,
  disabled,
  variant,
  size,
  style,
  textStyle,
  corners,
  mode,
}: ButtonProps) => {
  const theme = useTheme();
  const borderValues = getBorderValues(theme);
  const paddingValues = getPaddingValues(theme);
  const colorValues = getColorValues(theme, { mode });
  const borderStyle = getBorderStyle(theme, { disabled });

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: fullWidth ? 'center' : 'space-between',
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
      borderRadius: borderValues[corners as ButtonCorners] || undefined,
      ...borderStyle[variant as ButtonVariant.secondary],
      ...paddingValues[size as ButtonSizes],
      ...style,
    },
    buttonText: {
      textAlign: 'center',
      color: colorValues[variant as ButtonVariant],
      ...textStyle,
    },
  });
};

export default buttonStyle;
