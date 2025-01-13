import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import ToggleButton from '../ToggleButton/ToggleButton';
import ToggleButtonGroup from './ToggleButtonGroup';
import { getMultipleSelectedValues } from './utils/getMultipleSelectedValues';
import { calculateSelectedValue } from './utils/calculateSelectedValue';
import { SingleSelect, MultiSelect } from './ToggleButtonGroup.types';
import { userEvent } from '@storybook/testing-library';

describe('ToggleButtonGroup', () => {
  const ui = {
    toggleGroupComp: byTestId(`toggle-button-group`),
    toggleGroupId: (id: string) => byTestId(`toggle-button${id}`),
    toggleGroupSelectedId: (id: string) =>
      byTestId(`toggle-button-selected${id}`),
  };
  it('should not have any a11y errors', async () => {
    // Arrange
    const props = {
      onToggle: jest.fn(),
      selectedValue: '1',
      variant: 'single',
    } as SingleSelect;

    // Act
    render(
      <ToggleButtonGroup {...props}>
        <ToggleButton value="1">Sort</ToggleButton>
        <ToggleButton value="2">Date</ToggleButton>
      </ToggleButtonGroup>
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Arrange

    const props = {
      onToggle: jest.fn(),
      selectedValue: '1',
      variant: 'single',
    } as SingleSelect;

    // Act
    render(
      <ToggleButtonGroup {...props}>
        <ToggleButton value="1">Sort</ToggleButton>
        <ToggleButton value="2">Date</ToggleButton>
      </ToggleButtonGroup>
    );

    // Assert
    expect(ui.toggleGroupComp.get()).toBeVisible();
  });

  it('string[] onToggle gets called when the variant is multi and a button is clicked', () => {
    // Arrange
    const isMultiSelect = jest.fn();

    const props = {
      selectedValue: ['1', '2'],
      onToggle: isMultiSelect,
      variant: 'multi',
    } as MultiSelect;

    // Act
    render(
      <ToggleButtonGroup {...props}>
        <ToggleButton testID="1" value="1">
          Sort
        </ToggleButton>
        <ToggleButton testID="2" value="2">
          Date
        </ToggleButton>
        <ToggleButton testID="3" value="3">
          Date
        </ToggleButton>
      </ToggleButtonGroup>
    );

    userEvent.click(ui.toggleGroupId('3').get());

    // Assert
    expect(ui.toggleGroupSelectedId('1').get()).toBeVisible();
    expect(ui.toggleGroupSelectedId('2').get()).toBeVisible();
    expect(ui.toggleGroupId('3').get()).toBeVisible();
    expect(isMultiSelect).toHaveBeenCalled();
  });

  it('string onToggle gets called when the variant is single and a button is clicked', () => {
    // Arrange
    const onSingleSelect = jest.fn();

    const props = {
      onToggle: onSingleSelect,
      selectedValue: '1',
      variant: 'single',
    } as SingleSelect;
    // Act
    render(
      <ToggleButtonGroup {...props}>
        <ToggleButton testID="1" value="1">
          Sort
        </ToggleButton>
        <ToggleButton testID="2" value="2">
          Date
        </ToggleButton>
        <ToggleButton testID="3" value="3">
          Date
        </ToggleButton>
      </ToggleButtonGroup>
    );
    userEvent.click(ui.toggleGroupId('2').get());
    // Assert
    expect(ui.toggleGroupSelectedId('1').get()).toBeVisible();
    expect(ui.toggleGroupId('2').get()).toBeVisible();
    expect(ui.toggleGroupId('3').get()).toBeVisible();
    expect(onSingleSelect).toHaveBeenCalled();
  });

  it('returns correct list of values when getMultipleSelectedValues is called', () => {
    // Arrange
    const value = '1';
    const selectedValues = ['1', '2'];

    // Act
    const result = getMultipleSelectedValues(value, selectedValues);

    // Assert
    expect(result).toEqual(['2']);
  });

  it('returns false when calculateSelectedValue is called with undefined', () => {
    // Arrange
    const value = undefined;
    const selectedValue = ['1', '2'];

    // Act
    const result = calculateSelectedValue(selectedValue, value);

    // Assert
    expect(result).toEqual(false);
  });
});
