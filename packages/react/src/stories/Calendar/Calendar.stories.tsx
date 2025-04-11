import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Calendar, { CalendarProps } from '../../components/Fields/Calendar';
import Container from '../../components/Container';
import { addDays } from 'date-fns';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './CalendarInfo';

export default {
  title: 'React/Components/Calendar',
  component: Calendar,
} as Meta;

export const Overview = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container flexDirection="column">
        <Calendar
          label="Date Picker"
          helperText="Select a single date"
          selected={date}
          onChange={setDate}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [defaultDate, setDefaultDate] = useState<Date | null>(new Date());
  const [twoMonthDate, setTwoMonthDate] = useState<Date | null>(new Date());
  const [threeMonthDate, setThreeMonthDate] = useState<Date | null>(new Date());
  const [minDate, setMinDate] = useState<Date | null>(new Date());
  const [excludeDate, setExcludeDate] = useState<Date | null>(new Date());

  return (
    <Container flexDirection="column" gap="lg">
      {/* Default variant */}
      <Calendar
        required
        label="Default"
        helperText="Normal Calendar "
        selected={defaultDate}
        onChange={setDefaultDate}
      />
      {/* Two month variant */}
      <Calendar
        required
        label="Two months"
        helperText="Displays two months"
        monthsShown={2}
        selected={twoMonthDate}
        onChange={setTwoMonthDate}
      />
      {/* Three month variant */}
      <Calendar
        required
        label="Three months"
        helperText="Displays three months"
        monthsShown={3}
        selected={threeMonthDate}
        onChange={setThreeMonthDate}
      />
      {/* Disable days before today */}
      <Calendar
        required
        label="Min Date"
        helperText="Days before today are disabled"
        minDate={new Date()}
        selected={minDate}
        onChange={setMinDate}
      />
      {/* Exclude specific dates */}
      <Calendar
        required
        label="Exclude Dates"
        helperText="Next 2 days are disabled"
        excludeDates={[addDays(new Date(), 1), addDays(new Date(), 2)]}
        selected={excludeDate}
        onChange={setExcludeDate}
      />
    </Container>
  );
};

const Template: Story<CalendarProps> = () => {
  const [selected, setSelected] = useState<Date | null>(new Date());

  return (
    <Calendar
      label="Calendar"
      helperText="Select a single date"
      selected={selected ?? undefined}
      onChange={setSelected}
    />
  );
};

export const Interactive = Template.bind({});
