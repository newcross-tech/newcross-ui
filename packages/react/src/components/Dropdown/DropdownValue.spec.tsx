import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { DropdownValueProps } from './Dropdown.types';
import DropdownValue from './DropdownValue';

import { axe } from '../../utils/test/axeConfig';

describe('DropdownValue', () => {
  const ui = {
    text: (regex: RegExp) => byText(regex),
    pill: (testID: string) => byTestId(`pill-component${testID}`),
    pillClickable: (testID: string) => byTestId(`pill-clickable${testID}`),
  };

  it('should not have any a11y errors', async () => {
    const onMultiSelect = jest.fn();

    // Prepare
    const props: DropdownValueProps = {
      value: undefined,
      placeholder: 'Select a label',
      onMultiSelect,
    };

    // Act
    render(<DropdownValue {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders placeholder successfully', () => {
    const onMultiSelect = jest.fn();

    // Prepare
    const props: DropdownValueProps = {
      value: undefined,
      placeholder: 'Select a label',
      onMultiSelect,
    };

    // Act
    render(<DropdownValue {...props} />);

    // Assert
    expect(ui.text(/Select a label/i).get()).toBeInTheDocument();
  });

  it('renders placeholder successfully (multi-select)', () => {
    const onMultiSelect = jest.fn();

    // Prepare
    const props: DropdownValueProps = {
      value: [],
      placeholder: 'Select a label',
      onMultiSelect,
    };

    // Act
    render(<DropdownValue {...props} />);

    // Assert
    expect(ui.text(/Select a label/i).get()).toBeInTheDocument();
  });

  it('renders value successfully (single-select)', () => {
    const onMultiSelect = jest.fn();

    // Prepare
    const props: DropdownValueProps = {
      value: 'Option 1',
      onMultiSelect,
    };

    // Act
    render(<DropdownValue {...props} />);

    // Assert
    expect(ui.text(/Option 1/i).get()).toBeInTheDocument();
  });

  it('renders value successfully (single-select)', () => {
    const onMultiSelect = jest.fn();

    // Prepare
    const props: DropdownValueProps = {
      value: 'Option 1',
      onMultiSelect,
    };

    // Act
    render(<DropdownValue {...props} />);

    // Assert
    expect(ui.text(/Option 1/i).get()).toBeInTheDocument();
  });

  it('renders pill(s) successfully (multi-select)', () => {
    const onMultiSelect = jest.fn();

    // Prepare
    const props: DropdownValueProps = {
      value: ['Option 1', 'Option 2'],
      onMultiSelect,
    };

    // Act
    render(<DropdownValue {...props} />);

    // Assert
    expect(ui.pill('Option 1').get()).toBeInTheDocument();
    expect(ui.pill('Option 2').get()).toBeInTheDocument();

    fireEvent.click(ui.pillClickable('Option 1').get());

    expect(onMultiSelect).toHaveBeenCalled();
  });
});
