import { render, screen, fireEvent } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerHeaderProps } from './DatePicker.types';
import DatePicker, { DatePickerProps } from './DatePicker';

describe('DatePicker', () => {
  const defaultDate = new Date('2025-02-21T00:00:00'); // February 21, 2025

  // Add selectsRange: false for single-date mode
  const defaultProps: DatePickerProps = {
    label: 'Test DatePicker Label',
    helperText: 'Test helper text',
    errorText: '',
    required: false,
    disabled: false,
    selected: defaultDate,
    showMonthYearDropdown: false,
    onChange: jest.fn(),
  };

  const renderComponent = (overrideProps?: Partial<DatePickerProps>) => {
    const props = { ...defaultProps, ...overrideProps };
    return render(<DatePicker {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the label if provided', () => {
    // Act
    renderComponent();

    // Assert
    expect(screen.getByText('Test DatePicker Label')).toBeInTheDocument();
  });

  it('does not render label if label prop is undefined', () => {
    // Act
    renderComponent({ label: undefined });

    // Assert
    expect(screen.queryByText('Test DatePicker Label')).toBeNull();
  });

  it('renders helper text if provided', () => {
    // Act
    renderComponent({ helperText: 'Some helper text' });

    // Assert
    expect(screen.getByText('Some helper text')).toBeInTheDocument();
  });

  it('renders error text if provided', () => {
    // Act
    renderComponent({ errorText: 'Error message' });

    // Assert
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('renders range date picker if selectsRange is true', () => {
    // Act
    renderComponent({
      selectsRange: true,
      startDate: defaultDate,
      endDate: defaultDate,
      onChange: jest.fn(), // provide an appropriate onChange handler for range mode
    });

    // Assert
    // In range mode, assume your component renders a string like "21/02/2025 - 21/02/2025"
    expect(screen.getByText('21/02/2025 - 21/02/2025')).toBeInTheDocument();
  });

  it('renders single date picker if selectsRange is false', () => {
    // Act
    renderComponent();

    // Assert
    expect(screen.getByText('21/02/2025')).toBeInTheDocument();
  });

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
    });

    it('renders static text when showMonthYearDropdown is false', () => {
      // Act
      render(
        <DatePickerHeader {...defaultProps} showMonthYearDropdown={false} />
      );

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
