import { ReactNode } from 'react';
import { TestProp } from '../../types';

export type CheckboxType = 'indeterminate';

/**
 * @private The props after normalization
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
  onChange: (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>
  ) => void;
  /**
   * Callback fired when the state is changed.
   */
  onClick: (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>
  ) => void;
  /**
   * Determines selected/checked state
   */
  checked: boolean;
  /**
   * Flag to enable/disable accessibility
   */
  allowTab: boolean;
} & TestProp;
