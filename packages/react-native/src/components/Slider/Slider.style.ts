import useTheme from '../../hooks/useTheme';
import { StyleSheet } from 'react-native';
import { getThumbStyle } from './Slider.types';

const sliderStyle = ({ isPressed, disabled }: any) => {
  const theme = useTheme();
  const thumbValues = getThumbStyle(theme, { disabled, isPressed });
  return StyleSheet.create({
    thumb: {
      ...thumbValues,
      borderRadius: theme.SliderThumbBorderRadius,
    },
  });
};

export default sliderStyle;
