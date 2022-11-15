import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe, executeKeyPress } from '../../../testUtils';
import Checkbox, { CheckboxProps } from './Checkbox';
import { CheckboxType } from './Checkbox.types';

const renderComponent = (props: CheckboxProps) => {
  const customProps: CheckboxProps = {
    checked: true,
    ...props,
  };

  render(<Checkbox {...customProps} />);
};

describe('Checkbox Component', () => {
  const ui = {
    checkbox: byTestId(`checkbox-component`),
    checkboxBox: byTestId(`checkbox-box`),
    checkboxIcon: byTestId(`checkmark-icon`),
    checkboxIndeterIcon: byTestId(`indeterminate-icon`),
    checkboxLabel: byTestId('checkmark-label'),
    getByReg: (text: RegExp) => byText(text),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({ label: 'Label' });

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    renderComponent({ label: 'Label' });

    // Assert
    expect(ui.getByReg(/label/i).get()).toBeTruthy();
  });

  it('renders indeterminate checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      label: 'Label',
      type: CheckboxType.INDETERMINATE,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.checkboxIndeterIcon.get()).toBeTruthy();
  });

  it('renders a disabled checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      label: 'Label',
      disabled: true,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.getByReg(/label/i).get()).toBeTruthy();
  });

  it('renders an unchecked checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      label: 'Label',
      checked: false,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.checkboxIcon.query()).toBeFalsy();
  });

  it('renders a checkbox with a default checkmark successfully', () => {
    // Act
    renderComponent({ label: 'Label' });

    // Assert
    expect(ui.getByReg(/label/i).get()).toBeTruthy();
    expect(ui.checkboxIcon.get()).toBeTruthy();
  });

  it('fires an onClick event to check the checkbox successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      label: 'Label',
      testID: 'checkbox-component',
      checked: false,
    };

    // Act
    renderComponent({ ...props });

    fireEvent.click(ui.checkbox.get());

    // Assert
    expect(ui.checkboxIcon.get()).toBeTruthy();
  });

  it('onClick event wont be called when the checkbox is disabled ', () => {
    // Arrange
    const props: CheckboxProps = {
      label: 'Label',
      testID: 'checkbox-component',
      disabled: true,
    };
    const onClick = jest.fn();
    // Act
    renderComponent({ ...props });

    fireEvent.click(ui.checkbox.get());

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });
  it('renders successfully when control props are passed and act upon', () => {
    // Arrange
    const onChange = jest.fn();
    const props: CheckboxProps = {
      label: 'Label',
      testID: 'checkbox-component',
      onChange,
    };

    // Act
    renderComponent({ ...props });
    fireEvent.click(ui.checkbox.get());

    // Assert
    expect(ui.checkbox.get()).toBeTruthy();
  });

  it('when Spacebar pressed the checkbox checked successfully', () => {
    // Arrange
    const props: CheckboxProps = {
      label: 'Label',
      testID: 'checkbox-component',
      checked: false,
    };

    // Act
    renderComponent({ ...props });

    executeKeyPress(ui.checkboxLabel.get());

    // Assert
    expect(ui.checkboxIcon.get()).toBeTruthy();
  });
});
