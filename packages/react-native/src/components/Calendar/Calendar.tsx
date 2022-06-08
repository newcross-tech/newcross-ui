import React, { useState } from 'react';
import {
  Calendar as NativeCalendar,
  CalendarProps as NativeCalendarProps,
  LocaleConfig,
} from 'react-native-calendars';
import {
  SHORT_MONTH_NAME,
  SHORT_WEEK_DAYS,
  FIRST_DAY_OF_THE_WEEK,
} from './Calendar.constants';
import Button, { ButtonVariant, ButtonSizes, ButtonCorners } from '../Button';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  formatDate,
  getShortMonth,
  getPreviousMonth,
  getNextMonth,
} from './utils';
import { Direction } from './Calendar.types';
import { calendarStyles } from './Calendar.style';

export type CalendarProps = {
  /**
   * hide days from previous and next month
   * deafult is true
   */
  hideExtraDays?: boolean;
  /**
   * set whichever day to be the first day on the
   * calendar. Default is Monday
   */
  firstDay?: number;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Used to specify start date for calendar to begin on
   * e.g. 2022-05-01
   */
  startDate?: Date;
} & NativeCalendarProps;

const Calendar = ({
  hideExtraDays = true,
  firstDay = FIRST_DAY_OF_THE_WEEK,
  startDate,
  ...rest
}: CalendarProps) => {
  const styles = calendarStyles();
  LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort =
    SHORT_WEEK_DAYS;
  LocaleConfig.locales[LocaleConfig.defaultLocale].monthNames =
    SHORT_MONTH_NAME;

  const initialDate: Date = startDate ? startDate : new Date();
  const [date, setDate] = useState(initialDate);
  const [previousMonth, setPreviousMonth] = useState(getPreviousMonth(date, 1));
  const [nextMonth, setNextMonth] = useState(getNextMonth(date, 1));

  const onPreviousMonthPress = () => {
    setDate(getPreviousMonth(date, 1));
    setPreviousMonth(getPreviousMonth(date, 2));
    setNextMonth(date);
  };

  const onNextMonthPress = () => {
    setDate(getNextMonth(date, 1));
    setPreviousMonth(date);
    setNextMonth(getNextMonth(date, 2));
  };

  const renderArrow = (direction: Direction) => {
    const buttonProps = {
      variant: ButtonVariant.outlinePrimary,
      size: ButtonSizes.small,
      corners: ButtonCorners.rounded,
    };
    return direction === 'left' ? (
      <Button
        testID={`calendar-component-previous`}
        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        onPress={onPreviousMonthPress}
        {...buttonProps}
      >
        {getShortMonth(previousMonth)}
      </Button>
    ) : (
      <Button
        testID={`calendar-component-next`}
        rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
        onPress={onNextMonthPress}
        {...buttonProps}
      >
        {getShortMonth(nextMonth)}
      </Button>
    );
  };

  return (
    <NativeCalendar
      firstDay={firstDay}
      current={formatDate(date)}
      key={formatDate(date)}
      renderArrow={renderArrow}
      hideExtraDays={hideExtraDays}
      theme={styles}
      {...rest}
    />
  );
};

export default Calendar;
