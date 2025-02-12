import { ReactNode } from 'react';
import { TestProp } from '../../types';

export type ActionsGroupPropsStrict = {
  /**
   * The primary button.
   */
  primary: ReactNode;
  /**
   * The secondary button.
   */
  secondary: ReactNode;
  /**
   * The tertiary button.
   */
  tertiary: ReactNode;
} & TestProp;
