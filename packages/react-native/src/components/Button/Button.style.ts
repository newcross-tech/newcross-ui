import { StyleSheet, ViewStyle } from 'react-native';
import {
  ButtonColors,
  PressedButtonProps,
  ButtonSizes,
  getPaddingValues,
  getColorValues,
  getTypographyValues,
  getBackgroundColorValues,
  getPressedBackgroundColorValues,
  getDisabledBackgroundColorValues,
} from './Button.types';
import { ButtonProps } from './Button';
import useTheme from '../../hooks/useTheme';
import { FontWeight } from '../../types';

const getBackgroundColor = ({
  disabled,
  color,
  pressed,
}: PressedButtonProps): ViewStyle => {
  const theme = useTheme();

  const backgroundColorValues = getBackgroundColorValues(theme);
  const pressedBackgroundColorValues = getPressedBackgroundColorValues(theme);
  const disabledBackgroundColorValues = getDisabledBackgroundColorValues(theme);

  if (disabled) {
    return {
      backgroundColor: disabledBackgroundColorValues[color as ButtonColors],
    };
  }
  if (pressed) {
    return {
      backgroundColor: pressedBackgroundColorValues[color as ButtonColors],
    };
  }
  return { backgroundColor: backgroundColorValues[color as ButtonColors] };
};

export const pressedButtonStyle = ({
  disabled,
  color,
  pressed,
  fullWidth,
  size,
}: PressedButtonProps) => {
  return [
    buttonStyle({ fullWidth, disabled, color, size }).container,
    getBackgroundColor({ disabled, color, pressed }),
  ];
};

const buttonStyle = ({ fullWidth, disabled, color, size }: ButtonProps) => {
  const theme = useTheme();

  const paddingValues = getPaddingValues(theme);
  const colorValues = getColorValues(theme);
  const typographyValues = getTypographyValues(theme);

  const {
    ButtonBorderRadius: borderRadius,
    ButtonFontFamily: fontFamily,
    ButtonFontWeight: fontWeight,
    ButtonDisabledColor: disabledColor,
  } = theme;

  return StyleSheet.create({
    container: {
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
      ...paddingValues[size as ButtonSizes],
      borderRadius,
    },
    buttonText: {
      textAlign: 'center',
      fontFamily,
      fontWeight: fontWeight as FontWeight,
      color: disabled ? disabledColor : colorValues[color as ButtonColors],
      ...typographyValues[size as ButtonSizes],
    },
  });
};

export default buttonStyle;
