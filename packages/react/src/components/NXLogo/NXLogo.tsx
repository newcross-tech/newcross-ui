import { Scheme } from '../../types';
import { logoPaths } from './NXLogo.constants';

export type NXLogoProps = {
  /**
   * The type of logo to render.
   */
  type: 'logo' | 'logomark';
  /**
   * The color scheme of the logo.
   */
  scheme?: Scheme;
};

const NXLogo = ({ type, scheme = 'light' }: NXLogoProps) => {
  return (
    <span
      role="img"
      aria-label={`NX ${type} ${scheme}`}
      data-testid={`NX-${type}-${scheme}`}
    >
      {logoPaths[type][scheme]}
    </span>
  );
};

export default NXLogo;
