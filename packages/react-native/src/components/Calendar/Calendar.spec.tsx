import React from 'react';
import {
  fireEvent,
  render,
  waitFor,
  screen,
} from '@testing-library/react-native';
import Calendar, { CalendarProps } from './Calendar';

const dateString01_05 = '2022-05-01';
const dateString05_05 = '2022-05-05';
const dateString07_05 = '2022-05-07';
const calendarHeader = 'calendar.header';
const calendarHeaderTitle = 'calendar.header.title';
const calendarDay01_05 = 'calendar.day_2022-05-01';
const calendarDay06_05 = 'calendar.day_2022-05-06';
const calendarDay07_05 = 'calendar.day_2022-05-07';
const calendarDay08_05 = 'calendar.day_2022-05-08';
const calendarDay09_05 = 'calendar.day_2022-05-09';
const calendarDay10_05 = 'calendar.day_2022-05-10';
const calendarDay12_05 = 'calendar.day_2022-05-12';
describe('Calendar Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: CalendarProps = {
      testID: 'calendar-component',
    };

    // Act
    render(<Calendar {...props} />);

    // Assert
    expect(screen.getByTestId('calendar-component')).toBeTruthy();
    expect(screen.queryByTestId('calendar-loader')).toBeNull();
    expect(
      screen.getByTestId('calendar-component-next').props.accessibilityState
        .disabled
    ).toBeFalsy();
    expect(
      screen.getByTestId('calendar-component-previous').props.accessibilityState
        .disabled
    ).toBeFalsy();
  });

  it('renders loading component when displayLoader is true', () => {
    // Arrange
    const props: CalendarProps = {
      testID: 'calendar-component',
      displayLoader: true,
    };

    // Act
    render(<Calendar {...props} />);

    // Assert
    expect(screen.getByTestId('calendar-loader')).toBeTruthy();
    expect(screen.getByTestId('calendar-component')).toBeTruthy();
  });

  it('renders left and right arrow buttons successfully', () => {
    // Act
    const { getByTestId } = render(<Calendar />);

    // Assert
    expect(getByTestId('calendar-component-previous')).toBeTruthy();
    expect(getByTestId('calendar-component-next')).toBeTruthy();
  });

  it('gets correct month on press of right arrow', async () => {
    // Arrange
    const { getByTestId } = render(
      <Calendar startDate={new Date(dateString01_05)} />
    );

    // Act
    const rightArrow = getByTestId('calendar-component-next');
    fireEvent.press(rightArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId(calendarHeader)).toBeTruthy;
      expect(getByTestId(calendarHeaderTitle).props.children).toBe('Jun 2022');
    });
  });

  it('gets correct month on press of left arrow', async () => {
    // Arrange
    const { getByTestId } = render(
      <Calendar startDate={new Date(dateString01_05)} />
    );

    // Act
    const leftArrow = getByTestId('calendar-component-previous');
    fireEvent.press(leftArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId(calendarHeader)).toBeTruthy;
      expect(getByTestId(calendarHeaderTitle).props.children).toBe('Apr 2022');
    });
  });

  it('calls onMonthChange when right arrow is pressed', async () => {
    // Arrange
    const onMonthChange = jest.fn();
    const { getByTestId } = render(
      <Calendar
        startDate={new Date(dateString01_05)}
        onMonthChange={onMonthChange}
      />
    );

    // Act
    const rightArrow = getByTestId('calendar-component-next');
    fireEvent.press(rightArrow);

    // Assert
    await waitFor(() => {
      expect(onMonthChange).toHaveBeenLastCalledWith(new Date('2022-06-01'));
    });
  });

  it('calls onMonthChange when left arrow is pressed', async () => {
    // Arrange
    const onMonthChange = jest.fn();
    const { getByTestId } = render(
      <Calendar
        startDate={new Date(dateString01_05)}
        onMonthChange={onMonthChange}
      />
    );

    // Act
    const leftArrow = getByTestId('calendar-component-previous');
    fireEvent.press(leftArrow);

    // Assert
    await waitFor(() => {
      expect(onMonthChange).toHaveBeenLastCalledWith(new Date('2022-04-01'));
    });
  });

  it('disables left arrow when disablePreviousMonth is true', async () => {
    // Arrange
    const onMonthChange = jest.fn();
    render(
      <Calendar
        startDate={new Date(dateString01_05)}
        onMonthChange={onMonthChange}
        disablePreviousMonth={true}
      />
    );

    // Assert
    expect(screen.getByTestId('calendar-component-previous')).toBeDisabled();
    expect(
      screen.getByTestId('calendar-component-next').props.accessibilityState
        .disabled
    ).toBeFalsy();
  });

  it('disables right arrow when disableNextMonth is true', async () => {
    // Arrange
    const onMonthChange = jest.fn();
    render(
      <Calendar
        startDate={new Date(dateString01_05)}
        onMonthChange={onMonthChange}
        disableNextMonth={true}
      />
    );

    // Assert
    expect(screen.getByTestId('calendar-component-next')).toBeDisabled();
    expect(
      screen.getByTestId('calendar-component-previous').props.accessibilityState
        .disabled
    ).toBeFalsy();
  });

  describe('single data selection', () => {
    it('returns selected date in array when date is clicked once', async () => {
      // Arrange
      const onDateSelection = jest.fn();
      const { getByTestId } = render(
        <Calendar
          onDateSelection={onDateSelection}
          startDate={new Date(dateString01_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay01_05));
      // Assert
      await waitFor(() => {
        expect(onDateSelection).toHaveBeenLastCalledWith([dateString01_05]);
      });
    });

    it('returns empty array when a selected day is clicked', async () => {
      // Arrange
      const onDateSelection = jest.fn();
      const { getByTestId } = render(
        <Calendar
          onDateSelection={onDateSelection}
          startDate={new Date(dateString01_05)}
          selectedDates={[dateString01_05]}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay01_05));

      // Assert
      await waitFor(() => {
        expect(onDateSelection).toHaveBeenLastCalledWith([]);
      });
    });
  });

  describe('multiple date selection', () => {
    it('renders selected dates in array when multiple dates are clicked', async () => {
      // Arrange
      const onDateSelection = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasMultipleDateSelection
          onDateSelection={onDateSelection}
          startDate={new Date(dateString01_05)}
          selectedDates={[dateString01_05]}
        />
      );

      // Act
      fireEvent.press(getByTestId('calendar.day_2022-05-02'));

      // Assert
      await waitFor(() => {
        expect(onDateSelection).toHaveBeenLastCalledWith([
          dateString01_05,
          '2022-05-02',
        ]);
      });
    });
  });

  describe('single date range', () => {
    it('renders selected dates in array when multiple dates are clicked', async () => {
      // Arrange
      const onSingleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date(dateString01_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay01_05));
      fireEvent.press(getByTestId('calendar.day_2022-05-04'));

      // Assert
      await waitFor(() => {
        expect(onSingleDateRange).toHaveBeenLastCalledWith([
          dateString01_05,
          '2022-05-04',
        ]);
      });
    });

    it('reassigns start date to current date when its less than previously selected date', async () => {
      // Arrange
      const onSingleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date(dateString05_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay08_05));
      fireEvent.press(getByTestId(calendarDay07_05));

      // Assert
      await waitFor(() => {
        expect(onSingleDateRange).toHaveBeenLastCalledWith([dateString07_05]);
      });
    });

    it('reassigns start date to current date when its same as previously selected date', async () => {
      // Arrange
      const onSingleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date(dateString05_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay08_05));
      fireEvent.press(getByTestId(calendarDay08_05));

      // Assert
      await waitFor(() => {
        expect(onSingleDateRange).toHaveBeenLastCalledWith(['2022-05-08']);
      });
    });

    it('removes old range when new range start date is selected', async () => {
      // Arrange
      const onSingleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date(dateString05_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay06_05));
      fireEvent.press(getByTestId(calendarDay09_05));
      fireEvent.press(getByTestId(calendarDay10_05));

      // Assert
      await waitFor(() => {
        expect(onSingleDateRange).toHaveBeenLastCalledWith(['2022-05-10']);
      });
    });
  });

  describe('multiple date range', () => {
    it('returns array of multiple date ranges when multiple date ranges are selected', async () => {
      // Arrange
      const onMultipleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date(dateString05_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay06_05));
      fireEvent.press(getByTestId(calendarDay09_05));
      fireEvent.press(getByTestId(calendarDay10_05));

      fireEvent.press(getByTestId(calendarDay12_05));

      // Assert
      await waitFor(() => {
        expect(onMultipleDateRange).toHaveBeenLastCalledWith([
          ['2022-05-06', '2022-05-09'],
          ['2022-05-10', '2022-05-12'],
        ]);
      });
    });

    it('removes date range when current date overlaps with existing date range', async () => {
      // Arrange
      const onMultipleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date(dateString05_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay06_05));
      fireEvent.press(getByTestId(calendarDay09_05));
      fireEvent.press(getByTestId(calendarDay10_05));

      fireEvent.press(getByTestId(calendarDay12_05));

      fireEvent.press(getByTestId(calendarDay07_05));

      // Assert
      await waitFor(() => {
        expect(onMultipleDateRange).toHaveBeenLastCalledWith([
          ['2022-05-10', '2022-05-12'],
          [dateString07_05],
        ]);
      });
    });

    it('reassings start date of range when new date is less than previously selected start date', async () => {
      // Arrange
      const onMultipleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date(dateString05_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay08_05));
      fireEvent.press(getByTestId(calendarDay06_05));

      // Assert
      await waitFor(() => {
        expect(onMultipleDateRange).toHaveBeenLastCalledWith([['2022-05-06']]);
      });
    });

    it('removes all previously selected ranges when new range overlaps with previously selected ranges', async () => {
      // Arrange
      const onMultipleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date(dateString05_05)}
        />
      );

      // Act
      fireEvent.press(getByTestId(calendarDay08_05));
      fireEvent.press(getByTestId(calendarDay10_05));

      fireEvent.press(getByTestId(calendarDay07_05));

      fireEvent.press(getByTestId(calendarDay12_05));

      fireEvent.press(getByTestId(calendarDay07_05));

      // Assert
      await waitFor(() => {
        expect(onMultipleDateRange).toHaveBeenLastCalledWith([
          [dateString07_05],
        ]);
      });
    });
  });
});
