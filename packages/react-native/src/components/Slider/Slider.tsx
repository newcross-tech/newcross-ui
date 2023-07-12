import React from 'react';
import { View, ViewStyle } from 'react-native';
import {
  Slider as RNSLider,
  SliderProps as RNSliderProps,
} from '@miblanchard/react-native-slider';
import useTheme from '../../hooks/useTheme';

export type SliderProps = {
  /**
   * The value of the slider. The value should be between minimumValue and maximumValue.
   */
  value: number | Array<number>;
  /**
   * Callback continuously called while the user is dragging the slider.
   * @param value The current value of the slider.
   */
  onChangeValue: (value: number | Array<number>) => void;
  /**
   * Initial maximum value of the slider. Default value is 1.
   */
  maximumValue?: number;
  /**
   * Initial minimum value of the slider. Default value is 0.
   */
  minimumValue?: number;
  /**
   * Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0.
   */
  step?: number;
  /**
   * If true the user won't be able to move the slider. Default value is false.
   */
  disabled?: boolean;
  /**
   * Overwrite the slider styles.
   */
  style?: ViewStyle;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
} & RNSliderProps;

const Slider = ({
  value,
  onChangeValue,
  maximumValue,
  minimumValue,
  step,
  disabled,
  testID,
  style,
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
        value={value}
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
        trackStyle={style}
        {...rest}
      />
    </View>
  );
};

export default Slider;
