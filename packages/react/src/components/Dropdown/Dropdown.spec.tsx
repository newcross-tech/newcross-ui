import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { byTestId, byText } from 'testing-library-selector';
import { axe, executeKeyPress } from '../../../testUtils';
import Dropdown, { DropdownProps } from './Dropdown';

const baseTestId = 'dropdown';
const options = ['Option 1', 'Option 2', 'Option 3'];

describe('Dropdown Component', () => {
  const ui = {
    label: byTestId(`${baseTestId}-label`),
    dropdownHeaderContainer: (testID: string) =>
      byTestId(`${baseTestId}-header-container-${testID}`),
    dropdownFocused: (testID: string) =>
      byTestId(`${baseTestId}-body-container-expanded-${testID}`),
    text: (regex: RegExp) => byText(regex),
    dropdownValue: (testID: string) =>
      byTestId(`${baseTestId}-value-${testID}`),
    dropdownPlaceholder: (testID: string) =>
      byTestId(`${baseTestId}-placeholder-${testID}`),
    errorText: (testID: string) =>
      byTestId(`${baseTestId}-error-text-${testID}`),
    clearIconContainer: byTestId(`${baseTestId}-clear-icon-container`),
  };

  it('should not have any a11y errors', async () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      placeholder: 'Click to open dropdown',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully with placeholder', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      placeholder: 'Click to open dropdown',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    expect(ui.dropdownPlaceholder(testID).get()).toBeInTheDocument();
  });

  it('renders successfully with selected value', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      selectedValue: 'Option 1',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    expect(ui.dropdownValue(testID).get()).toBeInTheDocument();
  });

  it('renders successfully with error text', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      errorText: 'Error',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    expect(ui.errorText(testID).get()).toBeInTheDocument();
  });

  it('renders successfully as disabled', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      disabled: true,
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    expect(ui.label.get()).toBeInTheDocument();
  });

  it('renders value as disabled', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      disabled: true,
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    expect(ui.label.get()).toBeInTheDocument();

    fireEvent.click(ui.dropdownHeaderContainer(testID).get());

    // Assert
    expect(ui.dropdownValue(testID).query()).not.toBeInTheDocument();
  });

  it('is focused when clicked', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    fireEvent.click(ui.dropdownHeaderContainer(testID).get());

    // Assert
    expect(ui.dropdownFocused(testID).get()).toBeInTheDocument();
  });

  it('when option selected value and clear icon appear', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    fireEvent.click(ui.text(/Option 1/i).get());

    // Assert
    expect(ui.dropdownValue(testID).get()).toBeInTheDocument();
    expect(ui.clearIconContainer.get()).toBeInTheDocument();
  });

  it('when option selected value and clear placeholder is reset', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    fireEvent.click(ui.text(/Option 1/i).get());

    fireEvent.click(ui.clearIconContainer.get());

    // Assert
    expect(ui.dropdownPlaceholder(testID).get()).toBeInTheDocument();
  });

  it('toggles menu options when Spacebar', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    executeKeyPress(ui.dropdownHeaderContainer(testID).get());

    expect(ui.dropdownFocused(testID).get()).toBeInTheDocument();
  });

  it('select menu option when Spacebar is chosen', () => {
    // Arrange
    const testID = '1';
    const props: DropdownProps = {
      options,
      label: 'Dropdown',
      testID,
    };

    // Act
    render(<Dropdown {...props} />);

    // Assert
    executeKeyPress(ui.dropdownHeaderContainer(testID).get());

    executeKeyPress(ui.dropdownHeaderContainer(testID).get(), {
      key: 'Tab',
      code: 'Tab',
      charCode: 9,
    });

    executeKeyPress(ui.text(/Option 1/i).get());

    expect(ui.dropdownValue(testID).get()).toBeInTheDocument();
  });
});
