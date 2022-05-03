import React from 'react';
import CommunitySlider from '@react-native-community/slider';
import {
  SLIDER_DEFAULT_MIN_VALUE,
  SLIDER_DEFAULT_MAX_VALUE,
  SLIDER_DEFAULT_STEP_VALUE,
} from './Slider.constants';
import useTheme from '../../hooks/useTheme';
import { ViewStyle } from 'react-native';

export type SliderProps = {
  /**
   * If true the user won't be able to move the slider.
   * Default value is false.
   */
  disabled?: boolean;

  /**
   * The color used for the track to the right of the button.
   * Overrides the default blue gradient image.
   */
  maximumTrackTintColor?: string;

  /**
   * Initial maximum value of the slider. Default value is 1.
   */
  maximumValue?: number;

  /**
   * The color used for the track to the left of the button.
   * Overrides the default blue gradient image.
   */
  minimumTrackTintColor?: string;

  /**
   * Initial minimum value of the slider. Default value is 0.
   */
  minimumValue?: number;

  /**
   * Callback that is called when the user picks up the slider.
   * The initial value is passed as an argument to the callback handler.
   */
  onSlidingStart?: (value: number) => void;

  /**
   * Callback called when the user finishes changing the value (e.g. when the slider is released).
   */
  onSlidingComplete?: (value: number) => void;

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange?: (value: number) => void;

  /**
   * Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0.
   */
  step?: number;

  /**
   * Used to style and layout the Slider. See StyleSheet.js and ViewStylePropTypes.js for more info.
   */
  style?: ViewStyle;

  /**
   * Used to locate this view in UI automation tests.
   */
  testID?: string;

  /**
   * Initial value of the slider. The value should be between minimumValue
   * and maximumValue, which default to 0 and 1 respectively.
   * Default value is 0.
   * This is not a controlled component, you don't need to update
   * the value during dragging.
   */
  value?: number;

  /**
   * Reverses the direction of the slider.
   */
  inverted?: boolean;

  /**
   * A string of one or more words to be announced by the screen reader.
   * Otherwise, it will announce the value as a percentage.
   * Requires passing a value to `accessibilityIncrements` to work correctly.
   * Should be a plural word, as singular units will be handled.
   */
  accessibilityUnits?: string;

  /**
   * A string of one or more words to be announced by the screen reader.
   * Otherwise, it will announce the value as a percentage.
   * Requires passing a value to `accessibilityIncrements` to work correctly.
   * Should be a plural word, as singular units will be handled.
   */
  accessibilityIncrements?: Array<string>;
};

const Slider = ({
  minimumValue = SLIDER_DEFAULT_MIN_VALUE,
  maximumValue = SLIDER_DEFAULT_MAX_VALUE,
  step = SLIDER_DEFAULT_STEP_VALUE,
  ...rest
}: SliderProps) => {
  const theme = useTheme();
  const { SliderBackgroundColor, SliderInteractiveColor } = theme;

  return (
    <CommunitySlider
      testID="slider"
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={SliderInteractiveColor}
      maximumTrackTintColor={SliderBackgroundColor}
      thumbTintColor={SliderInteractiveColor}
      step={step}
      {...rest}
    />
  );
};

export default Slider;
