import { byTestId } from 'testing-library-selector';
import { render } from '@testing-library/react';
import { axe } from '../../../utils/test/axeConfig';
import { HelperText, HelperTextProps } from './HelperText';

describe.each([
  {
    testIdProp: (testId: string) => ({ testID: testId }),
    get renderComponent() {
      return (props?: Partial<HelperTextProps>) =>
        render(
          <HelperText
            helperText="This is a helper text"
            errorText=""
            disabled={false}
            maxLength={100}
            length={50}
            displayLength={true}
            {...this.testIdProp('helper-text')}
            {...props}
          />
        );
    },
    ui: {
      // weird type error... try calling the `byTestId` function directly and you'll see. If no error appears, please replace the `bind` call with normal one
      messageText: (testId: string) =>
        byTestId.bind(null, `${testId}-message-text`)(),
      maxLengthText: (testId: string) =>
        byTestId.bind(null, `textarea-max-length-${testId}`)(),
    },
  },
  {
    testIdProp: (testId: string) => ({ 'data-testid': testId }),
    get renderComponent() {
      return (props?: Partial<HelperTextProps>) =>
        render(
          <HelperText
            helperText="This is a helper text"
            errorText=""
            disabled={false}
            maxLength={100}
            length={50}
            displayLength={true}
            {...this.testIdProp('helper-text')}
            {...props}
          />
        );
    },
    ui: {
      messageText: (testId: string) =>
        byTestId.bind(null, `${testId}-helper-text-text`)(),
      maxLengthText: (testId: string) =>
        byTestId.bind(null, `${testId}-helper-text-max-length`)(),
    },
  },
])('HelperText Component', ({ renderComponent, ui, testIdProp }) => {
  it('should not have any a11y violations', async () => {
    // Arrange
    renderComponent();

    // Act
    const results = await axe(document.body);

    // Assert
    expect(results).toHaveNoViolations();
  });

  it('renders helper text when provided', () => {
    // Act
    renderComponent({ helperText: 'Helper message', ...testIdProp('test') });

    // Assert
    expect(ui.messageText('test').get()).toHaveTextContent('Helper message');
  });

  it('renders error text when provided', () => {
    // Act
    renderComponent({ errorText: 'Error message', ...testIdProp('test') });

    // Assert
    expect(ui.messageText('test').get()).toHaveTextContent('Error message');
  });

  it('displays character length when displayLength is true', () => {
    // Act
    renderComponent({
      displayLength: true,
      length: 75,
      maxLength: 100,
      ...testIdProp('test'),
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
      ...testIdProp('test'),
    });

    // Assert
    expect(ui.maxLengthText('test').query()).toBeNull();
  });

  it('renders with no text when neither helperText nor errorText is provided', () => {
    // Act
    renderComponent({ helperText: '', errorText: '', ...testIdProp('test') });

    // Assert
    expect(ui.messageText('test').query()).toBeNull();
  });

  it('renders correctly with no maxLength', () => {
    // Act
    renderComponent({
      displayLength: true,
      length: 50,
      maxLength: 0,
      ...testIdProp('test'),
    });

    // Assert
    expect(ui.maxLengthText('test').query()).toBeNull();
  });
});
