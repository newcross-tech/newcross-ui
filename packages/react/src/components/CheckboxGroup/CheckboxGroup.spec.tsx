import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../../testUtils';
import CheckboxGroup from './CheckboxGroup';

describe('Checkbox Group Component', () => {
  const ui = {
    groupContainer: byTestId('checkbox-group'),
    selectAllCheckbox: byTestId('checkbox-selectAll'),
    checkboxIcon: byTestId(`checkmark-icon`),
    checkboxIndeterIcon: byTestId(`indeterminate-icon`),
    childCheckbox: (text: string) => byText(text),
  };

  it('should not have any a11y errors', async () => {
    // Act
    render(
      <CheckboxGroup
        defaultChecked={['Apple', 'Banana']}
        options={['Apple', 'Banana']}
      />
    );

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    render(
      <CheckboxGroup
        defaultChecked={['Apple', 'Banana']}
        options={['Apple', 'Banana']}
      />
    );

    // Assert
    expect(ui.groupContainer.get()).toBeVisible();
  });

  it('when one or more child-Checkboxes are disabled, selectAll-Checkbox is disabled', () => {
    // Act
    render(
      <CheckboxGroup
        defaultChecked={['Apple', 'Banana']}
        options={[
          { label: 'Apple', value: 'fruit1' },
          { label: 'Banana', value: 'fruit2', disabled: true },
        ]}
      />
    );

    // Assert
    expect(ui.selectAllCheckbox.get()).toHaveAttribute('disabled');
  });

  it('selectAll-Checkbox is set to Indeterminate when one or more but all child-Checkboxes are checked', () => {
    // Act
    render(
      <CheckboxGroup
        defaultChecked={[]}
        options={['Apple', 'Banana', 'Pear']}
      />
    );

    fireEvent.click(ui.childCheckbox('Apple').get());

    // Assert
    expect(ui.checkboxIndeterIcon.get()).toBeTruthy();
  });
  it('when selectAll is marked then it selects all children successfully', () => {
    // Act
    render(<CheckboxGroup defaultChecked={[]} options={['Apple', 'Banana']} />);
    fireEvent.click(ui.selectAllCheckbox.get());
    // Assert
    expect(ui.checkboxIcon.getAll()).toHaveLength(3);
  });
  it('onChange event wont be called when the checkbox is disabled ', () => {
    const onChange = jest.fn();
    // Act
    render(
      <CheckboxGroup
        defaultChecked={['Apple', 'Banana']}
        onChange={(defaultChecked) => defaultChecked}
        options={[
          { label: 'Apple', value: 'fruit1' },
          { label: 'Banana', value: 'fruit2', disabled: true },
        ]}
      />
    );

    fireEvent.click(ui.childCheckbox('Banana').get());

    // Assert
    expect(onChange).not.toHaveBeenCalled();
  });

  it('when selects a child checkbox the number of selected checkboxed decreases', () => {
    // Act
    render(
      <CheckboxGroup
        defaultChecked={['Apple', 'Banana']}
        options={[
          { label: 'Apple', value: 'fruit1' },
          { label: 'Banana', value: 'fruit2' },
          { label: 'Pear', value: 'fruit3' },
        ]}
      />
    );
    expect(ui.checkboxIcon.getAll()).toHaveLength(2);
    fireEvent.click(ui.childCheckbox('Banana').get());

    // Assert
    expect(ui.checkboxIcon.getAll()).toHaveLength(1);
  });
  it('when all Checkboxes are selected and click selectAll, all checkboxes will unselected', () => {
    // Act
    render(
      <CheckboxGroup
        defaultChecked={['Apple', 'Banana', 'Pear']}
        options={[
          { label: 'Apple', value: 'fruit1' },
          { label: 'Banana', value: 'fruit2' },
          { label: 'Pear', value: 'fruit3' },
        ]}
      />
    );
    expect(ui.checkboxIcon.getAll()).toHaveLength(4);
    fireEvent.click(ui.selectAllCheckbox.get());

    // Assert
    expect(ui.checkboxIcon.queryAll()).toHaveLength(0);
  });
});
