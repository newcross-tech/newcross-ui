import React from 'react';
import { View } from 'react-native';
import { Meta, Story } from '@storybook/react';
import useState from 'storybook-addon-state';
import {
  Slider,
  SliderProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import Spacing from '../Spacing';
import { isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './SliderInfo';

export default {
  title: 'ReactNative/Components/Slider',
  component: Slider,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

export const Overview = () => {
  const [overviewSliderValue, setOverviewSliderValue] = useState(
    'overviewSliderValue',
    [50, 300]
  );
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant={TypographyVariant.heading5}>Range</Typography>
          <Typography variant={TypographyVariant.heading5}>
            {`${Math.trunc(overviewSliderValue[0])} to ${Math.trunc(
              overviewSliderValue[1]
            )}`}
          </Typography>
        </View>
        <Slider
          testID="overview-slider"
          sliderValue={overviewSliderValue}
          onChangeValue={(value: Array<number>) =>
            setOverviewSliderValue(value)
          }
          maximumValue={500}
          minimumValue={0}
          disabled={false}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const { ColorPrimaryGravitas, ColorBaseMint100 } = native.healthforce;

  const [doubleSliderValue, setDoubleSliderValue] = useState(
    'doubleSliderValue',
    [0, 100]
  );
  const [singleSliderValue, setSingleSliderValue] = useState(
    'singleSliderValue',
    0
  );
  const [
    singleSliderThumbColorChangeValue,
    setSingleSliderThumbColorChangeValue,
  ] = useState('singleSliderThumbColorChangeValue', 0);
  const [singleSliderStepValue, setSingleSliderStepValue] = useState(
    'singleSliderStepValue',
    0
  );
  const [disabledSliderValue, setDisabledSliderValue] = useState(
    'disabledSliderValue',
    50
  );
  const [isPressed, setIsPressed] = useState('isPressed', false);

  return (
    <Container>
      <Typography variant={TypographyVariant.heading3}>
        Double Slider
      </Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>
          Double Slider Label
        </Typography>
        <Typography variant={TypographyVariant.heading5}>
          {`${Math.trunc(doubleSliderValue[0])} - ${Math.trunc(
            doubleSliderValue[1]
          )}`}
        </Typography>
      </View>
      <Slider
        testID="double-slider"
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
        <Typography variant={TypographyVariant.heading5}>
          Single Slider Label
        </Typography>
        <Typography variant={TypographyVariant.heading5}>
          {Math.trunc(singleSliderValue)}
        </Typography>
      </View>
      <Slider
        testID="single-slider"
        sliderValue={singleSliderValue}
        onChangeValue={(value: number) => setSingleSliderValue(value)}
        maximumValue={100}
        minimumValue={0}
      />
      <Typography variant={TypographyVariant.heading3}>
        Single slider - thumb that changes colour & size on slide
      </Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>
          Single Slider Label 2
        </Typography>
        <Typography variant={TypographyVariant.heading5}>
          {Math.trunc(singleSliderThumbColorChangeValue)}
        </Typography>
      </View>
      <Slider
        sliderValue={singleSliderThumbColorChangeValue}
        onChangeValue={(value: number) => {
          setSingleSliderThumbColorChangeValue(value);
          setIsPressed(value !== 0);
        }}
        thumbTintColor={isPressed ? ColorBaseMint100 : ColorPrimaryGravitas}
        thumbStyle={{
          height: isPressed ? 28 : 20,
          width: isPressed ? 28 : 20,
          borderRadius: isPressed ? 14 : 10,
        }}
        onSlidingComplete={() => setIsPressed(false)}
        maximumValue={100}
        minimumValue={0}
      />
      <Typography variant={TypographyVariant.heading3}>
        Single Slider With step of 5
      </Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>
          Step Slider Label
        </Typography>
        <Typography variant={TypographyVariant.heading5}>
          {Math.trunc(singleSliderStepValue)}
        </Typography>
      </View>
      <Slider
        testID="single-step-slider"
        sliderValue={singleSliderStepValue}
        onChangeValue={(value: number) => setSingleSliderStepValue(value)}
        maximumValue={100}
        minimumValue={0}
        step={5}
      />
      <Typography variant={TypographyVariant.heading3}>Disabled</Typography>
      <Spacing />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant={TypographyVariant.heading5}>
          Disabled Slider Label
        </Typography>
        <Typography variant={TypographyVariant.heading5}>
          {Math.trunc(disabledSliderValue)}
        </Typography>
      </View>
      <Slider
        testID="disabled-slider"
        sliderValue={disabledSliderValue}
        onChangeValue={(value: number) => setDisabledSliderValue(value)}
        maximumValue={100}
        minimumValue={0}
        disabled
      />
    </Container>
  );
};

const Template: Story<SliderProps> = ({
  sliderValue,
  maximumValue,
  minimumValue,
  disabled,
  onChangeValue,
  testID,
}) => {
  return (
    <Container>
      <Slider
        testID={testID}
        sliderValue={sliderValue}
        onChangeValue={onChangeValue}
        maximumValue={maximumValue}
        minimumValue={minimumValue}
        disabled={disabled}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  disabled: false,
  maximumValue: 100,
  minimumValue: 0,
  step: 1,
  sliderValue: [0],
  onChangeValue: (value: Array<number>) => console.log(value),
  testID: 'interactive-slider',
};
