import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { byPlaceholderText, byTestId, byText } from 'testing-library-selector';
import TextInput, { TextInputProps } from './TextInput';
import { axe } from '../../utils/test/axeConfig';

const testID = '1';
const renderComponent = (props: TextInputProps) => {
  const customProps: TextInputProps = {
    testID,
    type: 'text',
    placeholder: 'this is placeholder text',
    ...props,
  };

  render(<TextInput {...customProps} />);
};

const baseTestId = 'text-input';

const getCoreTestId = () => `${baseTestId}-component-${testID}`;

const getAdjustedByTestId = (suffix: string) =>
  byTestId(`${getCoreTestId()}-${suffix}`);

describe('TextInput Component', () => {
  const ui = {
    label: getAdjustedByTestId('label'),
    textInput: byTestId(getCoreTestId()),
    placeholder: (regex: RegExp) => byPlaceholderText(regex),
    container: getAdjustedByTestId('container'),
    containerFocused: getAdjustedByTestId('container-focused'),
    eyeIcon: getAdjustedByTestId('eye-icon'),
    eyeSlash: getAdjustedByTestId('eye-slash'),
    eye: getAdjustedByTestId('eye'),
    validationCheck: getAdjustedByTestId('validation-check'),
    errorCheck: getAdjustedByTestId('error-check'),
    messageText: getAdjustedByTestId('message-text'),
    requiredIndicator: getAdjustedByTestId('required-indicator'),
    clearIcon: getAdjustedByTestId('clear-icon'),
  };

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

    fireEvent.change(ui.textInput.get(), { target: { value: 't' } });

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
    fireEvent.click(eyeIcon); // make password visible
    fireEvent.click(eyeIcon); // hide password

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
    fireEvent.click(eyeIcon); // make password visible

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
    fireEvent.click(eyeIcon); // make password visible
    fireEvent.click(eyeIcon); // hide password

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

  it('focuses the text input and testing for id existence', () => {
    // Arrange
    const onChange = jest.fn();
    const props: TextInputProps = {
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    const input = ui.textInput.get();
    fireEvent.click(input);

    // Assert
    const containerFocused = ui.containerFocused.get();
    expect(containerFocused).toBeTruthy();

    fireEvent.focus(input);
    expect(containerFocused).toBeTruthy();

    fireEvent.blur(input);
    expect(ui.container.get()).toBeTruthy();
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
});

describe('SearchBar Component', () => {
  const ui = {
    searchIcon: getAdjustedByTestId('search-icon'),
    searchCloseIcon: getAdjustedByTestId('search-close-icon'),
  };

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
    fireEvent.click(ui.searchCloseIcon.get());

    // Assert
    expect(onClose).toBeCalled();
  });
});
