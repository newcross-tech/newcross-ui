import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { DayComponent } from './DayComponent';
import { native } from '@newcross-ui/design-tokens';

jest.mock('moment', () => () => ({ format: () => '2023-07-20' }));

describe('<DayComponent />', () => {
  const {
    ColorBaseBlue400,
    ColorSemanticsWarning100,
    ColorSemanticsError100,
    CalendarDaysSelectedColor,
    CalendarDaysDisabledColor,
    CalendarColor,
  } = native.healthforce;

  const testDate = {
    year: 2023,
    month: 7,
    day: 21,
    timestamp: new Date('2023-07-21').getTime(),
    dateString: '2023-07-21',
  };

  it('renders without crashing', () => {
    render(<DayComponent testID="test-day" />);
  });

  it('calls onDayPress when pressed', () => {
    const onDayPressMock = jest.fn();
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        onDayPress={onDayPressMock}
        testID="test-day"
      />
    );

    fireEvent.press(
      getByTestId(`test-day-${testDate.year}-${testDate.month}-${testDate.day}`)
    );
    expect(onDayPressMock).toHaveBeenCalled();
  });

  it('displays correct icon when day is booked', () => {
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        bookedDates={[testDate.dateString]}
        testID="test-day"
      />
    );

    expect(
      getByTestId(
        `test-day-${testDate.year}-${testDate.month}-${testDate.day}-icon`
      )
    ).toBeDefined();
  });

  it('displays current date with correct color when not selected and not disabled', () => {
    const currentTestDate = { ...testDate, dateString: '2023-07-20', day: 20 };
    const { getByTestId } = render(
      <DayComponent
        date={currentTestDate}
        selectedDates={[]}
        testID="test-day"
      />
    );

    const typography = getByTestId(`test-day-text`);
    expect(typography.props.style).toContainEqual({ color: ColorBaseBlue400 });
  });

  it('displays unavailable date with correct color', () => {
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        unavailableDates={[testDate.dateString]}
        testID="test-day"
      />
    );

    const typography = getByTestId(`test-day-text`);
    expect(typography.props.style).toContainEqual({
      color: ColorSemanticsError100,
    });
  });

  it('displays unavailable selected date with correct color', () => {
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        selectedDates={[testDate.dateString]}
        unavailableDates={[testDate.dateString]}
        testID="test-day"
      />
    );

    const typography = getByTestId(`test-day-text`);
    expect(typography.props.style).toContainEqual({
      color: ColorSemanticsWarning100,
    });
  });

  it('displays selected date with correct color', () => {
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        selectedDates={[testDate.dateString]}
        testID="test-day"
      />
    );

    const typography = getByTestId(`test-day-text`);
    expect(typography.props.style).toContainEqual({
      color: CalendarDaysSelectedColor,
    });
  });
  it('displays disabled date with correct color', () => {
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        state="disabled"
        testID="test-day"
        theme={{ textDisabledColor: CalendarDaysDisabledColor }}
      />
    );

    const typography = getByTestId(`test-day-text`);
    expect(typography.props.style).toContainEqual({
      color: CalendarDaysDisabledColor,
    });
  });

  it('displays date with custom color when provided and not disabled', () => {
    const customColor = 'pink';
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        marking={{ customTextStyle: { color: customColor } }}
        testID="test-day"
      />
    );

    const typography = getByTestId(`test-day-text`);
    expect(typography.props.style).toContainEqual({ color: customColor });
  });

  it('displays date with dayTextColor when custom color not provided and not disabled', () => {
    const { getByTestId } = render(
      <DayComponent
        date={testDate}
        testID="test-day"
        theme={{ dayTextColor: CalendarColor }}
      />
    );

    const typography = getByTestId(`test-day-text`);
    expect(typography.props.style).toContainEqual({ color: CalendarColor });
  });
});
