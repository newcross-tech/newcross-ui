import React from 'react';
import { View } from 'react-native';
import { Meta } from '@storybook/react';
import useState from 'storybook-addon-state';
import {
  SliderTwo,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/SliderTwo',
  component: SliderTwo,
} as Meta;

export const Variants = () => {
  const [doubleSliderValue, setDoubleSliderValue] = useState(
    'doubleSliderValue',
    [0, 100]
  );
  const [singleSliderValue, setSingleSliderValue] = useState(
    'singleSliderValue',
    [0]
  );
  const [singleSliderStepValue, setSingleSliderStepValue] = useState(
    'singleSliderStepValue',
    [0]
  );
  const [disabledSliderValue, setDisabledSliderValue] = useState(
    'disabledSliderValue',
    [50]
  );
  return (
    <Container>
      <Typography variant={TypographyVariant.heading3}>
        Double Slider
      </Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>Label</Typography>
        <Typography variant={TypographyVariant.heading5}>
          {`${Math.trunc(doubleSliderValue[0])} - ${Math.trunc(
            doubleSliderValue[1]
          )}`}
        </Typography>
      </View>
      <SliderTwo
        testID="slider-two"
        sliderValue={doubleSliderValue}
        onChangeValue={(value: Array<number>) => setDoubleSliderValue(value)}
        maximumValue={100}
        minimumValue={0}
      />
      <Typography variant={TypographyVariant.heading3}>
        Single Slider
      </Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>Label</Typography>
        <Typography variant={TypographyVariant.heading5}>
          {Math.trunc(singleSliderValue[0])}
        </Typography>
      </View>
      <SliderTwo
        testID="slider-two"
        sliderValue={singleSliderValue}
        onChangeValue={(value: Array<number>) => setSingleSliderValue(value)}
        maximumValue={100}
        minimumValue={0}
      />
      <Typography variant={TypographyVariant.heading3}>
        Single Slider With step of 5
      </Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>Label</Typography>
        <Typography variant={TypographyVariant.heading5}>
          {Math.trunc(singleSliderStepValue[0])}
        </Typography>
      </View>
      <SliderTwo
        testID="slider-two"
        sliderValue={singleSliderStepValue}
        onChangeValue={(value: Array<number>) =>
          setSingleSliderStepValue(value)
        }
        maximumValue={100}
        minimumValue={0}
        step={5}
      />
      <Typography variant={TypographyVariant.heading3}>Disabled</Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>Label</Typography>
        <Typography variant={TypographyVariant.heading5}>
          {Math.trunc(disabledSliderValue[0])}
        </Typography>
      </View>
      <SliderTwo
        testID="slider-two"
        sliderValue={disabledSliderValue}
        onChangeValue={(value: Array<number>) => setDisabledSliderValue(value)}
        maximumValue={100}
        minimumValue={0}
        disabled
      />
    </Container>
  );
};
