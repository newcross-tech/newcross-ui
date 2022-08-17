import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import {
  ButtonVariant,
  PressedButtonProps,
  ButtonSizes,
  getPaddingValues,
  getColorValues,
  getPressedColorValues,
  getDisabledColorValues,
  getTypographyValues,
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
}: PressedButtonProps): TextStyle => {
  const theme = useTheme();

  const colorValues = getColorValues(theme)[variant as ButtonVariant];
  const pressedColorValues =
    getPressedColorValues(theme)[variant as ButtonVariant];
  const disabledColorValues =
    getDisabledColorValues(theme)[variant as ButtonVariant];

  if (disabled) {
    return {
      color: disabledTextStyle?.color || disabledColorValues,
    };
  }

  if (pressed) {
    return { color: pressedTextStyle?.color || pressedColorValues };
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
    buttonStyle({ fullWidth, disabled, variant, size, style, corners })
      .container,
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
}: PressedButtonProps) => {
  return [
    buttonStyle({ disabled, style, size }).buttonText,
    getColor({ disabled, pressed, variant, textStyle, pressedStyle }),
  ];
};

const iconSpacing = ({ leftIcon, rightIcon }: ButtonProps) => {
  const theme = useTheme();
  const { ButtonIconSpacing } = theme;
  if (leftIcon) return { marginRight: ButtonIconSpacing };
  if (rightIcon) return { marginLeft: ButtonIconSpacing };
};

export const iconStyles = ({
  leftIcon,
  rightIcon,
  disabled,
  pressed,
  variant,
  style,
  pressedStyle,
  size,
}: PressedButtonProps) => {
  const theme = useTheme();

  return [
    getColor({ disabled, pressed, variant, style, pressedStyle }),
    getIconSize(theme)[size as ButtonSizes],
    iconSpacing({ leftIcon, rightIcon }),
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
}: ButtonProps) => {
  const theme = useTheme();
  const borderValues = getBorderValues(theme);
  const paddingValues = getPaddingValues(theme);
  const colorValues = getColorValues(theme);
  const typographyValues = getTypographyValues(theme);

  const borderStyle = getBorderStyle(theme, { disabled });

  const { ButtonFontFamily: fontFamily, ButtonDisabledColor: disabledColor } =
    theme;

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: fullWidth ? 'center' : 'space-between',
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
      borderRadius: borderValues[corners as ButtonCorners] || undefined,
      ...borderStyle[variant as ButtonVariant.outlinePrimary],
      ...paddingValues[size as ButtonSizes],
      ...style,
    },
    buttonText: {
      textAlign: 'center',
      fontFamily,
      color: disabled ? disabledColor : colorValues[variant as ButtonVariant],
      ...typographyValues[size as ButtonSizes],
      ...textStyle,
    },
  });
};

export default buttonStyle;
