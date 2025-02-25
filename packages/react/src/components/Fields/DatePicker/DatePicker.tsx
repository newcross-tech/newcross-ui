import React, { forwardRef } from 'react';
import Container from '../../Container';
import Label from '../Label';
import HelperText from '../HelperText';
import { DatePickerPropsStrict } from './DatePicker.types';
import * as Styled from './DatePicker.style';
import { OptionalProps } from '../../../types';
import ReactDatePicker from 'react-datepicker';
import TextInput from '../TextInput';
import Icon from '../../Icon';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/pro-light-svg-icons';
import Typography from '../../Typography';

export type DatePickerProps = OptionalProps<DatePickerPropsStrict, 'selected'>;

const normalizeDatePickerProps = (
  _props: DatePickerProps
): DatePickerPropsStrict => ({
  ..._props,
  selected: _props.selected ?? new Date(),
  dateFormat: _props.dateFormat ?? 'dd/MM/yyyy',
});

const DatePickerInput = forwardRef<
  HTMLInputElement,
  { value?: string; onClick?: VoidFunction; className?: string }
>(({ value, onClick, className }, ref) => {
  return (
    <TextInput
      value={value || ''}
      onClick={onClick}
      className={className}
      ref={ref}
    />
  );
});

type DatePickerHeaderProps = {
  date: Date;
  decreaseMonth: VoidFunction;
  increaseMonth: VoidFunction;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
};

const DatePickerHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: DatePickerHeaderProps) => {
  return (
    <Container
      fullWidth
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Icon
        icon={faChevronLeft}
        variant="h5"
        color={prevMonthButtonDisabled ? 'disabled' : 'defaultLight'}
        onClick={prevMonthButtonDisabled ? undefined : decreaseMonth}
      />
      <Typography variant="h5" color="defaultLight">
        {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
      </Typography>
      <Icon
        icon={faChevronRight}
        variant="h5"
        color={nextMonthButtonDisabled ? 'disabled' : 'defaultLight'}
        onClick={nextMonthButtonDisabled ? undefined : increaseMonth}
      />
    </Container>
  );
};

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
          customInput={<DatePickerInput />}
          renderCustomHeader={(headerProps) => (
            <DatePickerHeader {...headerProps} />
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
