import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import ExpandableCalendar from './ExpandableCalendar';

describe('ExpandableCalendar', () => {
  const handleDateSelection = jest.fn();
  const selectedDates = ['2023-07-19'];
  const defaultProps = {
    onDateSelection: handleDateSelection,
    selectedDates,
    hasMultipleDateSelection: false,
  };

  it('renders correctly', () => {
    render(<ExpandableCalendar {...defaultProps} />);

    expect(screen.getAllByTestId('expandable-calendar-component')).toBeTruthy();
  });

  it('calls onDateSelection with the correct arguments when a day is pressed', () => {
    render(<ExpandableCalendar {...defaultProps} />);
    const day = new Date().toISOString().slice(0, 10); // get today's date in 'yyyy-mm-dd' format
    const elements = screen.getAllByTestId(`day-${day}`);

    // Loop through each element and simulate a press event
    elements.forEach((element) => {
      fireEvent.press(element);
    });

    expect(defaultProps.onDateSelection).toHaveBeenCalledWith([day]);
  });

  it('displays a loader if displayLoader is true', () => {
    render(<ExpandableCalendar {...defaultProps} displayLoader />);
    expect(screen.getByTestId('calendar-loader')).toBeTruthy();
  });

  it('calls onDateSelection with selected date when a day is pressed', () => {
    const handleDateSelection = jest.fn();
    const day = new Date().toISOString().slice(0, 10); // get today's date in 'yyyy-mm-dd' format

    render(
      <ExpandableCalendar
        {...defaultProps}
        onDateSelection={handleDateSelection}
      />
    );

    fireEvent.press(screen.getByTestId(`day-${day}`));
    expect(handleDateSelection).toHaveBeenCalledWith([day]);
  });

  it('removes a date from selection when the same day is pressed again', () => {
    const handleDateSelection = jest.fn();
    const day = new Date().toISOString().slice(0, 10); // get today's date in 'yyyy-mm-dd' format

    render(
      <ExpandableCalendar
        {...defaultProps}
        selectedDates={[day]}
        onDateSelection={handleDateSelection}
      />
    );

    fireEvent.press(screen.getByTestId(`day-${day}`));
    expect(handleDateSelection).toHaveBeenCalledWith([]);
  });

  // ...other tests
});
