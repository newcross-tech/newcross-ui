import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { SliderStyleProps } from './Slider.types';

const sliderStyle = ({ disabled }: SliderStyleProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    thumb: {
      borderRadius: theme.SliderThumbBorderRadius,
      height: theme.SliderThumbHeight,
      width: theme.SliderThumbWidth,
      backgroundColor: disabled
        ? theme.SliderThumbDisabledColor
        : theme.SliderThumbColor,
    },
  });
};

export default sliderStyle;
