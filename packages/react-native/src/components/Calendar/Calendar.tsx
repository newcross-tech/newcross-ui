import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  Calendar as NativeCalendar,
  CalendarProps as NativeCalendarProps,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';
import { flattenDeep } from 'lodash';
import {
  SHORT_MONTH_NAME,
  SHORT_WEEK_DAYS,
  FIRST_DAY_OF_THE_WEEK,
  calendarThemeFactory,
} from './Calendar.constants';
import { formatDate, getStylesByDate, createDateRange } from './utils';
import { DateType, StyleByDate } from './Calendar.types';
import { calendarStyles } from './Calendar.style';
import useTheme from '../../hooks/useTheme';
import CalendarHeader from './CalendarHeader';

export type CalendarProps = {
  /**
   * hideExtraDays - hide days from previous and next month
   * default is true
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
   * selected dates array
   */
  selectedDates?: string[];
  /**
   * no shift dates array
   */
  noShiftsDates?: string[];
  /**
   * booked dates array
   */
  bookedDates?: string[];
  /**
   * unavailable dates array
   */
  unavailableDates?: string[];
  /**
   * inactive dates array
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
  /**
   * triggers an action when month has changed after left and right arrow press
   */
  onMonthChange?: (date: Date) => void;
  /**
   * Initial selected date range
   */
  initialSingleDateRange?: Array<string>;
  /**
   * Initial selected multiple date range
   */
  initialMultipleDateRange?: Array<Array<string>>;
  /**
   * Display loading state
   */
  displayLoader?: boolean;
  /**
   * Disable left arrow button
   */
  disablePreviousMonth?: boolean;
  /**
   * Disable right arrow button
   */
  disableNextMonth?: boolean;
} & NativeCalendarProps;

