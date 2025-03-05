import { byTestId } from 'testing-library-selector';
import DatePickerHeader, { DatePickerHeaderProps } from './DatePickerHeader';
import { fireEvent, render } from '@testing-library/react';

describe('DatePickerHeader', () => {
  const defaultDate = new Date('2025-02-21T00:00:00'); // February 21, 2025
  const headerTestID = 'test-1';

  const defaultHeaderProps: DatePickerHeaderProps = {
    date: defaultDate,
    decreaseMonth: jest.fn(),
    increaseMonth: jest.fn(),
    changeMonth: jest.fn(),
    changeYear: jest.fn(),
    prevMonthButtonDisabled: false,
    nextMonthButtonDisabled: false,
    showMonthYearDropdown: true,
    testID: headerTestID,
  };

  const headerUI = {
    leftArrow: byTestId(`date-picker-header-left-arrow-${headerTestID}`),
    rightArrow: byTestId(`date-picker-header-right-arrow-${headerTestID}`),
    monthSelect: byTestId(`date-picker-header-month-select-${headerTestID}`),
    yearSelect: byTestId(`date-picker-header-year-select-${headerTestID}`),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders dropdown selects when showMonthYearDropdown is true', () => {
    // Act
    render(<DatePickerHeader {...defaultHeaderProps} />);
    // Assert
    expect(headerUI.monthSelect.get()).toBeInTheDocument();
    expect(headerUI.yearSelect.get()).toBeInTheDocument();
  });

  it('renders static text when showMonthYearDropdown is false', () => {
    // Act
    render(
      <DatePickerHeader {...defaultHeaderProps} showMonthYearDropdown={false} />
    );
    // Assert
    expect(headerUI.monthSelect.query()).toBeNull();
    expect(headerUI.yearSelect.query()).toBeNull();
  });

  it('calls decreaseMonth when left arrow is clicked (enabled)', () => {
    // Arrange
    const decreaseMonthMock = jest.fn();
    render(
      <DatePickerHeader
        {...defaultHeaderProps}
        decreaseMonth={decreaseMonthMock}
      />
    );
    // Act
    fireEvent.click(headerUI.leftArrow.get());
    // Assert
    expect(decreaseMonthMock).toHaveBeenCalled();
  });

  it('does not call decreaseMonth when left arrow is disabled', () => {
    // Arrange
    const decreaseMonthMock = jest.fn();
    render(
      <DatePickerHeader
        {...defaultHeaderProps}
        decreaseMonth={decreaseMonthMock}
        prevMonthButtonDisabled={true}
      />
    );
    // Act
    fireEvent.click(headerUI.leftArrow.get());
    // Assert
    expect(decreaseMonthMock).not.toHaveBeenCalled();
  });

  it('calls increaseMonth when right arrow is clicked (enabled)', () => {
    // Arrange
    const increaseMonthMock = jest.fn();
    render(
      <DatePickerHeader
        {...defaultHeaderProps}
        increaseMonth={increaseMonthMock}
      />
    );
    // Act
    fireEvent.click(headerUI.rightArrow.get());
    // Assert
    expect(increaseMonthMock).toHaveBeenCalled();
  });

  it('does not call increaseMonth when right arrow is disabled', () => {
    // Arrange
    const increaseMonthMock = jest.fn();
    render(
      <DatePickerHeader
        {...defaultHeaderProps}
        increaseMonth={increaseMonthMock}
        nextMonthButtonDisabled={true}
      />
    );
    // Act
    fireEvent.click(headerUI.rightArrow.get());
    // Assert
    expect(increaseMonthMock).not.toHaveBeenCalled();
  });

  it('calls changeMonth when the month dropdown changes', () => {
    // Arrange
    const changeMonthMock = jest.fn();
    render(
      <DatePickerHeader
        {...defaultHeaderProps}
        changeMonth={changeMonthMock}
        showMonthYearDropdown={true}
      />
    );
    // Act
    fireEvent.change(headerUI.monthSelect.get(), { target: { value: '3' } });
    // Assert
    expect(changeMonthMock).toHaveBeenCalledWith(3);
  });

  it('calls changeYear when the year dropdown changes', () => {
    // Arrange
    const changeYearMock = jest.fn();
    render(
      <DatePickerHeader
        {...defaultHeaderProps}
        changeYear={changeYearMock}
        showMonthYearDropdown={true}
      />
    );
    // Act
    fireEvent.change(headerUI.yearSelect.get(), {
      target: { value: '2030' },
    });
    // Assert
    expect(changeYearMock).toHaveBeenCalledWith(2030);
  });
});
