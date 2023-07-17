import React from 'react';
import {
  SliderPropsAndroid,
  SliderPropsIOS,
  View,
  ViewStyle,
} from 'react-native';
import { native } from '@newcross-ui/design-tokens';
import {
  Slider as RNSLider,
  SliderProps as RNSliderProps,
} from '@miblanchard/react-native-slider';
import sliderStyle from './Slider.style';
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
   * Overwrite the slider styles.
   */
  style?: ViewStyle;
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
  style,
  ...rest
}: SliderProps) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const theme = useTheme();
  const styles = sliderStyle({ isPressed, disabled });

  return (
    <View testID={testID}>
      <RNSLider
        onSlidingStart={() => setIsPressed(true)}
        onSlidingComplete={() => {
          setIsPressed(false);
        }}
        step={step}
        thumbStyle={styles.thumb}
        trackStyle={style}
        disabled={disabled}
        value={value}
        onValueChange={onValueChange}
        animateTransitions
        maximumTrackTintColor={
          disabled ? SliderTrackDisabledColorMax : SliderTrackColorMax
        }
        maximumValue={maximumValue}
        minimumTrackTintColor={
          disabled ? SliderTrackDisabledColorMin : SliderTrackColorMin
        }
        minimumValue={minimumValue}
        {...rest}
      />
    </View>
  );
};

export default Slider;
