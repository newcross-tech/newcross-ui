import { Meta, Story } from '@storybook/react';
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
      <Radio value="1" label="Primary" />
      <Radio selected value="2" label="Primary Selected" />
      <Radio label="Disabled" value="3" disabled />
      <Radio selected value="4" label="Disabled Selected" disabled />
      <Radio variant="secondary" value="5" label="Secondary" />
      <Radio
        selected
        variant="secondary"
        value="6"
        label="Secondary Selected"
      />
      <Radio
        disabled
        variant="secondary"
        value="7"
        label="Secondary Disabled"
      />
      <Radio
        selected
        disabled
        variant="secondary"
        value="8"
        label="Secondary Disabled Selected"
      />
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
