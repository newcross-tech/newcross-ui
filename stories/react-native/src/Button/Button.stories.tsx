import { View } from 'react-native';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@newcross-ui/react-native';

export default {
  title: 'ReactNative/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => (
  <View>
    <Button />
  </View>
);

export const Primary = Template.bind({});
