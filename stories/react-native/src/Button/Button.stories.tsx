import { Meta, Story } from '@storybook/react';
import {
  Button,
  ButtonProps,
  ButtonSizes,
  ButtonVariant,
  ButtonCorners,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default {
  title: 'ReactNative/Components/Button',
  component: Button,
} as Meta;

export const ButtonsWithSizes = () => {
  return (
    <Container>
      <Button size={ButtonSizes.small}>Small Button</Button>
      <Spacing />
      <Button size={ButtonSizes.medium}>Medium Button</Button>
      <Spacing />
      <Button size={ButtonSizes.large}>Large Button</Button>
      <Spacing />
      <Button fullWidth size={ButtonSizes.large}>
        Full Width Large Button
      </Button>
      <Spacing />
    </Container>
  );
};

export const ButtonsWithCorners = () => {
  return (
    <Container>
      <Button>Default Button</Button>
      <Spacing />
      <Button corners={ButtonCorners.rounded}>Rounded Button</Button>

      <Spacing />
      <Button corners={ButtonCorners.pill}>Pill Button</Button>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container>
      <Button variant={ButtonVariant.primary}>Primary Button</Button>
      <Spacing />
      <Button variant={ButtonVariant.secondary}>Secondary Button</Button>

      <Spacing />
      <Button variant={ButtonVariant.outlinePrimary}>
        Primary Outline Button
      </Button>
      <Spacing />
      <Button disabled variant={ButtonVariant.primary}>
        Primary Disabled Button
      </Button>
      <Spacing />
      <Button disabled variant={ButtonVariant.secondary}>
        Secondary Button
      </Button>

      <Spacing />
      <Button disabled variant={ButtonVariant.outlinePrimary}>
        Primary Outline Disabled Button
      </Button>
      <Spacing />
    </Container>
  );
};

export const ButtonsWithIcon = () => {
  return (
    <Container>
      <Button rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
        Right Icon
      </Button>
      <Spacing />
      <Button leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}>
        Left Icon
      </Button>
      <Spacing />
      <Button fullWidth rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
        Full Width with Right Icon
      </Button>
    </Container>
  );
};

const Template: Story<ButtonProps> = ({ children, ...rest }) => (
  <Container>
    <Button {...rest} rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
      {children}
    </Button>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { children: 'My Button' };
