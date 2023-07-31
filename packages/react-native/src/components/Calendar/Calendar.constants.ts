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
  textSectionTitleColor: theme.ColorNeutralGrey100,
  textMonthFontSize: theme.CalendarFontSize,
  textMonthFontWeight: theme.CalendarHeaderFontWeight as FontWeight,
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

export const expandableCalendarThemeFactory = (theme: ThemeDesignTokens) => ({
  ...calendarThemeFactory(theme),
  arrowColor: theme.CalendarColor,
  stylesheet: {
    expandable: {
      main: {
        knob: {
          width: theme.SpacingBase80,
          height: theme.SpacingBase4,
          borderRadius: theme.BorderBaseRadiusRounded,
          backgroundColor: theme.ColorNeutralGrey200,
        },
      },
    },
  },
});
