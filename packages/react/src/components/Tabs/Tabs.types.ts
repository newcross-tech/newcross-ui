import { ReactNode } from 'react';

export type TabsPropsStrict = {
  /**
   * Array of labels for the segments
   */
  tabs: Array<ReactNode | string>;
  /**
   * Index value for the current tab.
   */
  currentIndex: number;
  /**
   * Callback function for selecting a tab.
   * Returns index value of selected tab.
   */
  onCurrentIndexChange: (newState: number) => void;
  /**
   * Disables segment from being pressed
   */
  disabled: boolean;
};
