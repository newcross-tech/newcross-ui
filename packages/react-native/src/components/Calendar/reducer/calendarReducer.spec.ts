import { ThemeDesignTokens } from '../../../theme/ThemeProvider';
import { DateType, CalendarAction, CalendarState } from '../Calendar.types';
import calendarReducer from './calendarReducer';

const response = { foo: 'bar' };

jest.mock('../utils/getStylesByDate', () =>
  jest.fn().mockReturnValue(response)
);

describe('calendarReducer', () => {
  it('returns required state for noShiftsDates type', () => {
    // Arrange
    const state: CalendarState = { noShiftsDateStyle: {} };
    const action: CalendarAction = {
      type: DateType.noShiftsDates,
      payload: ['123'],
      theme: {} as ThemeDesignTokens,
    };

    // Act
    const result = calendarReducer(state, action);

    // Assert
    expect(result).toEqual({ noShiftsDateStyle: response });
  });

  it('returns required state for bookedDates type', () => {
    // Arrange
    const state: CalendarState = { bookedDateStyle: {} };
    const action: CalendarAction = {
      type: DateType.bookedDates,
      payload: ['123'],
      theme: {} as ThemeDesignTokens,
    };

    // Act
    const result = calendarReducer(state, action);

    // Assert
    expect(result).toEqual({ bookedDateStyle: response });
  });

  it('returns required state for unavailableDates type', () => {
    // Arrange
    const state: CalendarState = { unavailableDateStyle: {} };
    const action: CalendarAction = {
      type: DateType.unavailableDates,
      payload: ['123'],
      theme: {} as ThemeDesignTokens,
    };

    // Act
    const result = calendarReducer(state, action);

    // Assert
    expect(result).toEqual({ unavailableDateStyle: response });
  });

  it('returns required state for inactiveDates type', () => {
    // Arrange
    const state: CalendarState = { inactiveDateStyle: {} };
    const action: CalendarAction = {
      type: DateType.inactiveDates,
      payload: ['123'],
      theme: {} as ThemeDesignTokens,
    };

    // Act
    const result = calendarReducer(state, action);

    // Assert
    expect(result).toEqual({ inactiveDateStyle: response });
  });

  it('returns required state for selectedDates type', () => {
    // Arrange
    const state: CalendarState = { selectedDateStyle: {} };
    const action: CalendarAction = {
      type: DateType.selectedDates,
      payload: ['123'],
      theme: {} as ThemeDesignTokens,
    };

    // Act
    const result = calendarReducer(state, action);

    // Assert
    expect(result).toEqual({ selectedDateStyle: response });
  });
});
