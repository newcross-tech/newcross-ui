import React from 'react';
import { View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import useTheme from '../../hooks/useTheme';

export type SliderTwoProps = {
  sliderValue: number | Array<number>;
  onChangeValue: (value: number | Array<number>) => void;
  maximumValue?: number;
  minimumValue?: number;
  step?: number;
  disabled?: boolean;
  testID?: string;
};

const SliderTwo = ({
  sliderValue,
  onChangeValue,
  maximumValue,
  minimumValue,
  step,
  disabled,
  testID,
  ...rest
}: SliderTwoProps) => {
  const theme = useTheme();

  const {
    SlidertwoThumbColor,
    SlidertwoMaxTrackColor,
    SlidertwoMinTrackColor,
    SlidertwoDisabledThumbColor,
    SlidertwoDisabledMaxTrackColor,
    SlidertwoDisabledMinTrackColor,
  } = theme;

  return (
    <View testID={testID}>
      <Slider
        value={sliderValue}
        onValueChange={onChangeValue}
        animateTransitions
        maximumTrackTintColor={
          disabled ? SlidertwoDisabledMaxTrackColor : SlidertwoMaxTrackColor
        }
        maximumValue={maximumValue}
        minimumTrackTintColor={
          disabled ? SlidertwoDisabledMinTrackColor : SlidertwoMinTrackColor
        }
        minimumValue={minimumValue}
        thumbTintColor={
          disabled ? SlidertwoDisabledThumbColor : SlidertwoThumbColor
        }
        step={step}
        disabled={disabled}
        {...rest}
      />
    </View>
  );
};

export default SliderTwo;
