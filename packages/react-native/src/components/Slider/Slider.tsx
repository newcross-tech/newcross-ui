import React from 'react';
import { View } from 'react-native';
import { Slider as RNSLider } from '@miblanchard/react-native-slider';
import useTheme from '../../hooks/useTheme';

export type SliderProps = {
  sliderValue: number | Array<number>;
  onChangeValue: (value: number | Array<number>) => void;
  maximumValue?: number;
  minimumValue?: number;
  step?: number;
  disabled?: boolean;
  testID?: string;
};

const Slider = ({
  sliderValue,
  onChangeValue,
  maximumValue,
  minimumValue,
  step,
  disabled,
  testID,
  ...rest
}: SliderProps) => {
  const theme = useTheme();

  const {
    SliderThumbColor,
    SliderMaxTrackColor,
    SliderMinTrackColor,
    SliderDisabledThumbColor,
    SliderDisabledMaxTrackColor,
    SliderDisabledMinTrackColor,
  } = theme;

  return (
    <View testID={testID}>
      <RNSLider
        value={sliderValue}
        onValueChange={onChangeValue}
        animateTransitions
        maximumTrackTintColor={
          disabled ? SliderDisabledMaxTrackColor : SliderMaxTrackColor
        }
        maximumValue={maximumValue}
        minimumTrackTintColor={
          disabled ? SliderDisabledMinTrackColor : SliderMinTrackColor
        }
        minimumValue={minimumValue}
        thumbTintColor={disabled ? SliderDisabledThumbColor : SliderThumbColor}
        step={step}
        disabled={disabled}
        {...rest}
      />
    </View>
  );
};

export default Slider;
