import React from 'react'; // useMemo
import { View } from 'react-native';
import { DayComponent } from './DayComponent';
import {
  ExpandableCalendar as RNExpandableCalendar,
  CalendarProvider,
} from 'react-native-calendars';
// import useTheme from '../../hooks/useTheme';
// import { FontWeight } from '../../types';

// type ExpandableCalendarProps = {
// onDayPress?: (date?: DateData | undefined) => void;
// };

// const theme = useTheme();
// const calendarTheme = useMemo(
//   () => ({
//     textMonthFontFamily: theme.CalendarFontFamily,
//     textMonthFontWeight: theme.CalendarHeaderFontWeight as FontWeight,
//     textMonthFontSize: theme.CalendarFontSize,
//     monthTextColor: theme.CalendarColor,
//     textDayHeaderFontFamily: theme.CalendarFontFamily,
//     textDayHeaderFontSize: theme.CalendarFontSize,
//     textDayHeaderFontWeight:
//       theme.CalendarHeaderWeekdaysFontWeight as FontWeight,
//     textDayFontFamily: theme.CalendarFontFamily,
//     textDayFontWeight: theme.CalendarHeaderWeekdaysFontWeight as FontWeight,
//     textDayFontSize: theme.CalendarDaysFontSize,
//     dayTextColor: theme.CalendarColor,
//     todayTextColor: theme.CalendarDaysCurrentColor,
//     textDisabledColor: theme.CalendarDaysDisabledColor,
//   }),
//   [theme]
// );

export const ExpandableCalendar = () =>
  // onDayPress
  // ExpandableCalendarProps
  {
    return (
      <>
        <RNExpandableCalendar
          // theme={calendarTheme}
          // onDayPress={onDayPress}
          firstDay={1}
          dayComponent={({ date, onPress, theme, marking, state, testID }) =>
            DayComponent({
              date,
              onPress,
              theme,
              marking,
              state,
              testID,
            })
          }
        />
      </>
    );
  };

// export default ExpandableCalendar;
