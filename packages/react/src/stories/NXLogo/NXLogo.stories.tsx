import { Meta, Story } from '@storybook/react';
import Container from '../../components/Container';
import { NXLogo, NXLogoProps } from '../..';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/NXLogo',
  component: NXLogo,
} as Meta;

const Template: Story<NXLogoProps> = (args) => <NXLogo {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  type: 'logo',
  scheme: 'light',
};

export const Overview = () => (
  <Container flexDirection="column" gap="lg" alignItems="center">
    <NXLogo type="logo" scheme="light" />
    <NXLogo type="logo" scheme="dark" />
    <NXLogo type="logomark" scheme="light" />
    <NXLogo type="logomark" scheme="dark" />
  </Container>
);

export const UsageInSidebarHeader = () => <NXLogo type="logomark" />;

export const UsageInHeaderRightCorner = () => <NXLogo type="logo" />;

export const SizeVariants = () => (
  <Container flexDirection="column" gap="lg" alignItems="center">
    <StoryTitle.Regular>Large</StoryTitle.Regular>
    <Container gap="lg">
      <NXLogo type="logo" size="lg" />
      <NXLogo type="logomark" size="lg" />
    </Container>
    <Container gap="lg">
      <NXLogo type="logo" scheme="dark" size="lg" />
      <NXLogo type="logomark" scheme="dark" size="lg" />
    </Container>
    <StoryTitle.Regular>Medium</StoryTitle.Regular>
    <Container gap="lg">
      <NXLogo type="logo" size="md" />
      <NXLogo type="logomark" size="md" />
    </Container>
    <Container gap="lg">
      <NXLogo type="logo" scheme="dark" size="md" />
      <NXLogo type="logomark" scheme="dark" size="md" />
    </Container>
    <StoryTitle.Regular>Small</StoryTitle.Regular>
    <Container gap="lg">
      <NXLogo type="logo" size="sm" />
      <NXLogo type="logomark" size="sm" />
    </Container>
    <Container gap="lg">
      <NXLogo type="logo" scheme="dark" size="sm" />
      <NXLogo type="logomark" scheme="dark" size="sm" />
    </Container>
  </Container>
);
