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
          animationType="spring"
          testID="overview-slider"
          value={overviewSliderValue}
          onValueChange={(value) => setOverviewSliderValue(value as [number])}
          maximumValue={500}
          minimumValue={0}
          disabled={false}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [doubleSliderValue, setDoubleSliderValue] = useState(
    'doubleSliderValue',
    [0, 100]
  );
  const [singleSliderValue, setSingleSliderValue] = useState(
    'singleSliderValue',
    0
  );
  const [singleSliderStepValue, setSingleSliderStepValue] = useState(
    'singleSliderStepValue',
    0
  );
  const [disabledSliderValue, setDisabledSliderValue] = useState(
    'disabledSliderValue',
    50
  );

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
        animationType="spring"
        value={doubleSliderValue}
        onValueChange={(value) => setDoubleSliderValue(value as [number])}
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
        value={singleSliderValue}
        animationType="spring"
        onValueChange={(value) => setSingleSliderValue(value as number)}
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
        animationType="spring"
        value={singleSliderStepValue}
        onValueChange={(value) => setSingleSliderStepValue(value as number)}
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
        animationType="spring"
        testID="disabled-slider"
        value={disabledSliderValue}
        onValueChange={(value) => setDisabledSliderValue(value as number)}
        maximumValue={100}
        minimumValue={0}
        disabled
      />
    </Container>
  );
};

const Template: Story<SliderProps> = ({
  value,
  maximumValue,
  minimumValue,
  disabled,
  onValueChange,
  testID,
}) => {
  return (
    <Container>
      <Slider
        animationType="spring"
        testID={testID}
        value={value}
        onValueChange={onValueChange}
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
  value: [0],
  onValueChange: (value) => console.log(value),
  testID: 'interactive-slider',
};
