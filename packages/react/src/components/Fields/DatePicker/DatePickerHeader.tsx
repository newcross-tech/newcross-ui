import Icon from '../../Icon';
import Typography from '../../Typography';
import { DatePickerHeaderProps } from './DatePicker.types';
import * as Styled from './DatePicker.style';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/pro-light-svg-icons';
import Container from '../../Container';

export const DatePickerHeader = ({
  date = new Date(),
  decreaseMonth,
  increaseMonth,
  changeMonth,
  changeYear,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  showMonthYearDropdown,
  testID,
}: DatePickerHeaderProps) => {
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

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentYear = date.getFullYear();
  const years = [];
  for (let y = currentYear - 100; y <= currentYear + 10; y++) {
    years.push(y);
  }
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
        <Container gap="xs">
          <Styled.DatePickerMonthYearSelect
            value={date.getMonth()}
            onChange={(e) =>
              changeMonth && changeMonth(parseInt(e.target.value, 10))
            }
            data-testid={`date-picker-header-month-select-${testID}`}
          >
            {monthNames.map((month, idx) => (
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
