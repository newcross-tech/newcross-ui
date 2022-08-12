import useTheme from '../../hooks/useTheme';
import { FontWeight } from '../../types';

export const calendarStyles = () => {
  const theme = useTheme();
  return {
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
  };
};
