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
  'disabled' | 'showMonthYearPicker' | 'required'
>;

const normalizeDatePickerProps = (
  _props: DatePickerProps
): DatePickerPropsStrict => ({
  ..._props,
  disabled: _props.disabled ?? false,
  showMonthYearPicker: _props.showMonthYearPicker ?? false,
  required: _props.required ?? false,
});

const DatePicker = (_props: DatePickerProps) => {
  const { label, helperText, errorText, required, disabled, ...rest } =
    normalizeDatePickerProps(_props);

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
          dateFormat={rest.dateFormat ?? 'dd/MM/yyyy'}
          customInput={<TextInput />}
          renderCustomHeader={(headerProps) => (
            <DatePickerHeader
              showMonthYearPicker={rest.showMonthYearPicker}
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
        />
      )}
    </Container>
  );
};

export default DatePicker;
