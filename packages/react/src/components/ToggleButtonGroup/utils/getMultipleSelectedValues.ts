export const getMultipleSelectedValues = (
  value: string,
  selectedValue: Array<string>
) => {
  return selectedValue.includes(value)
    ? selectedValue.filter((selectedValue) => selectedValue !== value)
    : [...selectedValue, value];
};
