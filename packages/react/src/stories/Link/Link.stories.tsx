import { Meta, Story } from '@storybook/react';
import React from 'react';
import Link, { LinkProps, LinkSizes } from '../../components/Link';
import Container from '../Container';

export default {
  title: 'React/Components/Link',
  component: Link,
} as Meta;

export const Variants = () => {
  return (
    <Container direction="column">
      <Link size={LinkSizes.small}>My Link</Link>
      <Link size={LinkSizes.medium}>My Link</Link>
    </Container>
  );
};

const Template: Story<LinkProps> = ({ children, ...rest }) => (
  <Container direction="column">
    <Link {...rest}>{children}</Link>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  children: 'My Link',
  size: LinkSizes.medium,
};
