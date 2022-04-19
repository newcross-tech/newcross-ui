import { View } from 'react-native';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps } from '@newcross-ui/react-native';
import Container from '../Container';

export default {
  title: 'ReactNative/Components/Radio',
  component: Radio,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <View>
        <Radio selected={false} label="Primary" />
        <Radio selected={true} label="Primary Selected" />
        <Radio label="Disabled" disabled />
        <Radio selected label="Disabled Selected" disabled />
      </View>
    </Container>
  );
};

const Template: Story<RadioProps> = (props) => (
  <Container>
    <Radio {...props} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { label: 'My Label', selected: true, disabled: false };
