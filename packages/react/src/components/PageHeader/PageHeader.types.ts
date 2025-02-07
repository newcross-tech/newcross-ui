import { ReactNode } from 'react';

export type PageHeaderPropsStrict = {
  /**
   * Title of the page
   */
  title: string;
  /**
   * Subtitle of the page
   */
  subtitle?: string;
  /**
   * Callback function for back button
   */
  onBackClick?: () => void;
  /**
   * Children components
   */
  secondaryAction?: ReactNode;
};
