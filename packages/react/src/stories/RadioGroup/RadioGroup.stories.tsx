import { Meta, Story } from '@storybook/react';
import Radio from '../../components/Radio/Radio';
import RadioGroup, {
  RadioGroupProps,
} from '../../components/RadioGroup/RadioGroup';
import Typography from '../../components/Typography';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'React/Components/RadioGroup',
  component: RadioGroup,
} as Meta;

export const Variants = () => {
  return (
    <Container direction="column">
      <Typography variant={'heading4'}>
        Radio Group with Horizontal Orientation
      </Typography>
      <RadioGroup defaultSelected="1">
        <Radio value="1" label="A" />
        <Radio value="2" label="B" />
        <Radio value="3" label="C" />
      </RadioGroup>

      <Spacing />
      <Typography variant={'heading4'}>
        Radio Group with Vertical Orientation
      </Typography>
      <RadioGroup direction="column" defaultSelected="5">
        <Radio value="4" label="A" />
        <Radio value="5" label="B" />
        <Radio value="6" label="C" />
      </RadioGroup>

      <Spacing />
      <Typography variant={'heading4'}>Disabled Radio Group</Typography>
      <RadioGroup disabled defaultSelected="7">
        <Radio value="7" label="A" />
        <Radio value="8" label="B" />
        <Radio value="9" label="C" />
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
