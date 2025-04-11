import Container from '../../Container';
import Label from '../Label';
import HelperText from '../HelperText';
import { CalendarPropsStrict } from './Calendar.types';
import * as Styled from './Calendar.style';
import { OptionalProps } from '../../../types';
import ReactDatePicker from 'react-datepicker';

export type CalendarProps = OptionalProps<
  CalendarPropsStrict,
  | 'selected'
  | 'showMonthYearDropdown'
  | 'required'
  | 'dateFormat'
  | 'monthDropdownRange'
  | 'yearDropdownRange'
  | 'nextMonthButtonDisabled'
  | 'prevMonthButtonDisabled'
>;

const normalizeCalendarProps = (_props: CalendarProps): CalendarPropsStrict => {
  return {
    ..._props,
    dateFormat: _props.dateFormat ?? 'dd/MM/yyyy',
    required: _props.required ?? false,
    showMonthYearDropdown: _props.showMonthYearDropdown ?? false,
    monthDropdownRange: _props.monthDropdownRange ?? {
      startMonth: 0,
      endMonth: 11,
    },
    yearDropdownRange: _props.yearDropdownRange ?? {
      yearsAgo: 100,
      yearsAhead: 10,
    },
    nextMonthButtonDisabled: _props.nextMonthButtonDisabled ?? false,
    prevMonthButtonDisabled: _props.prevMonthButtonDisabled ?? false,
  };
};

const Calendar = (_props: CalendarProps) => {
  const {
    label,
    helperText,
    errorText,
    required,
    showMonthYearDropdown,
    monthDropdownRange,
    yearDropdownRange,
    nextMonthButtonDisabled,
    prevMonthButtonDisabled,
    testID,
    ...rest
  } = normalizeCalendarProps(_props);

  const baseTestId = `date-picker-${testID}`;

  return (
    <Container flexDirection="column" gap="xs" fullWidth>
      {label && (
        <Label required={required} testID={baseTestId}>
          {label}
        </Label>
      )}
      <Styled.ReactCalendarWrapper>
        <ReactDatePicker inline {...rest} />
      </Styled.ReactCalendarWrapper>
      <HelperText
        helperText={helperText}
        errorText={errorText}
        testID={baseTestId}
      />
    </Container>
  );
};

export default Calendar;
