import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ReactNode } from 'react';
import {
  MultiSelect,
  SingleSelect,
} from '../ToggleButtonGroup/ToggleButtonGroup.types';
import { TestProp } from '../../types';

export type ToggleButtonSizes = 'small' | 'large';

export type ToggleButtonPropsStrict = {
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: (value: string) => void;
  /**
   * Either children or a render prop that receives a boolean
   * reflecting whether the component is currently pressed.
   */
  children?: ReactNode;
  /**
   * Specifies whether the toggle button is selected
   */
  selected: boolean;
  /**
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
  /**
   * The currently selected value within the group or an array of
   * selected values
   */
  value: string;
  /**
   * Set the left icon element.
   */
  leftIcon?: IconDefinition;
  /**
   * Set the right icon element.
   */
  rightIcon?: IconDefinition;
  /**
   * Set the disabled state of the button.
   */
  disabled: boolean;
  /**
   * Defines the size of the button.
   */
  size: ToggleButtonSizes;
  variant: (SingleSelect | MultiSelect)['variant'];
} & TestProp;
