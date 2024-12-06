import { Meta, Story } from '@storybook/react';
import Radio, { RadioProps, RadioValue } from '../../components/Radio';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './Radio.info';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Radio',
  component: Radio,
} as Meta;

export const Variants = () => {
  return (
    <>
      <StoryTitle.Regular>Primary Radio Variants</StoryTitle.Regular>
      <Container m="xs" />
      <Radio value="1" label="Primary" />
      <Radio value="1" label="Primary with Error" hasError />
      <Radio selected value="2" label="Primary Selected" />
      <Radio selected value="1" label="Primary Selected with Error" hasError />
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
      <Container m="xs" />
      <StoryTitle.Regular>Secondary Radio Variants</StoryTitle.Regular>
      <Container flexDirection="column" gap="sm">
        <Radio variant="secondary" value="5" label="Secondary" />
        <Radio
          variant="secondary"
          value="5"
          label="Secondary with Error"
          hasError
        />
        <Radio
          selected
          variant="secondary"
          value="6"
          label="Secondary Selected"
        />
        <Radio
          selected
          variant="secondary"
          value="6"
          label="Secondary Selected with Error"
          hasError
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
      </Container>
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
        <Radio selected={true} label="Primary Selected" value="" />
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<RadioProps<RadioValue>> = (props) => <Radio {...props} />;

export const Interactive = Template.bind({});
Interactive.args = { label: 'My Label', selected: true, disabled: false };
