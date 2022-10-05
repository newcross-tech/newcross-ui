import { Link, LinkProps, LinkSizes, Mode } from '@newcross-ui/react-native';
import { Meta, Story } from '@storybook/react';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/Link',
  component: Link,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <Link size={LinkSizes.small}>My Link</Link>
      <Spacing />
      <Link size={LinkSizes.medium}>My Link</Link>
      <Spacing />
      <Link size={LinkSizes.medium} mode={Mode.dark}>
        Dark Mode
      </Link>
    </Container>
  );
};

const Template: Story<LinkProps> = ({ children, ...rest }) => (
  <Container>
    <Link {...rest}>{children}</Link>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  children: 'My Link',
  size: LinkSizes.medium,
};
