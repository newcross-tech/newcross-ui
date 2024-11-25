import React from 'react';
import { Meta, Story } from '@storybook/react';
import Layout from '../../components/Layout';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './LayoutInfo';
import Container from '../../components/Container';
import Typography from '../../components/Typography';

export default {
  title: 'React/Components/Layout',
  component: Layout,
} as Meta;

const Header = () => (
  <Container p="lg" alignItems="center" justifyContent="center">
    <Typography variant="h2" color="defaultLight">
      Header Section
    </Typography>
  </Container>
);

const Sidebar = () => (
  <Container p="lg" alignItems="center" justifyContent="center">
    <Typography variant="h2" color="defaultLight">
      Sidebar Section
    </Typography>
  </Container>
);

const MainContent = () => (
  <Container p="lg" alignItems="center" justifyContent="center">
    <Typography variant="h3">Main Content Area</Typography>
  </Container>
);

export const Overview = () => (
  <InfoTemplate
    title={TITLE}
    description={DESCRIPTION}
    doInfo={DO}
    dontInfo={DONT}
  />
);

const Template: Story = (args) => (
  <Layout header={undefined} sidebar={undefined} {...args} />
);

export const Interactive: Story = Template.bind({});
Interactive.args = {
  header: <Header />,
  sidebar: <Sidebar />,
  children: <MainContent />,
};
