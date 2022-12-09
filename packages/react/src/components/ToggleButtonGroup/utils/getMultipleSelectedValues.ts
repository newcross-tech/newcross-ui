export const getMultipleSelectedValues = (
  value: string,
  selectedValue: Array<string> | string
) => {
  if (Array.isArray(selectedValue)) {
    return selectedValue.includes(value)
      ? selectedValue.filter((selectedValue) => selectedValue !== value)
      : [...selectedValue, value];
  }
  return [];
};
