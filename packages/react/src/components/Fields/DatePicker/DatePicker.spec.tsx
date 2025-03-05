import { render, screen } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import DatePicker, { DatePickerProps } from './DatePicker';

describe('DatePicker', () => {
  const defaultDate = new Date('2025-02-21T00:00:00'); // February 21, 2025
  const testID = 'test-1';
  const defaultProps: DatePickerProps = {
    label: 'Test DatePicker Label',
    helperText: 'Test helper text',
    errorText: '',
    onChange: jest.fn(),
    testID: testID,
  };

  const renderComponent = (overrideProps?: Partial<DatePickerProps>) => {
    const props = { ...defaultProps, ...overrideProps };
    return render(<DatePicker {...props} />);
  };

  const ui = {
    textInput: byTestId(`text-input-component-date-picker-${testID}`),
    messageText: byTestId(`date-picker-${testID}-message-text`),
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
      onChange: jest.fn(),
    });
    const inputElement = ui.textInput.get() as HTMLInputElement;
    const inputValue = inputElement.value;
    // Assert
    expect(inputValue).toBe('21/02/2025 - 21/02/2025');
  });

  it('renders single date picker if selectsRange is false', () => {
    // Act
    renderComponent({ selected: defaultDate });
    const inputElement = ui.textInput.get() as HTMLInputElement;
    const inputValue = inputElement.value;
    // Assert
    expect(inputValue).toBe('21/02/2025');
  });
});
