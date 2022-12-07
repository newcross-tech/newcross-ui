import { Meta, Story } from '@storybook/react';
import React from 'react';
import Radio, { RadioProps } from '../../components/Radio';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './Radio.info';

export default {
  title: 'React/Components/Radio',
  component: Radio,
} as Meta;

export const Variants = () => {
  return (
    <>
      <Radio selected={false} label="Primary" />
      <Radio selected={true} label="Primary Selected" />
      <Radio label="Disabled" disabled />
      <Radio selected label="Disabled Selected" disabled />
    </>
  );
};

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <Radio selected={true} label="Primary Selected" />
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<RadioProps> = (props) => <Radio {...props} />;

export const Interactive = Template.bind({});
Interactive.args = { label: 'My Label', selected: true, disabled: false };
