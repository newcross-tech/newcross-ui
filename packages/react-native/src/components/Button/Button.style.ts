import { StyleSheet, ViewStyle } from 'react-native';
import {
  ButtonStyle,
  Colors,
  PressedButtonProps,
  Sizes,
  getPaddingValues,
  getColorValues,
  getTypographyValues,
  getBackgroundColorValues,
  getPressedBackgroundColorValues,
  getDisabledBackgroundColorValues,
} from './Button.types';
import { ButtonProps } from './Button';
import useTheme from '../../hooks/useTheme';

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
      backgroundColor: disabledBackgroundColorValues[color as Colors],
    };
  }
  if (pressed) {
    return {
      backgroundColor: pressedBackgroundColorValues[color as Colors],
    };
  }
  return { backgroundColor: backgroundColorValues[color as Colors] };
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

const buttonStyle = ({
  fullWidth,
  disabled,
  color,
  size,
}: ButtonProps): StyleSheet.NamedStyles<ButtonStyle> => {
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
      ...paddingValues[size as Sizes],
      borderRadius,
    },
    buttonText: {
      textAlign: 'center',
      fontFamily,
      fontWeight,
      color: disabled ? disabledColor : colorValues[color as Colors],
      ...typographyValues[size as Sizes],
    },
  });
};

export default buttonStyle;
