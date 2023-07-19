import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  ExpandableCalendar as NativeExpandableCalendar,
  ExpandableCalendarProps as NativeExpandableCalendarProps,
  CalendarProvider,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';
import { flattenDeep } from 'lodash';
import {
  SHORT_MONTH_NAME,
  SHORT_WEEK_DAYS,
  FIRST_DAY_OF_THE_WEEK,
} from './Calendar.constants';
import { formatDate, getStylesByDate } from './utils';
import { DateType, StyleByDate } from './Calendar.types';
import { calendarStyles } from './Calendar.style';
import useTheme from '../../hooks/useTheme';
import { FontWeight } from '../../types';
import { DayComponent } from './DayComponent';

export type ExpandableCalendarProps = {
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
  availableDates?: string[];
  /**
   * unavailable dates array
   */
  unavailableDates?: string[];
  /**
   * inactive dates array
   */
  inactiveDates?: string[];
  /**
   * hasMultipleDateSelection - Boolean to enable multiple date selection
   */
  hasMultipleDateSelection?: boolean;
  /**
   * onDateSelection - provide single or multiple dates selected
   */
  onDateSelection?: (dates: Array<string>) => void;
  /**
   * triggers an action when month has changed after left and right arrow press
   */
  onMonthChange?: (date: Date) => void;
  /**
   * Display loading state
   */
  displayLoader?: boolean;
} & NativeExpandableCalendarProps;

const ExpandableCalendar = ({
  hasMultipleDateSelection = false,
  hideExtraDays = false,
  firstDay = FIRST_DAY_OF_THE_WEEK,
  startDate,
  noShiftsDates,
  bookedDates,
  unavailableDates,
  availableDates,
  inactiveDates,
  selectedDates,
  onDateSelection,
  onMonthChange,
  displayLoader = false,
}: ExpandableCalendarProps) => {
  const theme = useTheme();
  const styles = calendarStyles(theme);

  const leftArrowImageSource = require('./previous.png');
  const rightArrowImageSource = require('./next.png');

  LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort =
    SHORT_WEEK_DAYS;
  LocaleConfig.locales[LocaleConfig.defaultLocale].monthNames =
    SHORT_MONTH_NAME;

  const initialDate: Date = startDate || new Date();

  const formattedDate = formatDate(initialDate);
  const formattedInitialDate = formatDate(initialDate);

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
  ]).find((date) => date === formattedInitialDate);

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

  const calendarTheme = useMemo(
    () => ({
      textMonthFontFamily: theme.CalendarFontFamily,
      textMonthFontWeight: theme.CalendarHeaderFontWeight as FontWeight,
      textMonthFontSize: theme.CalendarFontSize,
      monthTextColor: theme.CalendarColor,
      textDayHeaderFontFamily: theme.CalendarFontFamily,
      textDayHeaderFontSize: theme.CalendarFontSize,
      textDayHeaderFontWeight:
        theme.CalendarHeaderWeekdaysFontWeight as FontWeight,
      textDayFontFamily: theme.CalendarFontFamily,
      textDayFontWeight: theme.CalendarHeaderWeekdaysFontWeight as FontWeight,
      textDayFontSize: theme.CalendarDaysFontSize,
      dayTextColor: theme.CalendarColor,
      todayTextColor: theme.CalendarDaysCurrentColor,
      textDisabledColor: theme.CalendarDaysDisabledColor,
    }),
    [theme]
  );

  const onDayPress = useCallback(
    ({ dateString }: DateData) => {
      handleDayPress(dateString);
    },
    [handleDayPress]
  );

  const markedDates = useMemo(() => {
    const types = [
      { type: DateType.bookedDates, dates: bookedDates },
      { type: DateType.availableDates, dates: availableDates },
      { type: DateType.unavailableDates, dates: unavailableDates },
      { type: DateType.selectedDates, dates: selectedDates },
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
    selectedDates,
    availableDates,
    unavailableDates,
    formattedInitialDate,
    isInitialDateSelected,
  ]);

  return (
    <CalendarProvider date={formattedDate}>
      <NativeExpandableCalendar
        // leftArrowImageSource={leftArrowImageSource}
        // rightArrowImageSource={rightArrowImageSource}
        firstDay={firstDay}
        current={formattedDate}
        markedDates={markedDates}
        key={formattedDate}
        minDate={formattedInitialDate}
        hideExtraDays={hideExtraDays}
        theme={calendarTheme}
        dayComponent={({ date, onPress, theme, marking, state, testID }) =>
          DayComponent({
            date,
            onPress,
            theme,
            marking,
            state,
            testID,
            staffBookedDates: bookedDates,
            availabileDates: availableDates,
            unavailableDates,
            selectedDates,
          })
        }
        onDayPress={onDayPress}
      />
      {displayLoader && (
        <View testID="calendar-loader" style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={theme.ColorNeutralBlack} />
        </View>
      )}
    </CalendarProvider>
  );
};

export default ExpandableCalendar;
