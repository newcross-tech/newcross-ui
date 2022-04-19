import { Meta, Story } from '@storybook/react';
import {
  Button,
  ButtonColors,
  ButtonSizes,
  ButtonProps,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/Button',
  component: Button,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <Button color={ButtonColors.primary}>Primary button</Button>
      <Spacing />
      <Button color={ButtonColors.secondary}>Secondary button</Button>
      <Spacing />
      <Button disabled>Primary Disabled</Button>
      <Spacing />
      <Button color={ButtonColors.secondary} disabled>
        Secondary Disabled
      </Button>
      <Spacing />
      <Button color={ButtonColors.secondary} fullWidth>
        Primary full width
      </Button>
      <Spacing />
      <Button fullWidth>Secondary full width</Button>
    </Container>
  );
};

export const VariantsWithSmallSizes = () => {
  return (
    <Container>
      <Button color={ButtonColors.primary} size={ButtonSizes.small}>
        Primary button
      </Button>
      <Spacing />
      <Button color={ButtonColors.secondary} size={ButtonSizes.small}>
        Secondary button
      </Button>
      <Spacing />
      <Button disabled color={ButtonColors.primary} size={ButtonSizes.small}>
        Primary disabled
      </Button>
      <Spacing />
      <Button disabled color={ButtonColors.secondary} size={ButtonSizes.small}>
        Secondary disabled
      </Button>
      <Spacing />
      <Button fullWidth size={ButtonSizes.small}>
        Primary full width
      </Button>
      <Spacing />
      <Button color={ButtonColors.secondary} fullWidth size={ButtonSizes.small}>
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
