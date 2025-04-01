import { render, screen } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import Calendar, { CalendarProps } from './Calendar';

describe('Calendar', () => {
  const defaultDate = new Date('2025-02-21T00:00:00'); // February 21, 2025
  const testID = 'test-1';

  const renderComponent = (overrideProps?: Partial<CalendarProps>) => {
    return render(
      <Calendar
        label="Test Calendar Label"
        helperText="Test helper text"
        onChange={jest.fn()}
        testID={testID}
        {...(overrideProps as CalendarProps)}
      />
    );
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
    expect(screen.getByText('Test Calendar Label')).toBeInTheDocument();
  });

  it('does not render label if label prop is undefined', () => {
    // Act
    renderComponent({ label: undefined });

    // Assert
    expect(screen.queryByText('Test Calendar Label')).toBeNull();
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
