import React, { ReactNode, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  ExpandableCalendar as NativeExpandableCalendar,
  ExpandableCalendarProps as NativeExpandableCalendarProps,
  CalendarProvider,
  CalendarContextProviderProps,
  LocaleConfig,
} from 'react-native-calendars';
import { formatDate } from './utils';
import { calendarStyles } from './Calendar.style';
import useTheme from '../../hooks/useTheme';
import { DayComponent } from './DayComponent';
import {
  SHORT_MONTH_NAME,
  SHORT_WEEK_DAYS,
  FIRST_DAY_OF_THE_WEEK,
  calendarThemeFactory,
} from './Calendar.constants';

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

  LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort =
    SHORT_WEEK_DAYS;
  LocaleConfig.locales[LocaleConfig.defaultLocale].monthNames =
    SHORT_MONTH_NAME;

  const initialDate: Date = startDate || new Date();

  const formattedDate = formatDate(initialDate);

  const calendarTheme = useMemo(() => calendarThemeFactory(theme), [theme]);

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
            testID: `day-${date?.dateString}`,
          })
        }
        {...rest}
      />
      {displayLoader && (
        <View testID="calendar-loader" style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={theme.ColorNeutralBlack} />
        </View>
      )}
      {!!listComponent && listComponent}
    </CalendarProvider>
  );
};

export default ExpandableCalendar;
