import { CheckboxProps } from './Checkbox';

export type CheckboxType = 'indeterminate';

export type CheckboxPropsExtended = CheckboxProps & {
  selected?: boolean;
};

export type MouseEventOrKeyboardEvent =
  | React.MouseEvent<HTMLDivElement>
  | React.KeyboardEvent<HTMLElement>;

export type UserInteractionType = {
  onClick: (event: MouseEventOrKeyboardEvent) => void;
};

export type hasErrorProps = Pick<CheckboxPropsExtended, 'type' | 'selected'>;
export type isSelectedProps = Pick<CheckboxProps, 'type'>;
