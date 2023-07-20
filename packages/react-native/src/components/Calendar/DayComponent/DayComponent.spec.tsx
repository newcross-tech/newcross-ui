import React from 'react';
import moment from 'moment';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { DateData } from 'react-native-calendars';
import { DayComponent, DayComponentProps } from './DayComponent';
import { native } from '@newcross-ui/design-tokens';

const CALENDAR_DATE_TIME_FORMAT = 'YYYY-MM-DD';

describe('DayComponent', () => {
  const defaultProps = {
    testID: 'day-component',
    date: { dateString: '2022-05-01', day: 1 } as DateData,
    onPress: jest.fn(),
    bookedDates: ['2022-05-01'],
  } as DayComponentProps;

  it('should render the correct day number', () => {
    const { getByText } = render(<DayComponent {...defaultProps} />);
    expect(getByText('1')).not.toBeNull();
  });

  it('should call the onPress function when pressed', () => {
    const { getByTestId } = render(<DayComponent {...defaultProps} />);
    fireEvent.press(getByTestId('day-component-2022-5-1'));
    expect(defaultProps.onPress).toHaveBeenCalled();
  });

  it('should show the booked icon for staff booked dates', () => {
    const { getByTestId } = render(<DayComponent {...defaultProps} />);
    expect(getByTestId('day-component-icon')).not.toBeNull();
  });

  it('should not show the booked icon for non-staff booked dates', () => {
    const { queryByTestId } = render(
      <DayComponent
        {...defaultProps}
        date={{ dateString: '2022-05-02' } as string & DateData}
      />
    );
    expect(queryByTestId('day-component-icon')).toBeNull();
  });

  it('should apply custom text style color when present and not disabled', () => {
    const customColor = '#123456';
    const customTextStyle = { color: customColor };
    const theme = { dayTextColor: '#789012', textDisabledColor: '#345678' };
    const { getByTestId } = render(
      <DayComponent
        {...defaultProps}
        date={{ dateString: '2022-05-01' } as string & DateData}
        marking={{ customTextStyle }}
        theme={theme}
      />
    );

    const dayText = getByTestId('day-component-text');
    expect(dayText).toHaveStyle({ color: customColor });
  });

  it('should apply disabled text style color when disabled', () => {
    const theme = { dayTextColor: '#789012', textDisabledColor: '#345678' };
    const { getByTestId } = render(
      <DayComponent
        {...defaultProps}
        date={{ dateString: '2022-05-01' } as string & DateData}
        marking={{ disabled: true }}
        theme={theme}
      />
    );

    const dayText = getByTestId('day-component-text');
    expect(dayText).toHaveStyle({ color: theme.textDisabledColor });
  });

  it('should apply default text style color when no custom style and not disabled', () => {
    const theme = { dayTextColor: '#789012', textDisabledColor: '#345678' };
    const { getByTestId } = render(
      <DayComponent
        {...defaultProps}
        date={{ dateString: '2022-05-01' } as string & DateData}
        theme={theme}
      />
    );

    const dayText = getByTestId('day-component-text');
    expect(dayText).toHaveStyle({ color: theme.dayTextColor });
  });

  it('should show the current day icon', () => {
    const { ColorBaseBlue400 } = native.healthforce;
    // Act
    render(
      <DayComponent
        {...defaultProps}
        date={
          { dateString: moment().format(CALENDAR_DATE_TIME_FORMAT) } as string &
            DateData
        }
      />
    );

    // Assert
    expect(screen.getByTestId('current-day-icon')).toBeDefined();
    expect(screen.getByTestId('day-component-text')).toHaveStyle({
      color: ColorBaseBlue400,
    });
  });

  it('should not show the current day icon when its selected', () => {
    // Arrange
    const date = moment().format(CALENDAR_DATE_TIME_FORMAT);
    const { ColorNeutralWhite } = native.healthforce;

    // Act
    render(
      <DayComponent
        {...defaultProps}
        date={{ dateString: date } as string & DateData}
        selectedDates={[date]}
      />
    );

    expect(screen.queryByTestId('current-day-icon')).toBeNull();
    expect(screen.getByTestId('day-component-text')).toHaveStyle({
      color: ColorNeutralWhite,
    });
  });

  it('should show the current day icon with correct style when its disabled', () => {
    const { ColorBaseGrey300 } = native.healthforce;

    // Arrange
    const date = moment().format(CALENDAR_DATE_TIME_FORMAT);

    // Act
    render(
      <DayComponent
        {...defaultProps}
        date={{ dateString: date } as string & DateData}
        marking={{ disabled: true }}
        theme={{ textDisabledColor: ColorBaseGrey300 }}
      />
    );

    expect(screen.getByTestId('current-day-icon')).toBeDefined();
    expect(screen.getByTestId('day-component-text')).toHaveStyle({
      color: ColorBaseGrey300,
    });
  });
});
