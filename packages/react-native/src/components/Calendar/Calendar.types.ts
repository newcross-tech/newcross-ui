import { TextStyle, ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export type Direction = 'right' | 'left';

export enum DateType {
  selectedDates = 'selectedDates',
  noShiftsDates = 'noShiftsDates',
  bookedDates = 'bookedDates',
  // availableDates = 'availableDates',
  unavailableDates = 'unavailableDates',
  inactiveDates = 'inactiveDates',
  multipleDates = 'multipleDates',
}

export type StyleByDate = Record<string, DateStyle>;
export type StylesByDateType = Record<DateType, DateStyle>;

export type DateStyle = {
  customContainerStyle?: ViewStyle | undefined;
  customTextStyle?: TextStyle | undefined;
  disabled?: boolean;
  disableTouchEvent?: boolean;
  textColor?: string;
};

export type CalendarState = {
  noShiftsDateStyle?: StyleByDate;
  bookedDateStyle?: StyleByDate;
  unavailableDateStyle?: StyleByDate;
  inactiveDateStyle?: StyleByDate;
  selectedDateStyle?: StyleByDate;
};

export type CalendarAction = {
  type: DateType;
  payload?: Array<string>;
  theme: ThemeDesignTokens;
};
