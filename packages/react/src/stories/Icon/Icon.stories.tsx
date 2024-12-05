import React from 'react';
import { Meta, Story } from '@storybook/react';
import { faCoffee } from '@fortawesome/pro-light-svg-icons/faCoffee';
import { faHome } from '@fortawesome/pro-light-svg-icons/faHome';
import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons/faExclamationCircle';
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons/faCheckCircle';
import Icon, { IconProps } from '../../components/Icon';
import Container from '../../components/Container';
import Typography from '../../components/Typography';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './IconInfo';

export default {
  title: 'React/Components/Icon',
  component: Icon,
} as Meta;

export const Overview = () => (
  <InfoTemplate
    title={TITLE}
    description={DESCRIPTION}
    doInfo={DO}
    dontInfo={DONT}
  />
);

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Interactive: Story<IconProps> = Template.bind({});
Interactive.args = {
  icon: faCoffee,
  variant: 'h1',
  color: 'defaultDark',
  scheme: 'light',
};

export const Variants = () => (
  <Container flexDirection="column" gap="lg">
    <Typography variant="h2">Size Variants</Typography>
    <Container flexDirection="row" gap="lg">
      <Icon icon={faHome} variant="h1" color="defaultDark" />
      <Icon icon={faHome} variant="h2" color="defaultDark" />
      <Icon icon={faHome} variant="p1" color="defaultDark" />
    </Container>

    <Typography variant="h2">Color Variants</Typography>
    <Container flexDirection="row" gap="lg">
      <Icon icon={faCheckCircle} variant="h2" color="success" />
      <Icon icon={faExclamationCircle} variant="h2" color="warning" />
      <Icon icon={faCoffee} variant="h2" color="danger" />
    </Container>

    <Typography variant="h2">Alignment with Typography</Typography>
    <Container flexDirection="row" gap="lg">
      <Container gap="sm" alignItems="center">
        <Icon icon={faHome} variant="h2" color="defaultDark" />
        <Typography variant="h2">Home</Typography>
      </Container>
      <Container gap="sm" alignItems="center">
        <Icon icon={faCoffee} variant="h3" color="danger" />
        <Typography variant="h3" color="danger">
          Coffee
        </Typography>
      </Container>
      <Container gap="sm" alignItems="center">
        <Icon icon={faExclamationCircle} variant="p1" color="warning" />
        <Typography variant="p1" color="warning">
          Warning
        </Typography>
      </Container>
    </Container>
  </Container>
);
