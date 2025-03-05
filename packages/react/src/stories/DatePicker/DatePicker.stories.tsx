import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import DatePicker, {
  DatePickerProps,
} from '../../components/Fields/DatePicker';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './DatePickerInfo';

export default {
  title: 'React/Components/DatePicker',
  component: DatePicker,
} as Meta;

const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const Overview = () => {
  const [date, setDate] = useState(new Date());

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
          onChange={(date) => setDate(date as Date)}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [defaultDate, setDefaultDate] = useState(new Date());
  const [disabledDate, setDisabledDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [excludeDate, setExcludeDate] = useState(new Date());
  const [dropdownDate, setDropdownDate] = useState(new Date());
  const [customDropdownDate, setCustomDropdownDate] = useState(new Date());

  return (
    <Container flexDirection="column" gap="lg">
      {/* Default variant */}
      <DatePicker
        required
        label="Default"
        helperText="Normal date picker"
        selected={defaultDate}
        onChange={(date) => setDefaultDate(date as Date)}
      />
      {/* Disabled variant */}
      <DatePicker
        required
        label="Disabled"
        helperText="This field is disabled"
        disabled
        selected={disabledDate}
        onChange={(date) => setDisabledDate(date as Date)}
      />
      {/* Disable days before today */}
      <DatePicker
        required
        label="Min Date"
        helperText="Days before today are disabled"
        minDate={new Date()}
        selected={minDate}
        onChange={(date) => setMinDate(date as Date)}
      />
      {/* Exclude specific dates */}
      <DatePicker
        required
        label="Exclude Dates"
        helperText="Next 2 days are disabled"
        excludeDates={[addDays(new Date(), 1), addDays(new Date(), 2)]}
        selected={excludeDate}
        onChange={(date) => setExcludeDate(date as Date)}
      />
      {/* Variant with dropdown */}
      <DatePicker
        required
        label="Month & Year Dropdown"
        showMonthYearDropdown
        helperText="Pick a month or year from the dropdown"
        selected={dropdownDate}
        onChange={(date) => setDropdownDate(date as Date)}
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
        onChange={(date) => setCustomDropdownDate(date as Date)}
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
        onChange={(date) =>
          onChangeHandler(
            date as [Date | null, Date | null],
            setDefaultStartDate,
            setDefaultEndDate
          )
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
        onChange={(date) =>
          onChangeHandler(
            date as [Date | null, Date | null],
            setDisabledStartDate,
            setDisabledEndDate
          )
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
        onChange={(date) =>
          onChangeHandler(
            date as [Date | null, Date | null],
            setMinStartDate,
            setMinEndDate
          )
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
        onChange={(date) =>
          onChangeHandler(
            date as [Date | null, Date | null],
            setExcludeStartDate,
            setExcludeEndDate
          )
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
        onChange={(date) =>
          onChangeHandler(
            date as [Date | null, Date | null],
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
        onChange={(date) =>
          onChangeHandler(
            date as [Date | null, Date | null],
            setDropdownStartDate,
            setDropdownEndDate
          )
        }
      />
    </Container>
  );
};

const Template: Story<DatePickerProps> = () => {
  const [selected, setSelected] = useState<Date>(new Date());

  return (
    <DatePicker
      label="Date Picker"
      helperText="Select a single date"
      selected={selected}
      onChange={(date) => {
        setSelected(date as Date);
      }}
    />
  );
};

export const Interactive = Template.bind({});
