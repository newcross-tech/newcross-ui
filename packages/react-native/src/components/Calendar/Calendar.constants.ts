import { FontWeight } from '../../types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
export const FIRST_DAY_OF_THE_WEEK = 1;
export const SHORT_WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const SHORT_MONTH_NAME = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const calendarThemeFactory = (theme: ThemeDesignTokens) => ({
  textMonthFontFamily: theme.CalendarFontFamily,
  textMonthFontWeight: theme.CalendarHeaderFontWeight as FontWeight,
  textMonthFontSize: theme.CalendarFontSize,
  monthTextColor: theme.CalendarColor,
  textDayHeaderFontFamily: theme.CalendarFontFamily,
  textDayHeaderFontSize: theme.CalendarFontSize,
  textDayHeaderFontWeight: theme.CalendarHeaderWeekdaysFontWeight as FontWeight,
  textDayFontFamily: theme.CalendarFontFamily,
  textDayFontWeight: theme.CalendarHeaderWeekdaysFontWeight as FontWeight,
  textDayFontSize: theme.CalendarDaysFontSize,
  dayTextColor: theme.CalendarColor,
  todayTextColor: theme.CalendarDaysCurrentColor,
  textDisabledColor: theme.CalendarDaysDisabledColor,
});
