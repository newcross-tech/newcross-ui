import React, { useCallback, useEffect, useReducer, useState } from 'react';
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
import { formatDate, getStylesByDate, createDateRange } from './utils';
import { DateType, StyleByDate } from './Calendar.types';
import { calendarStyles } from './Calendar.style';
import useTheme from '../../hooks/useTheme';
import calendarReducer, { initialState } from './reducer/calendarReducer';
import CalendarHeader from './CalendarHeader';

export type CalendarProps = {
  /**
   * hideExtraDays - hide days from previous and next month
   * deafult is true
   */
  hideExtraDays?: boolean;
  /**
   * firstDay - set whichever day to be the first day on the
   * calendar. Default is Monday
   */
  firstDay?: number;
  /**
   * testID - Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * startDate - Used to set default calendar start date
   */
  startDate?: Date;
  /**
   * noShiftsDates - No shift dates available
   */
  noShiftsDates?: string[];
  /**
   * bookedDates - Booked dates array
   */
  bookedDates?: string[];
  /**
   * unavailableDates - Unavailable dates
   */
  unavailableDates?: string[];
  /**
   * inactiveDates - Inactive dates
   */
  inactiveDates?: string[];
  /**
   * hasSingleDateRange - Boolean to enable single date range
   */
  hasSingleDateRange?: boolean;
  /**
   * hasMultipleDateRange - Boolean to enable multiple date range
   */
  hasMultipleDateRange?: boolean;
  /**
   * hasMultipleDateSelection - Boolean to enable multiple date selection
   */
  hasMultipleDateSelection?: boolean;
  /**
   * onDateSelection - provide single or multiple dates selected
   */
  onDateSelection?: (dates: Array<string>) => void;
  /**
   * onSingleDateRange - provide single range dates
   */
  onSingleDateRange?: (dates: Array<string>) => void;
  /**
   * onMultipleDateRange - provide multiple range dates
   */
  onMultipleDateRange?: (dates: Array<Array<string>>) => void;
} & NativeCalendarProps;

