import { Meta, Story } from '@storybook/react';
import Container from '../../components/Container';
import { NXLogo, NXLogoProps } from '../..';

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
