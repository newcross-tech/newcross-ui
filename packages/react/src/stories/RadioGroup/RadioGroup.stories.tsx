import { Meta, Story } from '@storybook/react';
import RadioGroup, {
  RadioGroupProps,
} from '../../components/Fields/RadioGroup/RadioGroup';
import Container from '../../components/Container';
import * as StoryTitle from '../StoryTitle';
import Radio, { RadioValue } from '../../components/Fields/Radio';
import { Typography } from '../../index';

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

      <Container m="SpacingBase4" />
      <StoryTitle.Regular>
        Radio Group with Text Between Options
      </StoryTitle.Regular>
      <RadioGroup direction="column" defaultSelected="14" variant="secondary">
        <Radio value="13" label="A" />
        <Typography variant="p3Strong">
          Please note, the next options may require additional steps later
        </Typography>
        <Container my="sm" />
        <Container pl="sm" flexDirection="column">
          <Container flexDirection="column">
            <Radio value="14" label="B" />
            <Radio value="15" label="C" />
          </Container>
        </Container>
      </RadioGroup>
    </Container>
  );
};

const Template: Story<RadioGroupProps<RadioValue>> = ({ ...rest }) => {
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