const Calendar = ({
  hasSingleDateRange = false,
  hasMultipleDateRange = false,
  hasMultipleDateSelection = false,
  hideExtraDays = true,
  firstDay = FIRST_DAY_OF_THE_WEEK,
  startDate,
  noShiftsDates = [],
  bookedDates = [],
  unavailableDates = [],
  inactiveDates = [],
  onDateSelection,
  onSingleDateRange,
  onMultipleDateRange,
  ...rest
}: CalendarProps) => {
  const styles = calendarStyles();
  const [
    {
      noShiftsDateStyle,
      bookedDateStyle,
      unavailableDateStyle,
      inactiveDateStyle,
      selectedDateStyle,
    },
    dispatch,
  ] = useReducer(calendarReducer, initialState);

  LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort =
    SHORT_WEEK_DAYS;
  LocaleConfig.locales[LocaleConfig.defaultLocale].monthNames =
    SHORT_MONTH_NAME;

  const theme = useTheme();
  const { CalendarDaysCurrentColor } = theme;

  const initialDate: Date = startDate || new Date();
  const [date, setDate] = useState(initialDate);
  const formattedDate = formatDate(date);
  const formattedInitialDate = formatDate(initialDate);

  const [selectedDates, setSelectedDates] = useState<Array<string>>([]);
  const [singleDateRange, setSingleDateRange] = useState<Array<string>>([]);
  const [multipleDateRange, setMultipleDateRange] = useState<
    Array<Array<string>>
  >([]);

  const [selectedDateRange, setSelectedDateRange] = useState<StyleByDate>({});

  const datesToExclude = [
    ...noShiftsDates,
    ...bookedDates,
    ...unavailableDates,
    ...inactiveDates,
  ];

  const getDateRangeStyles = useCallback((range: Array<string>) => {
    const dateRange = createDateRange(range, datesToExclude);

    return getStylesByDate(DateType.multipleDates, dateRange, theme);
  }, []);

  const hasTwoRecords = (strings: Array<string>) => strings.length === 2;
  const hasOneRecord = (strings: Array<string>) => strings.length === 1;

  const handleDayPress = (day: string) => {
    if (selectedDates.includes(day)) {
      setSelectedDates(
        selectedDates.filter((selectedDate) => selectedDate !== day)
      );
    } else {
      setSelectedDates(
        hasMultipleDateSelection ? [...selectedDates, day] : [day]
      );
    }
  };

  const handleMultipleDateRange = (day: string) => {
    const dateRange: Array<Array<string>> = multipleDateRange.filter(
      (range) => !createDateRange(range).includes(day)
    );

    if (dateRange.length === 0) {
      setMultipleDateRange([[day]]);
    } else {
      dateRange.forEach((range) => {
        if (dateRange.every((range) => hasTwoRecords(range))) {
          dateRange.push([day]);
        } else if (hasOneRecord(range)) {
          const [firstDate] = range;
          if (firstDate > day) {
            range.splice(0, 1, day);
          } else {
            range.push(day);
          }
        }
      });

      setMultipleDateRange(dateRange);
    }
  };

  const handleSingleDateRange = (day: string) => {
    const isResetRequired = singleDateRange.some(
      (currentDate) =>
        day < currentDate ||
        day === currentDate ||
        hasTwoRecords(singleDateRange)
    );

    if (isResetRequired) {
      setSingleDateRange([day]);
    } else {
      setSingleDateRange([...singleDateRange, day]);
    }
  };

  const removeOverlappingDateRanges = useCallback(
    (multipleDateRange: Array<Array<string>>) =>
      multipleDateRange.filter((range, index) => {
        const lastDateRange = createDateRange(
          multipleDateRange[multipleDateRange.length - 1]
        );

        if (lastDateRange.length > 1 && index < multipleDateRange.length - 1) {
          const currentDateRange = createDateRange(range);

          return !lastDateRange.some((date) => currentDateRange.includes(date));
        }
        return true;
      }),
    []
  );

  useEffect(() => {
    const dateRange = removeOverlappingDateRanges(multipleDateRange);

    const stylesByDate = dateRange.reduce((styles, range) => {
      const dateRangeStyles = getDateRangeStyles(range);

      return { ...styles, ...dateRangeStyles };
    }, {} as StyleByDate);

    setSelectedDateRange({ ...stylesByDate });
    if (multipleDateRange.length !== dateRange.length) {
      setMultipleDateRange(() => dateRange);
    }
    onMultipleDateRange && onMultipleDateRange(dateRange);
  }, [multipleDateRange]);

  useEffect(() => {
    const dateRangeStyles = getDateRangeStyles(singleDateRange);

    setSelectedDateRange(dateRangeStyles);
    onSingleDateRange && onSingleDateRange(singleDateRange);
  }, [singleDateRange]);

  useEffect(() => {
    noShiftsDates.length &&
      dispatch({ type: DateType.noShiftsDates, payload: noShiftsDates, theme });
    bookedDates.length &&
      dispatch({ type: DateType.bookedDates, payload: bookedDates, theme });
    unavailableDates.length &&
      dispatch({
        type: DateType.unavailableDates,
        payload: unavailableDates,
        theme,
      });
    inactiveDates.length &&
      dispatch({
        type: DateType.inactiveDates,
        payload: inactiveDates,
        theme,
      });
  }, [dispatch, noShiftsDates, bookedDates, unavailableDates, inactiveDates]);

  useEffect(() => {
    selectedDates.length &&
      dispatch({
        type: DateType.selectedDates,
        payload: selectedDates,
        theme,
      });
    onDateSelection && onDateSelection(selectedDates);
  }, [dispatch, selectedDates]);

  return (
    <NativeCalendar
      firstDay={firstDay}
      current={formattedDate}
      markingType={'period'}
      markedDates={{
        ...noShiftsDateStyle,
        ...bookedDateStyle,
        ...unavailableDateStyle,
        ...inactiveDateStyle,
        ...selectedDateStyle,
        ...selectedDateRange,
        [formattedInitialDate]: {
          marked: true,
          dotColor: CalendarDaysCurrentColor,
          customContainerStyle: {
            paddingBottom: theme.SpacingBase4,
          },
        },
      }}
      key={formattedDate}
      minDate={formattedInitialDate}
      renderArrow={(direction) => (
        <CalendarHeader
          direction={direction}
          date={date}
          onDateChange={setDate}
        />
      )}
      hideExtraDays={hideExtraDays}
      theme={styles}
      onDayPress={(day) => {
        if (hasSingleDateRange) {
          handleSingleDateRange(day.dateString);
        } else if (hasMultipleDateRange) {
          handleMultipleDateRange(day.dateString);
        } else {
          handleDayPress(day.dateString);
        }
      }}
      {...rest}
    />
  );
};

export default Calendar;
