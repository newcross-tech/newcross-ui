import { render, screen, fireEvent } from '@testing-library/react';
import PhoneNumberInput, { PhoneNumberInputProps } from './PhoneNumberInput';

const handleChange = jest.fn();
const renderComponent = (props: Partial<PhoneNumberInputProps> = {}) => {
  const defaultProps: PhoneNumberInputProps = {
    value: '',
    onChange: handleChange,
    disabled: false,
    defaultCountry: 'gb',
    ...props,
  };

  return render(<PhoneNumberInput {...defaultProps} />);
};

describe('PhoneNumberInput Component', () => {
  it('should render the PhoneNumberInput component correctly', () => {
    // Arrange;
    renderComponent();

    // Act;
    const textbox = screen.getByRole('textbox');

    // Assert;
    expect(textbox).toBeInTheDocument();
  });

  it('should call onChange when the phone number is changed', () => {
    // Arrange;
    renderComponent();

    // Act;
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '441234567890' },
    });

    // Assert;
    expect(handleChange).toHaveBeenCalledWith(
      '+441234567890',
      expect.any(Object)
    );
  });

  it('should render with the correct value', () => {
    // Arrange;
    const phoneValue = '+44 1234 567890';
    renderComponent({ value: phoneValue });

    // Act;
    const textbox = screen.getByRole('textbox');

    // Assert;
    expect(textbox).toHaveValue(phoneValue);
  });

  it('should disable the input when the disabled prop is true', () => {
    // Arrange;
    renderComponent({ disabled: true });

    //  Act;
    const textbox = screen.getByRole('textbox');

    // Assert;
    expect(textbox).toBeDisabled();
  });

  it('should enable the input when the disabled prop is false', () => {
    // Arrange;
    renderComponent({ disabled: false });

    //  Act;
    const textbox = screen.getByRole('textbox');

    //  Assert;
    expect(textbox).toBeEnabled();
  });
  it('should render error message when error prop is passed', () => {
    // Arrange;
    renderComponent({ helperText: 'Invalid phone number', isError: true });

    // Act;
    const errorMessage = screen.getByText('Invalid phone number');

    // Assert;
    expect(errorMessage).toBeInTheDocument();
  });
  it('should render helper text when helperText prop is passed', () => {
    // Arrange;
    renderComponent({ helperText: 'Enter your phone number' });

    // Act;
    const helperText = screen.getByText('Enter your phone number');

    // Assert;
    expect(helperText).toBeInTheDocument();
  });
});
