import { fireEvent, render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';
import Checkbox, { CheckboxProps } from './Checkbox';
import { CheckboxType } from './Checkbox.types';
import React from 'react';

const defaultProps = {
  label: 'Label',
  testID: 'checkbox-component',
};

const renderComponent = (customProps: Partial<CheckboxProps>) => {
  const props = {
    ...defaultProps,
    ...customProps,
  };

  render(<Checkbox {...props} />);
};
const baseTestId = 'checkbox';

describe('Checkbox Component', () => {
  const ui = {
    checkbox: byTestId(`${baseTestId}-component`),
    checkboxBox: byTestId(`${baseTestId}-box`),
    checkboxIcon: byTestId(`checkmark-icon`),
    checkboxIndeterIcon: byTestId(`indeterminate-icon`),
    checkboxLabel: byTestId(`${baseTestId}-label`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.checkbox.get()).toBeInTheDocument();
  });

  it('renders indeterminate checkbox successfully', () => {
    // Act
    renderComponent({ checked: true, type: CheckboxType.INDETERMINATE });

    // Assert
    expect(ui.checkboxIndeterIcon.get()).toBeInTheDocument();
  });

  it('renders a checkbox with a default checkmark successfully', () => {
    // Act
    renderComponent({ checked: true });

    // Assert
    expect(ui.checkboxIcon.get()).toBeInTheDocument();
  });

  it('fires an onClick event to check the checkbox successfully', () => {
    // Act
    renderComponent({ checked: false });

    fireEvent.click(ui.checkbox.get());

    // Assert
    expect(ui.checkboxIcon.get()).toBeInTheDocument();
  });

  it('onClick event wont be called when the checkbox is disabled ', () => {
    const onClick = jest.fn();
    // Act
    renderComponent({ disabled: true, onChange: onClick });

    fireEvent.click(ui.checkbox.get());

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });

  it('when Spacebar pressed the checkbox checked successfully', () => {
    // Act
    renderComponent({ checked: false });

    executeKeyPress(ui.checkboxLabel.get());

    // Assert
    expect(ui.checkboxIcon.get()).toBeInTheDocument();
  });
});
