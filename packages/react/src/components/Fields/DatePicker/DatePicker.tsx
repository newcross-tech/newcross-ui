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
  | 'monthDropdownRange'
  | 'yearDropdownRange'
>;

const normalizeDatePickerProps = (
  _props: DatePickerProps
): DatePickerPropsStrict => {
  const base = {
    ..._props,
    disabled: _props.disabled ?? false,
    selected: _props.selected ?? new Date(),
    dateFormat: _props.dateFormat ?? 'dd/MM/yyyy',
    showMonthYearDropdown: _props.showMonthYearDropdown ?? false,
    required: _props.required ?? false,
    monthDropdownRange: _props.monthDropdownRange ?? {
      startMonth: 0,
      endMonth: 11,
    },
    yearDropdownRange: _props.yearDropdownRange ?? {
      yearsAgo: 100,
      yearsAhead: 10,
    },
  };

  if (_props.selectsMultiple === true) {
    return { ...base, selectsMultiple: true } as DatePickerPropsStrict;
  } else {
    return {
      ...base,
      selectsRange: _props.selectsRange === true,
    } as DatePickerPropsStrict;
  }
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
              showMonthYearDropdown={showMonthYearDropdown}
              monthDropdownRange={monthDropdownRange}
              yearDropdownRange={yearDropdownRange}
              {...headerProps}
            />
          )}
          {...rest}
        />
      </Styled.ReactDatePickerWrapper>
      {helperText && (
        <HelperText
          disabled={disabled}
          helperText={helperText}
          errorText={errorText}
          testID={baseTestId}
        />
      )}
    </Container>
  );
};

export default DatePicker;
