import { byTestId, byText } from 'testing-library-selector';
import { fireEvent, render } from '@testing-library/react';
import { DropdownValueProps } from './Dropdown.types';
import { axe } from '../../utils/test/axeConfig';
import DropdownValue from './DropdownValue';

const renderComponent = (customProps: Partial<DropdownValueProps>) => {
  const props = {
    value: undefined,
    placeholder: 'Select a label',
    onMultiSelect: jest.fn(),
    ...customProps,
  };

  render(<DropdownValue {...props} />);
};

describe('DropdownValue', () => {
  const ui = {
    text: (regex: RegExp) => byText(regex),
    pill: (testID: string) => byTestId(`pill-component${testID}`),
    pillClickable: (testID: string) => byTestId(`pill-clickable${testID}`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders value successfully (single-select)', () => {
    // Act
    renderComponent({ value: 'Option 1' });

    // Assert
    expect(ui.text(/Option 1/i).get()).toBeInTheDocument();
  });

  it('renders pill(s) successfully (multi-select)', () => {
    const onMultiSelect = jest.fn();

    // Act
    renderComponent({ value: ['Option 1', 'Option 2'], onMultiSelect });

    // Assert
    expect(ui.pill('Option 1').get()).toBeInTheDocument();
    expect(ui.pill('Option 2').get()).toBeInTheDocument();

    fireEvent.click(ui.pillClickable('Option 1').get());

    expect(onMultiSelect).toHaveBeenCalled();
  });
});
