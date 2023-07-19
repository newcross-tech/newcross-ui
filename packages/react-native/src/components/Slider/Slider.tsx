import React from 'react';
import {
  SliderPropsAndroid,
  SliderPropsIOS,
  View,
  ViewStyle,
} from 'react-native';
import { native } from '@newcross-ui/design-tokens';
import {
  Slider as RNSlider,
  SliderProps as RNSliderProps,
} from '@miblanchard/react-native-slider';
import sliderStyle from './Slider.style';

export type SliderProps = {
  /**
   * The value of the slider. The value should be between minimumValue and maximumValue.
   */
  value: number | Array<number>;
  /**
   * Callback continuously called while the user is dragging the slider.
   * @param value The current value of the slider.
   */
  onValueChange?: (value: number | Array<number>) => void;
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
   * Overwrite the slider's track styles.
   */
  trackStyle?: ViewStyle;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
} & SliderPropsAndroid &
  SliderPropsIOS &
  RNSliderProps;

const {
  SliderTrackColorMin,
  SliderTrackColorMax,
  SliderTrackDisabledColorMax,
  SliderTrackDisabledColorMin,
} = native.healthforce;

const Slider = ({
  value,
  onValueChange,
  maximumValue,
  minimumValue,
  step,
  disabled,
  testID,
  trackStyle,
  ...rest
}: SliderProps) => {
  const styles = sliderStyle({ disabled });
  return (
    <View testID={testID}>
      <RNSlider
        animateTransitions
        disabled={disabled}
        maximumTrackTintColor={
          disabled ? SliderTrackDisabledColorMax : SliderTrackColorMax
        }
        maximumValue={maximumValue}
        minimumTrackTintColor={
          disabled ? SliderTrackDisabledColorMin : SliderTrackColorMin
        }
        minimumValue={minimumValue}
        onValueChange={onValueChange}
        step={step}
        thumbStyle={styles.thumb}
        trackStyle={trackStyle}
        value={value}
        {...rest}
      />
    </View>
  );
};

export default Slider;
