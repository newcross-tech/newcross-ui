import { CheckboxProps } from './Checkbox';

export enum CheckboxType {
  INDETERMINATE = 'indeterminate',
}
export type CheckboxPropsExtended = CheckboxProps & {
  selected?: boolean;
};

export type hasErrorProps = Pick<CheckboxPropsExtended, 'type' | 'selected'>;
export type isSelectedProps = Pick<CheckboxProps, 'type'>;
