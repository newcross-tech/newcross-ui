import { byTestId, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';
import Select from './Select';

const defaultProps = {
  id: 'select',
  options: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ],
};

const ui = {
  selectComponent: byTestId('select-component'),
  selectLabel: byTestId('select-label'),
  selectCrossicon: byTestId('crossicon'),
  selectRequiredIndicator: byTestId('select-label-required-indicator'),
  selectHelperText: byTestId('select-helper-text-message-text'),
};

describe('Select', () => {
  it('renders successfully', () => {
    // Arrange & Act
    render(<Select {...defaultProps} label={'Select Label'} />);

    // Assert
    expect(ui.selectLabel.get()).toBeVisible();
  });

  it('should call onChange on option click', async () => {
    // Arrange
    const onChange = jest.fn();
    const { getByText } = render(
      <Select
        {...defaultProps}
        helperText={'Error Text'}
        isMulti
        onChange={onChange}
      />
    );

    // Act
    userEvent.click(getByText('Select...'));
    await waitFor(() => expect(getByText('2')).toBeVisible());
    userEvent.click(getByText('2'));
    await waitFor(() => {
      expect(byText('1').query()).not.toBeInTheDocument();
    });
    userEvent.click(ui.selectCrossicon.get());

    // Assert
    await waitFor(() => {
      expect(byText('2').query()).not.toBeInTheDocument();
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should render required indicator', () => {
    // Arrange & Act
    render(<Select {...defaultProps} label="test" required />);

    // Assert
    expect(ui.selectRequiredIndicator.get()).toBeVisible();
  });

  it('should render error text', () => {
    // Arrange & Act
    render(<Select {...defaultProps} hasError errorText="Error Text" />);

    // Assert
    expect(ui.selectHelperText.get()).toHaveTextContent('Error Text');
  });

  it('should render helper text', () => {
    // Arrange & Act
    render(<Select {...defaultProps} helperText="Helper Text" />);

    // Assert
    expect(ui.selectHelperText.get()).toHaveTextContent('Helper Text');
  });

  it('renders the label with "dangerError" color when hasError is true', () => {
    // Arrange & Act
    render(
      <Select {...defaultProps} label="test" hasError errorText="Error Text" />
    );

    // Assert
    expect(ui.selectLabel.get()).toHaveStyle({ color: 'dangerError' });
  });

  it('renders the label with "disabled" color when disabled is true', () => {
    // Arrange & Act
    render(<Select {...defaultProps} label="test" disabled />);

    // Assert
    expect(ui.selectLabel.get()).toHaveStyle({ color: 'disabled' });
  });
});
