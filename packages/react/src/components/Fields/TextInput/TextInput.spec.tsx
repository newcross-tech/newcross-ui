import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { byPlaceholderText, byTestId, byText } from 'testing-library-selector';
import { axe } from '../../../utils/test/axeConfig';
import { TextInput, TextInputProps } from '.';

describe.each([
  {
    renderComponent: (props?: Partial<TextInputProps>) => {
      render(
        <TextInput
          type="text"
          placeholder="this is placeholder text"
          testID="1"
          {...props}
        />
      );
    },
    ui: {
      label: byTestId('text-input-component-1-label'),
      textInput: byTestId('text-input-component-1'),
      placeholder: byPlaceholderText,
      eyeIcon: byTestId('text-input-component-1-eye-icon'),
      eyeSlash: byTestId('text-input-component-1-eye-slash'),
      eye: byTestId('text-input-component-1-eye'),
      validationCheck: byTestId('text-input-component-1-validation-check'),
      errorCheck: byTestId('text-input-component-1-error-check'),
      messageText: byTestId('text-input-component-1-message-text'),
      requiredIndicator: byTestId(
        'text-input-component-1-label-required-indicator'
      ),
      clearIcon: byTestId('text-input-component-1-clear-icon'),
      searchIcon: byTestId('text-input-component-1-search-icon'),
      searchCloseIcon: byTestId('text-input-component-1-search-close-icon'),
    },
  },
  {
    renderComponent: (props?: Partial<TextInputProps>) => {
      render(
        <TextInput
          type="text"
          placeholder="this is placeholder text"
          data-testid="1"
          {...props}
        />
      );
    },
    ui: {
      label: byTestId('1-text-input-label'),
      textInput: byTestId('1-text-input-input'),
      placeholder: byPlaceholderText,
      eyeIcon: byTestId('1-text-input-password-visibility'),
      eyeSlash: byTestId('1-text-input-password-visible-icon'),
      eye: byTestId('1-text-input-password-hidden-icon'),
      validationCheck: byTestId('1-text-input-valid'),
      errorCheck: byTestId('1-text-input-error'),
      messageText: byTestId('1-text-input-helper-text'),
      requiredIndicator: byTestId('1-text-input-label-label-required'),
      clearIcon: byTestId('1-text-input-clear'),
      searchIcon: byTestId('1-text-input-search'),
      searchCloseIcon: byTestId('1-text-input-search-close'),
    },
  },
])('TextInput Component', ({ renderComponent, ui }) => {
  it('should not have any a11y errors', async () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      label: 'TextField',
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.textInput.get()).toBeTruthy();
  });

  it('displays the placeholder successfully', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.placeholder(/this is placeholder text/i).get()).toBeTruthy();
  });

  it('calls onChange when input value changes', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    userEvent.type(ui.textInput.get(), 't');

    // Assert
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('show/hide password eye icon successfully when `password` type is selected and pressed', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'password',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    const eyeIcon = ui.eyeIcon.get();
    userEvent.click(eyeIcon); // make password visible
    userEvent.click(eyeIcon); // hide password

    // Assert
    expect(eyeIcon).toBeTruthy();
  });

  it('cannot toggle show/hide password eye icon successfully when `password` type and disabled', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'password',
      disabled: true,
      onChange,
    };

    // Act
    renderComponent({ ...props });

    const eyeIcon = ui.eyeIcon.get();
    userEvent.click(eyeIcon); // make password visible

    // Assert
    expect(ui.eyeSlash.query()).not.toBeInTheDocument();
  });

  it('similar to previous test but with a different textContentType - `newPassword` type is selected and eye icon is pressed', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'password',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    const eyeIcon = ui.eyeIcon.get();
    userEvent.click(eyeIcon); // make password visible
    userEvent.click(eyeIcon); // hide password

    // Assert
    expect(eyeIcon).toBeTruthy();
  });

  it('shows the validation check mark when isValid is true', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'password',
      isValid: true,
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.validationCheck.get()).toBeTruthy();
  });

  it('shows the error check mark when errorText is passed', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'password',
      errorText: 'this is an error',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.errorCheck.get()).toBeTruthy();
  });

  it('displays label successfully', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      label: 'This is the label',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.label.get()).toBeTruthy();
    expect(byText(/This is the label/i).get()).toBeTruthy();
  });

  it('displays helper text successfully', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      helperText: 'this is helper text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.messageText.get()).toBeTruthy();
  });

  it('displays error text successfully - errorText is true', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      errorText: 'this is helper text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.messageText.get()).toBeTruthy();
  });

  it('renders a text input that is disabled when the disabled prop is passed', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      disabled: true,
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.textInput.get()).toBeTruthy();
  });

  it('interaction focuses the text input', () => {
    // region Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      onChange,
    };
    renderComponent({ ...props });
    // endregion

    // region Act
    const input = ui.textInput.get();
    userEvent.click(input);
    // endregion

    // region Assert
    expect(input).toHaveFocus();
    // endregion
  });

  it('unfocuses input on blur', () => {
    // region Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      onChange,
    };
    renderComponent({ ...props });

    const input = ui.textInput.get();
    userEvent.click(input);
    // endregion

    // region Act
    userEvent.tab();
    userEvent.click(document.body);
    // endregion

    // region Assert
    expect(input).not.toHaveFocus();
    // endregion
  });

  it('should render required indicator when required prop is passed', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      label: 'TextField',
      required: true,
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.requiredIndicator.get()).toBeTruthy();
  });

  it('clears the input field when clear icon is clicked', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'some text',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    const input = ui.textInput.get();
    fireEvent.focus(input);

    const clearIcon = ui.clearIcon.get();
    userEvent.click(clearIcon);

    // Assert
    expect(onChange).toHaveBeenCalledWith('');
  });

  it('renders subtitle when provided', () => {
    // Arrange
    const props: TextInputProps = {
      subtitle: 'This is a subtitle',
      type: 'text',
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(byText(/This is a subtitle/i).get()).toBeTruthy();
  });

  it('renders the label with "disabled" color when disabled is true', () => {
    // Arrange
    const props: TextInputProps = {
      label: 'Test Label',
      disabled: true,
      type: 'text',
    };

    // Act
    renderComponent({ ...props });

    const label = ui.label.get();

    // Assert
    expect(label).toHaveStyle({ color: 'disabled' });
  });

  it('renders the label with "dangerError" color when hasError is true', () => {
    // Arrange
    const props: TextInputProps = {
      label: 'Test Label',
      errorText: 'This is an error',
      type: 'text',
    };

    // Act
    renderComponent({ ...props });

    const label = ui.label.get();

    // Assert
    expect(label).toHaveStyle({ color: 'dangerError' });
  });

  describe('SearchBar', () => {
    it('should not have any a11y errors', async () => {
      // Arrange
      const props: TextInputProps = {
        value: '',
        label: 'TextField',
        onChange: jest.fn(),
        search: true,
        onClose: jest.fn(),
      };

      // Act
      renderComponent({ ...props });

      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('displays text input as a search bar component when search prop is passed', () => {
      // Arrange
      const props: TextInputProps = {
        value: '',
        onChange: jest.fn(),
        search: true,
        onClose: jest.fn(),
      };

      // Act
      renderComponent({ ...props });

      // Assert
      expect(ui.searchIcon.get()).toBeTruthy();
    });

    it('displays close icon when search bar value is not empty', () => {
      // Arrange
      const props: TextInputProps = {
        value: 'I am search for ...',
        onChange: jest.fn(),
        search: true,
        onClose: jest.fn(),
      };

      // Act
      renderComponent({ ...props });

      // Assert
      expect(ui.searchCloseIcon.get()).toBeTruthy();
    });

    it('triggers an onPress when onClose is pressed', () => {
      // Arrange
      const onClose = jest.fn();
      const props: TextInputProps = {
        value: 'I am search for ...',
        onChange: jest.fn(),
        search: true,
        onClose,
      };

      // Act
      renderComponent({ ...props });
      userEvent.click(ui.searchCloseIcon.get());

      // Assert
      expect(onClose).toBeCalled();
    });
  });
});
