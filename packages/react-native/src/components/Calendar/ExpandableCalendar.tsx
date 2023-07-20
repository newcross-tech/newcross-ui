import React, { ReactNode, useCallback, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  ExpandableCalendar as NativeExpandableCalendar,
  ExpandableCalendarProps as NativeExpandableCalendarProps,
  CalendarProvider,
  DateData,
  CalendarContextProviderProps,
} from 'react-native-calendars';
import { FIRST_DAY_OF_THE_WEEK } from './Calendar.constants';
import { formatDate } from './utils';
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
   * booked dates array
   */
  bookedDates?: string[];
  availableDates?: string[];
  /**
   * unavailable dates array
   */
  unavailableDates?: string[];
  /**
   * hasMultipleDateSelection - Boolean to enable multiple date selection
   */
  hasMultipleDateSelection?: boolean;
  /**
   * triggers an action when month has changed after left and right arrow press
   */
  onMonthChange?: (date: Date) => void;
  /**
   * Display loading state
   */
  displayLoader?: boolean;
  /**
   * ListComponent - custom component to render list of dates
   * default is FlatList
   */
  listComponent?: ReactNode;
  /**
   *  CalendarProvider props
   *
   */
  calendarProviderProps?: CalendarContextProviderProps;
} & NativeExpandableCalendarProps;

const ExpandableCalendar = ({
  testID = 'expandable-calendar-component',
  hideExtraDays = false,
  firstDay = FIRST_DAY_OF_THE_WEEK,
  startDate,
  bookedDates,
  unavailableDates,
  availableDates,
  selectedDates,
  onMonthChange,

  displayLoader = false,
  listComponent,
  calendarProviderProps,
  onDayPress,
  ...rest
}: ExpandableCalendarProps & CalendarContextProviderProps) => {
  const theme = useTheme();
  const styles = calendarStyles(theme);

  const initialDate: Date = startDate || new Date();

  const formattedDate = formatDate(initialDate);

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

  return (
    <CalendarProvider date={formattedDate} {...calendarProviderProps}>
      <NativeExpandableCalendar
        testID={testID}
        firstDay={firstDay}
        current={formattedDate}
        key={formattedDate}
        minDate={formattedDate}
        hideExtraDays={hideExtraDays}
        theme={calendarTheme}
        onMonthChange={onMonthChange}
        dayComponent={({ date, theme, marking, state }) =>
          DayComponent({
            date,
            onDayPress,
            theme,
            marking,
            state,
            selectedDates,
            unavailableDates,
            availableDates,
            bookedDates,
            testID: `day-${date?.dateString}`, // Added unique testID here
          })
        }
        {...rest}
      />
      {displayLoader && (
        <View testID="calendar-loader" style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={theme.ColorNeutralBlack} />
        </View>
      )}
      {listComponent && listComponent}
    </CalendarProvider>
  );
};

export default ExpandableCalendar;
