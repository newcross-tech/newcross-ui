import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@newcross-ui/react-native';
import Container from '../Container';

export default {
  title: 'ReactNative/Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = () => (
  <Container>
    <Button text="Primary" />
  </Container>
);

export const Primary = Template.bind({});
