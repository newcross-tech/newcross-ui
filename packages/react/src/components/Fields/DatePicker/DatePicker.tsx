import Container from '../../Container';
import Label from '../Label';
import HelperText from '../HelperText';
import { DatePickerPropsStrict } from './DatePicker.types';
import * as Styled from './DatePicker.style';
import { OptionalProps } from '../../../types';
import ReactDatePicker from 'react-datepicker';
import TextInput from '../TextInput';
import { DatePickerHeader } from './DatePickerHeader';

export type DatePickerProps = OptionalProps<
  DatePickerPropsStrict,
  'selected' | 'showMonthYearDropdown' | 'disabled' | 'selectsRange'
>;

const normalizeDatePickerProps = (
  _props: DatePickerProps
): DatePickerPropsStrict => ({
  ..._props,
  disabled: _props.disabled ?? false,
  selected: _props.selected ?? new Date(),
  dateFormat: _props.dateFormat ?? 'dd/MM/yyyy',
  showMonthYearDropdown: _props.showMonthYearDropdown ?? false,
  selectsRange: _props.selectsRange ?? false,
});

const DatePicker = (_props: DatePickerProps) => {
  const {
    label,
    helperText,
    errorText,
    required,
    disabled,
    onChange,
    selectsRange,
    ...rest
  } = normalizeDatePickerProps(_props);

  return (
    <Container flexDirection="column" fullWidth>
      {label && (
        <Label required={required} disabled={disabled}>
          {label}
        </Label>
      )}
      <Styled.ReactDatePickerWrapper>
        <ReactDatePicker
          disabled={disabled}
          customInput={<TextInput />}
          renderCustomHeader={(headerProps) => (
            <DatePickerHeader
              showMonthYearDropdown={rest.showMonthYearDropdown}
              {...headerProps}
            />
          )}
          onChange={onChange}
          {...rest}
        />
      </Styled.ReactDatePickerWrapper>
      {helperText && (
        <HelperText
          disabled={disabled}
          helperText={helperText}
          errorText={errorText}
        />
      )}
    </Container>
  );
};

export default DatePicker;
