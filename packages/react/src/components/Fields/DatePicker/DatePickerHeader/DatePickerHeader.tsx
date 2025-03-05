import Icon from '../../../Icon';
import Typography from '../../../Typography';
import * as Styled from './DatePickerHeader.style';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/pro-light-svg-icons';
import Container from '../../../Container';
import { OptionalProps } from '../../../../types';
import { useMemo } from 'react';
import { getMonthRange, getYearRange } from '../utils';
import { DatePickerHeaderPropsStrict } from './DatePickerHeader.types';

export type DatePickerHeaderProps = OptionalProps<
  DatePickerHeaderPropsStrict,
  'date' | 'monthDropdownRange' | 'yearDropdownRange'
>;

const normalizeDatePickerProps = (
  _props: DatePickerHeaderProps
): DatePickerHeaderPropsStrict => ({
  ..._props,
  date: _props.date ?? new Date(),
  monthDropdownRange: _props.monthDropdownRange ?? {
    startMonth: 0,
    endMonth: 11,
  },
  yearDropdownRange: _props.yearDropdownRange ?? {
    yearsAgo: 100,
    yearsAhead: 10,
  },
});

const DatePickerHeader = (_props: DatePickerHeaderProps) => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    changeMonth,
    changeYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    showMonthYearDropdown,
    monthDropdownRange,
    yearDropdownRange,
    testID,
  } = normalizeDatePickerProps(_props);

  const clickHandler = ({
    disabled,
    onClick,
  }: {
    disabled: boolean;
    onClick: VoidFunction;
  }) => {
    if (disabled) return;
    onClick();
  };

  const months = useMemo(() => {
    return getMonthRange(monthDropdownRange);
  }, [monthDropdownRange]);

  const years = useMemo(() => {
    return getYearRange(yearDropdownRange);
  }, [yearDropdownRange]);

  return (
    <Styled.UpperHeaderContainer
      fullWidth
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Icon
        icon={faChevronLeft}
        variant="h4"
        color={prevMonthButtonDisabled ? 'disabled' : 'defaultLight'}
        onClick={() =>
          clickHandler({
            disabled: prevMonthButtonDisabled,
            onClick: decreaseMonth,
          })
        }
        testID={`date-picker-header-left-arrow-${testID}`}
      />
      {showMonthYearDropdown ? (
        <Container>
          <Styled.DatePickerMonthYearSelect
            value={date.getMonth()}
            onChange={(e) =>
              changeMonth && changeMonth(parseInt(e.target.value, 10))
            }
            data-testid={`date-picker-header-month-select-${testID}`}
          >
            {months.map((month, idx) => (
              <option key={month} value={idx}>
                {month}
              </option>
            ))}
          </Styled.DatePickerMonthYearSelect>
          <Styled.DatePickerMonthYearSelect
            value={date.getFullYear()}
            onChange={(e) =>
              changeYear && changeYear(parseInt(e.target.value, 10))
            }
            data-testid={`date-picker-header-year-select-${testID}`}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Styled.DatePickerMonthYearSelect>
        </Container>
      ) : (
        <Typography variant="h4" color="defaultLight">
          {date.toLocaleString('default', { month: 'long' })}{' '}
          {date.getFullYear()}
        </Typography>
      )}
      <Icon
        icon={faChevronRight}
        variant="h4"
        color={nextMonthButtonDisabled ? 'disabled' : 'defaultLight'}
        onClick={() =>
          clickHandler({
            disabled: nextMonthButtonDisabled,
            onClick: increaseMonth,
          })
        }
        testID={`date-picker-header-right-arrow-${testID}`}
      />
    </Styled.UpperHeaderContainer>
  );
};

export default DatePickerHeader;
