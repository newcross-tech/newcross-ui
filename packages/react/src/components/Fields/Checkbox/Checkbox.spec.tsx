import { fireEvent, render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../../utils/test/axeConfig';
import { executeKeyPress } from '../../../utils/test/executeKeyPress';
import Checkbox, { CheckboxProps } from './Checkbox';

const renderComponent = (customProps: Partial<CheckboxProps>) => {
  const props = {
    label: 'Label',
    testID: 'checkbox-component',
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
    renderComponent({ checked: true, type: 'indeterminate' });

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
    // Arrange
    const onChange = jest.fn();
    // Act
    renderComponent({ checked: false, onChange });

    fireEvent.click(ui.checkbox.get());

    // Assert
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(
      true,
      expect.objectContaining({ type: 'click' })
    );
  });

  it('onClick event wont be called when the checkbox is disabled ', () => {
    const onClick = jest.fn();
    // Act
    renderComponent({ disabled: true, onChange: onClick });

    fireEvent.click(ui.checkbox.get());

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders successfully without label', () => {
    // Act
    renderComponent({ label: undefined });

    // Assert
    expect(ui.checkboxLabel.query()).not.toBeInTheDocument();
  });

  it('renders succesfully with a ReactNode passed as a label', () => {
    //Arrange
    const Label = () => <div data-testid="custom-label-item">Label</div>;

    //Act
    renderComponent({ label: <Label /> });

    //Assert
    expect(byTestId('custom-label-item').get()).toBeVisible();
  });

  it('when Spacebar pressed the checkbox checked successfully', () => {
    // Act
    const onChange = jest.fn();
    renderComponent({ checked: false, onChange });

    executeKeyPress(ui.checkboxLabel.get());

    // Assert
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(
      true,
      expect.objectContaining({ type: 'keydown' })
    );
  });

  it('applies the correct label color for enabled and error states', () => {
    // Arrange & Act
    renderComponent({ hasError: true });

    // Assert
    expect(ui.checkboxLabel.get()).toHaveStyle(`color: dangerError`);
  });

  it('applies the correct label color for disabled state', () => {
    // Arrange & Act
    renderComponent({ disabled: true });

    // Assert
    expect(ui.checkboxLabel.get()).toHaveStyle(`color: disabled`);
  });

  it('renders with allowTab prop set to false successfully', () => {
    // Arrange & Act
    renderComponent({ allowTab: false });

    // Assert
    expect(ui.checkboxLabel.get()).toHaveAttribute('tabIndex', '-1');
  });
});
