import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';
import Dropdown, { DropdownProps } from './Dropdown';
import { within } from '@storybook/testing-library';

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

  it('renders successfully with selected value and triggers onChange', () => {
    // Arrange
    const optionValue = 'Option 1';
    const onChange = jest.fn();
    // Act
    renderComponent({ onChange, selectedValue: optionValue });

    // Assert
    expect(ui.dropdownValue(testID).get()).toBeVisible();

    fireEvent.click(ui.dropdownHeaderContainer(testID).get());

    const bodyContainer = ui.dropdownFocused(testID).get();
    const menuOption = within(bodyContainer).getByText(optionValue);
    fireEvent.click(menuOption);
    expect(onChange).toHaveBeenCalledWith(optionValue);
  });

  it('renders successfully with error text', () => {
    // Act
    renderComponent({ errorText: 'Error' });

    // Assert
    expect(ui.errorText(testID).get()).toBeVisible();
  });

  it('renders value as disabled', () => {
    // Act
    renderComponent({ disabled: true });

    // Assert
    expect(ui.label.get()).toBeVisible();

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
    expect(ui.dropdownValue(testID).get()).toBeVisible();
    expect(ui.clearIconContainer.get()).toBeVisible();

    expect(onChange).toHaveBeenCalled();
  });

  it('when option selected value and clear placeholder is reset', () => {
    // Act
    renderComponent({});

    // Assert
    fireEvent.click(byText(/Option 1/i).get());

    fireEvent.click(ui.clearIconContainer.get());

    // Assert
    expect(ui.dropdownPlaceholder(testID).get()).toBeVisible();
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

    expect(ui.dropdownValue(testID).get()).toBeVisible();
  });

  it('when option selected value for multi select header id changes', () => {
    //Act
    renderComponent({ variant: 'multi' });

    fireEvent.click(byText(/Option 1/i).get());

    // Assert
    expect(ui.dropdownMultiPillValue(testID).get()).toBeVisible();
  });

  it('when default value for multi select when option is selected no value id is toggled', () => {
    // Arrange
    const optionValue = 'Option 1';
    const onChange = jest.fn();

    // Act
    renderComponent({
      selectedValue: [optionValue],
      variant: 'multi',
      onChange,
    });

    const option = ui.dropdownCheckboxOption(optionValue).get();

    fireEvent.click(option);

    // Assert empty selection
    expect(ui.dropdownMultiEmptyValue(testID).get()).toBeVisible();

    fireEvent.click(option);

    // Assert multi select
    expect(ui.dropdownMultiPillValue(testID).get()).toBeVisible();
    expect(onChange).toHaveBeenCalledWith([optionValue]);
  });
});
