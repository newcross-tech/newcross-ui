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
});
