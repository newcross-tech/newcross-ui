import { CheckboxProps } from './Checkbox';
import { ReactNode } from 'react';
import { TestProp } from '../../types';

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

/**
 * @private
 */
export type CheckboxPropsStrict = {
  /**
   * Sets the type the checkbox is - check or indeterminate
   */
  type?: CheckboxType;
  /**
   * Label for the checkbox
   */
  label?: ReactNode;
  /**
   * Whether the press behavior is disabled.
   */
  disabled: boolean;
  /**
   * Shows different styles when error is true
   */
  hasError?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (selected: boolean, event?: MouseEventOrKeyboardEvent) => void;
  /**
   * Determines selected/checked state
   */
  checked?: boolean;
  /**
   * Flag to enable/disable accessibility
   */
  allowTab: boolean;
} & TestProp;
