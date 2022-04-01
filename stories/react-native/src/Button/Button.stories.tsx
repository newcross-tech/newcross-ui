import { Meta, Story } from '@storybook/react';
import { Button, Colors, Sizes, ButtonProps } from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/Button',
  component: Button,
} as Meta;

export const Primary = () => {
  return (
    <Container>
      <Button color={Colors.primary}>Primary button</Button>
      <Spacing />
      <Button disabled>Disabled button</Button>
      <Spacing />
      <Button fullWidth>Full width button</Button>
    </Container>
  );
};

export const Secondary = () => {
  return (
    <Container>
      <Button color={Colors.secondary}>Secondary button</Button>
      <Spacing />
      <Button color={Colors.secondary} disabled>
        Disabled button
      </Button>
      <Spacing />
      <Button color={Colors.secondary} fullWidth>
        Full width button
      </Button>
    </Container>
  );
};

export const SmallSizes = () => {
  return (
    <Container>
      <Button color={Colors.primary} size={Sizes.small}>
        Primary button
      </Button>
      <Spacing />
      <Button color={Colors.secondary} size={Sizes.small}>
        Secondary button
      </Button>
      <Spacing />
      <Button disabled color={Colors.primary} size={Sizes.small}>
        Primary disabled
      </Button>
      <Spacing />
      <Button disabled color={Colors.secondary} size={Sizes.small}>
        Secondary disabled
      </Button>
      <Spacing />
      <Button fullWidth size={Sizes.small}>
        Primary full width
      </Button>
      <Spacing />
      <Button color={Colors.secondary} fullWidth size={Sizes.small}>
        Secondary full width
      </Button>
    </Container>
  );
};

const Template: Story<ButtonProps> = ({ children, ...rest }) => (
  <Container>
    <Button {...rest}>{children}</Button>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { children: 'My Button' };
