import { render, screen, fireEvent } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import PhoneNumberInput, { PhoneNumberInputProps } from './PhoneNumberInput';

const testID = 'phone-input-1';

const handleChange = jest.fn();
const renderComponent = (customProps?: Partial<PhoneNumberInputProps>) => {
  const props: PhoneNumberInputProps = {
    value: '',
    onChange: handleChange,
    disabled: false,
    defaultCountry: 'gb',
    testID,
    ...customProps,
  };

  render(<PhoneNumberInput {...props} />);
};

describe('PhoneNumberInput Component', () => {
  const ui = {
    phoneInput: byTestId(`phone-input-component-${testID}`),
    validationIcon: byTestId(
      `phone-input-component-${testID}-validation-check`
    ),
    errorIcon: byTestId(`phone-input-component-${testID}-error-check`),
    clearIcon: byTestId(`phone-input-component-${testID}-clear-icon`),
  };

  it('renders successfully', () => {
    // Act
    renderComponent();

    // Assert
    expect(ui.phoneInput.get()).toBeInTheDocument();
  });

  it('renders with the correct value', () => {
    // Arrange
    const phoneValue = '+44 1234 567890';

    // Act
    renderComponent({ value: phoneValue });

    // Assert
    expect(screen.getByRole('textbox')).toHaveValue(phoneValue);
  });

  it('calls onChange when the phone number is changed', () => {
    // Act
    renderComponent();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '441234567890' },
    });

    // Assert
    expect(handleChange).toHaveBeenCalledWith(
      '+441234567890',
      expect.any(Object)
    );
  });

  it('disables the input when the disabled prop is true', () => {
    // Act
    renderComponent({ disabled: true });

    // Assert
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('enables the input when the disabled prop is false', () => {
    // Act
    renderComponent({ disabled: false });

    // Assert
    expect(screen.getByRole('textbox')).toBeEnabled();
  });

  it('renders helper text when helperText prop is passed', () => {
    // Act
    renderComponent({ helperText: 'Enter your phone number' });

    // Assert
    expect(screen.getByText('Enter your phone number')).toBeInTheDocument();
  });

  it('renders error text when isError is true', () => {
    // Act
    renderComponent({ isError: true, helperText: 'Invalid phone number' });

    // Assert
    expect(screen.getByText('Invalid phone number')).toBeInTheDocument();
  });

  it('shows validation icon when input is valid', () => {
    // Act
    renderComponent({ isValid: true, isError: false });

    // Assert
    expect(ui.validationIcon.get()).toBeInTheDocument();
  });

  it('shows error icon when input has error', () => {
    // Act
    renderComponent({ isError: true, isValid: false });

    // Assert
    expect(ui.errorIcon.get()).toBeInTheDocument();
  });

  it('shows clear icon on focus and allows clearing input', () => {
    // Arrange
    renderComponent({ value: '123456789' });

    // Act
    fireEvent.focus(screen.getByRole('textbox'));

    // Assert
    expect(ui.clearIcon.get()).toBeInTheDocument();

    // Act (Clear the input)
    fireEvent.click(ui.clearIcon.get());

    // Assert
    expect(handleChange).toHaveBeenCalledWith('', expect.any(Object));
  });

  it('hides validation and error icons when input is focused', () => {
    // Arrange
    renderComponent({ isValid: true, isError: true });

    // Act
    fireEvent.focus(screen.getByRole('textbox'));

    // Assert
    expect(ui.validationIcon.query()).toBeNull();
    expect(ui.errorIcon.query()).toBeNull();
  });

  it('updates focus state when input gains or loses focus', () => {
    // Act
    renderComponent();

    // Assert (Initially, clear icon should not be visible)
    expect(ui.clearIcon.query()).toBeNull();

    // Act (Focus input)
    fireEvent.focus(screen.getByRole('textbox'));

    // Assert (Clear icon appears)
    expect(ui.clearIcon.get()).toBeInTheDocument();

    // Act (Blur input)
    fireEvent.blur(screen.getByRole('textbox'));

    // Assert (Clear icon disappears)
    expect(ui.clearIcon.query()).toBeNull();
  });
});
