import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import CheckboxGroup, { CheckboxGroupProps } from './CheckboxGroup';
import { axe } from '../../../utils/test/axeConfig';

const renderComponent = (customProps: Partial<CheckboxGroupProps>) => {
  const props = {
    defaultChecked: ['Apple', 'Banana', 'Pear'],
    options: ['Apple', 'Banana', 'Pear'],
    ...customProps,
  };

  render(<CheckboxGroup {...props} />);
};
describe('Checkbox Group Component', () => {
  const ui = {
    groupContainer: byTestId(`checkbox-group`),
    selectAllCheckbox: byTestId(`checkbox-selectAll`),
    checkboxIcon: byTestId(`checkmark-icon`),
    checkboxIndeterIcon: byTestId(`indeterminate-icon`),
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
    expect(ui.groupContainer.get()).toBeInTheDocument();
  });

  it('when all child-Checkboxes are disabled, selectAll-Checkbox is disabled', () => {
    // Act
    renderComponent({
      options: [
        { label: 'Apple', value: 'fruit1', disabled: true },
        { label: 'Banana', value: 'fruit2', disabled: true },
      ],
    });

    // Assert
    expect(ui.selectAllCheckbox.get()).toHaveAttribute('disabled');
  });

  it('when some child-Checkboxes are disabled, selectAll-Checkbox is not disabled', () => {
    // Act
    renderComponent({
      options: [
        { label: 'Apple', value: 'fruit1', disabled: true },
        { label: 'Banana', value: 'fruit2' },
      ],
    });

    // Assert
    expect(ui.selectAllCheckbox.get()).not.toHaveAttribute('disabled');
  });

  it('selectAll-Checkbox is set to Indeterminate when one or more but all child-Checkboxes are checked', () => {
    // Act
    renderComponent({
      defaultChecked: [],
    });

    fireEvent.click(byText('Apple').get());

    // Assert
    expect(ui.checkboxIndeterIcon.get()).toBeInTheDocument();
  });

  it('when selectAll is marked then it selects all children successfully', () => {
    // Act
    renderComponent({
      defaultChecked: [],
    });

    fireEvent.click(ui.selectAllCheckbox.get());
    // Assert
    expect(ui.checkboxIcon.getAll()).toHaveLength(4);
  });

  it('onChange event wont be called when the checkbox is disabled ', () => {
    const onChange = jest.fn();
    // Act
    renderComponent({
      onChange: (defaultChecked) => defaultChecked,
      options: [
        { label: 'Apple', value: 'fruit1' },
        { label: 'Banana', value: 'fruit2', disabled: true },
      ],
    });

    fireEvent.click(byText('Banana').get());

    // Assert
    expect(onChange).not.toHaveBeenCalled();
  });

  it('when selects a child-checkbox the number of selected checkboxes decreases', () => {
    // Act
    renderComponent({
      options: [
        { label: 'Apple', value: 'fruit1' },
        { label: 'Banana', value: 'fruit2' },
        { label: 'Pear', value: 'fruit3' },
      ],
    });

    expect(ui.checkboxIcon.getAll()).toHaveLength(4);
    fireEvent.click(byText('Banana').get());

    // Assert
    expect(ui.checkboxIcon.getAll()).toHaveLength(2);
  });

  it('when all Checkboxes are selected and click selectAll, all checkboxes will unselected', () => {
    // Act
    renderComponent({
      options: [
        { label: 'Apple', value: 'fruit1' },
        { label: 'Banana', value: 'fruit2' },
        { label: 'Pear', value: 'fruit3' },
      ],
    });

    expect(ui.checkboxIcon.getAll()).toHaveLength(4);
    fireEvent.click(ui.selectAllCheckbox.get());

    // Assert
    expect(ui.checkboxIcon.queryAll()).toHaveLength(0);
  });

  it('calls onChangeHandler with the correct list when a checkbox is selected or deselected', () => {
    const onChange = jest.fn();

    // Act
    renderComponent({
      onChange,
      options: [
        { label: 'Apple', value: 'fruit1' },
        { label: 'Banana', value: 'fruit2' },
        { label: 'Pear', value: 'fruit3' },
      ],
      defaultChecked: ['fruit1'],
    });

    fireEvent.click(byText('Banana').get());
    // Assert
    expect(onChange).toHaveBeenCalled();
  });
});
