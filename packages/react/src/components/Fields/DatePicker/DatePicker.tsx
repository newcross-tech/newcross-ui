import Container from '../../Container';
import Label from '../Label';
import HelperText from '../HelperText';
import { DatePickerPropsStrict } from './DatePicker.types';
import TextInput from '../TextInput';
// import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

export type DatePickerProps = DatePickerPropsStrict;

const normalizeDatePickerProps = (
  _props: DatePickerProps
): DatePickerPropsStrict => ({
  ..._props,
});

const DatePicker = (_props: DatePickerProps) => {
  const {
    selected,
    date,
    label,
    helperText,
    errorText,
    isValid,
    required,
    disabled,
    onChange,
    ...rest
  } = normalizeDatePickerProps(_props);

  const value = selected || date;

  return (
    <Container flexDirection="column">
      {label && (
        <Label required={required} disabled={disabled}>
          {label}
        </Label>
      )}
      <ReactDatePicker
        selected={value}
        customInput={<TextInput />}
        disabled={disabled}
        {...rest}
      />
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
