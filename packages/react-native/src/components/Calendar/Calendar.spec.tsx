import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Calendar, { CalendarProps } from './Calendar';

describe('Calendar Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: CalendarProps = { testID: 'calendar-component' };

    // Act
    const { getByTestId } = render(<Calendar {...props} />);

    // Assert
    expect(getByTestId('calendar-component')).toBeTruthy();
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
      <Calendar startDate={new Date('2022-05-01')} />
    );

    // Act
    const rightArrow = getByTestId('calendar-component-next');
    fireEvent.press(rightArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId('HEADER_MONTH_NAME')).toBeTruthy;
      expect(getByTestId('HEADER_MONTH_NAME').props.children).toBe('Jun 2022');
    });
  });

  it('gets correct month on press of left arrow', async () => {
    // Arrange
    const { getByTestId } = render(
      <Calendar startDate={new Date('2022-05-01')} />
    );

    // Act
    const leftArrow = getByTestId('calendar-component-previous');
    fireEvent.press(leftArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId('HEADER_MONTH_NAME')).toBeTruthy;
      expect(getByTestId('HEADER_MONTH_NAME').props.children).toBe('Apr 2022');
    });
  });

  it('calls onMonthChange when right arrow is pressed', async () => {
    // Arrange
    const onMonthChange = jest.fn();
    const { getByTestId } = render(
      <Calendar
        startDate={new Date('2022-05-01')}
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
        startDate={new Date('2022-05-01')}
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

  describe('single data selection', () => {
    it('returns selected date in array when date is clicked once', async () => {
      // Arrange
      const onDateSelection = jest.fn();
      const { getByTestId } = render(
        <Calendar
          onDateSelection={onDateSelection}
          startDate={new Date('2022-05-01')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-01')
      );

      // Assert
      await waitFor(() => {
        expect(onDateSelection).toHaveBeenLastCalledWith(['2022-05-01']);
      });
    });

    it('returns empty array when a selected day is clicked', async () => {
      // Arrange
      const onDateSelection = jest.fn();
      const { getByTestId } = render(
        <Calendar
          onDateSelection={onDateSelection}
          startDate={new Date('2022-05-01')}
          selectedDates={['2022-05-01']}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-01')
      );

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
          startDate={new Date('2022-05-01')}
          selectedDates={['2022-05-01']}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-02')
      );

      // Assert
      await waitFor(() => {
        expect(onDateSelection).toHaveBeenLastCalledWith([
          '2022-05-01',
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
          startDate={new Date('2022-05-01')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-01')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-04')
      );

      // Assert
      await waitFor(() => {
        expect(onSingleDateRange).toHaveBeenLastCalledWith([
          '2022-05-01',
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
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-08')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-07')
      );

      // Assert
      await waitFor(() => {
        expect(onSingleDateRange).toHaveBeenLastCalledWith(['2022-05-07']);
      });
    });

    it('reassigns start date to current date when its same as previously selected date', async () => {
      // Arrange
      const onSingleDateRange = jest.fn();
      const { getByTestId } = render(
        <Calendar
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-08')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-08')
      );

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
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-06')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-09')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-10')
      );

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
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-06')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-09')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-10')
      );

      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-12')
      );

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
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-06')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-09')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-10')
      );

      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-12')
      );

      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-07')
      );

      // Assert
      await waitFor(() => {
        expect(onMultipleDateRange).toHaveBeenLastCalledWith([
          ['2022-05-10', '2022-05-12'],
          ['2022-05-07'],
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
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-08')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-06')
      );

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
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-08')
      );
      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-10')
      );

      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-07')
      );

      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-12')
      );

      fireEvent.press(
        getByTestId('native.calendar.SELECT_DATE_SLOT-2022-05-07')
      );

      // Assert
      await waitFor(() => {
        expect(onMultipleDateRange).toHaveBeenLastCalledWith([['2022-05-07']]);
      });
    });
  });
});
