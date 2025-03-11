import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import DatePicker, {
  DatePickerProps,
} from '../../components/Fields/DatePicker';
import Container from '../../components/Container';
import { addDays } from 'date-fns';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './DatePickerInfo';

export default {
  title: 'React/Components/DatePicker',
  component: DatePicker,
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
        <DatePicker
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
  const [disabledDate, setDisabledDate] = useState<Date | null>(new Date());
  const [minDate, setMinDate] = useState<Date | null>(new Date());
  const [excludeDate, setExcludeDate] = useState<Date | null>(new Date());
  const [dropdownDate, setDropdownDate] = useState<Date | null>(new Date());
  const [customDropdownDate, setCustomDropdownDate] = useState<Date | null>(
    new Date()
  );

  return (
    <Container flexDirection="column" gap="lg">
      {/* Default variant */}
      <DatePicker
        required
        label="Default"
        helperText="Normal date picker"
        selected={defaultDate}
        onChange={setDefaultDate}
      />
      {/* Disabled variant */}
      <DatePicker
        required
        label="Disabled"
        helperText="This field is disabled"
        disabled
        selected={disabledDate}
        onChange={setDisabledDate}
      />
      {/* Disable days before today */}
      <DatePicker
        required
        label="Min Date"
        helperText="Days before today are disabled"
        minDate={new Date()}
        selected={minDate}
        onChange={setMinDate}
      />
      {/* Exclude specific dates */}
      <DatePicker
        required
        label="Exclude Dates"
        helperText="Next 2 days are disabled"
        excludeDates={[addDays(new Date(), 1), addDays(new Date(), 2)]}
        selected={excludeDate}
        onChange={setExcludeDate}
      />
      {/* Variant with dropdown */}
      <DatePicker
        required
        label="Month & Year Dropdown"
        showMonthYearDropdown
        helperText="Pick a month or year from the dropdown"
        selected={dropdownDate}
        onChange={setDropdownDate}
      />
      {/* Variant with custom year dropdown range*/}
      <DatePicker
        required
        label="Month & Year Dropdown with custom month & year range"
        showMonthYearDropdown
        helperText="Pick a month or year from the dropdown"
        selected={customDropdownDate}
        monthDropdownRange={{ startMonth: 2, endMonth: 6 }}
        yearDropdownRange={{ yearsAgo: 2, yearsAhead: 2 }}
        onChange={setCustomDropdownDate}
      />
    </Container>
  );
};

export const RangeVariants = () => {
  const [defaultStartDate, setDefaultStartDate] = useState<Date | null>(
    new Date()
  );
  const [defaultEndDate, setDefaultEndDate] = useState<Date | null>(new Date());

  const [disabledStartDate, setDisabledStartDate] = useState<Date | null>(
    new Date()
  );
  const [disabledEndDate, setDisabledEndDate] = useState<Date | null>(
    new Date()
  );

  const [minStartDate, setMinStartDate] = useState<Date | null>(new Date());
  const [minEndDate, setMinEndDate] = useState<Date | null>(new Date());

  const [excludeStartDate, setExcludeStartDate] = useState<Date | null>(
    new Date()
  );
  const [excludeEndDate, setExcludeEndDate] = useState<Date | null>(new Date());

  const [dropdownStartDate, setDropdownStartDate] = useState<Date | null>(
    new Date()
  );
  const [dropdownEndDate, setDropdownEndDate] = useState<Date | null>(
    new Date()
  );
  const [customDropdownStartDate, setCustomDropdownStartDate] =
    useState<Date | null>(new Date());
  const [customDropdownEndDate, setCustomDropdownEndDate] =
    useState<Date | null>(new Date());

  const onChangeHandler = (
    dates: [Date | null, Date | null],
    setStart: React.Dispatch<React.SetStateAction<Date | null>>,
    setEnd: React.Dispatch<React.SetStateAction<Date | null>>
  ) => {
    const [start, end] = dates;
    setStart(start);
    setEnd(end);
  };

  return (
    <Container flexDirection="column" gap="lg">
      <DatePicker
        required
        label="Default Range"
        selectsRange
        helperText="Normal range date picker"
        selected={defaultStartDate ?? undefined}
        startDate={defaultStartDate}
        endDate={defaultEndDate}
        onChange={(date: [Date | null, Date | null]) =>
          onChangeHandler(date, setDefaultStartDate, setDefaultEndDate)
        }
      />

      <DatePicker
        required
        label="Disabled Range"
        selectsRange
        helperText="This field is disabled"
        disabled
        selected={disabledStartDate ?? undefined}
        startDate={disabledStartDate}
        endDate={disabledEndDate}
        onChange={(date: [Date | null, Date | null]) =>
          onChangeHandler(date, setDisabledStartDate, setDisabledEndDate)
        }
      />

      <DatePicker
        required
        label="Range with Min Date"
        selectsRange
        helperText="Days before today are disabled"
        minDate={new Date()}
        selected={minStartDate ?? undefined}
        startDate={minStartDate}
        endDate={minEndDate}
        onChange={(date: [Date | null, Date | null]) =>
          onChangeHandler(date, setMinStartDate, setMinEndDate)
        }
      />

      <DatePicker
        required
        label="Range Exclude Dates"
        selectsRange
        helperText="Next 2 days are disabled"
        excludeDates={[addDays(new Date(), 1), addDays(new Date(), 2)]}
        selected={excludeStartDate ?? undefined}
        startDate={excludeStartDate}
        endDate={excludeEndDate}
        onChange={(date: [Date | null, Date | null]) =>
          onChangeHandler(date, setExcludeStartDate, setExcludeEndDate)
        }
      />

      <DatePicker
        required
        label="Month & Year Dropdown"
        showMonthYearDropdown
        selectsRange
        helperText="Pick a month or year from the dropdown"
        selected={customDropdownStartDate ?? undefined}
        startDate={customDropdownStartDate}
        endDate={customDropdownEndDate}
        onChange={(date: [Date | null, Date | null]) =>
          onChangeHandler(
            date,
            setCustomDropdownStartDate,
            setCustomDropdownEndDate
          )
        }
      />

      <DatePicker
        required
        label="Month & Year Dropdown with custom month & year range"
        showMonthYearDropdown
        selectsRange
        helperText="Pick a month or year from the dropdown"
        selected={dropdownStartDate ?? undefined}
        startDate={dropdownStartDate}
        endDate={dropdownEndDate}
        monthDropdownRange={{ startMonth: 2, endMonth: 6 }}
        yearDropdownRange={{ yearsAgo: 2, yearsAhead: 2 }}
        onChange={(date: [Date | null, Date | null]) =>
          onChangeHandler(date, setDropdownStartDate, setDropdownEndDate)
        }
      />
    </Container>
  );
};

const Template: Story<DatePickerProps> = () => {
  const [selected, setSelected] = useState<Date | null>(new Date());

  return (
    <DatePicker
      label="Date Picker"
      helperText="Select a single date"
      selected={selected ?? undefined}
      onChange={setSelected}
    />
  );
};

export const Interactive = Template.bind({});
