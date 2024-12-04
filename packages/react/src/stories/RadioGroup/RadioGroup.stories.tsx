import React from 'react';
import { Meta, Story } from '@storybook/react';
import Radio from '../../components/Radio/Radio';
import RadioGroup, {
  RadioGroupProps,
} from '../../components/RadioGroup/RadioGroup';
import Container from '../../components/Container';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/RadioGroup',
  component: RadioGroup,
} as Meta;

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>
        Radio Group with Horizontal Orientation
      </StoryTitle.Regular>
      <RadioGroup defaultSelected="1">
        <Radio value="1" label="A" />
        <Radio value="2" label="B" />
        <Radio value="3" label="C" />
      </RadioGroup>

      <Container m="SpacingBase4" />
      <StoryTitle.Regular>
        Radio Group with Vertical Orientation
      </StoryTitle.Regular>
      <RadioGroup direction="column" defaultSelected="5">
        <Radio value="4" label="A" />
        <Radio value="5" label="B" />
        <Radio value="6" label="C" />
      </RadioGroup>

      <Container m="SpacingBase4" />
      <StoryTitle.Regular>Disabled Radio Group</StoryTitle.Regular>
      <RadioGroup disabled defaultSelected="7">
        <Radio value="7" label="A" />
        <Radio value="8" label="B" />
        <Radio value="9" label="C" />
      </RadioGroup>

      <Container m="SpacingBase4" />
      <StoryTitle.Regular>
        Radio Group with Horizontal Orientation and Secondary Radio Buttons
      </StoryTitle.Regular>
      <RadioGroup defaultSelected="10" variant="secondary">
        <Radio value="10" label="A" />
        <Radio value="11" label="B" />
        <Radio value="12" label="C" />
      </RadioGroup>

      <Container m="SpacingBase4" />
      <StoryTitle.Regular>
        Radio Group with Vertical Orientation and Secondary Radio Buttons
      </StoryTitle.Regular>
      <RadioGroup direction="column" defaultSelected="14" variant="secondary">
        <Radio value="13" label="A" />
        <Radio value="14" label="B" />
        <Radio value="15" label="C" />
      </RadioGroup>
    </Container>
  );
};

const Template: Story<RadioGroupProps> = ({ ...rest }) => {
  return (
    <RadioGroup {...rest}>
      <Radio value="1" label="A" />
      <Radio value="2" label="B" />
      <Radio value="3" label="C" />
    </RadioGroup>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  defaultSelected: '1',
  direction: 'row',
};
