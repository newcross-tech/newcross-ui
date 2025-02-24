import { Meta, Story } from '@storybook/react';
import DatePicker, {
  DatePickerProps,
} from '../../components/Fields/DatePicker';
import Container from '../../components/Container';

export default {
  title: 'React/Components/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = () => {
  return (
    <Container>
      <DatePicker disabled={false} />
    </Container>
  );
};

export const Interactive = Template.bind({});
