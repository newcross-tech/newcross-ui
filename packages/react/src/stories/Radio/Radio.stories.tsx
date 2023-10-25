import { Meta, Story } from '@storybook/react';
import Radio, { RadioProps } from '../../components/Radio';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './Radio.info';
import Spacing from '../Spacing';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Radio',
  component: Radio,
} as Meta;

export const Variants = () => {
  return (
    <>
      <StoryTitle.Regular>Primary Radio Variants</StoryTitle.Regular>
      <Spacing />
      <Radio value="1" label="Primary" />
      <Radio selected value="2" label="Primary Selected" />
      <Radio label="Disabled" value="3" disabled />
      <Radio selected value="4" label="Disabled Selected" disabled />
      <Radio
        value="9"
        label={
          <span>
            <b>custom</b> react label
          </span>
        }
      />
      <Spacing />
      <StoryTitle.Regular>Secondary Radio Variants</StoryTitle.Regular>
      <Spacing />
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
      <Radio
        variant="secondary"
        value="10"
        label={
          <span>
            <b>custom</b> react label
          </span>
        }
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
