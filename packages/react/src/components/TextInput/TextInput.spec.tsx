import { fireEvent, render } from '@testing-library/react';
import { byPlaceholderText, byTestId, byText } from 'testing-library-selector';
import TextInput, { TextInputProps } from './TextInput';
import { axe } from '../../utils/test/axeConfig';
const renderComponent = (props: TextInputProps) => {
  const customProps = {
    type: 'text',
    placeholder: 'this is placeholder text',
    ...props,
  };

  render(<TextInput {...customProps} />);
};

const baseTestId = 'text-input';

describe('TextInput Component', () => {
  const ui = {
    label: byTestId(`${baseTestId}-label`),
    textInput: (testID: string) =>
      byTestId(`${baseTestId}-component-${testID}`),
    text: (regex: RegExp) => byText(regex),
    placeholder: (regex: RegExp) => byPlaceholderText(regex),
    container: byTestId(`${baseTestId}-container`),
    containerFocused: byTestId(`${baseTestId}-container-focused`),
    eyeIcon: byTestId(`${baseTestId}-eye-icon`),
    eyeSlash: byTestId(`${baseTestId}-eye-slash`),
    eye: byTestId(`${baseTestId}-eye`),
    validationCheck: byTestId(`${baseTestId}-validation-check`),
    messageText: byTestId(`${baseTestId}-message-text`),
  };

  it('should not have any a11y errors', async () => {
    // Arrange
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.textInput(testID).get()).toBeTruthy();
  });

  it('displays the placeholder successfully', () => {
    // Arrange
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    fireEvent.change(ui.textInput(testID).get(), { target: { value: 't' } });

    // Assert
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('show/hide password eye icon successfully when `password` type is selected and pressed', () => {
    // Arrange
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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

  it('displays label successfully', () => {
    // Arrange
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
      value: 'test',
      type: 'text',
      label: 'This is the label',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.label.get()).toBeTruthy();
    expect(ui.text(/This is the label/i).get()).toBeTruthy();
  });

  it('displays helper text successfully', () => {
    // Arrange
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
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
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
      value: 'test',
      type: 'text',
      disabled: true,
      onChange,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.textInput(testID).get()).toBeTruthy();
  });

  it('focuses the text input and testing for id existence', () => {
    // Arrange
    const testID = '1';
    const onChange = jest.fn();
    const props: TextInputProps = {
      testID,
      value: 'test',
      type: 'text',
      onChange,
    };

    // Act
    renderComponent({ ...props });

    const input = ui.textInput(testID).get();
    fireEvent.click(input);

    // Assert
    const containerFocused = ui.containerFocused.get();
    expect(containerFocused).toBeTruthy();

    fireEvent.focus(input);
    expect(containerFocused).toBeTruthy();

    fireEvent.blur(input);
    expect(ui.container.get()).toBeTruthy();
  });
});

describe('SearchBar Component', () => {
  const ui = {
    searchIcon: byTestId(`${baseTestId}-search-icon`),
    searchCloseIcon: byTestId(`${baseTestId}-search-close-icon`),
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
    render(<TextInput {...props} />);

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
    render(<TextInput {...props} />);

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
    render(<TextInput {...props} />);

    // Assert
    expect(ui.searchCloseIcon.get()).toBeTruthy();
  });

  it('triggers an onPress when onClose is pressed', () => {
    // Arrange
    const onClose = jest.fn();
    const props: TextInputProps = {
      testID: `${baseTestId}-component`,
      value: 'I am search for ...',
      onChange: jest.fn(),
      search: true,
      onClose,
    };

    // Act
    render(<TextInput {...props} />);
    fireEvent.click(ui.searchCloseIcon.get());

    // Assert
    expect(onClose).toBeCalled();
  });
});
