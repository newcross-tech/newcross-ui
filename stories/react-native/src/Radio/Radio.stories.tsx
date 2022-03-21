import { View } from 'react-native';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps } from '@newcross-ui/react-native';

export default {
  title: 'ReactNative/Radio',
  component: Radio,
} as Meta;

export const All = () => {
  return (
    <View>
      <Radio selected={false} label="Primary" />
      <Radio selected={true} label="Primary Selected" />
      <Radio label="Disabled" disabled />
      <Radio selected label="Disabled Selected" disabled />
    </View>
  );
};

const Template: Story<RadioProps> = (props) => <Radio {...props} />;

export const Interactive = Template.bind({});
Interactive.args = { label: 'My Label', selected: true, disabled: false };
