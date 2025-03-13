import { Scheme } from '../../types';

export type NXLogoPropsStrict = {
  /**
   * The type of logo to render.
   */
  type: 'logo' | 'logomark';
  /**
   * The color scheme of the logo.
   */
  scheme: Scheme;
  /**
   * The size of the logo.
   */
  size: 'sm' | 'md' | 'lg';
};
