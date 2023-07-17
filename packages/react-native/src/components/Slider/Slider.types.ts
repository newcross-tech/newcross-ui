import { ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { SliderProps } from './Slider';

export const getThumbStyle = (
  theme: ThemeDesignTokens,
  { disabled, isPressed }: { disabled: SliderProps; isPressed: boolean }
): ViewStyle => {
  if (!disabled) {
    return {
      height: isPressed
        ? theme.SliderThumbPressedHeight
        : theme.SliderThumbHeight,
      width: isPressed ? theme.SliderThumbPressedWidth : theme.SliderThumbWidth,
      backgroundColor: isPressed
        ? theme.SliderThumbPressedColor
        : theme.SliderThumbColor,
    };
  }
  return {
    height: theme.SliderThumbHeight,
    width: theme.SliderThumbWidth,
    backgroundColor: theme.SliderThumbDisabledColor,
  };
};
