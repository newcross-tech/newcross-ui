import { useState } from 'react';
import Checkbox from '../Checkbox';
import {
  CheckboxGroupPropsStrict,
  OptionObjectType,
} from './CheckboxGroup.types';
import {
  getDefaultList,
  getIsOptionObject,
  getLabel,
  getOptionsList,
  getSelectedList,
  getValue,
} from './utils';
import Container from '../Container';
import { OptionalProps } from '../../types/utility-types';

export type CheckboxGroupProps = OptionalProps<
  CheckboxGroupPropsStrict,
  'defaultChecked' | 'options' | 'label'
>;

const normalizeCheckboxGroupProps = (
  props: CheckboxGroupProps
): CheckboxGroupPropsStrict => {
  return {
    ...props,
    label: props.label ?? 'Select All',
    options: props.options ?? [],
    defaultChecked: props.defaultChecked ?? [],
  };
};

const CheckboxGroup = (_props: CheckboxGroupProps) => {
  const { options, onChange, defaultChecked, label, testID } =
    normalizeCheckboxGroupProps(_props);

  const [selectedList, setSelectedList] = useState<string[]>(
    defaultChecked.length ? getDefaultList(options, defaultChecked) : []
  );

  const childHasError = options.some(
    (item) => getIsOptionObject(item) && item.hasError === true
  );

  const childrenDisabled = (options as Array<string | OptionObjectType>).every(
    (item: string | OptionObjectType) =>
      getIsOptionObject(item) && item.disabled === true
  );

  const isIndeterminate = () =>
    options.length === selectedList.length ? undefined : 'indeterminate';

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

  const onChangeHandler = (newList: string[]) => onChange && onChange(newList);

  const handleCheckAll = () => {
    const disabledList = getOptionsList.disabled(options);
    const enabledList = getOptionsList.enabled(options);
    const selectedEnabledList = getSelectedList(enabledList, selectedList);
    const selectedDisabledList = getSelectedList(disabledList, selectedList);

    const newList =
      selectedEnabledList.length === enabledList.length
        ? [...selectedDisabledList]
        : [...enabledList, ...selectedDisabledList];

    setSelectedList(newList);
    onChangeHandler(newList);
  };

  const handleChecked = (label: string) => {
    const toRemove = selectedList.some((item) => item === label);
    let updatedList = [];
    if (toRemove)
      updatedList = selectedList.filter((item: string) => label !== item);
    else updatedList = selectedList.concat(label);

    setSelectedList(updatedList);
    onChangeHandler(updatedList);
  };

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
    <Container flexDirection="column" gap="sm" testID="checkbox-group">
      <Checkbox
        type={isIndeterminate()}
        label={label}
        onChange={handleCheckAll}
        disabled={childrenDisabled}
        hasError={childHasError}
        checked={isAnySelected()}
        testID="checkbox-selectAll"
      />
      <Container gap="sm" pl="md" flexDirection="column">
        {renderCheckboxList()}
      </Container>
    </Container>
  );
};
export default CheckboxGroup;
