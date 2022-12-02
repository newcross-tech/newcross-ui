import { Meta, Story } from '@storybook/react';
import React from 'react';
import Link, { LinkProps, LinkSizes } from '../../components/Link';
import Typography, { TypographyVariant } from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { TITLE, DESCRIPTION, DO, DONT } from './LinkInfo';
export default {
  title: 'React/Components/Link',
  component: Link,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container direction="column">
        <Link size={LinkSizes.medium}>This is a link</Link>
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container direction="column">
      <Typography variant={TypographyVariant.heading3}>Small Link</Typography>
      <Link size={LinkSizes.small}>This is a link</Link>
      <Spacing />
      <Typography variant={TypographyVariant.heading3}>Medium Link</Typography>
      <Link size={LinkSizes.medium}>This is a link</Link>
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
  children: 'This is a link',
  size: LinkSizes.medium,
};
