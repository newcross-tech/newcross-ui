import Container from '../../Container';
import Label from '../Label';
import HelperText from '../HelperText';
import { DatePickerPropsStrict } from './DatePicker.types';
import * as Styled from './DatePicker.style';
import { OptionalProps } from '../../../types';
import ReactDatePicker from 'react-datepicker';
import TextInput from '../TextInput';
import DatePickerHeader from './DatePickerHeader';

export type DatePickerProps = OptionalProps<
  DatePickerPropsStrict,
  | 'selected'
  | 'showMonthYearDropdown'
  | 'disabled'
  | 'required'
  | 'dateFormat'
  | 'monthDropdownRange'
  | 'yearDropdownRange'
  | 'nextMonthButtonDisabled'
  | 'prevMonthButtonDisabled'
>;

const normalizeDatePickerProps = (
  _props: DatePickerProps
): DatePickerPropsStrict => {
  return {
    ..._props,
    disabled: _props.disabled ?? false,
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

const DatePicker = (_props: DatePickerProps) => {
  const {
    label,
    helperText,
    errorText,
    required,
    disabled,
    showMonthYearDropdown,
    monthDropdownRange,
    yearDropdownRange,
    nextMonthButtonDisabled,
    prevMonthButtonDisabled,
    testID,
    ...rest
  } = normalizeDatePickerProps(_props);

  const baseTestId = `date-picker-${testID}`;

  return (
    <Container flexDirection="column" fullWidth>
      {label && (
        <Label required={required} disabled={disabled} testID={baseTestId}>
          {label}
        </Label>
      )}
      <Styled.ReactDatePickerWrapper>
        <ReactDatePicker
          disabled={disabled}
          customInput={<TextInput testID={baseTestId} />}
          renderCustomHeader={(headerProps) => (
            <DatePickerHeader
              {...headerProps}
              showMonthYearDropdown={showMonthYearDropdown}
              monthDropdownRange={monthDropdownRange}
              yearDropdownRange={yearDropdownRange}
              nextMonthButtonDisabled={nextMonthButtonDisabled}
              prevMonthButtonDisabled={prevMonthButtonDisabled}
            />
          )}
          {...rest}
        />
      </Styled.ReactDatePickerWrapper>
      <HelperText
        disabled={disabled}
        helperText={helperText}
        errorText={errorText}
        testID={baseTestId}
      />
    </Container>
  );
};

export default DatePicker;
