import { render, screen, fireEvent } from '@testing-library/react';
import PhoneNumberInput, { PhoneNumberInputProps } from './PhoneNumberInput';

const renderComponent = (props: Partial<PhoneNumberInputProps> = {}) => {
  const defaultProps: PhoneNumberInputProps = {
    value: '',
    onChange: jest.fn(),
    disabled: false,
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
    const handleChange = jest.fn();
    renderComponent({ onChange: handleChange });

    // Act;
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '+441234567890' },
    });

    // Assert;
    expect(handleChange).toHaveBeenCalledWith('+441234567890');
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
});
