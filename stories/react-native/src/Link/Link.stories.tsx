import { Link, LinkProps, LinkSizes, Mode } from '@newcross-ui/react-native';
import { Meta, Story } from '@storybook/react';
import { native } from '@newcross-ui/design-tokens';
import { View } from 'react-native';
import Container from '../Container';
import Spacing from '../Spacing';

const { ColorPrimaryGravitas } = native.healthforce;

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
      <View style={{ backgroundColor: ColorPrimaryGravitas }}>
        <Link size={LinkSizes.medium} mode={Mode.dark}>
          Dark Mode
        </Link>
      </View>
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
