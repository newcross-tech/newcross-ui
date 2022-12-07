import { fireEvent, render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import ToggleButton from '../ToggleButton/ToggleButton';
import ToggleButtonGroup, {
  getMultipleSelectedValues,
} from './ToggleButtonGroup';

describe('ToggleButtonGroup', () => {
  const baseTestId = 'toggle-button-group';
  const ui = {
    toggleGroupComp: byTestId(`${baseTestId}`),
    toggleGroupId: (id: string) => byTestId(`toggle-button${id}`),
    toggleGroupSelectedId: (id: string) =>
      byTestId(`toggle-button-selected${id}`),
  };
  it('should not have any a11y errors', async () => {
    // Arrange
    const props = {
      onSingleSelect: jest.fn(),
      selectedValue: ['1'],
    };
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
      onSingleSelect: jest.fn(),
      selectedValue: ['1'],
    };

    // Act
    render(
      <ToggleButtonGroup {...props}>
        <ToggleButton value="1">Sort</ToggleButton>
        <ToggleButton value="2">Date</ToggleButton>
      </ToggleButtonGroup>
    );

    // Assert
    expect(ui.toggleGroupComp.get()).toBeInTheDocument();
  });

  it('selects multiple toggle buttons when selectMultiple prop is given', () => {
    // Arrange
    const isMultiSelect = jest.fn();
    const props = {
      selectedValue: ['1', '2'],
      isMultiSelect: isMultiSelect,
    };
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

    fireEvent.click(ui.toggleGroupId('3').get());

    // Assert
    expect(ui.toggleGroupSelectedId('1').get()).toBeInTheDocument();
    expect(ui.toggleGroupSelectedId('2').get()).toBeInTheDocument();
    expect(ui.toggleGroupId('3').get()).toBeInTheDocument();
    expect(isMultiSelect).toHaveBeenCalled();
  });

  it('selects a single toggle buttons when selectMultiple prop is false', () => {
    // Arrange
    const onSingleSelect = jest.fn();
    const props = {
      onSingleSelect: onSingleSelect,
      selectedValue: '1',
    };
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
    fireEvent.click(ui.toggleGroupId('2').get());
    // Assert
    expect(ui.toggleGroupSelectedId('1').get()).toBeInTheDocument();
    expect(ui.toggleGroupId('2').get()).toBeInTheDocument();
    expect(ui.toggleGroupId('3').get()).toBeInTheDocument();
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

  it('returns an empty array when selected value is not an array of strings', () => {
    // Arrange
    const value = '1';
    const selectedValues = '1';

    // Act
    const result = getMultipleSelectedValues(value, selectedValues);

    // Assert
    expect(result).toEqual([]);
  });
});
