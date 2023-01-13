import { ThemeDesignTokens } from '../../../theme/ThemeProvider';
import { DateType, StyleByDate, StylesByDateType } from '../Calendar.types';

const isFirstRecord = (currentIndex: number) => currentIndex === 0;
const isLastRecord = (currentIndex: number, totalRecords: number) =>
  totalRecords > 1 && currentIndex === totalRecords - 1;

const getStylesByDateType = (
  theme: ThemeDesignTokens,
  currentIndex: number,
  totalRecords: number
): StylesByDateType => ({
  [DateType.noShiftsDates]: {
    disabled: true,
    disableTouchEvent: true,
    customTextStyle: {
      textDecorationLine: 'line-through',
      color: theme.CalendarDaysDisabledColor,
    },
  },
  [DateType.bookedDates]: {
    customContainerStyle: {
      backgroundColor: theme.CalendarDaysBookedBackgroundColor,
    },
    customTextStyle: {
      color: theme.CalendarColor,
    },
  },
  [DateType.unavailableDates]: {
    disabled: true,
    disableTouchEvent: true,
    customContainerStyle: {
      backgroundColor: theme.CalendarDaysUnavailableBackgroundColor,
    },
    customTextStyle: {
      color: theme.CalendarColor,
    },
  },
  [DateType.inactiveDates]: {
    disabled: true,
    disableTouchEvent: true,
    customContainerStyle: {
      borderRadius: 0,
      backgroundColor: theme.CalendarDaysInactiveBackgroundColor,
    },
  },
  [DateType.selectedDates]: {
    customContainerStyle: {
      backgroundColor: theme.CalendarDaysSelectedBackgroundColor,
    },
    customTextStyle: {
      color: theme.CalendarDaysSelectedColor,
    },
  },
  [DateType.multipleDates]: {
    textColor: theme.CalendarDaysSelectedColor,
    ...(isFirstRecord(currentIndex) && {
      startingDay: true,
      color: theme.CalendarDaysSelectedBackgroundColor,
    }),
    ...(isLastRecord(currentIndex, totalRecords) && {
      endingDay: true,
      color: theme.CalendarDaysSelectedBackgroundColor,
    }),
    ...(!isFirstRecord(currentIndex) &&
      !isLastRecord(currentIndex, totalRecords) && {
        color: theme.CalendarDaysDateRangeBackgroundColor,
      }),
  },
});

const getStylesByDate = (
  dateType: DateType,
  dates: Array<string>,
  theme: ThemeDesignTokens
): StyleByDate => {
  const output = dates.reduce(
    (styleByDates, date, currentIndex) => ({
      ...styleByDates,
      [date]: getStylesByDateType(theme, currentIndex, dates.length)[dateType],
    }),
    {} as StyleByDate
  );

  return output;
};

export default getStylesByDate;
