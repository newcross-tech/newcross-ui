import React, { useState } from 'react';
import { View } from 'react-native';
import Checkbox from '../Checkbox/Checkbox';
import { CheckboxType } from '../Checkbox/Checkbox.types';
import checkboxGroupStyle from './CheckboxGroup.style';
import { OptionObjectType } from './CheckboxGroup.types';

export type CheckboxGroupProps = {
  /**
   * Label for the checkbox
   */
  label?: string;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (array: Array<string>) => void;
  /**
   * Accepts a List of checkboxes to display
   */
  options: Array<OptionObjectType>;
  /**
   * Boolean to hide the select all option
   */
  shouldHideAllOption?: boolean;
  /**
   * Accepts a List of checkboxes values to be checked by default
   */
  defaultChecked?: Array<string>;
  /**
   * TestID for testing
   */
  testID?: string;
};

const hasChildError = (options: Array<OptionObjectType>) =>
  options.some(({ hasError }) => hasError);

const isChildSelected = (selectedValues: Array<string>, value: string) =>
  selectedValues.includes(value);

const getCheckboxType = (
  selectedValues: Array<string>,
  options: Array<OptionObjectType>
) => {
  const enabledCheckboxes = options.filter(({ disabled }) => !disabled);

  return enabledCheckboxes.length === selectedValues.length
    ? CheckboxType.CHECK
    : CheckboxType.INDETERMINATE;
};

const CheckboxGroup = ({
  options,
  onChange,
  defaultChecked = [],
  label = 'Select All',
  testID = 'checkbox-group',
  shouldHideAllOption = false,
}: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] =
    useState<Array<string>>(defaultChecked);

  const styles = checkboxGroupStyle();

  const handleOnChangeAll = () => {
    const values =
      selectedValues.length === 0
        ? options.filter(({ disabled }) => !disabled).map(({ value }) => value)
        : [];

    setSelectedValues(values);
    onChange && onChange(values);
  };

  const handleOnChange = (value: string) => {
    const values = selectedValues.includes(value)
      ? selectedValues.filter((selectedValue) => selectedValue !== value)
      : [...selectedValues, value];

    setSelectedValues(values);
    onChange && onChange(values);
  };

  return (
    <View testID={testID}>
      {!shouldHideAllOption && (
        <Checkbox
          testID={`${testID}-all`}
          label={label}
          onChange={handleOnChangeAll}
          hasError={hasChildError(options)}
          checked={selectedValues.length !== 0}
          type={getCheckboxType(selectedValues, options)}
        />
      )}
      <View style={!shouldHideAllOption && styles.optionsContainer}>
        {options.map((option, index) => (
          <Checkbox
            key={option.label}
            testID={`${testID}-child-${index}`}
            onChange={() => handleOnChange(option.value)}
            checked={isChildSelected(selectedValues, option.value)}
            {...option}
          />
        ))}
      </View>
    </View>
  );
};

export default CheckboxGroup;
