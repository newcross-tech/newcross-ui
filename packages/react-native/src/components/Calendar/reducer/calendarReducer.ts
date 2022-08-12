import { CalendarAction, CalendarState, DateType } from '../Calendar.types';
import getStylesByDate from '../utils/getStylesByDate';

export const initialState: CalendarState = {
  noShiftsDateStyle: {},
  bookedDateStyle: {},
  unavailableDateStyle: {},
  inactiveDateStyle: {},
  selectedDateStyle: {},
};

const calendarReducer = (
  state: CalendarState = initialState,
  action: CalendarAction
) => {
  const { type, payload, theme } = action;

  if (type === DateType.noShiftsDates && payload) {
    return {
      ...state,
      noShiftsDateStyle: getStylesByDate(
        DateType.noShiftsDates,
        payload,
        theme
      ),
    };
  }

  if (type === DateType.bookedDates && payload) {
    return {
      ...state,
      bookedDateStyle: getStylesByDate(DateType.bookedDates, payload, theme),
    };
  }

  if (type === DateType.unavailableDates && payload) {
    return {
      ...state,
      unavailableDateStyle: getStylesByDate(
        DateType.unavailableDates,
        payload,
        theme
      ),
    };
  }

  if (type === DateType.inactiveDates && payload) {
    return {
      ...state,
      inactiveDateStyle: getStylesByDate(
        DateType.inactiveDates,
        payload,
        theme
      ),
    };
  }

  if (type === DateType.selectedDates && payload) {
    return {
      ...state,
      selectedDateStyle: getStylesByDate(
        DateType.selectedDates,
        payload,
        theme
      ),
    };
  }

  return initialState;
};

export default calendarReducer;
