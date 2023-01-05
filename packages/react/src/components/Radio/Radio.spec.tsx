import { fireEvent, render } from '@testing-library/react';
import Radio, { RadioProps } from './Radio';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';

const renderComponent = (customProps: Partial<RadioProps>) => {
  const props = {
    label: 'Hello',
    ...customProps,
  };

  render(<Radio {...props} />);
};

const testID = '1';
const baseTestId = 'radio';

describe('Radio', () => {
  const ui = {
    text: (regex: RegExp) => byText(regex),
    radio: (testID: string) => byTestId(`${baseTestId}-input-${testID}`),
    radioLabel: byTestId(`${baseTestId}-label`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
  it('renders with given label and default view', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.text(/hello/i).get()).toBeInTheDocument();
    expect(ui.radioLabel.get()).toBeInTheDocument();
  });

  it(`calls onChange when radio component is not disabled`, () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({ testID, disabled: false, onChange });

    fireEvent.click(ui.radio(testID).get());

    // Assert
    expect(onChange).toBeCalled();
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

    fireEvent.click(ui.radio(testID).get());

    // Assert
    expect(onChange).not.toBeCalled();
  });
});
