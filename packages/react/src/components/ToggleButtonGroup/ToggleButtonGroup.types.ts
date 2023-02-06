import { ToggleButtonGroupProps } from './ToggleButtonGroup';

export type ToggleButtonGroupExtended = Pick<
  ToggleButtonGroupProps,
  'direction'
> & { isMulti?: boolean };

export type SingleSelect = {
  selectedValue: string;
  onToggle: (arg: string) => void;
  variant: 'single';
};

export type MultiSelect = {
  selectedValue: string[];
  onToggle: (arg: string[]) => void;
  variant: 'multi';
};