const Calendar = ({
  hasSingleDateRange = false,
  hasMultipleDateRange = false,
  hasMultipleDateSelection = false,
  hideExtraDays = true,
  firstDay = FIRST_DAY_OF_THE_WEEK,
  startDate,
  noShiftsDates,
  bookedDates,
  unavailableDates,
  inactiveDates,
  selectedDates,
  onDateSelection,
  onSingleDateRange,
  onMultipleDateRange,
  onMonthChange,
  initialSingleDateRange = [],
  initialMultipleDateRange = [],
  displayLoader = false,
  disablePreviousMonth = false,
  disableNextMonth = false,
  ...rest
}: CalendarProps) => {
  const theme = useTheme();
  const styles = calendarStyles(theme);

  LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort =
    SHORT_WEEK_DAYS;
  LocaleConfig.locales[LocaleConfig.defaultLocale].monthNames =
    SHORT_MONTH_NAME;

  const initialDate: Date = startDate || new Date();

  const [date, setDate] = useState(initialDate);
  const formattedDate = formatDate(date);
  const formattedInitialDate = formatDate(initialDate);

  const [singleDateRange, setSingleDateRange] = useState<Array<string>>(
    initialSingleDateRange
  );

  const [multipleDateRange, setMultipleDateRange] = useState<
    Array<Array<string>>
  >(initialMultipleDateRange);

  const [selectedDateRange, setSelectedDateRange] = useState<StyleByDate>({});

  const datesToExclude = useMemo(
    () => [
      ...(noShiftsDates ?? []),
      ...(bookedDates ?? []),
      ...(unavailableDates ?? []),
      ...(inactiveDates ?? []),
    ],
    [bookedDates, inactiveDates, noShiftsDates, unavailableDates]
  );

  const isInitialDateSelected = !!flattenDeep([
    ...datesToExclude,
    ...(selectedDates ?? []),
    ...singleDateRange,
    ...multipleDateRange,
  ]).find((date) => date === formattedInitialDate);

  const getDateRangeStyles = useCallback(
    (range: Array<string>) => {
      const dateRange = createDateRange(range, datesToExclude);

      return getStylesByDate(DateType.multipleDates, dateRange, theme);
    },
    [theme, datesToExclude]
  );

  const hasTwoRecords = (strings: Array<string>) => strings.length === 2;
  const hasOneRecord = (strings: Array<string>) => strings.length === 1;

  const handleDayPress = useCallback(
    (day: string) => {
      onDateSelection &&
        (selectedDates?.includes(day)
          ? onDateSelection(selectedDates.filter((date) => date !== day))
          : onDateSelection(
              hasMultipleDateSelection ? [...(selectedDates ?? []), day] : [day]
            ));
    },
    [onDateSelection, hasMultipleDateSelection, selectedDates]
  );

  const handleMultipleDateRange = useCallback(
    (day: string) => {
      const dateRange: Array<Array<string>> = multipleDateRange.filter(
        (range) => !createDateRange(range).includes(day)
      );

      if (!dateRange.length) {
        return setMultipleDateRange([[day]]);
      }

      dateRange.forEach((range) => {
        if (dateRange.every(hasTwoRecords)) {
          dateRange.push([day]);
        } else if (hasOneRecord(range)) {
          const [firstDate] = range;
          firstDate > day ? range.splice(0, 1, day) : range.push(day);
        }
      });

      setMultipleDateRange(dateRange);
    },
    [multipleDateRange]
  );

  const handleSingleDateRange = useCallback(
    (day: string) => {
      const isResetRequired = singleDateRange.some(
        (currentDate) => day <= currentDate || hasTwoRecords(singleDateRange)
      );

      setSingleDateRange(isResetRequired ? [day] : [...singleDateRange, day]);
    },
    [singleDateRange]
  );

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
    if (hasMultipleDateRange) {
      const dateRange = removeOverlappingDateRanges(multipleDateRange);

      const stylesByDate = dateRange.reduce(
        (styles, range) => ({ ...styles, ...getDateRangeStyles(range) }),
        {} as StyleByDate
      );

      setSelectedDateRange({ ...stylesByDate });

      if (multipleDateRange.length !== dateRange.length) {
        setMultipleDateRange(dateRange);
      }

      onMultipleDateRange?.(dateRange);
    }
  }, [
    multipleDateRange,
    hasMultipleDateRange,
    removeOverlappingDateRanges,
    onMultipleDateRange,
    getDateRangeStyles,
  ]);

  useEffect(() => {
    if (hasSingleDateRange) {
      const dateRangeStyles = getDateRangeStyles(singleDateRange);

      setSelectedDateRange(dateRangeStyles);

      onSingleDateRange?.(singleDateRange);
    }
  }, [
    singleDateRange,
    hasSingleDateRange,
    getDateRangeStyles,
    onSingleDateRange,
  ]);

  const calendarTheme = useMemo(() => calendarThemeFactory(theme), [theme]);

  const onDayPress = useCallback(
    ({ dateString }: DateData) => {
      if (hasSingleDateRange) {
        handleSingleDateRange(dateString);
      } else if (hasMultipleDateRange) {
        handleMultipleDateRange(dateString);
      } else {
        handleDayPress(dateString);
      }
    },
    [
      hasSingleDateRange,
      hasMultipleDateRange,
      handleDayPress,
      handleSingleDateRange,
      handleMultipleDateRange,
    ]
  );

  const markedDates = useMemo(() => {
    const types = [
      { type: DateType.bookedDates, dates: bookedDates },
      { type: DateType.unavailableDates, dates: unavailableDates },
      { type: DateType.inactiveDates, dates: inactiveDates },
      { type: DateType.selectedDates, dates: selectedDates },
      { type: DateType.noShiftsDates, dates: noShiftsDates },
    ];

    const stylesByDate = types.reduce(
      (styles, { type, dates }) =>
        dates?.length
          ? { ...styles, ...getStylesByDate(type, dates, theme) }
          : styles,
      {} as StyleByDate
    );

    return {
      ...stylesByDate,
      ...selectedDateRange,
      ...(!isInitialDateSelected && {
        [formattedInitialDate]: {
          marked: true,
          dotColor: theme.CalendarDaysCurrentColor,
          customContainerStyle: { paddingBottom: theme.SpacingBase4 },
        },
      }),
    };
  }, [
    theme,
    bookedDates,
    inactiveDates,
    noShiftsDates,
    selectedDates,
    unavailableDates,
    selectedDateRange,
    formattedInitialDate,
    isInitialDateSelected,
  ]);

  return (
    <View>
      <NativeCalendar
        firstDay={firstDay}
        testID={'calendar'}
        current={formattedDate}
        markingType={'period'}
        disableArrowLeft={true}
        disableArrowRight={true}
        markedDates={markedDates}
        key={formattedDate}
        minDate={formattedInitialDate}
        renderArrow={(direction) => {
          return (
            <CalendarHeader
              direction={direction}
              date={date}
              onDateChange={setDate}
              onMonthChange={onMonthChange}
              disablePreviousMonth={disablePreviousMonth}
              disableNextMonth={disableNextMonth}
            />
          );
        }}
        hideExtraDays={hideExtraDays}
        theme={calendarTheme}
        onDayPress={onDayPress}
        {...rest}
      />
      {displayLoader && (
        <View testID="calendar-loader" style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={theme.ColorNeutralBlack} />
        </View>
      )}
    </View>
  );
};

export default Calendar;
