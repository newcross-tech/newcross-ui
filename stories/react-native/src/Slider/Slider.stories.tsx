import React from 'react';
import useState from 'storybook-addon-state';
import { Text } from 'react-native';
import { Meta, Story } from '@storybook/react';
import Container from '../Container';
import { Slider, SliderProps } from '@newcross-ui/react-native';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/Slider',
  component: Slider,
} as Meta;

export const Variants = () => {
  const [value, setValue] = useState('value', 0);
  const [valueWithStep, setValueWithStep] = useState('valueWithStep', 0);

  return (
    <Container>
      <Text>Value: {value}</Text>
      <Slider onValueChange={(value) => setValue(value)} />
      <Spacing />
      <Text>Increasing value by 5 on each step: {valueWithStep}</Text>
      <Slider
        step={5}
        onValueChange={(value) => setValueWithStep(value)}
        maximumValue={100}
      />
    </Container>
  );
};

const Template: Story<SliderProps> = ({ ...rest }) => {
  const [interactiveValue, setInteractiveValue] = useState(
    'interactiveValue',
    0
  );

  return (
    <Container>
      <Text>Value: {interactiveValue}</Text>
      <Slider {...rest} onValueChange={(value) => setInteractiveValue(value)} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  maximumValue: 100,
};
