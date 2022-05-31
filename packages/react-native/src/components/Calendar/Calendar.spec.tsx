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
    const { getByTestId } = render(<Calendar />);

    // Act
    const rightArrow = getByTestId('calendar-component-next');
    getByTestId('HEADER_MONTH_NAME').props.children = 'May 2022';
    fireEvent.press(rightArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId('HEADER_MONTH_NAME')).toBeTruthy;
      expect(getByTestId('HEADER_MONTH_NAME').props.children).toBe('June 2022');
    });
  });

  it('gets correct month on press of left arrow', async () => {
    // Arrange
    const { getByTestId } = render(<Calendar />);

    // Act
    const leftArrow = getByTestId('calendar-component-previous');
    getByTestId('HEADER_MONTH_NAME').props.children = 'May 2022';
    fireEvent.press(leftArrow);

    // Assert
    await waitFor(() => {
      expect(getByTestId('HEADER_MONTH_NAME')).toBeTruthy;
      expect(getByTestId('HEADER_MONTH_NAME').props.children).toBe(
        'April 2022'
      );
    });
  });
});
