import React from 'react';
import {
  fireEvent,
  render,
  waitFor,
  screen,
} from '@testing-library/react-native';
import Calendar, { CalendarProps } from './Calendar';

const testID = 'calendar-component';

describe('Calendar Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: CalendarProps = {
      testID,
    };

    // Act
    render(<Calendar {...props} />);

    // Assert
    expect(screen.getByTestId(testID)).toBeTruthy();
    expect(screen.queryByTestId('calendar-loader')).toBeNull();
    expect(
      screen.getByTestId(`${testID}-next`).props.accessibilityState.disabled
    ).toBeFalsy();
    expect(
      screen.getByTestId(`${testID}-previous`).props.accessibilityState.disabled
    ).toBeFalsy();
  });

  it('renders loading component when displayLoader is true', () => {
    // Arrange
    const props: CalendarProps = {
      testID,
      displayLoader: true,
    };

    // Act
    render(<Calendar {...props} />);

    // Assert
    expect(screen.getByTestId('calendar-loader')).toBeTruthy();
    expect(screen.getByTestId(testID)).toBeTruthy();
  });

  it('renders left and right arrow buttons successfully', () => {
    // Act
    const { getByTestId } = render(<Calendar />);

    // Assert
    expect(getByTestId(`${testID}-previous`)).toBeTruthy();
    expect(getByTestId(`${testID}-next`)).toBeTruthy();
  });

  it('gets correct month on press of right arrow', async () => {
    // Arrange
    const { getByTestId } = render(
      <Calendar testID={testID} startDate={new Date('2022-05-01')} />
    );

    // Act
    const rightArrow = getByTestId(`${testID}-next`);
    fireEvent.press(rightArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId(`${testID}.header.title`)).toBeTruthy;
      expect(getByTestId(`${testID}.header.title`).props.children).toBe(
        'Jun 2022'
      );
    });
  });

  it('gets correct month on press of left arrow', async () => {
    // Arrange
    const { getByTestId } = render(
      <Calendar testID={testID} startDate={new Date('2022-05-01')} />
    );

    // Act
    const leftArrow = getByTestId(`${testID}-previous`);
    fireEvent.press(leftArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId(`${testID}.header.title`)).toBeTruthy;
      expect(getByTestId(`${testID}.header.title`).props.children).toBe(
        'Apr 2022'
      );
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
    const rightArrow = getByTestId(`${testID}-next`);
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
    const leftArrow = getByTestId(`${testID}-previous`);
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
        startDate={new Date('2022-05-01')}
        onMonthChange={onMonthChange}
        disablePreviousMonth={true}
      />
    );

    // Assert
    expect(screen.getByTestId(`${testID}-previous`)).toBeDisabled();
    expect(
      screen.getByTestId(`${testID}-next`).props.accessibilityState.disabled
    ).toBeFalsy();
  });

  it('disables right arrow when disableNextMonth is true', async () => {
    // Arrange
    const onMonthChange = jest.fn();
    render(
      <Calendar
        startDate={new Date('2022-05-01')}
        onMonthChange={onMonthChange}
        disableNextMonth={true}
      />
    );

    // Assert
    expect(screen.getByTestId(`${testID}-next`)).toBeDisabled();
    expect(
      screen.getByTestId(`${testID}-previous`).props.accessibilityState.disabled
    ).toBeFalsy();
  });

  describe('single data selection', () => {
    it('returns selected date in array when date is clicked once', async () => {
      // Arrange
      const onDateSelection = jest.fn();
      const { getByTestId } = render(
        <Calendar
          testID={testID}
          onDateSelection={onDateSelection}
          startDate={new Date('2022-05-01')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-01`));

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
          testID={testID}
          onDateSelection={onDateSelection}
          startDate={new Date('2022-05-01')}
          selectedDates={['2022-05-01']}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-01`));

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
          testID={testID}
          hasMultipleDateSelection
          onDateSelection={onDateSelection}
          startDate={new Date('2022-05-01')}
          selectedDates={['2022-05-01']}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-02`));

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
          testID={testID}
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date('2022-05-01')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-01`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-04`));

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
          testID={testID}
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-08`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-07`));

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
          testID={testID}
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-08`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-08`));

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
          testID={testID}
          hasSingleDateRange
          onSingleDateRange={onSingleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-06`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-09`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-10`));

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
          testID={testID}
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-06`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-09`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-10`));

      fireEvent.press(getByTestId(`${testID}.day_2022-05-12`));

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
          testID={testID}
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-06`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-09`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-10`));

      fireEvent.press(getByTestId(`${testID}.day_2022-05-12`));

      fireEvent.press(getByTestId(`${testID}.day_2022-05-07`));

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
          testID={testID}
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-08`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-06`));

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
          testID={testID}
          hasMultipleDateRange
          onMultipleDateRange={onMultipleDateRange}
          startDate={new Date('2022-05-05')}
        />
      );

      // Act
      fireEvent.press(getByTestId(`${testID}.day_2022-05-08`));
      fireEvent.press(getByTestId(`${testID}.day_2022-05-10`));

      fireEvent.press(getByTestId(`${testID}.day_2022-05-07`));

      fireEvent.press(getByTestId(`${testID}.day_2022-05-12`));

      fireEvent.press(getByTestId(`${testID}.day_2022-05-07`));

      // Assert
      await waitFor(() => {
        expect(onMultipleDateRange).toHaveBeenLastCalledWith([['2022-05-07']]);
      });
    });
  });
});
