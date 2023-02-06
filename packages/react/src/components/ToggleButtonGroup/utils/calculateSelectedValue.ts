export const calculateSelectedValue = (
  selectedValue: string | string[],
  value?: string
) => {
  if (!value) {
    return false;
  }
  return Array.isArray(selectedValue)
    ? selectedValue.includes(value)
    : selectedValue === value;
};
