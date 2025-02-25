import { Meta, Story } from '@storybook/react';
import DatePicker, {
  DatePickerProps,
} from '../../components/Fields/DatePicker';
import { useState } from 'react';

export default {
  title: 'React/Components/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = () => {
  const [selected, setSelected] = useState<Date>(new Date());
  return (
    <DatePicker
      disabled={false}
      selected={selected}
      onChange={(date: Date | null) => date && setSelected(date)}
    />
  );
};

export const Interactive = Template.bind({});
