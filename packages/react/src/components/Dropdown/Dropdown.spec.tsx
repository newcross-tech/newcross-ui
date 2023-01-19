import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';
import Dropdown, { DropdownProps } from './Dropdown';

const baseTestId = 'dropdown';
const options = ['Option 1', 'Option 2', 'Option 3'];
const testID = '1';

const renderComponent = (customProps: Partial<DropdownProps>) => {
  const props = {
    options,
    label: 'Dropdown',
    placeholder: 'Click to open dropdown',
    testID,
    ...customProps,
  };

  render(<Dropdown {...props} />);
};

describe('Dropdown Component', () => {
  const ui = {
    label: byTestId(`${baseTestId}-label`),
    dropdownHeaderContainer: (testID: string) =>
      byTestId(`${baseTestId}-header-container-${testID}`),
    dropdownFocused: (testID: string) =>
      byTestId(`${baseTestId}-body-container-expanded-${testID}`),
    dropdownValue: (testID: string) =>
      byTestId(`${baseTestId}-value-${testID}`),
    dropdownMultiPillValue: (testID: string) =>
      byTestId(`${baseTestId}-multi-pill-value-${testID}`),
    dropdownMultiEmptyValue: (testID: string) =>
      byTestId(`${baseTestId}-multi-value-${testID}`),
    dropdownCheckboxOption: (option: string) =>
      byTestId(`${baseTestId}-checkbox-${option}`),
    dropdownPlaceholder: (testID: string) =>
      byTestId(`${baseTestId}-placeholder-${testID}`),
    errorText: (testID: string) =>
      byTestId(`${baseTestId}-error-text-${testID}`),
    clearIconContainer: byTestId(`${baseTestId}-clear-icon-container`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully with selected value', () => {
    // Act
    renderComponent({ selectedValue: 'Option 1' });

    // Assert
    expect(ui.dropdownValue(testID).get()).toBeInTheDocument();
  });

  it('renders successfully with error text', () => {
    // Act
    renderComponent({ errorText: 'Error' });

    // Assert
    expect(ui.errorText(testID).get()).toBeInTheDocument();
  });

  it('renders value as disabled', () => {
    // Act
    renderComponent({ disabled: true });

    // Assert
    expect(ui.label.get()).toBeInTheDocument();

    fireEvent.click(ui.dropdownHeaderContainer(testID).get());

    // Assert
    expect(ui.dropdownValue(testID).query()).not.toBeInTheDocument();
  });

  it('is focused when clicked', () => {
    // Act
    renderComponent({});

    fireEvent.click(ui.dropdownHeaderContainer(testID).get());

    // Assert
    expect(ui.dropdownFocused(testID).get()).toBeInTheDocument();
  });

  it('is not focused when is blured', () => {
    // Act
    renderComponent({});

    // Assert
    fireEvent.click(ui.dropdownHeaderContainer(testID).get());
    fireEvent.focus(ui.dropdownFocused(testID).get());
    fireEvent.blur(ui.dropdownFocused(testID).get());

    expect(ui.dropdownFocused(testID).query()).not.toBeInTheDocument();
  });

  it('when option selected value and clear icon appear', () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({ onChange });

    // Assert
    fireEvent.click(byText(/Option 1/i).get());

    // Assert
    expect(ui.dropdownValue(testID).get()).toBeInTheDocument();
    expect(ui.clearIconContainer.get()).toBeInTheDocument();

    expect(onChange).toHaveBeenCalled();
  });

  it('when option selected value and clear placeholder is reset', () => {
    // Act
    renderComponent({});

    // Assert
    fireEvent.click(byText(/Option 1/i).get());

    fireEvent.click(ui.clearIconContainer.get());

    // Assert
    expect(ui.dropdownPlaceholder(testID).get()).toBeInTheDocument();
  });

  it('select menu option when Spacebar is chosen', () => {
    // Act
    renderComponent({});

    // Assert
    executeKeyPress(ui.dropdownHeaderContainer(testID).get());

    executeKeyPress(ui.dropdownHeaderContainer(testID).get(), {
      key: 'Tab',
      code: 'Tab',
      charCode: 9,
    });

    executeKeyPress(byText(/Option 1/i).get());

    expect(ui.dropdownValue(testID).get()).toBeInTheDocument();
  });

  it('when option selected value for multi select header id changes', () => {
    //Act
    renderComponent({ isMulti: true });

    fireEvent.click(byText(/Option 1/i).get());

    // Assert
    expect(ui.dropdownMultiPillValue(testID).get()).toBeInTheDocument();
  });

  it('when default value for multi select when option is selected no value id is toggled', () => {
    // Arrange
    const optionValue = 'Option 1';

    // Act
    renderComponent({ selectedValue: [optionValue], isMulti: true });

    const option = ui.dropdownCheckboxOption(optionValue).get();

    fireEvent.click(option);

    // Assert empty selection
    expect(ui.dropdownMultiEmptyValue(testID).get()).toBeInTheDocument();

    fireEvent.click(option);

    // Assert multi select
    expect(ui.dropdownMultiPillValue(testID).get()).toBeInTheDocument();
  });
});
