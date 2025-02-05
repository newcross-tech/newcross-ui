import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio, { RadioProps } from './Radio';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../../utils/test/axeConfig';
import { executeKeyPress } from '../../../utils/test';

const TEST_OPTION = {
  Value1: 1,
  Value2: 2,
} as const;
type TestOption = typeof TEST_OPTION[keyof typeof TEST_OPTION];

const renderComponent = (overrides?: Partial<RadioProps<TestOption>>) =>
  render(<Radio value={TEST_OPTION.Value1} label="Hello" {...overrides} />);

const testID = '1';
const baseTestId = 'radio';

describe('Radio', () => {
  const ui = {
    radio: (testID: string) => byTestId(`${baseTestId}-input-${testID}`),
    radioLabel: byTestId(`${baseTestId}-label`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent();

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
  it('renders with given label and default view', () => {
    // Act
    renderComponent();

    // Assert
    expect(byText(/hello/i).get()).toBeVisible();
    expect(ui.radioLabel.get()).toBeVisible();
  });

  it('renders when passing a ReactNode in label', () => {
    //Arrange
    const Label = () => <div data-testid="custom-label-item">Label</div>;

    //Act
    renderComponent({ label: <Label /> });

    //Assert
    expect(byTestId('custom-label-item').get()).toBeVisible();
  });

  it(`calls onChange when radio component is not disabled`, () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({
      testID,
      disabled: false,
      onChange,
      value: TEST_OPTION.Value2,
    });

    userEvent.click(ui.radio(testID).get());

    // Assert
    expect(onChange).toBeCalledWith(TEST_OPTION.Value2);
  });

  it(`calls onChange when radio component is not disabled when Spacebar`, () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({ testID, disabled: false, onChange });

    executeKeyPress(ui.radio(testID).get());

    // Assert
    expect(onChange).toBeCalled();
  });

  it(`doesn't call onChange when radio component is disabled`, () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({ testID, disabled: true, onChange });

    userEvent.click(ui.radio(testID).get());

    // Assert
    expect(onChange).not.toBeCalled();
  });
});
