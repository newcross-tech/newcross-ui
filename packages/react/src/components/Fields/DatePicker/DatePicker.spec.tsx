import { render, screen, fireEvent } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerHeaderProps } from './DatePicker.types';

describe('DatePicker', () => {
  describe('DatePickerHeader', () => {
    const defaultDate = new Date('2025-02-21T00:00:00'); // February 21, 2025
    const testID = 'test-1';

    const defaultProps: DatePickerHeaderProps = {
      date: defaultDate,
      decreaseMonth: jest.fn(),
      increaseMonth: jest.fn(),
      changeMonth: jest.fn(),
      changeYear: jest.fn(),
      prevMonthButtonDisabled: false,
      nextMonthButtonDisabled: false,
      showMonthYearDropdown: true,
      testID,
    };

    const ui = {
      leftArrow: byTestId(`date-picker-header-left-arrow-${testID}`),
      rightArrow: byTestId(`date-picker-header-right-arrow-${testID}`),
      monthSelect: byTestId(`date-picker-header-month-select-${testID}`),
      yearSelect: byTestId(`date-picker-header-year-select-${testID}`),
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders dropdown selects when showMonthYearDropdown is true', () => {
      // Act
      render(<DatePickerHeader {...defaultProps} />);

      // Assert
      expect(ui.monthSelect.get()).toBeInTheDocument();
      expect(ui.yearSelect.get()).toBeInTheDocument();

      // Assert
      expect(screen.queryByText(/February 2025/i)).toBeNull();
    });

    it('renders static text when showMonthYearDropdown is false', () => {
      // Act
      render(
        <DatePickerHeader {...defaultProps} showMonthYearDropdown={false} />
      );

      // Assert
      expect(screen.getByText(/February 2025/i)).toBeInTheDocument();

      // Assert
      expect(ui.monthSelect.query()).toBeNull();
      expect(ui.yearSelect.query()).toBeNull();
    });

    it('calls decreaseMonth when left arrow is clicked (enabled)', () => {
      // Arrange
      const decreaseMonthMock = jest.fn();
      render(
        <DatePickerHeader {...defaultProps} decreaseMonth={decreaseMonthMock} />
      );

      // Act
      fireEvent.click(ui.leftArrow.get());

      // Assert
      expect(decreaseMonthMock).toHaveBeenCalled();
    });

    it('does not call decreaseMonth when left arrow is disabled', () => {
      // Arrange
      const decreaseMonthMock = jest.fn();
      render(
        <DatePickerHeader
          {...defaultProps}
          decreaseMonth={decreaseMonthMock}
          prevMonthButtonDisabled={true}
        />
      );

      // Act
      fireEvent.click(ui.leftArrow.get());

      // Assert
      expect(decreaseMonthMock).not.toHaveBeenCalled();
    });

    it('calls increaseMonth when right arrow is clicked (enabled)', () => {
      // Arrange
      const increaseMonthMock = jest.fn();
      render(
        <DatePickerHeader {...defaultProps} increaseMonth={increaseMonthMock} />
      );

      // Act
      fireEvent.click(ui.rightArrow.get());

      // Assert
      expect(increaseMonthMock).toHaveBeenCalled();
    });

    it('does not call increaseMonth when right arrow is disabled', () => {
      // Arrange
      const increaseMonthMock = jest.fn();
      render(
        <DatePickerHeader
          {...defaultProps}
          increaseMonth={increaseMonthMock}
          nextMonthButtonDisabled={true}
        />
      );

      // Act
      fireEvent.click(ui.rightArrow.get());

      // Assert
      expect(increaseMonthMock).not.toHaveBeenCalled();
    });

    it('calls changeMonth when the month dropdown changes', () => {
      // Arrange
      const changeMonthMock = jest.fn();
      render(
        <DatePickerHeader
          {...defaultProps}
          changeMonth={changeMonthMock}
          showMonthYearDropdown={true}
        />
      );

      // Act
      fireEvent.change(ui.monthSelect.get(), { target: { value: '3' } });

      // Assert
      expect(changeMonthMock).toHaveBeenCalledWith(3);
    });

    it('calls changeYear when the year dropdown changes', () => {
      // Arrange
      const changeYearMock = jest.fn();
      render(
        <DatePickerHeader
          {...defaultProps}
          changeYear={changeYearMock}
          showMonthYearDropdown={true}
        />
      );

      // Act
      fireEvent.change(ui.yearSelect.get(), { target: { value: '2030' } });

      // Assert
      expect(changeYearMock).toHaveBeenCalledWith(2030);
    });
  });
});
