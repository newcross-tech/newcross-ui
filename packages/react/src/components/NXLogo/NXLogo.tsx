import { Scheme } from '../../types';
import Container from '../Container';
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

const NXLogo = ({ type, scheme = 'light' }: NXLogoProps) => (
  <Container testID={`NX-${type}-${scheme}`}>
    {logoPaths[type][scheme]}
  </Container>
);

export default NXLogo;
