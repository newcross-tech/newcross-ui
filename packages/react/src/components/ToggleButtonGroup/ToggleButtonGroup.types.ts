import { ReactElement } from 'react';
import { ToggleButtonProps } from '../..';
import { TestProp } from '../../types';

export type ToggleButtonGroupExtended = Pick<
  ToggleButtonGroupPropsStrict,
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

export type ToggleButtonGroupPropsStrict = {
  /**
   * The content of the component.
   */
  children: Array<ReactElement<ToggleButtonProps>>;
  /**
   * Used to display the group in either a row or a column.
   */
  direction: 'row' | 'column';
} & TestProp &
  (SingleSelect | MultiSelect);
