import { GroupBase, Props } from 'react-select';

export type SelectOption = {
  readonly value: string;
  readonly label: string;
};

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  id: string;
  placeholder?: string;
  helperText?: string;
  hasError?: boolean;
  errorText?: string;
  label?: string;
  disabled?: boolean;
};

export type ErrorType = {
  hasError?: boolean;
};
