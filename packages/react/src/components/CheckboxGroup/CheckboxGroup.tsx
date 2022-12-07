import { useEffect, useState } from 'react';
import { TestProp } from '../../types/TestProp';
import Checkbox, { CheckboxType } from '../Checkbox';
import * as Styled from './CheckboxGroup.style';
import { OptionProps } from './CheckboxGroup.types';
import {
  getIsOptionObject,
  getOptionsList,
  getValue,
  getDefaultList,
  getLabel,
} from './utils';

export type CheckboxGroupProps = {
  /**
   * Label for the checkbox
   */
  label?: string;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (array: string[]) => void;
  /**
   * Accepts a List of checkboxes to display
   */
  options: OptionProps;
  /**
   * Accepts a List of checkboxes to be checked by default
   */
  defaultChecked: string[];
} & TestProp;

const CheckboxGroup = ({
  options,
  onChange,
  defaultChecked,
  label = 'Select All',
  testID,
}: CheckboxGroupProps) => {
  const [selectedList, setSelectedList] = useState<string[]>(
    defaultChecked.length ? getDefaultList(options, defaultChecked) : []
  );

  const childHasError = options.some(
    (item) => getIsOptionObject(item) && item.hasError === true
  );
  const childHasDisabled = options.some(
    (item) => getIsOptionObject(item) && item.disabled === true
  );
  const isIndeterminate = () =>
    options.length === selectedList.length
      ? undefined
      : CheckboxType.INDETERMINATE;

  const isAnySelected = () => {
    if (selectedList.length === 0) return false;
    if (
      selectedList.length < options.length ||
      selectedList.length === options.length
    )
      return true;
  };
  const isDefaultChecked = (label: string) =>
    selectedList.some((item) => item === getLabel(label));

  const handleCheckAll = () => {
    setSelectedList(!isAnySelected() ? getOptionsList(options) : []);
  };

  const handleChecked = (label: string) => {
    const toRemove = selectedList.some((item) => item === label);
    let updatedList = [];
    if (toRemove)
      updatedList = selectedList.filter((item: string) => label !== item);
    else updatedList = selectedList.concat(label);

    setSelectedList(updatedList);
  };

  useEffect(() => {
    onChange && onChange(selectedList);
  }, [selectedList.length]);

  const renderCheckboxList = () =>
    options.map((item, index) => {
      return (
        <Checkbox
          label={getLabel(item)}
          onChange={() => handleChecked(getValue(item))}
          disabled={getIsOptionObject(item) && item.disabled}
          hasError={getIsOptionObject(item) && item.hasError}
          checked={isDefaultChecked(getValue(item))}
          key={index}
          testID={testID}
        />
      );
    });

  return (
    <div data-testid="checkbox-group">
      <Checkbox
        type={isIndeterminate()}
        label={label}
        onChange={handleCheckAll}
        disabled={childHasDisabled}
        hasError={childHasError}
        checked={isAnySelected()}
        testID="checkbox-selectAll"
      />
      <Styled.CheckboxList>{renderCheckboxList()}</Styled.CheckboxList>
    </div>
  );
};
export default CheckboxGroup;
