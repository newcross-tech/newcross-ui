export type OptionObjectType = {
  label: string;
  hasError?: boolean;
  disabled?: boolean;
  value: string;
};

export type OptionProps = string[] | Array<OptionObjectType>;

export type CheckboxItem = string | OptionObjectType;
