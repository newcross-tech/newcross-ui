import { render } from '@testing-library/react';
import HelperText, { HelperTextProps } from './HelperText';
import { axe } from '../../../utils/test/axeConfig';
import { byTestId } from 'testing-library-selector';

const renderComponent = (customProps: Partial<HelperTextProps>) => {
  const props = {
    helperText: 'This is a helper text',
    errorText: '',
    disabled: false,
    maxLength: 100,
    length: 50,
    displayLength: true,
    testID: 'helper-text',
    ...customProps,
  };

  render(<HelperText {...props} />);
};

describe('HelperText Component', () => {
  const ui = {
    messageText: (testID: string) => byTestId(`${testID}-message-text`),
    maxLengthText: (testID: string) =>
      byTestId(`textarea-max-length-${testID}`),
  };

  it('should not have any a11y violations', async () => {
    // Arrange
    renderComponent({});

    // Act
    const results = await axe(document.body);

    // Assert
    expect(results).toHaveNoViolations();
  });

  it('renders helper text when provided', () => {
    // Act
    renderComponent({ helperText: 'Helper message', testID: 'test' });

    // Assert
    expect(ui.messageText('test').get()).toHaveTextContent('Helper message');
  });

  it('renders error text when provided', () => {
    // Act
    renderComponent({ errorText: 'Error message', testID: 'test' });

    // Assert
    expect(ui.messageText('test').get()).toHaveTextContent('Error message');
  });

  it('displays character length when displayLength is true', () => {
    // Act
    renderComponent({
      displayLength: true,
      length: 75,
      maxLength: 100,
      testID: 'test',
    });

    // Assert
    expect(ui.maxLengthText('test').get()).toHaveTextContent('75/100');
  });

  it('does not display character length when displayLength is false', () => {
    // Act
    renderComponent({
      displayLength: false,
      length: 75,
      maxLength: 100,
      testID: 'test',
    });

    // Assert
    expect(ui.maxLengthText('test').query()).toBeNull();
  });

  it('renders with no text when neither helperText nor errorText is provided', () => {
    // Act
    renderComponent({ helperText: '', errorText: '', testID: 'test' });

    // Assert
    expect(ui.messageText('test').query()).toBeNull();
  });

  it('renders correctly with no maxLength', () => {
    // Act
    renderComponent({
      displayLength: true,
      length: 50,
      maxLength: 0,
      testID: 'test',
    });

    // Assert
    expect(ui.maxLengthText('test').query()).toBeNull();
  });
});
