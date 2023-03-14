import { ThemeDesignTokens } from '../../../theme/ThemeProvider';
import { DateType } from '../Calendar.types';
import getStylesByDate from './getStylesByDate';

describe('getStylesByDate', () => {
  it('returns required object for noShiftsDates type', () => {
    // Arrange
    const dates = ['2022-08-17', '2022-08-19', '2022-08-20'];
    const dateType = DateType.noShiftsDates;
    const theme = { CalendarDaysDisabledColor: 'blue' } as ThemeDesignTokens;
    // Act

    const result = getStylesByDate(dateType, dates, theme);
    // Assert

    expect(result).toEqual({
      '2022-08-17': {
        disabled: true,
        disableTouchEvent: true,
        customTextStyle: {
          color: theme.CalendarDaysNoShiftsColor,
        },
      },
      '2022-08-19': {
        disabled: true,
        disableTouchEvent: true,
        customTextStyle: {
          color: theme.CalendarDaysNoShiftsColor,
        },
      },
      '2022-08-20': {
        disabled: true,
        disableTouchEvent: true,
        customTextStyle: {
          color: theme.CalendarDaysNoShiftsColor,
        },
      },
    });
  });

  it('returns required object for bookedDates type', () => {
    // Arrange
    const dates = ['2022-08-17', '2022-08-19', '2022-08-20'];
    const dateType = DateType.bookedDates;
    const theme = {
      CalendarColor: 'blue',
      CalendarDaysBookedBackgroundColor: 'yellow',
    } as ThemeDesignTokens;
    // Act

    const result = getStylesByDate(dateType, dates, theme);
    // Assert

    expect(result).toEqual({
      '2022-08-17': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysBookedBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarColor,
        },
      },
      '2022-08-19': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysBookedBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarColor,
        },
      },
      '2022-08-20': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysBookedBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarColor,
        },
      },
    });
  });

  it('returns required object for unavailableDates type', () => {
    // Arrange
    const dates = ['2022-08-17', '2022-08-19', '2022-08-20'];
    const dateType = DateType.unavailableDates;
    const theme = {
      CalendarColor: 'blue',
      CalendarDaysUnavailableBackgroundColor: 'yellow',
    } as ThemeDesignTokens;
    // Act

    const result = getStylesByDate(dateType, dates, theme);
    // Assert

    expect(result).toEqual({
      '2022-08-17': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysUnavailableBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarColor,
        },
      },
      '2022-08-19': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysUnavailableBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarColor,
        },
      },
      '2022-08-20': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysUnavailableBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarColor,
        },
      },
    });
  });

  it('returns required object for inactiveDates type', () => {
    // Arrange
    const dates = ['2022-08-17', '2022-08-19', '2022-08-20'];
    const dateType = DateType.inactiveDates;
    const theme = {
      CalendarDaysInactiveBackgroundColor: 'yellow',
    } as ThemeDesignTokens;
    // Act

    const result = getStylesByDate(dateType, dates, theme);
    // Assert

    expect(result).toEqual({
      '2022-08-17': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          borderRadius: 0,
          backgroundColor: theme.CalendarDaysInactiveBackgroundColor,
        },
      },
      '2022-08-19': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          borderRadius: 0,
          backgroundColor: theme.CalendarDaysInactiveBackgroundColor,
        },
      },
      '2022-08-20': {
        disabled: true,
        disableTouchEvent: true,
        customContainerStyle: {
          borderRadius: 0,
          backgroundColor: theme.CalendarDaysInactiveBackgroundColor,
        },
      },
    });
  });

  it('returns required object for selectedDates type', () => {
    // Arrange
    const dates = ['2022-08-17', '2022-08-19', '2022-08-20'];
    const dateType = DateType.selectedDates;
    const theme = {
      CalendarDaysSelectedBackgroundColor: 'yellow',
      CalendarDaysSelectedColor: 'blue',
    } as ThemeDesignTokens;
    // Act

    const result = getStylesByDate(dateType, dates, theme);
    // Assert

    expect(result).toEqual({
      '2022-08-17': {
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysSelectedBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarDaysSelectedColor,
        },
      },
      '2022-08-19': {
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysSelectedBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarDaysSelectedColor,
        },
      },
      '2022-08-20': {
        customContainerStyle: {
          backgroundColor: theme.CalendarDaysSelectedBackgroundColor,
        },
        customTextStyle: {
          color: theme.CalendarDaysSelectedColor,
        },
      },
    });
  });

  it('returns required object for multipleDates type', () => {
    // Arrange
    const dates = ['2022-08-17', '2022-08-19', '2022-08-20', '2022-08-23'];
    const dateType = DateType.multipleDates;
    const theme = {
      CalendarDaysSelectedBackgroundColor: 'blue',
      CalendarDaysSelectedColor: 'green',
      CalendarDaysDateRangeBackgroundColor: 'red',
    } as ThemeDesignTokens;
    // Act

    const result = getStylesByDate(dateType, dates, theme);
    // Assert

    expect(result).toEqual({
      '2022-08-17': {
        startingDay: true,
        textColor: theme.CalendarDaysSelectedColor,
        color: theme.CalendarDaysSelectedBackgroundColor,
      },
      '2022-08-19': {
        textColor: theme.CalendarDaysSelectedColor,
        color: theme.CalendarDaysDateRangeBackgroundColor,
      },
      '2022-08-20': {
        textColor: theme.CalendarDaysSelectedColor,
        color: theme.CalendarDaysDateRangeBackgroundColor,
      },
      '2022-08-23': {
        endingDay: true,
        textColor: theme.CalendarDaysSelectedColor,
        color: theme.CalendarDaysSelectedBackgroundColor,
      },
    });
  });

  it('returns required object for multipleDates type when only one date is provided', () => {
    // Arrange
    const dates = ['2022-08-17'];
    const dateType = DateType.multipleDates;
    const theme = {
      CalendarDaysSelectedBackgroundColor: 'blue',
      CalendarDaysSelectedColor: 'green',
      CalendarDaysDateRangeBackgroundColor: 'red',
    } as ThemeDesignTokens;
    // Act

    const result = getStylesByDate(dateType, dates, theme);
    // Assert

    expect(result).toEqual({
      '2022-08-17': {
        startingDay: true,
        textColor: theme.CalendarDaysSelectedColor,
        color: theme.CalendarDaysSelectedBackgroundColor,
      },
    });
  });
});
